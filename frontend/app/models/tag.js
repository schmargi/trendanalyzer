import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title:           DS.attr('string'),
  posts:           DS.hasMany('post', {async: true}),

  // postCount:      computed.readOnly('posts.length'),
  is_favorite:     DS.attr('boolean', { defaultValue: false }),
  post_count:      DS.attr('number'),
  retweet_count:   DS.attr('number'),
  like_count:      DS.attr('number'),
  popularity:      DS.attr('number'),
  contains_twitter:   DS.attr('boolean'),
  contains_instagram: DS.attr('boolean'),

  // likeCountSum:   computed('posts.like_count', function(){
  //   let posts = this.get('posts').mapBy('like_count');
  //   var sum = 0;
  //   console.log(posts);
  //   for (var i = 0; i < posts.length; i++) {
  //     sum += posts[i]
  //   }
  //   return sum;
  // }),
  //
  // retweetCountSum:   computed('posts.retweet_count', function(){
  //   let posts = this.get('posts').mapBy('retweet_count');
  //   var sum = 0;
  //   for (var i = 0; i < posts.length; i++) {
  //     sum += posts[i]
  //   }
  //   return sum;
  // }),



  mydata:        computed('postCount', function(){
    return [
      ['Days', 'Post Count'],
      ['23.Mai', this.get('postCount')],
      ['two days ago', this.get('postCount')],
      ['Yesterday', this.get('postCount')],
      ['26. Mai', this.get('postCount')],
    ];
  }),

  myoptions:       computed('title', function() {
    return {
        title: this.get('title'),
        height: 300,
        width: 400,

        animation: {
          startup: true,
          easing: 'inAndOut',
        },
      };
    }),
});
