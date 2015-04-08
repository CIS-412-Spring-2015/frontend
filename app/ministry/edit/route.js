import AbstractEditRoute from 'hospitalrun/routes/abstract-edit-route';
import Ember from "ember";

export default AbstractEditRoute.extend({
    modelName: 'ministry',
    editTitle: 'Edit Monthly Report',
    newTitle: 'New Report',
    
    actions:{
        deleteCommEvent: function(model) {
            this.controller.send('deleteCommEvent', model);
        },
        
        deleteLeadEvent: function(model) {
            this.controller.send('deleteLeadEvent', model);
        }
    }
});