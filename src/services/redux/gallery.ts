import { createSlice } from "@reduxjs/toolkit";
import Image from "../../interfaces/Image.interface";
import { RootState } from "./store";

export interface GalleryState {
	images: Image[];
}

const initialState: GalleryState = {
	images: []
};

export const gallerySlice = createSlice({
	name: "gallery",
	initialState,
	reducers: {
		setImages: (state, action) => {
			return {
				...state,
				images: action.payload.images
			};
		}
	}
});

export const { setImages } = gallerySlice.actions;

export const selectSections = (state: RootState) => state.gallery.images;

export default gallerySlice.reducer;
