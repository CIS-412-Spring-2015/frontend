import AbstractDeleteController from 'hospitalrun/controllers/abstract-delete-controller';  
import Ember from 'ember';
export default AbstractDeleteController.extend({
     title: 'Delete New Believer',
	
	 needs: 'ministry/edit',
    
     afterDeleteAction: 'notifyProcedureDelete',
     editController: Ember.computed.alias('controllers.ministry/edit'),
    
     actions: {
         notifyProcedureDelete: function() {
             this.get('editController').send('newBelieverDeleted', this.get('model'));
			 this.send('closeModal');
        }
    }
});