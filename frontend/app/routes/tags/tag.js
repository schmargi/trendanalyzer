import Route from '@ember/routing/route';
import { Promise } from 'rsvp';

export default Route.extend({

  model(params){
    return this.store.find('tag', params.tag_id);
  },

  beforeModel(){
    let controller = this.controllerFor('tags');
    return new Promise((resolve)=>{
      this.store.findAll('tag').then((tags)=>{
        controller.set('tags', tags.toArray());
        resolve(tags);
      });
    });
  }


});
