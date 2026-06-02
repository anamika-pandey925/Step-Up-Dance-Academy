import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut 
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  serverTimestamp 
} from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [studentProfile, setStudentProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Sync/fetch student profile from Firestore
        await syncStudentProfile(currentUser);
      } else {
        setUser(null);
        setStudentProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const syncStudentProfile = async (currentUser) => {
    try {
      const studentDocRef = doc(db, 'students', currentUser.uid);
      const studentDoc = await getDoc(studentDocRef);

      if (!studentDoc.exists()) {
        // Create initial student record
        const newProfile = {
          uid: currentUser.uid,
          name: currentUser.displayName || '',
          email: currentUser.email || '',
          photoURL: currentUser.photoURL || '',
          phone: '',
          age: '',
          registeredStyles: [],
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp()
        };
        await setDoc(studentDocRef, newProfile);
        setStudentProfile(newProfile);
      } else {
        // Update last login
        await updateDoc(studentDocRef, {
          lastLogin: serverTimestamp()
        });
        setStudentProfile(studentDoc.data());
      }
    } catch (error) {
      console.error("Error syncing student profile:", error);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await syncStudentProfile(result.user);
      return result.user;
    } catch (error) {
      console.error("Google login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStudentProfile = async (profileData) => {
    if (!user) return;
    try {
      const studentDocRef = doc(db, 'students', user.uid);
      await updateDoc(studentDocRef, {
        ...profileData,
        updatedAt: serverTimestamp()
      });
      // Fetch fresh data
      const updatedDoc = await getDoc(studentDocRef);
      if (updatedDoc.exists()) {
        setStudentProfile(updatedDoc.data());
      }
    } catch (error) {
      console.error("Error updating student profile:", error);
      throw error;
    }
  };

  const value = {
    user,
    studentProfile,
    loading,
    loginWithGoogle,
    logout,
    updateStudentProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
