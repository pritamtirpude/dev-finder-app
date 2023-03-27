import axios from "axios";

export const fetchGithubUserDefault = async () => {
  const response = await axios.get(`https://api.github.com/users/octocat`, {});

  return response.data;
};

export const fetchGithubUser = async (searchText) => {
  const response = await axios.get(
    `https://api.github.com/users/${searchText}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    }
  );

  return response.data;
};
