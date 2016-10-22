import DS from 'ember-data';
import BaseModel from 'media-stats/models/base';

const {
  attr,
  hasMany,
} = DS;

export default BaseModel.extend({
  likes: hasMany('like'),
  comments: hasMany('comment'),
  story: attr('string'),
  message: attr('string'),
});
