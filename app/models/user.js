import DS from 'ember-data';
import BaseModel from 'MSL/models/base';

const {
  attr,
} = DS;

export default BaseModel.extend({
  name: attr('string'),
  photo: attr('string'),
});