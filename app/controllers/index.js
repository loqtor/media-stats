import Em from 'ember';

const {
  get,
  computed,
  computed: { reads },
  isPresent
} = Em;

export default Em.Controller.extend({

  posts: reads('model.info.posts'),
  data: reads('posts.data'),
  paging: reads('posts.paging'),

  postsLikedByFriend: computed('data', function () {
    let posts = get(this, 'data');
    let postsLikedByFriend = {};

    return _.reduce(posts, (plbf, post) => {
      if (isPresent(post.likes)) {
        let likes = post.likes.data;

        _.each(likes, (like) => {
          let friendId = like.id;
          if (!isPresent(plbf[friendId])) {
            plbf[friendId] = {
              posts: [],
              info: like
            };
          }

          plbf[friendId].posts.push(post);
        });
      }

      return plbf;
    }, postsLikedByFriend);
  }),

});
