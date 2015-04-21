import Ember from "ember";
import IsUpdateDisabled from "hospitalrun/mixins/is-update-disabled";
import GenderList from 'hospitalrun/mixins/gender-list';
import NewBelieverInfo from 'hospitalrun/mixins/new-believer-info';
export default Ember.ObjectController.extend(IsUpdateDisabled, GenderList, NewBelieverInfo, {
    needs: 'ministry/edit',
    editController: Ember.computed.alias('controllers.ministry/edit'),
    updateButtonAction: 'update',
    showUpdateButton: true,

    //Title of the Modal
    title: function() {
        if (this.get('isNew')) {
            return 'Add Believer';
        } else {
            return "Edit this believer's information";
        }
    }.property('isNew'),

    //Update or Add Button
    updateButtonText: function() {
        var isNew = this.get('isNew');
        if (isNew) {
            return 'Add';
        } else {
            return 'Update';
        }
    }.property('isNew'),

    actions: {
        cancel: function() {
            this.get('model').rollback();
            this.send('closeModal');
        },

        update: function() {
            var isNew = this.get('isNew'),
            newBeliever = this.get('model');
            newBeliever.save().then(function() {
                if (isNew) {
                  this.get('editController').send('addBeliever', newBeliever);
                } else {
                  this.get('editController').send('editBeliever');
                }
            }.bind(this));
        }
    }
});
