/* 
 * I'm not sure we really want to limit any of the fields to a certain number
 * of words, but for the time being I have a 3000 word "limit" should talk 
 * about this at some point
 */

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
	newBelieverCheckbox: DS.attr('boolean'),
	believersLengthNotZero: DS.attr('boolean'),
	noNewBelieversThisMonth: DS.attr('boolean'),

    // Events Section
    leadEvents: DS.hasMany('leadership-event'),
    commEvents: DS.hasMany('community-event'),
    leadParticipants: DS.hasMany('leadership-participant'),
	communityCheckbox: DS.attr('boolean'),
	leadershipCheckbox: DS.attr('boolean'),
	communityLengthNotZero: DS.attr('boolean'),
	leadershipLengthNotZero: DS.attr('boolean'),
	noLeadershipEventsThisMonth: DS.attr('boolean'),
	noCommunityEventsThisMonth: DS.attr('boolean'),

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
    doorPresentations: DS.attr('number'),
    totalPresentations: DS.attr('number'), //this needs to be the gospel presentations added up
    
    // People Reached //
    peopleBedside: DS.attr('number'),
    peoplePlayroom: DS.attr('number'),
    peopleJesus: DS.attr('number'),
    peopleOpenAir: DS.attr('number'),
    peopleMobile: DS.attr('number'),
    peopleMore: DS.attr('number'),
    peopleDoor: DS.attr('number'),
    peopleTotal: DS.attr('number'), //this needs to be the people added up

    //Bibles Given Out//
    bibleBedside: DS.attr('number'),
    biblePlayroom: DS.attr('number'),
    bibleJesus: DS.attr('number'),
    bibleOpenAir: DS.attr('number'),
    bibleMobile: DS.attr('number'),
    bibleMore: DS.attr('number'),
    bibleDoor: DS.attr('number'),
    bibleTotal: DS.attr('number'), //this needs to be the bibles added up

    //Salvations//
    salvationBedside: DS.attr('number'),
    salvationPlayroom: DS.attr('number'),
    salvationJesus: DS.attr('number'),
    salvationOpenAir: DS.attr('number'),
    salvationMobile: DS.attr('number'),
    salvationMore: DS.attr('number'),
    salvationDoor: DS.attr('number'),
    salvationTotal: DS.attr('number'), //this needs to be the salvations added up

    //Recommittments//
    recommitmentBedside: DS.attr('number'),
    recommitmentPlayroom: DS.attr('number'),
    recommitmentJesus: DS.attr('number'),
    recommitmentOpenAir: DS.attr('number'),
    recommitmentMobile: DS.attr('number'),
    recommitmentMore: DS.attr('number'),
    recommitmentDoor: DS.attr('number'),
    recommitmentTotal: DS.attr('number'), //this needs to be the recommitments added up

    //Validations for all pages
    validations: {
        //Hospital Tab
        entireStaffDevotions: {
			presence: true,
            numericality: true
        },
		
        departmentDevotions: {
			presence: true,
            numericality: true
        },
		
        hospitalPrayerGroupIntercessions: {
			presence: true,
            numericality: true
        },
		
        spiritualCenterStaffMeetings: {
			presence: true,
            numericality: true
        },
		
        staffDevelopment: {
            presence: true,
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
        },
		
        staffOpportunities: {
            presence: true,
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
        },
		
		bedsideEvangelism: {
			presence: true, 
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
		},
		
		playroomActivities: {
			presence: true,
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
		},
        
        //Faith Delcarations
        ceParticipants: {
			presence: true,
			numericality: true
		},
		
		ceGraduates: {
			presence: true,
			numericality: true
		},
		
		ceContinuedEducation: {
			presence: true,
			numericality: true 
		},
		
		ceSession: {
			presence: true,
			numericality: true 
		},
		
		//Additional Information
			//3000 words roughly equals 25,200 characters with spaces
		ministryResults: {
            presence: true,
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
		},
		
		otherSignificantItems: {
            presence: true,
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
		},
		
		recommendationsNeeds: {
            presence: true,
			length: { maximum: 25200, message: { tooLong: 'You cannot have more then 3000 words (25,200 characters)' } }
		},
        
        bedsidePresentations: {
			presence: true,
            numericality: true
        }, 
        
        playroomPresentations: {
			presence: true,
            numericality: true
        },
        
        jesusPresentations: {
			presence: true,
            numericality: true
        },
        
        openAirPresentations: {
			presence: true,
            numericality: true
        }, 
        
        mobilePresentations: {
			presence: true,
            numericality: true
        },
        
        morePresentations: {
			presence: true,
            numericality: true
        },
        doorPresentations: {
			presence: true,
            numericality: true
        },
        
        peopleBedside: {
			presence: true,
            numericality: true
        }, 
        
        peoplePlayroom: {
			presence: true,
            numericality: true
        },
        
        peopleJesus: {
			presence: true,
            numericality: true
        },
        
        peopleOpenAir: {
			presence: true,
            numericality: true
        }, 
        
        peopleMobile: {
			presence: true,
            numericality: true
        },
        
        peopleMore: {
			presence: true,
            numericality: true
        },
		
        peopleDoor: {
			presence: true,
            numericality: true
        },
		
        bibleBedside: {
			presence: true,
            numericality: true
        }, 
        
        biblePlayroom: {
			presence: true,
            numericality: true
        },
        
        bibleJesus: {
			presence: true,
            numericality: true
        },
        
        bibleOpenAir: {
			presence: true,
            numericality: true
        }, 
        
        bibleMobile: {
			presence: true,
            numericality: true
        },
		
        bibleDoor: {
			presence: true,
            numericality: true
        },
		
        bibleMore: {
			presence: true,
            numericality: true
        }    
    },
    
    displayReportDate: function() {
        var reportDate = this.get('reportDate');
        return moment(reportDate).format('MMMM YYYY');
    }.property('reportDate')

});
