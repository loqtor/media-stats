import Em from 'ember';
import BaseRoute from 'media-stats/routes/base';

const {
  RSVP: { hash },
} = Em;

export default BaseRoute.extend({
  model() {
    let models = {
      info: this.store.findAll('fb-post'),
      // tweets: this.store.findAll('twitter-post'),
    };

    return hash(models);
  },

});
