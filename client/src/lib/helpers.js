import { useGetPostsQuery } from "../store/Slices/api/apiSlice";

export async function useGetSinglePost(postId) {
  const { data: posts, isLoading } = useGetPostsQuery();
  let mypost = [];
  if (!isLoading && posts != null) {
    mypost = await posts.data.find((post) => post._id === postId);
    return mypost;
  }
  return null;
}
