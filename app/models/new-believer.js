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
	validations: {
		believerName: {
			format: { with: /(^[A-Za-z ]+$)/, message: 'Cannot have numbers or left blank' }
		},
		age: {
			numericality: { onlyInteger: true, allowBlank: true, message: 'Only numbers allowed' }
		},
		phone: {
			format: { with: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/, allowBlank: true, message: 'Not a reconized phone number' }
		},
		country: {
			format: { with: /(^[A-Za-z ]+$)/, allowBlank: true, message: 'Cannot have numbers' }
		},
	},

});
