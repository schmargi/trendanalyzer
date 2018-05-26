import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

// import {filterBy} from '@ember/object/computed';

export default Controller.extend({
  query:                    '',
  tags:                     computed.alias('model'),
  queryParams:              ['location'],

  // filteredTags:    computed('tags', 'tags.assignedUsers.@each.first_name', 'tags.assignedUsers.@each.last_name', 'tags.assignedUsers.@each.group', 'tags.assignedUsers.@each.university', 'tags.group.name','query', function(){

  filteredTags:    computed('tags', 'tags.title', 'tags.posts.@each.location', 'query', function(){
    const query = this.get('query').toLowerCase();
    console.log(query);
    const tags = this.get('tags');
    if(isEmpty(query)){ return tags;}

    return tags.filter((tag)=>{
      return (tag.get('searchQuery')||'').toLowerCase().indexOf(query) >=0;
    });
  }),

  actions: {
    locationSelection(locale) {
      var buttonWithId = document.getElementById("location");
      buttonWithId.innerHTML = locale;
      this.set('location', locale);
      // this.transitionTo( 'tags',{ queryParams: { location: locale}});
    }

  }


});
