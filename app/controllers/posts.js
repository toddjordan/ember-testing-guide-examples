import Ember from 'ember';

export default Ember.Controller.extend({
  propA: 'You need to write tests',
  propB: 'And write one for me too',

  setPropB(str) {
    this.set('propB', str);
  },

  actions: {
    setProps(str) {
      this.set('propA', 'Testing is cool');
      this.setPropB(str);
    }
  }
});
