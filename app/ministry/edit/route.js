import AbstractEditRoute from 'hospitalrun/routes/abstract-edit-route';
import Ember from "ember";

export default AbstractEditRoute.extend({
    modelName: 'ministry',
    editTitle: 'Edit Monthly Report',
    newTitle: 'New Report',

//    getNewData: function() {
//        return new Ember.RSVP.Promise(function(resolve, reject) {
//            this.generateFriendlyId().then(function(friendlyId) {
//                resolve({
//                    friendlyId: friendlyId
//                });
//            },reject);
//        }.bind(this));
//    }
});