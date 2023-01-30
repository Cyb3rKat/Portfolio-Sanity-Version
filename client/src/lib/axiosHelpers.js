import axios from "axios";

export async function getAllPosts() {
  try {
    const data = await axios.get(`posts`).then((res) => res.data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
