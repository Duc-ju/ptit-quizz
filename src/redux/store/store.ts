import { configureStore } from "@reduxjs/toolkit";
import { masterSlice } from "../slices/masterSlice";
import practiceRoomSlide from "../slices/practiceRoomSlice";
import authSlice from "../slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    master: masterSlice.reducer,
    practiceRoom: practiceRoomSlide.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
