import Ember from "ember";
import IsUpdateDisabled from "hospitalrun/mixins/is-update-disabled";
import GenderList from 'hospitalrun/mixins/gender-list';
export default Ember.ObjectController.extend(IsUpdateDisabled, GenderList, {
    needs: 'ministry/edit',
    editController: Ember.computed.alias('controllers.ministry/edit'),
    updateButtonAction: 'update',
    showUpdateButton: true,

    religiousAffiliationList: ['none', 'Catholic', 'Muslim', 'Protestant', 'Other'],
    presentActivityList: ['Bedside Evangelism', 'Playroom Presentation', 'Jesus Film', 'Open Air Meeting', 'Mobile Clinic Outreach', 'Door to Door Evangelism', 'Other Opportunities'],
    declarationTypeList: ['New Believer', 'Recommitment'],
	familyRelationshipList: ['No Relationship', 'Patient', 'Grandmother', 'Grandfather', 'Mother', 'Father', 'Brother', 'Sister', 'Caregiver', 'Family', 'Friend'], 	//maybe add other back in to family relationship list at some point//

    //Title of the Modal
    title: function() {
        if (this.get('isNew')) {
            return 'Add Believer';
        } else {
            return "Edit this believer's information";
        }
    }.property('isNew'),
	
	religiousAffiliationIsOther: function() {
		if(this.get('religiousAffiliation') === 'Other'){
			return true;
		} else {
			return false;	
		}
	}.property('religiousAffiliation'),

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
