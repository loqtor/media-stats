import Em from 'ember';

const {
  get,
  set,
  warn,
} = Em;

export default Em.Object.extend({
  _stores: {},

  /*
   * I'm testing the deployment, mate. One more.
   */
  _getAdapter(modelName) {
    return this.container.lookup(`adapter:${modelName}`);
  },

  _formatData(data) {
    return data;
  },

  _resolveStore(store) {
    return get(`${this}._stores`, store);
  },

  _updateStore(modelName, data) {
    if (!get(this._stores, modelName)) {
      set(this._stores, modelName, {});
    }

    set(this._stores, `${modelName}.records`, this._formatData(data));
  },

  findAll(modelName) {
    let store = this._resolveStore(modelName);

    if (!store) {
      let adapter = this._getAdapter(modelName);

      if (!adapter) {
        warn(`${modelName} adapter was not found. Check on what you are doing, mate.`);
        return;
      }

      return adapter
        .fetch()
        .then((data) => {
          this._updateStore(modelName, data);
          return get(this, `_stores.${modelName}.records`);
        });
    }

    /**
     * Pagination to come
     */

    return get(store, 'records');
  },

  findMany() {
    // To be implemented if needed
  },

  findRecord() {
    // To be implemented if needed
  }
});
