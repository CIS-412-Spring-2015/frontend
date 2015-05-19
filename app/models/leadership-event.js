import AbstractModel from 'hospitalrun/models/abstract';
import StartEndOfReportMonth from 'hospitalrun/mixins/start-end-of-report-month';

export default AbstractModel.extend(StartEndOfReportMonth, {
    
    //part of ministy models information
    ministry: DS.belongsTo('ministry'),
    
    //Main information
    description: DS.attr('string'),
    eventName: DS.attr('string'),
    date: DS.attr('date'),
    location: DS.attr('string'),
    
    //for adding multiple participants per leadership event
    participants: DS.hasMany('leadership-participant'),//what will need to work
    
    validations: {
        eventName: {
            presence: true
        },
        date: {
            presence: true
        },
        location: {
            presence: true
        },
        description: {
            presence: true
        }
    },
	
	displayLeadershipDate: function() {
        var date = this.get('date');
        return moment(date).format('MM/DD/YYYY');
    }.property('date')
	
});