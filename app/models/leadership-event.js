import AbstractModel from 'hospitalrun/models/abstract';

export default AbstractModel.extend({
    
    //part of ministy models information
    ministry: DS.belongsTo('ministry'),
    
    //Main information
    description: DS.attr('string'),
    eventName: DS.attr('string'),
    date: DS.attr('string'),
    location: DS.attr('string'),
    
    //for adding multiple participants per leadership event
    participants: DS.hasMany('leadership-participant'),//what will need to work
    
    validations: {
        eventName: {
            format: { with: /(^[A-Za-z ]+$)/,
            message: 'Cannot have numbers or left blank'}
        },
        date: {
            presence: true,
            message: 'Cannot be left blank'
        },
        location: {
            presence: true,
            message: 'Cannot be left blank'
        },
        description: {
            presence: true,
            message: 'Cannot be left blank'
        },
    },
});