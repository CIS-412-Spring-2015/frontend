import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import Ember from 'ember';
import GenderList from 'hospitalrun/mixins/gender-list';
export default AbstractEditController.extend(GenderList, {

    showPreview: false,

    submitPage: false,
	
	canDeleteCommEvent: function() {        
        return this.currentUserCan('delete_comm_event');
    }.property(),
		
	canDeleteLeadEvent: function() {        
		return this.currentUserCan('delete_lead_event');
    }.property(),
	
	canDeleteNewBeliever: function() {        
		return this.currentUserCan('delete_new_believer');
    }.property(),

    //Function sets default variables for new report
    reportDateChanged: function() {
        //Initialize report data
        if (Ember.isEmpty(this.get('reportDate'))) {
            this.setProperties({
                'reportDate': new Date(),
                'reportArchived': false,
                'hospitalReportValidation': false,
                'eventsReportValidation': false,
                'eventsThisMonth': true,
                'faithDeclarationsReportValidation': false,
                'additionalInformationReportValidation': false,
                'summaryReportValidation': false,
                'demographicsReportValidation': false,
                'fullReportValidation': false
            });
        }

    }.observes('reportDate'),

    //Function sets a report to be valid
    setFullReportValidation: function() {
        if (this.get('hospitalReportValidation') &&
            this.get('eventsReportValidation') &&
            this.get('faithDeclarationsReportValidation') &&
            this.get('additionalInformationReportValidation') &&
            this.get('summaryReportValidation')) {
                //All variables are true, so set report to valid
                this.set('fullReportValidation', true);
        } else {
            this.set('fullReportValidation', false);
        }
    }.observes('hospitalReportValidation', 'eventsReportValidation', 'faithDeclarationsReportValidation',
               'additionalInformationReportValidation', 'summaryReportValidation', 'fullReportValidation'),

    setReportArchivedValidation: function() {
        if (!this.get('fullReportValidation')) {
            this.set('reportArchived', false);
        }
    }.observes('reportArchived'),

    //Function to set Hospital tab to valid
    setHospitalReportValidation: function() {
        if(this.get('staffOpportunities') && this.get('staffDevelopment') && this.get('spiritualCenterStaffMeetings') && this.get('hospitalPrayerGroupIntercessions') && this.get('departmentDevotions') && this.get('entireStaffDevotions') && this.get('bedsideEvangelism') && this.get('playroomActivities')){
        	this.set('hospitalReportValidation', true);
        } else {
        	this.set('hospitalReportValidation', false);
        }
    }.observes('staffOpportunities', 'staffDevelopment', 'spiritualCenterStaffMeetings', 'hospitalPrayerGroupIntercessions', 'departmentDevotions', 'entireStaffDevotions', 'bedsideEvangelism', 'playroomActivities'),

    //Function to set Events tab to valid
    setEventsReportValidation: function() {
        if(this.get('communityCheckbox') && this.get('leadershipCheckbox')){
        	this.set('eventsReportValidation', true);
        } else if(!Ember.isEmpty(this.get('leadEvents')) && !Ember.isEmpty(this.get('commEvents'))){
        	this.set('eventsReportValidation', true);
        } else {
			this.set('eventsReportValidation', false);
		}
    }.observes('leadEvents','commEvents','communityCheckbox', 'leadershipCheckbox'),

    //Function to set Faith Delaration tab to valid
    setFaithDelcarationsReportValidation: function() {
		if(this.get('newBelieverCheckbox') && this.get('ceParticipants') && this.get('ceGraduates') && this.get('ceContinuedEducation') && this.get('ceSession')){
			this.set('faithDeclarationsReportValidation', true);
		} else if(!Ember.isEmpty(this.get('believers')) && this.get('ceParticipants') && this.get('ceGraduates') && this.get('ceContinuedEducation') && this.get('ceSession')){
			this.set('faithDeclarationsReportValidation', true);
		} else {
			this.set('faithDeclarationsReportValidation', false);
		}
    }.observes('believers', 'newBelieverCheckbox', 'ceParticipants', 'ceGraduates', 'ceContinuedEducation', 'ceSession'),

    //Function to set Additional Info tab to valid
    setAdditionalInformationReportValidation: function() {
		if(this.get('ministryResults') && this.get('otherSignificantItems') && this.get('recommendationsNeeds')){
			this.set('additionalInformationReportValidation', true);
		} else {
			this.set('additionalInformationReportValidation', false);
		}
    }.observes('ministryResults', 'otherSignificantItems', 'recommendationsNeeds'),

    //Function to set Summary tab validation
    setSummaryReportValidation: function() {
        if (this.get('bedsidePresentations') && this.get('playroomPresentations') && this.get('jesusPresentations') && this.get('openAirPresentations') && this.get('mobilePresentations') && this.get('morePresentations') && this.get('peopleBedside') && this.get('peoplePlayroom') && this.get('peopleJesus') && this.get('peopleOpenAir') && this.get('peopleMobile') &&  this.get('peopleMore') && this.get('bibleBedside') && this.get('biblePlayroom') && this.get('bibleJesus') && this.get('bibleOpenAir') && this.get('bibleMobile') && this.get('bibleMore')) {
            this.set('summaryReportValidation', true);
        } else {
            this.set('summaryReportValidation', false);
        }

    }.observes('bedsidePresentations', 'playroomPresentations', 'jesusPresentations', 'openAirPresentations', 'mobilePresentations', 'morePresentations', 'peopleBedside', 'peoplePlayroom', 'peopleJesus', 'peopleOpenAir', 'peopleMobile', 'peopleMore', 'bibleBedside', 'biblePlayroom', 'bibleJesus', 'bibleeOpenAir', 'bibleMobile', 'bibleMore', 'summaryReportValidation'),
	
	//Toggle Preview
        togglePreview: function() {
          this.toggleProperty('showPreview');
        },

       /* toggleArrowInPreview: function() {
          if ($('.showDownArrow').is(":visible")) {
              $('.showDownArrow').click(toggle());
              $('.showUpArrow').click(toggle());
          } else {
              $('.showDownArrow').toggle();
              $('.showUpArrow').toggle();
          }
        }, */

        toggleArrowInPreview: function() {
          this.toggleProperty('showDetails');
        },
	
	//events page validation
	noCommunityEventsThisMonth: function() {  
		if(this.get('communityCheckbox')) {
			return true;
		} else {
			return false;
		}
	}.property('communityCheckbox', 'commEvents'),
	
	noLeadershipEventsThisMonth: function() {
		if(this.get('leadershipCheckbox')) {
			return true;
		} else {
			return false;
		}
	}.property('leadershipCheckbox', 'leadEvents'),
	
	//new believers page validation
	noNewBelieversThisMonth: function() {
		if(this.get('newBelieverCheckbox')) {
			return true;
		} else {
			return false;
		}
	}.property('newBelieverCheckbox', 'believers'),
	
	communityLengthNotZero: function() {
		if(!Ember.isEmpty(this.get('commEvents'))) {
			return true;	
		} else {
			return false;	
		}
	}.property('commEvents'),
	
	leadershipLengthNotZero: function() {
		if(!Ember.isEmpty(this.get('leadEvents'))) {
			return true;	
		} else {
			return false;	
		}
	}.property('leadEvents'),
	
	believersLengthNotZero: function() {
		if(!Ember.isEmpty(this.get('believers'))) {
			return true;	
		} else {
			return false;	
		}
	}.property('believers'),
	
    //summary page totals
    totalPresentationsFunction: function() {
        var bedsidePresentations, playroomPresentations, jesusPresentations, openAirPresentations, mobilePresentations, doorPresentations, morePresentations, totalPresentations;

        if(this.get('bedsidePresentations') === undefined || this.get('bedsidePresentations') === "" || this.get('bedsidePresentations') === null) {
            bedsidePresentations = 0;
        } else {
            bedsidePresentations = parseInt(this.get('bedsidePresentations'));
        }

        if(this.get('playroomPresentations') === undefined || this.get('playroomPresentations') === "" || this.get('playroomPresentations') === null) {
            playroomPresentations = 0;
        } else {
            playroomPresentations = parseInt(this.get('playroomPresentations'));
        }

        if(this.get('jesusPresentations') === undefined || this.get('jesusPresentations') === "" || this.get('jesusPresentations') === null) {
            jesusPresentations = 0;
        } else {
            jesusPresentations = parseInt(this.get('jesusPresentations'));
        }

        if(this.get('openAirPresentations') === undefined || this.get('openAirPresentations') === "" || this.get('openAirPresentations') === null) {
            openAirPresentations = 0;
        } else {
            openAirPresentations = parseInt(this.get('openAirPresentations'));
        }

        if(this.get('mobilePresentations') === undefined || this.get('mobilePresentations') === "" || this.get('mobilePresentations') === null) {
            mobilePresentations = 0;
        } else {
            mobilePresentations = parseInt(this.get('mobilePresentations'));
        }
        
        if(this.get('doorPresentations') === undefined || this.get('doorPresentations') === "" || this.get('doorPresentations') === null) {
            doorPresentations = 0;
        } else {
            doorPresentations = parseInt(this.get('doorPresentations'));
        }

        if(this.get('morePresentations') === undefined || this.get('morePresentations') === "" || this.get('morePresentations') === null) {
            morePresentations = 0;
        } else {
            morePresentations = parseInt(this.get('morePresentations'));
        }

        totalPresentations =  bedsidePresentations +  playroomPresentations + jesusPresentations + openAirPresentations + mobilePresentations + doorPresentations + morePresentations;

		return this.set('totalPresentations', totalPresentations);

    }.observes('bedsidePresentations', 'playroomPresentations', 'jesusPresentations', 'openAirPresentations', 'mobilePresentations', 'doorPresentations', 'morePresentations'),

    peopleTotalFunction: function() {
        var peopleBedside, peoplePlayroom, peopleJesus, peopleOpenAir, peopleMobile, peopleDoor, peopleMore, peopleTotal;

        if(this.get('peopleBedside') === undefined || this.get('peopleBedside') === "" || this.get('peopleBedside') === null) {
            peopleBedside = 0;
        } else {
            peopleBedside = parseInt(this.get('peopleBedside'));
        }

        if(this.get('peoplePlayroom') === undefined || this.get('peoplePlayroom') === "" || this.get('peoplePlayroom') === null) {
            peoplePlayroom = 0;
        } else {
            peoplePlayroom = parseInt(this.get('peoplePlayroom'));
        }

        if(this.get('peopleJesus') === undefined || this.get('peopleJesus') === "" || this.get('peopleJesus') === null) {
            peopleJesus = 0;
        } else {
            peopleJesus = parseInt(this.get('peopleJesus'));
        }

        if(this.get('peopleOpenAir') === undefined || this.get('peopleOpenAir') === "" || this.get('peopleOpenAir') === null) {
            peopleOpenAir = 0;
        } else {
            peopleOpenAir = parseInt(this.get('peopleOpenAir'));
        }

        if(this.get('peopleMobile') === undefined || this.get('peopleMobile') === "" || this.get('peopleMobile') === null) {
            peopleMobile = 0;
        } else {
            peopleMobile = parseInt(this.get('peopleMobile'));
        }
        
        if(this.get('peopleDoor') === undefined || this.get('peopleDoor') === "" || this.get('peopleDoor') === null) {
            peopleDoor = 0;
        } else {
            peopleDoor = parseInt(this.get('peopleDoor'));
        }

        if(this.get('peopleMore') === undefined || this.get('peopleMore') === "" || this.get('peopleMore') === null) {
            peopleMore = 0;
        } else {
            peopleMore = parseInt(this.get('peopleMore'));
        }

        peopleTotal = peopleBedside + peoplePlayroom + peopleJesus + peopleOpenAir + peopleMobile+ peopleDoor + peopleMore;
		
		return this.set('peopleTotal', peopleTotal);

    }.observes('peopleBedside', 'peoplePlayroom', 'peopleJesus', 'peopleOpenAir', 'peopleMobile', 'peopleDoor', 'peopleMore'),

    bibleTotalFunction: function() {
        var bibleBedside, biblePlayroom, bibleJesus, bibleOpenAir, bibleMobile, bibleDoor, bibleMore, bibleTotal;

        if(this.get('bibleBedside') === undefined || this.get('bibleBedside') === "" || this.get('bibleBedside') === null) {
            bibleBedside = 0;
        } else {
            bibleBedside = parseInt(this.get('bibleBedside'));
        }

        if(this.get('biblePlayroom') === undefined || this.get('biblePlayroom') === "" || this.get('biblePlayroom') === null) {
            biblePlayroom = 0;
        } else {
            biblePlayroom = parseInt(this.get('biblePlayroom'));
        }

        if(this.get('bibleJesus') === undefined || this.get('bibleJesus') === "" || this.get('bibleJesus') === null) {
            bibleJesus = 0;
        } else {
            bibleJesus = parseInt(this.get('bibleJesus'));
        }

        if(this.get('bibleOpenAir') === undefined || this.get('bibleOpenAir') === "" || this.get('bibleOpenAir') === null) {
            bibleOpenAir = 0;
        } else {
            bibleOpenAir = parseInt(this.get('bibleOpenAir'));
        }

        if(this.get('bibleMobile') === undefined || this.get('bibleMobile') === "" || this.get('bibleMobile') === null) {
            bibleMobile = 0;
        } else {
            bibleMobile = parseInt(this.get('bibleMobile'));
        }
        
        if(this.get('bibleDoor') === undefined || this.get('bibleDoor') === "" || this.get('bibleDoor') === null) {
            bibleDoor = 0;
        } else {
            bibleDoor = parseInt(this.get('bibleDoor'));
        }

        if(this.get('bibleMore') === undefined || this.get('bibleMore') === "" || this.get('bibleMore') === null) {
            bibleMore = 0;
        } else {
            bibleMore = parseInt(this.get('bibleMore'));
        }

		bibleTotal = bibleBedside + biblePlayroom + bibleJesus + bibleOpenAir + bibleMobile + bibleDoor + bibleMore;

		return this.set('bibleTotal', bibleTotal);
		
    }.observes('bibleBedside', 'biblePlayroom', 'bibleJesus', 'bibleOpenAir', 'bibleMobile', 'bibleDoor', 'bibleMore'),
    
    salvationTotalFunction: function() {
        var salvationBedside, salvationPlayroom, salvationJesus, salvationOpenAir, salvationMobile, salvationDoor, salvationMore, salvationTotal;

        if(this.get('salvationBedside') === undefined) {
            salvationBedside = 0;
        } else {
            salvationBedside = parseInt(this.get('salvationBedside'));
        }
        if(this.get('salvationPlayroom') === undefined) {
            salvationPlayroom = 0;
        } else {
            salvationPlayroom = parseInt(this.get('salvationPlayroom'));
        }
        if(this.get('salvationJesus') === undefined) {
            salvationJesus = 0;
        } else {
            salvationJesus = parseInt(this.get('salvationJesus'));
        }
        if(this.get('salvationOpenAir') === undefined) {
            salvationOpenAir = 0;
        } else {
            salvationOpenAir = parseInt(this.get('salvationOpenAir'));
        }
        if(this.get('salvationMobile') === undefined) {
            salvationMobile = 0;
        } else {
            salvationMobile = parseInt(this.get('salvationMobile'));
        }
        if(this.get('salvationDoor') === undefined) {
            salvationDoor = 0;
        } else {
            salvationDoor = parseInt(this.get('salvationDoor'));
        }
        if(this.get('salvationMore') === undefined) {
            salvationMore = 0;
        } else {
            salvationMore = parseInt(this.get('salvationMore'));
        }

        salvationTotal = salvationBedside + salvationPlayroom + salvationJesus + salvationOpenAir + salvationMobile + salvationDoor + salvationMore;
		
		return this.set('salvationTotal', salvationTotal);
        
    }.observes('salvationBedside', 'salvationPlayroom', 'salvationJesus', 'salvationOpenAir', 'salvationMobile', 'salvationDoor', 'salvationMore'),
    
    recommitmentTotalFunction: function() {
        var recommitmentBedside, recommitmentPlayroom, recommitmentJesus, recommitmentOpenAir, recommitmentMobile, recommitmentDoor, recommitmentMore, recommitmentTotal;

        if(this.get('recommitmentBedside') === undefined) {
            recommitmentBedside = 0;
        } else {
            recommitmentBedside = parseInt(this.get('recommitmentBedside'));
        }

        if(this.get('recommitmentPlayroom') === undefined) {
            recommitmentPlayroom = 0;
        } else {
            recommitmentPlayroom = parseInt(this.get('recommitmentPlayroom'));
        }

        if(this.get('recommitmentJesus') === undefined) {
            recommitmentJesus = 0;
        } else {
            recommitmentJesus = parseInt(this.get('recommitmentJesus'));
        }

        if(this.get('recommitmentOpenAir') === undefined) {
            recommitmentOpenAir = 0;
        } else {
            recommitmentOpenAir = parseInt(this.get('recommitmentOpenAir'));
        }

        if(this.get('recommitmentMobile') === undefined) {
            recommitmentMobile = 0;
        } else {
            recommitmentMobile = parseInt(this.get('recommitmentMobile'));
        }
        
        if(this.get('recommitmentDoor') === undefined) {
            recommitmentDoor = 0;
        } else {
            recommitmentDoor = parseInt(this.get('recommitmentDoor'));
        }

        if(this.get('recommitmentMore') === undefined) {
            recommitmentMore = 0;
        } else {
            recommitmentMore = parseInt(this.get('recommitmentMore'));
        }

        recommitmentTotal = recommitmentBedside + recommitmentPlayroom + recommitmentJesus + recommitmentOpenAir + recommitmentMobile + recommitmentDoor + recommitmentMore;
		
		return this.set('recommitmentTotal', recommitmentTotal);

    }.observes('recommitmentBedside', 'recommitmentPlayroom', 'recommitmentJesus', 'recommitmentOpenAir', 'recommitmentMobile', 'recommitmentDoor', 'recommitmentMore'),

    filterSummaryNumbers(activity, declaration) {
        var believers = this.get('believers');
        var filteredList;
        var counter = 0;
        
        filteredList = believers.filter(function(believer) {
            return believer.get('presentActivity').indexOf(activity) !== -1 && believer.get('declarationType').indexOf(declaration) !== -1;
        });
        counter = filteredList.length;
        
        return counter;
    },
    //salvation totals
    salvationBedsideFunction: function() {
		var num;
		num = this.filterSummaryNumbers('Bedside Evangelism', 'New Believer');
		this.set('salvationBedside', num);
    }.observes('believers.@each'),
    
    salvationPlayroomFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Playroom Presentation', 'New Believer');
		this.set('salvationPlayroom', num);
    }.observes('believers.@each'),
    
    salvationJesusFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Jesus Film', 'New Believer');
		this.set('salvationJesus', num);
    }.observes('believers.@each'),
    
    salvationOpenAirFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Open Air Meeting', 'New Believer');
		this.set('salvationOpenAir', num);
    }.observes('believers.@each'),
    
    salvationMobileFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Mobile Clinic Outreach', 'New Believer');
		this.set('salvationMobile', num);
    }.observes('believers.@each'),
    
    salvationDoorFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Door to Door Evangelism', 'New Believer');
		this.set('salvationDoor', num);
    }.observes('believers.@each'),
    
    salvationMoreFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Other Opportunities', 'New Believer');
		this.set('salvationMore', num);
    }.observes('believers.@each'),
    
    //recommitment totals
    recommitmentBedsideFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Bedside Evangelism', 'Recommitment');
		this.set('recommitmentBedside', num);
    }.observes('believers.@each'),
    
    recommitmentPlayroomFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Playroom Presentation', 'Recommitment');
		this.set('recommitmentPlayroom', num);
    }.observes('believers.@each'),
    
    recommitmentJesusFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Jesus Film', 'Recommitment');
		this.set('recommitmentJesus', num);
    }.observes('believers.@each'),
    
    recommitmentOpenAirFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Open Air Meeting', 'Recommitment');
		this.set('recommitmentOpenAir', num);
    }.observes('believers.@each'),
    
    recommitmentMobileFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Mobile Clinic Outreach', 'Recommitment');
		this.set('recommitmentMobile', num);
    }.observes('believers.@each'),
    
    recommitmentDoorFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Door to Door Evangelism', 'Recommitment');
		this.set('recommitmentDoor', num);
    }.observes('believers.@each'),
    
    recommitmentMoreFunction: function() {
		var num;
        num = this.filterSummaryNumbers('Other Opportunities', 'Recommitment');
		this.set('recommitmentMore', num);
    }.observes('believers.@each'),

    // Filter function for the believers section
    searchTerm: '',

    filteredContent: function() {
        var believer = this.get('believers');
        var search = this.get('searchTerm').toLowerCase();
        if(this.searchTerm === '') {
            return believer.filter(function(person) {
              return person.get('believerName');
            });
        } else {
            return believer.filter(function(person) {
                return person.get('believerName').toLowerCase().indexOf(search) !== -1;
            });
        }
    }.property('believers', 'searchTerm', 'content.@each'),

    actions: {
        // These are here until I can find a more efficient way to do it.
        // They change the active classes to show and hide the respective tabs
        additionalInformationTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#additionalInformation').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(4)').addClass('active');
        },
        eventsTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#events').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(2)').addClass('active');
        },
        faithDeclarationsTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#faithDeclarations').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(3)').addClass('active');
        },
        hospitalTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#hospital').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(1)').addClass('active');
        },
        summaryTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#summary').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(5)').addClass('active');
        },

        // ======= Function to move onto the next tab ========== //
        nextMinistryTab: function () {
          if ($("#submit").hasClass("active")) {
            return;
          }
          $('.tab-pane.active').removeClass('active').next('.tab-pane').addClass('active');
          $('ul.nav li.active').removeClass('active').next('li').addClass('active');
        },

        // ======= Function to go back to prveious tab ========= //
        prevMinistryTab: function () {
          if ($("#hospital").hasClass("active")) {
            return;
          }
          $('.tab-pane.active').removeClass('active').prev('.tab-pane').addClass('active');
          $('ul.nav li.active').removeClass('active').prev('li').addClass('active');
        },
        showCurrentBelievers: function() {
          $('.showHideBelievers').show(500);
          $('.showCurrentBelievers').hide();
          $('.hideCurrentBelievers').show();// Function generated to show and hide the
        },                                  // current believers that are within
        hideCurrentBelievers: function() {  // the database of the system.
          $('.showHideBelievers').hide(500);
          $('.hideCurrentBelievers').hide();
          $('.showCurrentBelievers').show();
        },

        showBeliever: function(believer) {
          if (Ember.isEmpty(believer)) {
              believer = this.store.createRecord('new-believer');
          }
          this.send('openModal', 'ministry.add-believer', believer);
        },

        addBeliever: function(newBeliever) {
          var believers = this.getWithDefault('believers', []);
          believers.addObject(newBeliever);
          this.send('update', true);
          this.send('closeModal');
          this.displayAlert('Believer Added', 'The believer has been added.');
        },

        editBeliever: function() {
          this.send('update', true);
          this.send('closeModal');
          this.displayAlert('Believer Updated', 'The believer has been updated.');
        },

//         deleteBeliever: function(model) {
//             var believer = model.get('believerToDelete');
//             var believers = this.get('believers');
//             believers.removeObject(believer);
//             this.set('believers', believers);
//             this.send('update', true);
//             this.send('closeModal');
//         },

        //Save Report
        updateReport: function() {
            this.get('model').save().then(function() {
                this.displayAlert('Report Saved', 'The report has been saved.');
            }.bind(this));
        },

        //Submit Report
        submitReport: function() {
            this.set('reportArchived', true);
            console.log(this.get('reportArchived'));
            this.get('model').save().then(function() {
                this.displayAlert('Report Submitted', 'The report has been submitted.');
                window.location.href = "#/ministry";
            }.bind(this));
        },

        //Add community event
        addCommunity: function(newCommunity) {
          var commEvents = this.getWithDefault('commEvents', []);
          commEvents.addObject(newCommunity);
          this.send('update', true);
          this.send('closeModal');

        },

        //Edit community event
        editCommunity: function(communityToEdit) {
            if (Ember.isEmpty(communityToEdit)) {
                communityToEdit = this.store.createRecord('community-event', {date:this.get('reportDate')});
            }
			communityToEdit.set('reportDate', this.get('reportDate'));
            this.send('openModal', 'ministry.add-community', communityToEdit);
        },

        //Add Leadership Event
        addLeadership: function(newLeadership) {
          var leadEvents = this.getWithDefault('leadEvents', []);
          leadEvents.addObject(newLeadership);
          this.send('update', true);
          this.send('closeModal');
        },

        //Edit Leadership Event
        editLeadership: function(leadershipToEdit) {
            if (Ember.isEmpty(leadershipToEdit)) {
                leadershipToEdit = this.store.createRecord('leadership-event', {date:this.get('reportDate')});
            }
			leadershipToEdit.set('reportDate', this.get('reportDate'));
            this.send('openModal', 'ministry.add-leadership', leadershipToEdit);
        },

        //Add Participant of Leadership Event
        addLeadershipParticipant: function(newParticipant) {
          //var leadEvent = this.find(newParticipant.get('leadershipEvent'));
          //var participants = leadEvent.getWithDefault('participants', []);
          var participants = this.getWithDefault('leadParticipants', []);
          participants.addObject(newParticipant);
          this.send('update', true);
          this.send('closeModal');
        },

        //Making Leadership Event Participant
        createParticipant: function(leadershipToConnect) {
            var participant = this.store.createRecord('leadership-participant');
            var participants = leadershipToConnect.getWithDefault('participants',[]);
            participants.addObject(participant);
            this.send('update', true);
            //participants.set('leadershipEvent',leadershipToConnect);
            this.send('openModal', 'ministry.add-leadership-participant', participant);
        },

        //Edit a Participant of Leadership Event
        editParticipant: function(participantToEdit) {
            if (Ember.isEmpty(participantToEdit)) {
                participantToEdit = this.store.createRecord('leadership-participant');
            }
            this.send('openModal', 'ministry.add-leadership-participant', participantToEdit);
        },
        
		//delete Events/New Believer	
		showDeleteCommEvent: function(commEvents) {
           	this.send('openModal', 'ministry.delete-comm-event', commEvents);
    	},
	
		showDeleteLeadEvent: function(leadEvents) {
           	this.send('openModal', 'ministry.delete-lead-event', leadEvents);
    	},
		
		showDeleteNewBeliever: function(believers) {
           	this.send('openModal', 'ministry.delete-new-believer', believers);
    	},
		
		commEventDeleted: function(deletedCommEvent) {
            var commEvent = this.get('commEvents');
            commEvent.removeObject(deletedCommEvent);
            this.send('closeModal');
			this.send('update', true);
        },
		
		leadEventDeleted: function(deletedLeadEvent) {
            var leadEvent = this.get('leadEvents');
            leadEvent.removeObject(deletedLeadEvent);
            this.send('closeModal');
			this.send('update', true);
        },
		
		newBelieverDeleted: function(deletedNewBeliever) {
            var believer = this.get('believers');
            believer.removeObject(deletedNewBeliever);
            this.send('closeModal');
			this.send('update', true);
        }
    }
});
