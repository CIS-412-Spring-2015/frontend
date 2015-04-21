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
    believers: DS.hasMany('new-believer'),

    // Events Section
    leadEvents: DS.hasMany('leadership-event'),
    commEvents: DS.hasMany('community-event'),
    participants: DS.hasMany('leadership-participant'),

    //   Additional Info View    //
    ministryResults: DS.attr('string'),
    otherSignificantItems: DS.attr('string'),
    recommendationsNeeds: DS.attr('string'),

	// Christianity Explored //
	
	validations: {
		ceParticipants: {
			numericality: true //Field must be a number
		},
		ceGraduates: {
			numericality: true //Field must be a number
		},
		ceContinuedEducation: {
			numericality: true //Field must be a number
		},
		ceSession: {
			numericality: true //Field must be a number
		},
    },
	
	ceParticipants: DS.attr('number'),
	ceGraduates: DS.attr('number'),
	ceContinuedEducation: DS.attr('number'),
	ceSession: DS.attr('number'),
	

    /* Summary Tab */
    // People Reached //
    peopleBedside: DS.attr('number'),
    peoplePlayroom: DS.attr('number'),
    peopleJesus: DS.attr('number'),
    peopleOpenAir: DS.attr('number'),
    peopleMobile: DS.attr('number'),
    peopleMore: DS.attr('number'),
    peopleTotal: DS.attr('number'), //this needs to be the people added up

    //Bibles Given Out//
    biblesBedside: DS.attr('number'),
    biblesPlayroom: DS.attr('number'),
    biblesJesus: DS.attr('number'),
    biblesOpenAir: DS.attr('number'),
    biblesMobile: DS.attr('number'),
    biblesMore: DS.attr('number'),
    biblesTotal: DS.attr('number'), //this needs to be the bibles added up

    //Salvations//
    salvationBedside: DS.attr('number'),
    salvationPlayroom: DS.attr('number'),
    salvationJesus: DS.attr('number'),
    salvationOpenAir: DS.attr('number'),
    salvationMobile: DS.attr('number'),
    salvationMore: DS.attr('number'),
    salvationTotal: DS.attr('number'), //this needs to be the salvations added up

    //Recommittments//
    recommitmentBedside: DS.attr('number'),
    recommitmentPlayroom: DS.attr('number'),
    recommitmentJesus: DS.attr('number'),
    recommitmentOpenAir: DS.attr('number'),
    recommitmentMobile: DS.attr('number'),
    recommitmentMore: DS.attr('number'),
    recommitmentTotal: DS.attr('number'), //this needs to be the recommitments added up


    displayReportDate: function() {
        var reportDate = this.get('reportDate');
        return moment(reportDate).format('MMMM YYYY');
    }.property('reportDate')

});
