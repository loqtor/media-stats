import Em from 'ember';

const {
  get,
} = Em;

export default Em.Controller.extend({

  fb: Em.inject.service(),

  handleLogin() {
    this.transitionToRoute('index');
  },

  actions: {
    login() {
      let fb = get(this, 'fb');

      fb.login('user_posts').then(this.handleLogin.bind(this));
    },
  },
});
