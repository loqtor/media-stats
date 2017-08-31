const OAUTH_KEYS = {
  oauth_consumer_key: 'liMmMtOenruYtB8iQoyvib5xo',
  oauth_token: '193167116-UTRZJ76zuvy1ik3ziQbPRD4THYxsA8Jy0UIpOkk6'
};

const appendHeaders = () => _.reduce(OAUTH_KEYS, (h, v, k) => {
  h += `${k}=${v} `;
  return h;
}, '');

export default {
  headers: {
    Authorization: 'OAuth ' + appendHeaders(),
  },
};
