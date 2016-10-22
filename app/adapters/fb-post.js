import Em from 'ember';
import PostAdapter from 'media-stats/adapters/post';

const {
  get,
} = Em;

export default PostAdapter.extend({
  fetch() {
    return get(this, 'fb').api('/me?fields=posts{likes{pic_square,name}, message, story, comments}');
  },
});
