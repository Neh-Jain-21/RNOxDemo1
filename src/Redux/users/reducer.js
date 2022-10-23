import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	profile: { id: 1, name: "Neh", followers: [], following: [] },
	users: Array(5)
		.fill()
		.map((_, index) => ({ id: index + 2, name: `User ${index + 1}`, followers: [], following: [] })),
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		updateFollowers: (state, action) => {
			if (!action.payload.addFollower) {
				state.profile.following.push(action.payload.id);
				const followerIndex = state.users.findIndex((value) => value.id === action.payload.id);

				if (followerIndex !== -1) state.users[followerIndex].followers.push(state.profile.id);
			} else {
				state.profile.following = state.profile.following.filter((value) => value !== action.payload.id);
				const followerIndex = state.users.findIndex((value) => value.id === action.payload.id);

				if (followerIndex !== -1) state.users[followerIndex].followers = state.users[followerIndex].followers.filter((value) => value !== state.profile.id);
			}
		},
	},
});

export const { updateFollowers } = usersSlice.actions;

export default usersSlice.reducer;
