import { createContext, useContext, useState, useEffect, useCallback } from 'react';
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

  const syncStudentProfile = useCallback(async (currentUser) => {
    try {
      const studentDocRef = doc(db, 'students', currentUser.uid);
      const studentDoc = await getDoc(studentDocRef);

      if (!studentDoc.exists()) {
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
        await updateDoc(studentDocRef, {
          lastLogin: serverTimestamp()
        });
        setStudentProfile(studentDoc.data());
      }
    } catch (error) {
      console.error("Error syncing student profile:", error);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    let unsubscribe = () => {};
    try {
      unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        clearTimeout(timeout);
        try {
          if (currentUser) {
            setUser(currentUser);
            await syncStudentProfile(currentUser);
          } else {
            setUser(null);
            setStudentProfile(null);
          }
        } catch (err) {
          console.error('Auth state error:', err);
        } finally {
          setLoading(false);
        }
      });
    } catch (err) {
      console.error('Firebase auth init error:', err);
    }

    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }, [syncStudentProfile]);

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
      {/* Always render children — never block the UI on Firebase loading */}
      {children}
      {/* Optional: show a loading overlay only on the protected dashboard */}
    </AuthContext.Provider>
  );
};
