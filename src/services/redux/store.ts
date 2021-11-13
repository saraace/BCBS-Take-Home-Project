import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallery";

export const store = configureStore({
	reducer: {
		gallery: galleryReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
