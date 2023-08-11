import { createSlice } from '@reduxjs/toolkit';

const initialState: {
	modalMessage: string | null;
	modalShow: boolean
} = {
	modalMessage: '',
	modalShow: false,
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: (state, { payload }) => {
			state.modalMessage = payload;
			state.modalShow = true;
		},
		hideModal: (state) => {
			state.modalMessage = null;
			state.modalShow = false;
		}
	},
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;