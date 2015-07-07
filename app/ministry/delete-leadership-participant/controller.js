import AbstractDeleteController from 'hospitalrun/controllers/abstract-delete-controller';   
import Ember from 'ember';
export default AbstractDeleteController.extend({
     title: 'Delete Leadership Participant',
	
	 needs: 'ministry/edit',
    
     afterDeleteAction: 'notifyProcedureDelete',
     editController: Ember.computed.alias('controllers.ministry/edit'),
    
     actions: {
         notifyProcedureDelete: function() {
             this.get('editController').send('leadershipParticipantDeleted', this.get('model'));
			 this.send('closeModal');
        }
    }
});