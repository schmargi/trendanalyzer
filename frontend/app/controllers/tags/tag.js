import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

// import {filterBy} from '@ember/object/computed';

export default Controller.extend({
  query:                    '',
  posts:                     computed.alias('model.posts'),

  filteredPosts:    computed('posts', 'posts.title', 'posts.posts.@each.location', 'query', function(){
    const query = this.get('query').toLowerCase();
    console.log(query);
    const posts = this.get('posts');
    if(isEmpty(query)){ return posts;}

    return posts.filter((post)=>{
      return (post.get('searchQuery')||'').toLowerCase().indexOf(query) >=0;
    });
  }),

});
