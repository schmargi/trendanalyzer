import Controller from '@ember/controller';
// import {filterBy} from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['city'],

  // filteredItems: filterBy('model.posts','location', 'Regensburg'),

  actions: {

    locationSelection(locale) {
      var buttonWithId = document.getElementById("location");
      buttonWithId.innerHTML = locale;
      this.set('city', locale);
      this.transitionTo( 'tags',{ queryParams: { city: locale}});
    }

  }


});
