import AbstractModel from "hospitalrun/models/abstract";

export default AbstractModel.extend({
    //   Faith Declaration View  //
    ministry: DS.belongsTo('ministry'),

    // New Believer Fields
    address: DS.attr('string'),
    address2: DS.attr('string'),
    address3: DS.attr('string'),
    address4: DS.attr('string'),
    age: DS.attr('number'),
    believerName: DS.attr('string'),
    declarationType: DS.attr('string'),
    email: DS.attr('string'),
    gender: DS.attr('string'),
    phone: DS.attr('string'),
    presentActivity: DS.attr('string'),
    religiousAffiliation: DS.attr('string'),

    // fullName: function() {
    //   return this.get('firstName') + ' ' + this.get('lastName');
    // }.property('firstName', 'lastName')

});
