import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID r3eNCmbq5-y7Zq92nyfKRB287NnFNZSy8ctqNVslcv8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
