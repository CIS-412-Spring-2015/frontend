import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import GenderList from 'hospitalrun/mixins/gender-list';
export default AbstractEditController.extend(GenderList, {
  /* religiousAffiliation, presentActivity and declarationType are arrays that
     are accessed within the faith declaration tab to make sure the dropdowns
     are populated with these data. */
  religiousAffiliation: [
    'None',
    'Catholic',
    'Muslim',
    'Protestant',
    'Recommitment',
    'Other'
  ],

  presentActivity: [
      'Bedside Presentations',
      'Playroom Presentations',
      'Jesus Film',
      'Open Air Meetings',
      'Mobile Clinic Outreach',
      'Door to Door Evangelical',
      'Other'
  ],

  declarationType: [
      'New Believer',
      'Recommittment'
  ],

  canBeSeen: false,

  actions: {
        showCurrentBelievers: function() {
          $('.showHideBelievers').show(500);
          $('.showCurrentBelievers').hide();
          $('.hideCurrentBelievers').show();// Function generated to show and hide the
        },                                  // current believers that are within
        hideCurrentBelievers: function() {  // the database of the system.
          $('.showHideBelievers').hide(500);
          $('.hideCurrentBelievers').hide();
          $('.showCurrentBelievers').show();
        },
        // To show and hide the general information view within the faith declarations
        // tab at the moment. Will probably change in future.
        showGenInfo: function() {
          this.set('canBeSeen', true);
        },
        hideGenInfo: function() {
          this.set('canBeSeen', false);
        },
        //end above comment
        updateReport: function() {
            var updateModel = this.get('model');

            if (this.get('isNew')) {
                var newData = updateModel.getProperties('reportDate');

                updateModel.deleteRecord();
                updateModel = this.get('store').createRecord('ministry', newData);
                this.set('model', updateModel);
            }


            updateModel.save().then(function() {
                this.displayAlert('Report Saved', 'The report has been saved.');
            }.bind(this));
        }
  }

});
