import Ember from "ember";
import IsUpdateDisabled from "hospitalrun/mixins/is-update-disabled";

export default Ember.ObjectController.extend(IsUpdateDisabled, {
    needs: 'ministry/edit',

    actions: {
        cancel: function() {
            this.send('closeModal');
        },

        update: function() {
            var newLeadership = this.getProperties('description', 'eventName', 'date', 'location');
            this.get('editController').send('addLeadership', newLeadership);
        }
    },
    
    editController: Ember.computed.alias('controllers.ministry/edit'),
    updateButtonAction: 'update',
    updateButtonText: function() {
        var isNew = this.get('isNew');
        if (isNew) {
            return 'Add';
        } else {
            return 'Update';
        }
    }.property('isNew'),
    showUpdateButton: true,
    
    title: function() {
        if (this.get('isNew')) {            
            return 'Add Leadership Event';
        } else {
            return 'Edit Leadership Event';
        }
    }.property('isNew'),
    
});
