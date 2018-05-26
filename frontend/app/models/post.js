import DS from 'ember-data';
import { computed } from '@ember/object';

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
  user_name:        DS.attr('string'),
  user_follower_count: DS.attr('number'),
  media_type:       DS.attr('string'),
  media_url:        DS.attr('string'),

  isTwitter:        computed('origin', function(){
    return this.get('origin') == 'TWITTER';
  }),
});
