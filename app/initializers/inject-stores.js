import stores from 'media-stats/stores/base';

/**
 * Injects the store into Ember route, service lookup and conductor.
 *
 * @class StoreInjector
 */
export default {
  name: 'inject-stores',
  initialize: function(container, app) {
    app.register('store:main', stores);

    app.inject('route', 'store', 'store:main');
    app.inject('controller', 'store', 'store:main');
    app.inject('component', 'store', 'store:main');
  }
};
