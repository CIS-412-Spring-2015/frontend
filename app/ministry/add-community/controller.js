import Ember from "ember";
import IsUpdateDisabled from "hospitalrun/mixins/is-update-disabled";
export default Ember.ObjectController.extend(IsUpdateDisabled, {
    needs: 'ministry/edit',

    editController: Ember.computed.alias('controllers.ministry/edit'),
    title: 'Add Community Event',
    updateButtonText: 'Add',
    updateButtonAction: 'add',
    showUpdateButton: true,

    actions: {
        cancel: function() {
            this.send('closeModal');
        },

        add: function() {
            var newCommunity = this.getProperties('eventName', 'date', 'type', 'location', 'numberPastorChurch', 'numberParticipants');
            this.get('editController').send('addCommunity', newCommunity);
        }
    }
});
