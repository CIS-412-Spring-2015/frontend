import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';
import Ember from "ember";

export default AbstractModel.extend(ReportDate, {
    // Report Metadata //
    reportDate: DS.attr('date'),
    reportArchived: DS.attr('boolean'),

    // New Believers Section
    // believers: DS.hasMany('new-believers'),
    believers: DS.attr(),
    
    // Events Section
    // leadEvents: DS.hasMany('new leadership events)
    leadEvents: DS.attr(),
    
    // leadEvents: DS.hasMany('new community events)
    commEvents: DS.attr(),

    //   Additional Info View    //
    ministryResults: DS.attr('string'),
    otherSignificantItems: DS.attr('string'),
    recommendationsNeeds: DS.attr('string'),
	
	// Christianity Explored //
	Participants: DS.attr('string'),
	Graduates: DS.attr('string'),
	ContinuedEducation: DS.attr('string'),
	Session: DS.attr('string'),

    displayReportDate: function() {
        var reportDate = this.get('reportDate');
        return moment(reportDate).format('MMMM YYYY');
    }.property('reportDate')

});
