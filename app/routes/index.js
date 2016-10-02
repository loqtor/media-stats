import Em from 'ember';
import BaseRoute from 'media-stats/routes/base';

const {
  get,
  RSVP,
} = Em;

export default BaseRoute.extend({

  model() {
    let fb = get(this, 'fb');
    let models = {
      info: fb.api('/me?fields=posts{likes{pic_square,name}, message, story, comments}')
    };

    return RSVP.hash(models);
  },

});