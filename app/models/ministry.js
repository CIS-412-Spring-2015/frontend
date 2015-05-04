import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';

export default AbstractModel.extend(ReportDate, {
    // Report Metadata //
    reportDate: DS.attr('date'),
    reportArchived: DS.attr('boolean'),
    hospitalReportValidation: DS.attr('boolean'),
    eventsReportValidation: DS.attr('boolean'),
    faithDeclarationsReportValidation: DS.attr('boolean'),
    additionalInformationReportValidation: DS.attr('boolean'),
    summaryReportValidation: DS.attr('boolean'),
    demographicsReportValidation: DS.attr('boolean'),
    fullReportValidation: DS.attr('boolean'),

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
    leadParticipants: DS.hasMany('leadership-participant'),
    eventsThisMonth: DS.attr('boolean'),

    //   Additional Info View    //
    ministryResults: DS.attr('string'),
    otherSignificantItems: DS.attr('string'),
    recommendationsNeeds: DS.attr('string'),

	// Christianity Explored //
	
	ceParticipants: DS.attr('number'),
	ceGraduates: DS.attr('number'),
	ceContinuedEducation: DS.attr('number'),
	ceSession: DS.attr('number'),
	

    /* Summary Tab */
    // Gospel Presentations //
    bedsidePresentations: DS.attr('number'),
    playroomPresentations: DS.attr('number'),
    jesusPresentations: DS.attr('number'),
    openAirPresentations: DS.attr('number'),
    mobilePresentations: DS.attr('number'),
    morePresentations: DS.attr('number'),
    totalPresentations: DS.attr('number'), //this needs to be the gospel presentations added up
    
    // People Reached //
    peopleBedside: DS.attr('number'),
    peoplePlayroom: DS.attr('number'),
    peopleJesus: DS.attr('number'),
    peopleOpenAir: DS.attr('number'),
    peopleMobile: DS.attr('number'),
    peopleMore: DS.attr('number'),
    peopleTotal: DS.attr('number'), //this needs to be the people added up

    //Bibles Given Out//
    bibleBedside: DS.attr('number'),
    biblePlayroom: DS.attr('number'),
    bibleJesus: DS.attr('number'),
    bibleOpenAir: DS.attr('number'),
    bibleMobile: DS.attr('number'),
    bibleMore: DS.attr('number'),
    bibleTotal: DS.attr('number'), //this needs to be the bibles added up

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

    //Validations for all pages
    validations: {
        //Hospital Tab
        entireStaffDevotions: {
            numericality: true
        },
        departmentDevotions: {
            numericality: true
        },
        hospitalPrayerGroupIntercessions: {
            numericality: true
        },
        spiritualCenterStaffMeetings: {
            numericality: true
        },
        staffDevelopment: {
            presence: true
        },
        staffOpportunities: {
            presence: true    
        },
		bedsideEvangelism: {
			presence: true //field must be filled in
		}, 
		playroomActivities: {
			presence: true //field must be filled in
		},
        
        //Faith Delcarations
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
		
		//Additional information
			//3000 words roughly equals 25,200 characters with spaces
		ministryResults: {
            presence: true, //field must be filled in
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
		},
		otherSignificantItems: {
            presence: true, //field must be filled in
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
		},
		recommendationsNeeds: {
            presence: true, //field must be filled in
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
		},
        
        peopleBedside: {
            numericality: true //Field must be a number
        }, 
        
        peoplePlayroom: {
            numericality: true //Field must be a number
        },
        
        peopleJesus: {
            numericality: true //Field must be a number
        },
        
        peopleOpenAir: {
            numericality: true //Field must be a number
        }, 
        
        peopleMobile: {
            numericality: true //Field must be a number
        },
        
        peopleMore: {
            numericality: true //Field must be a number
        },
        bibleBedside: {
            numericality: true //Field must be a number
        }, 
        
        biblePlayroom: {
            numericality: true //Field must be a number
        },
        
        bibleJesus: {
            numericality: true //Field must be a number
        },
        
        bibleOpenAir: {
            numericality: true //Field must be a number
        }, 
        
        bibleMobile: {
            numericality: true //Field must be a number
        },
        
        bibleMore: {
            numericality: true //Field must be a number
        },
    },
    
    displayReportDate: function() {
        var reportDate = this.get('reportDate');
        return moment(reportDate).format('MMMM YYYY');
    }.property('reportDate')

});
