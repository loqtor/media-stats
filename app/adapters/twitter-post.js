import Em from 'ember';
import config from 'media-stats/config/twitter';
import PostAdapter from 'media-stats/adapters/post';

const {
  get,
  getProperties,
  inject: { service },
} = Em;

export default PostAdapter.extend({
  ajax: service(),

  accessToken: null,

  login() {
    let ajax = get(this, 'ajax');
    return ajax.request('https://api.twitter.com/1/oauth/request_token', {
      data: {
        oauth_callback: 'http://localhost:4200',
      }
    });
  },

  getTweets() {
    let ajax = get(this, 'ajax');
    return ajax.request('https://api.twitter.com/1/statuses/user_timeline', {
      method: 'GET',
      headers: config.headers,
    });
  },

  fetch() {
    let accessToken = get(this, 'accessToken');

    if (!accessToken) {
      this.login().then(this.getTweets);
    }

    return this.getTweets();
  },
});
