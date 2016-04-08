import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    this.store.findRecord('question', params.question_id);
  },

  actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
  //   update(question, params) {
  //     Object.keys(params).forEach(function(key) {
  //       if(params[key]!==undefined) {
  //         question.set(key,params[key]);
  //       }
  //     });
  //     question.save();
  //     this.transitionTo('index');
  //   },
  }
});
//     save3(params){
//       var newAnswer = this.store.createRecord('answer', params);
//       var question = params.question;
//       question.get('answers').addObject(newAnwer)
//       newAnswer.save().then(function(){
//         return question.save();
//       });
//       this.transitionTo('index');
//     }
// });
// destroyCity(city) {
//   var rental_deletions = city.get('rentals').map(function(rental){
//     return rental.destroyRecord();
//   });
//   Ember.RSVP.all(rental_deletions).then(function(){
//     return city.destroyRecord();
//   });
//   this.transitionTo('index');
// }
