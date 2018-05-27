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

  date:             computed('timestamp', function() {
    return "25. May 19:52 Uhr";
  }),

  searchQuery:                  computed('text','origin', 'user_name', 'media_type', function(){
    const { text, origin, user_name , media_type} = this.getProperties(['text','origin', 'user_name', 'media_type']);
    return `${origin} ${text} ${origin} ${user_name} ${media_type}`;
  }),

  is_mp4:           computed('media_url', function() {
    return this.get('media_url').includes("mp4");
  }),

  isTwitter:        computed('origin', function(){
    return this.get('origin') == 'TWITTER';
  }),

  isImage:        computed('media_type', function(){
    return this.get('media_type') == 'image';
  }),
  isVideo:        computed('media_type', function(){
    return this.get('media_type') == 'video';
  }),

  noMedia:        computed('isImage', 'isVideo', function(){
    return !this.get('isImage') && !this.get('isVideo');
  }),

});
