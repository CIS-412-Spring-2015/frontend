import Ember from "ember";
import IsUpdateDisabled from "hospitalrun/mixins/is-update-disabled";
export default Ember.ObjectController.extend(IsUpdateDisabled, {
    needs: 'ministry/edit',

    editController: Ember.computed.alias('controllers.ministry/edit'),
    title: 'Add Believer',
    updateButtonText: 'Add',
    updateButtonAction: 'add',
    showUpdateButton: true,

    actions: {
        cancel: function() {
            this.send('closeModal');
        },

        add: function() {
            var newBeliever = this.getProperties('believerName', 'phone', 'age', 'relationship');
            this.get('editController').send('addBeliever', newBeliever);
        }
    }
});
