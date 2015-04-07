import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';

export default AbstractModel.extend(ReportDate, {
    // Report Metadata //
    reportDate: DS.attr('date'),
    reportArchived: DS.attr('boolean'),

    //   Faith Declaration View  //
    ministry: DS.belongsTo('ministry'),

    // New Believer Fields
    address: DS.attr('string'),
    address2: DS.attr('string'),
    address3: DS.attr('string'),
    address4: DS.attr('string'),
    age: DS.attr('string'),
    declarationType: DS.attr('string'),
    email: DS.attr('string'),
    firstName: DS.attr('string'),
    gender: DS.attr('string'),
    lastName: DS.attr('string'),
    phone: DS.attr('string'),
    presentActivity: DS.attr('string'),
    religiousAffiliation: DS.attr('string'),

    fullName: function() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')

});
