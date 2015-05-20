import AbstractModel from "hospitalrun/models/abstract";

export default AbstractModel.extend({
    //   Faith Declaration View  //
    ministry: DS.belongsTo('ministry'),

    // New Believer Fields
    address: DS.attr('string'),
   /* address2: DS.attr('string'),
    address3: DS.attr('string'),
    address4: DS.attr('string'),*/
    age: DS.attr('number'),
    believerName: DS.attr('string'),
    declarationType: DS.attr('string'),
    email: DS.attr('string'),
    gender: DS.attr('string'),
    phone: DS.attr('string'),
    presentActivity: DS.attr('string'),
    religiousAffiliation: DS.attr('string'),

	validations: {
		believerName: {
			presence: true
		},
		age: {
			presence: true,
			numericality: {onlyInteger: true}
		},
		religiousAffiliation: {
			presence: true
		},
		presentActivity: {
			presence: true
		},
		declarationType: {
			presence: true
		},
		gender: {
			presence: true
		},
		phone: { 
			numericality: {allowBlank: true}
		},
		email: {
			allowBlank: true
		},
		address: {
			allowBlank: true
		},
		country: {
			allowBlank: true
		}
	}

});
