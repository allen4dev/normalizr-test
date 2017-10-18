const jplaceholderBaseURL = 'https://jsonplaceholder.typicode.com';

const api = {
  jplaceholder: {
    posts: {
      async getPosts(page = 1) {
        const url = `${jplaceholderBaseURL}/posts?_page=${page}`;

        const response = await fetch(url);
        const posts = await response.json();

        return posts;
      },
    },
  },
};

export default api;
