import AbstractModel from 'hospitalrun/models/abstract';

export default AbstractModel.extend({
    
    //part of ministy models information
    ministry: DS.belongsTo('ministry'),
    
    //Main information
    eventName: DS.attr('string'),
    date: DS.attr('string'),
    type: DS.attr('string'),
    location: DS.attr('string'),
    numberPastorChurch: DS.attr('string'),
    numberParticipants: DS.attr('string'),
    
     validations: {
        eventName: {
            format: { with: /(^[A-Za-z ]+$)/,
            message: 'Cannot have numbers or left blank'}
        },
        date: {
            presence: true,
            message: 'Cannot be left blank'
        },
        type: {
            format:  {with: /(^[A-Za-z ]+$)/,
            message: 'Cannot have numbers or left blank'}
        },
        location: {
            format: {with: /^([a-zA-Z]|\d)+$/,
            message: 'You may only use letters and numbers.'}
        },
        numberPastorChurch: {
            numericality: true,
            message: 'must be numbers only'
        },
        numberParticipants: {
            numericality: true,
            message: 'must be numbers only'
        },
     },
    
});