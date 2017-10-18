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

      async getSingle(id) {
        const url = `${jplaceholderBaseURL}/posts/${id}`;
        const response = await fetch(url);
        const post = await response.json();

        return post;
      },
    },
  },
};

export default api;
