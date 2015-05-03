import AbstractModel from 'hospitalrun/models/abstract';

export default AbstractModel.extend({
    
    //part of ministy models information
    leadershipEvent: DS.belongsTo('leadership-event'),
    
    //Main information
    organization: DS.attr('string'),
    participantName: DS.attr('string'),
    gender: DS.attr('string'),
    
    validations: {
        participantName: {
            format: { with: /(^[A-Za-z ]+$)/,
            message: 'Cannot have numbers or left blank'}
        },
        gender: {
            format: { with: /(^[A-Za-z ]+$)/,
            message: 'Cannot have numbers or left blank'}
        },
        organization: {
            format: {with: /^([a-zA-Z]|\d)+$/,
            message: 'You may only use letters and numbers.'}
        },
    },
    
});