import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: UserCanCreateNewMonthlyMinistryReport', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('create-new-monthly-ministry-report', function(assert) {
  assert.expect(1);
  

  andThen(function() {
    //equal(currentPath(), 'user-can-create-new-monthly-ministry-report');
  });
});
