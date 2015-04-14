import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';

export default AbstractModel.extend(ReportDate, {
    // Report Metadata //
    reportDate: DS.attr('date'),
    reportArchived: DS.attr('boolean'),

    //Hospital Tab Data
        //Staff View
        entireStaffDevotions: DS.attr('number'),
        departmentDevotions: DS.attr('number'),
        hospitalPrayerGroupIntercessions: DS.attr('number'),
        spiritualCenterStaffMeetings: DS.attr('number'),
        staffDevelopment: DS.attr('string'),
        staffOpportunities: DS.attr('string'),
        //Patient View
        bedsideEvangelism: DS.attr('string'),
        playroomActivities: DS.attr('string'),
    
    // New Believers Section
    // believers: DS.hasMany('new-believers'),
    believers: DS.attr(),
    
    // Events Section
    //leadEvents: DS.hasMany('leadership-event'), what will need implemented
    leadEvents: DS.attr(), // Currently working with
    commEvents: DS.attr(),

    //   Additional Info View    //
    ministryResults: DS.attr('string'),
    otherSignificantItems: DS.attr('string'),
    recommendationsNeeds: DS.attr('string'),
	
	// Christianity Explored //
	ceParticipants: DS.attr('number'),
	ceGraduates: DS.attr('number'),
	ceContinuedEducation: DS.attr('number'),
	ceSession: DS.attr('number'),

    displayReportDate: function() {
        var reportDate = this.get('reportDate');
        return moment(reportDate).format('MMMM YYYY');
    }.property('reportDate')

});
