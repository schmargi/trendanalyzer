import DS from 'ember-data';

export default DS.Model.extend({
  title:           DS.attr('string'),
  posts:           DS.hasMany('post', {async: true}),
  is_favorite:     DS.attr('boolean', { defaultValue: false }),
});
