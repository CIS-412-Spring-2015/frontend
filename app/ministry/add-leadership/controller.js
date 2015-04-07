import Ember from "ember";
import IsUpdateDisabled from "hospitalrun/mixins/is-update-disabled";
export default Ember.ObjectController.extend(IsUpdateDisabled, {
    needs: 'ministry/edit',

    editController: Ember.computed.alias('controllers.ministry/edit'),
    title: 'Add Leadership Event',
    updateButtonText: 'Add',
    updateButtonAction: 'add',
    showUpdateButton: true,

    actions: {
        cancel: function() {
            this.send('closeModal');
        },

        add: function() {
            var newLeadership = this.getProperties('description', 'eventName', 'date', 'location');
            this.get('editController').send('addLeadership', newLeadership);
        }
    }
});
