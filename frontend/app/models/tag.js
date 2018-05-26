import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title:           DS.attr('string'),
  posts:           DS.hasMany('post', {async: true}),
  is_favorite:     DS.attr('boolean', { defaultValue: false }),

  mydata:          [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7],
    ],

  myoptions:      {
      title: 'How I spend my days',
      height: 300,
      width: 400,

      animation: {
        startup: true,
        easing: 'inAndOut',
      },
    },
});
