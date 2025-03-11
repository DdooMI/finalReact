import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { create } from "zustand";
import { auth, db } from "../firebase/firebaseConfig";

export const useAuth = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || "",
  role: localStorage.getItem("role") || null,
  profile: JSON.parse(localStorage.getItem("profile")) || null,
  error: null,

  login: async (data, navigation) => {
    try {
      const res = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = res.user;
      const token = await user.getIdToken();

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();

        const profileRef = doc(db, "users", user.uid, "profile", "profileInfo");
        const profileSnap = await getDoc(profileRef);
        const profileData = profileSnap.exists() ? profileSnap.data() : { name: "", photoURL: "" };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        localStorage.setItem("role", userData.role);
        localStorage.setItem("profile", JSON.stringify(profileData));

        set({
          user,
          token,
          role: userData.role,
          profile: profileData,
          error: null
        });

        navigation("/");
      } else {
        throw new Error("User role not found.");
      }
    } catch (err) {
      set({ error: err.message });
    }
  },

  signUp: async (data, navigation) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = res.user;
      const token = await user.getIdToken();

      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        role: data.role,
      });

      const profileRef = doc(db, "users", user.uid, "profile", "profileInfo");
      const profileData = {
        name: data.username || "",
        photoURL: data.photoURL || "",
      };
      await setDoc(profileRef, profileData);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("profile", JSON.stringify(profileData));

      set({ user, token, role: data.role, profile: profileData, error: null });

      navigation("/login");
    } catch (e) {
      set({ error: e.message });
    }
  },

  updateProfile: async (updatedProfile, navigation) => {
    try {
      const { user } = get();
      if (!user) throw new Error("User not logged in");

      const profileRef = doc(db, "users", user.uid, "profile", "profileInfo");
      await updateDoc(profileRef, updatedProfile);

      const newProfile = {
        ...get().profile,
        ...updatedProfile,
        name: updatedProfile.name || get().profile?.name || "",
        photoURL: updatedProfile.photoURL || get().profile?.photoURL || "",
      };

      localStorage.setItem("profile", JSON.stringify(newProfile));
      set({ profile: newProfile });

      if (navigation) {
        navigation("/profile");
      }
    } catch (err) {
      set({ error: err.message });
    }
  },

  logout: async (navigation) => {
    await signOut(auth);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("profile");

    set({ user: null, token: "", role: null, profile: null, error: null });
    navigation("/");
  },

  
}));


