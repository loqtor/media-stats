import Em from 'ember';
import BaseAdapter from 'media-stats/adapters/application';

const {
  warn,
} = Em;

export default BaseAdapter.extend({
  fetch() {
    warn('Please override this method');
  },
});
