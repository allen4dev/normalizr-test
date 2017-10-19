import config from './../config';

const jplaceholderBaseURL = 'https://jsonplaceholder.typicode.com';
const soundcloudBaseURL = 'https://api.soundcloud.com';

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

    users: {
      async getUsers() {
        const url = `${jplaceholderBaseURL}/users`;
        const response = await fetch(url);
        const users = await response.json();

        return users;
      },
    },
  },

  soundcloud: {
    users: {
      async getSingle(id) {
        const url = `
          ${soundcloudBaseURL}/users/${id}?client_id=${config.soundcloud
          .CLIENT_ID}`;

        const response = await fetch(url);
        const user = await response.json();

        return user;
      },

      async searchUsers(term) {
        const url = `${soundcloudBaseURL}/users?q=${term}&client_id=${config
          .soundcloud.CLIENT_ID}`;

        const response = await fetch(url);
        const users = await response.json();

        return users;
      },
    },
  },
};

export default api;
