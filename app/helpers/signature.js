// import Em from 'ember';
//
// const {
//   makeArray
// } = Em;
//
// export const generateBase = (method, url, params) => {
//   let base = `${encodeURIComponent(method)}&${encodeURIComponent(url)}`;
//
//   return _.reduce(params, (b, k, v) => {
//     base += `&${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
//     return base;
//   }, base);
// };
//
// export const generateSigningKey = () {
//   return makeArray(arguments).join('&');
// };
//
// export const sign = (method, url, params) => {
//   let base = generateBase(method, url, params);
//   let signingKey = generateSigningKey(params.oauth_consumer_key, params.oauth_token);
//
//
// };