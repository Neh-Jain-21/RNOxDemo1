import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: [
		{
			id: 1,
			images: [
				{
					type: "IMAGE",
					uri: "https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470_960_720.jpg",
				},
				{
					type: "IMAGE",
					uri: "https://cdn.pixabay.com/photo/2022/10/16/13/53/early-morning-7525151_960_720.jpg",
				},
				{
					type: "VIDEO",
					uri: "https://vod-progressive.akamaized.net/exp=1666522537~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F488%2F23%2F577442929%2F2727494292.mp4~hmac=3d5bbe981354c0ae361d5f54a85085324169b703c6e51b43b84795f53d9709d2/vimeo-prod-skyfire-std-us/01/488/23/577442929/2727494292.mp4",
				},
				{
					type: "IMAGE",
					uri: "https://cdn.pixabay.com/photo/2021/12/02/19/14/elephant-6841179_960_720.jpg",
				},
			],
			comment: "Outline with John and Ketv \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit cum quod, numquam incidunt tempore fuga. Reiciendis eligendi deleniti fugiat?",
			likes: [],
		},
	],
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.posts.push(action.payload);
		},
		likeOrUnlikePost: (state, action) => {
			const postIndex = state.posts.findIndex((post) => post.id === action.payload.id);

			if (postIndex !== -1) {
				const alreadyLiked = state.posts[postIndex].likes.find((userId) => userId === action.payload.userId);

				if (alreadyLiked) state.posts[postIndex].likes = state.posts[postIndex].likes.filter((userId) => userId !== action.payload.userId);
				else state.posts[postIndex].likes.push(action.payload.userId);
			}
		},
	},
});

export const { addPost, likeOrUnlikePost } = postsSlice.actions;

export default postsSlice.reducer;
