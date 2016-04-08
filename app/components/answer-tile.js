import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
  update(answer, params) {
    this.sendAction('update', answer, params);
  },
  delete(answer) {
    if(confirm('are you sure you do not want to share your answer with the world?')) {
    this.sendAction('delete', answer);
    }
  }
}
});
