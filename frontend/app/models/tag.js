import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

export default DS.Model.extend({
  title:           DS.attr('string'),
  posts:           DS.hasMany('post', {async: true}),

  today:                      moment().format('YYYY-MM-DD'),
  yesterday:                  moment().subtract(1,'days').format('YYYY-MM-DD'),
  presterday:                 moment().subtract(2,'days').format('YYYY-MM-DD'),
  one_before_presterday:      moment().subtract(3,'days').format('YYYY-MM-DD'),
  two_before_presterday:      moment().subtract(4,'days').format('YYYY-MM-DD'),

  today_like_count:     DS.attr('number'),
  today_retweet_count:  DS.attr('number'),
  today_post_count:     DS.attr('number'),

  yesterday_like_count:     DS.attr('number'),
  yesterday_retweet_count:  DS.attr('number'),
  yesterday_post_count:     DS.attr('number'),

  presterday_like_count:     DS.attr('number'),
  presterday_retweet_count:  DS.attr('number'),
  presterday_post_count:     DS.attr('number'),

  one_before_presterday_like_count:     DS.attr('number'),
  one_before_presterday_retweet_count:  DS.attr('number'),
  one_before_presterday_post_count:     DS.attr('number'),
  two_before_presterday_like_count:     DS.attr('number'),
  two_before_presterday_retweet_count:  DS.attr('number'),
  two_before_presterday_post_count:     DS.attr('number'),

  is_favorite:     DS.attr('boolean', { defaultValue: false }),
  post_count:      DS.attr('number'),
  retweet_count:   DS.attr('number'),
  like_count:      DS.attr('number'),
  popularity:      DS.attr('number'),
  contains_twitter:   DS.attr('boolean'),
  contains_instagram: DS.attr('boolean'),


  data_post_count:  computed('post_count', function(){
    return [
      ['Days', 'Post Count'],
      [this.get('one_before_presterday'), this.get('one_before_presterday_post_count')],
      [this.get('two_before_presterday'), this.get('two_before_presterday_post_count')],
      [this.get('presterday'), this.get('presterday_post_count')],
      [this.get('yesterday'), this.get('yesterday_post_count')],
      [this.get('today'), this.get('today_post_count')],
    ];
  }),
  data_like_count:  computed('like_count', function(){
    return [
      ['Days', 'Like Count'],
      [this.get('one_before_presterday'), this.get('one_before_presterday_like_count')],
      [this.get('two_before_presterday'), this.get('two_before_presterday_like_count')],
      [this.get('presterday'), this.get('presterday_like_count')],
      [this.get('yesterday'), this.get('yesterday_like_count')],
      [this.get('today'), this.get('today_like_count')],
    ];
  }),
  data_retweet_count:  computed('retweet_count', function(){
    return [
      ['Days', 'Retweet Count'],
      [this.get('one_before_presterday'), this.get('one_before_presterday_retweet_count')],
      [this.get('two_before_presterday'), this.get('two_before_presterday_retweet_count')],
      [this.get('presterday'), this.get('presterday_retweet_count')],
      [this.get('yesterday'), this.get('yesterday_retweet_count')],
      [this.get('today'), this.get('today_retweet_count')],
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
