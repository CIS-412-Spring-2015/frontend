import AbstractModel from 'hospitalrun/models/abstract';

export default AbstractModel.extend({
    
    //part of ministy models information
    leadershipEvent: DS.belongsTo('leadership-event'),
    
    //Main information
    organization: DS.attr('string'),
    participantName: DS.attr('string'),
    gender: DS.attr('string'),
    
});