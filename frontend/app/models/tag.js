import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title:           DS.attr('string'),
  posts:           DS.hasMany('post', {async: true}),

  today:           '26. Mai',
  yesterday:       '25. Mai',
  yesteryesterday: '24. Mai',

  is_favorite:     DS.attr('boolean', { defaultValue: false }),
  post_count:      DS.attr('number'),
  retweet_count:   DS.attr('number'),
  like_count:      DS.attr('number'),
  popularity:      DS.attr('number'),


  hasTwitter:     computed('posts.origin', function(){
    let posts = this.get('posts').mapBy('origin');
    return posts.indexOf("TWITTER") > -1;
  }),

  hasInstagram:     computed('posts.origin', function(){
    let posts = this.get('posts').mapBy('origin');
    return posts.indexOf("INSTAGRAM") > -1;
  }),

  data_post_count:  computed('postCount', function(){
    return [
      ['Days', 'Post Count'],
      [this.get('today'), this.get('postCount')],
      [this.get('yesterday'), this.get('postCount')],
      [this.get('yesteryesterday'), this.get('postCount')],
    ];
  }),
  data_like_count:  computed('like_count', function(){
    return [
      ['Days', 'Like Count'],
      [this.get('today'), this.get('likeCountSum')],
      [this.get('yesterday'), this.get('likeCountSum')],
      [this.get('yesteryesterday'), this.get('likeCountSum')],
    ];
  }),
  data_retweet_count:  computed('retweet_count', function(){
    return [
      ['Days', 'Retweet Count'],
      [this.get('today'), this.get('retweetCountSum')],
      [this.get('yesterday'), this.get('retweetCountSum')],
      [this.get('yesteryesterday'), this.get('retweetCountSum')],
    ];
  }),

  retweet_options: computed(function() {
    return {
        title: 'Retweet Count',
        height: 300,
        legend: {position: 'none'},
        vAxis: {
        viewWindow: {
            min:0
          }
        },
        colors: 'blue',

        animation: {
          startup: true,
          easing: 'inAndOut',
        },
      };
    }),
  like_options: computed(function() {
    return {
        title: 'Like Count',
        height: 300,
        legend: {position: 'none'},
        vAxis: {
        viewWindow: {
            min:0
          }
        },
        colors: 'green',

        animation: {
          startup: true,
          easing: 'inAndOut',
        },
      };
    }),
  post_options: computed(function() {
    return {
        title: 'Post Count',
        height: 300,
        legend: {position: 'none'},
        vAxis: {
        viewWindow: {
            min:0
          }
        },
        colors: 'red',

        animation: {
          startup: true,
          easing: 'inAndOut',
        },
      };
    }),
});
