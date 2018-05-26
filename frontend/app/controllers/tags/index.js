import Controller from '@ember/controller';
// import {filterBy} from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['location'],

  // filteredItems: filterBy('model.posts','location', 'Regensburg'),

  actions: {
    locationSelection(locale) {
      var buttonWithId = document.getElementById("location");
      buttonWithId.innerHTML = locale;
      this.set('location', locale);
      // this.transitionTo( 'tags',{ queryParams: { location: locale}});
    }

  }


});
