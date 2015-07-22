import Ember from "ember";
import IsUpdateDisabled from "hospitalrun/mixins/is-update-disabled";
import GenderList from 'hospitalrun/mixins/gender-list';
export default Ember.ObjectController.extend(IsUpdateDisabled, GenderList, {
    needs: ['ministry/edit', 'ministry'],

    actions: {
        cancel: function() {
            this.get('model').rollback();
            this.send('closeModal');
        },

        update: function() {
            var isNew = this.get('isNew'),
            newParticipant = this.get('model');
            newParticipant.save().then(function() {
                if (isNew) {    
                    this.get('editController').send('addLeadershipParticipant', newParticipant);
                } else {
                    this.send('closeModal');
                }
            }.bind(this));      
        }
    },
    
    editController: Ember.computed.alias('controllers.ministry/edit'),
    showUpdateButton: true,
    
    title: function() {
        if (this.get('isNew')) {            
            return 'Add Leadership Participant';
        } else {
            return 'Edit Leadership Participant';
        }
    }.property('isNew'),
    
    updateButtonAction: 'update',
    updateButtonText: function() {
        var isNew = this.get('isNew');
        if (isNew) {
            return 'Add';
        } else {
            return 'Update';
        }
    }.property('isNew'),
    
});
