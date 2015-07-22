import AbstractModel from 'hospitalrun/models/abstract';

export default AbstractModel.extend({
    
    //part of ministy models information
    leadEvent: DS.belongsTo('leadership-event', 'ministry'),
    
    //Main information
    organization: DS.attr('string'),
    participantName: DS.attr('string'),
    gender: DS.attr('string'),
    
    validations: {
        participantName: {
            presence: true
        },
        gender: {
            presence: true
        },
        organization: {
            presence: true
        },
    }
    
});