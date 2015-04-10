import AbstractModel from 'hospitalrun/models/abstract';

export default AbstractModel.extend({
    
    //part of ministy models information
    ministry: DS.belongsTo('ministry'),
    
    //Main information
    description: DS.attr('string'),
    name: DS.attr('string'),
    date: DS.attr('string'),
    location: DS.attr('string'),
    
    //for adding multiple participants per leadership event
    participants: DS.attr()
});