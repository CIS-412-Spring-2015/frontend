import Ember from "ember";
export default Ember.Mixin.create({
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
  ]

});
