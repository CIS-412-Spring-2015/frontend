import AbstractModel from 'hospitalrun/models/abstract';
import StartEndOfReportMonth from 'hospitalrun/mixins/start-end-of-report-month';

export default AbstractModel.extend(StartEndOfReportMonth, {
    
    //part of ministy models information
    ministry: DS.belongsTo('ministry'),
    
    //Main information
    eventName: DS.attr('string'),
    date: DS.attr('date'),
    type: DS.attr('string'),
    location: DS.attr('string'),
    numberPastorChurch: DS.attr('string'),
    numberParticipants: DS.attr('string'),
    
     validations: {
        eventName: {
            presence: true
        },
        date: {
            presence: true
        },
        type: {
            presence: true
        },
        location: {
            presence: true
        },
        numberPastorChurch: {
			presence: true,
            numericality: true
        },
        numberParticipants: {
			presence: true,
            numericality: true
        },
     },
	
	displayCommunityDate: function() {
        var date = this.get('date');
        return moment(date).format('MM/DD/YYYY');
    }.property('date')
    
});