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
    
});