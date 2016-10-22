import Em from 'ember';

const {
  inject: { service }
} = Em;

export default Em.Object.extend({
  fb: service(),
});
