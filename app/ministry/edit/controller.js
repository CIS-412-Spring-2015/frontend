import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import GenderList from 'hospitalrun/mixins/gender-list';
export default AbstractEditController.extend(GenderList, {
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

  actions: {
        generateReport: function() {
            var endDate = this.get('endDate'),
                reportRows = this.get('reportRows'),
                reportType = this.get('reportType'),
                startDate = this.get('startDate');
        //     if (Ember.isEmpty(startDate) && Ember.isEmpty(endDate)) {
        //         return;
        //     }
        //     reportRows.clear();
        //     this.showProgressModal();
        //     switch (reportType) {
        //         case 'expiration': {
        //             this._generateExpirationReport();
        //             break;
        //         }
        //         default: {
        //             this._generateInventoryReport();
        //             break;
        //         }
        //     }
        }
    }

});
