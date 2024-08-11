import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDocument } from "../../firebase/service";
import { RootState } from "../store";
import { User } from "../../models/user";
import { auth, db } from "../../firebase/config";
import { LOCAL_AUTH_TYPE, LOCAL_USER_KEY } from "../../constant/constant";

interface AuthState {
  user: User | null;
  authType: "password" | "google";
}

const getUserStored = () => {
  const user = window.localStorage.getItem(LOCAL_USER_KEY);
  return user ? JSON.parse(user) : null;
};

const getAuthTypeStored = () => {
  const authType = window.localStorage.getItem(LOCAL_AUTH_TYPE);
  return (authType || "password") as any;
};

const initialState: AuthState = {
  user: getUserStored(),
  authType: getAuthTypeStored(),
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userLogin = userCredential.user;
    const snapshot = await db
      .collection("users")
      .where("uid", "==", userLogin.uid)
      .limit(1)
      .get();
    const userResponse = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const user = userResponse as User[];
    if (user && user.length) {
      window.localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user[0]));
      return user[0];
    }
    throw new Error("User not found");
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({
    email,
    password,
    fullName,
    studentCode,
  }: {
    email: string;
    password: string;
    fullName: string;
    studentCode: string;
  }) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const docRef = await addDocument("users", {
      uid: user.uid,
      studentCode,
      fullName,
      email,
    });
    const createdUser: User = {
      id: docRef.id,
      uid: user.uid,
      studentCode,
      fullName,
      email,
    };
    window.localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(createdUser));
    return createdUser;
  }
);

export const registerWithGoogle = createAsyncThunk(
  "auth/registerWithGoogle",
  async (userRegisterInfo: {
    email: string | null;
    fullName: string | null;
    avatar: string | null;
    uid: string | null;
    providerId: string | null;
  }) => {
    const docRef = await addDocument("users", userRegisterInfo);
    const createdUser: User = {
      id: docRef.id,
      ...userRegisterInfo,
    } as any;
    window.localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(createdUser));
    return createdUser;
  }
);

export const changeAvatar = createAsyncThunk(
  "auth/changeAvatar",
  async (avatar: string, { getState }) => {
    const state = getState() as RootState;
    if (!state.auth.user) {
      return state.auth.user;
    }
    const newUserInfo: User = {
      ...state.auth.user,
      avatar,
    };
    await db.collection("users").doc(state.auth?.user?.id).update(newUserInfo);
    return newUserInfo;
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (user: User) => {
    await db.collection("users").doc(user.id).update(user);
    return { ...user };
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

export const deleteAccount = createAsyncThunk(
  "auth/deleteAccount",
  async () => {
    await auth.currentUser?.delete();
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginWithGoogle: (state, action: PayloadAction<User | null>) => {
      window.localStorage.setItem(
        LOCAL_USER_KEY,
        JSON.stringify(action.payload)
      );
      window.localStorage.setItem(LOCAL_AUTH_TYPE, "google");
      state.user = action.payload;
      state.authType = "google";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      window.localStorage.setItem(LOCAL_AUTH_TYPE, "password");
      state.authType = "password";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      window.localStorage.setItem(LOCAL_AUTH_TYPE, "password");
      state.authType = "password";
    });
    builder.addCase(registerWithGoogle.fulfilled, (state, action) => {
      state.user = action.payload;
      window.localStorage.setItem(LOCAL_AUTH_TYPE, "google");
      state.authType = "google";
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      window.localStorage.setItem(
        LOCAL_USER_KEY,
        JSON.stringify(action.payload)
      );
      state.user = action.payload;
    });
    builder.addCase(changeAvatar.fulfilled, (state, action) => {
      window.localStorage.setItem(
        LOCAL_USER_KEY,
        JSON.stringify(action.payload)
      );
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      window.localStorage.removeItem(LOCAL_USER_KEY);
      state.user = null;
    });
    builder.addCase(deleteAccount.fulfilled, (state) => {
      window.localStorage.removeItem(LOCAL_USER_KEY);
      state.user = null;
    });
  },
});

export const { loginWithGoogle } = authSlice.actions;

export default authSlice;
