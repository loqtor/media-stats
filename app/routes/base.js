import Em from 'ember';

const {
  get,
} = Em;

export default Em.Route.extend({

  fb: Em.inject.service(),

  beforeModel() {
    let fb = get(this, 'fb');

    return fb.getLoginStatus().then((response) => {
      if (response.status === 'connected') {
        let fbToken = response.authResponse.accessToken;
        fb.setAccessToken(fbToken);
      } else {
        this.transitionTo('login');
      }

      return;
    });
  },
});
