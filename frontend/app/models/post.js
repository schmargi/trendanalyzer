import DS from 'ember-data';

export default DS.Model.extend({
  text:             DS.attr('string'),
  url:              DS.attr('string'),
  tag:              DS.belongsTo('tag', {async: true}),
  tags:             DS.attr(), //array
  timestamp:        DS.attr('string'),
  is_favorite:      DS.attr('boolean', { defaultValue: false }),
  origin:           DS.attr('string'),
  city:             DS.attr('string'),
  like_count:       DS.attr('number'),
  retweet_count:    DS.attr('number'),
  user:             DS.belongsTo('user', {async: true}),
  mediafiles:       DS.hasMany('mediafile', {async: true}),

  isTwitter:        Ember.computed('origin', function(){
    return this.get('origin') == 'TWITTER';
  }),
});
