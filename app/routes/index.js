import Em from 'ember';
import BaseRoute from 'media-stats/routes/base';

const {
  RSVP,
} = Em;

export default BaseRoute.extend({
  model() {
    let models = {
      info: this.store.findAll('fb-post'),
    };

    return RSVP.hash(models);
  },

});
