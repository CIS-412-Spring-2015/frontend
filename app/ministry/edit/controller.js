import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import Ember from 'ember';
import GenderList from 'hospitalrun/mixins/gender-list';
import NewBelieverInfo from 'hospitalrun/mixins/new-believer-info';
export default AbstractEditController.extend(GenderList, NewBelieverInfo, {

    showPreview: false,

    submitPage: false,

    //Function sets default variables for new report
    reportDateChanged: function() {
        
        //Initialize report data
        if (Ember.isEmpty(this.get('reportDate'))) {
            this.setProperties({
                'reportDate': new Date(),
                'reportArchived': false,
                'hospitalReportValidation': false,
                'eventsReportValidation': false,
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
        
    }.observes(/* list of variables */),
    
    //Function to set Faith Delaration tab to valid
    setFaithDelcarationsReportValidation: function() {
        
    }.observes(/* list of variables */),
    
    //Function to set Additional Info tab to valid
    setAdditionalInformationReportValidation: function() {
        
    }.observes(/* list of variables */),
    
    //Function to set Summary tab validation
    setSummaryReportValidation: function() {
        if (this.get('peopleBedside') && this.get('peoplePlayroom') && this.get('peopleJesus') && this.get('peopleOpenAir') && this.get('peopleMobile') &&  this.get('peopleMore') && this.get('bibleBedside') && this.get('biblePlayroom') && this.get('bibleJesus') && this.get('bibleOpenAir') && this.get('bibleMobile') && this.get('bibleMore')) {
            this.set('summaryReportValidation', true);
        } else {
            this.set('summaryReportValidation', false);   
        }
        
    }.observes('peopleBedside', 'peoplePlayroom', 'peopleJesus', 'peopleOpenAir', 'peopleMobile', 'peopleMore', 'bibleBedside', 'biblePlayroom', 'bibleJesus', 'bibleeOpenAir', 'bibleMobile', 'bibleMore'),


    //summary page totals
    peopleReachedTotals: function() {
        var peopleBedside, peoplePlayroom, peopleJesus, peopleOpenAir, peopleMobile, peopleMore, peopleTotal;

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

        if(this.get('peopleMore') === undefined || this.get('peopleMore') === "" || this.get('peopleMore') === null) {
            peopleMore = 0;
        } else {
            peopleMore = parseInt(this.get('peopleMore'));
        }

        peopleTotal = peopleBedside + peoplePlayroom + peopleJesus + peopleOpenAir + peopleMobile + peopleMore;

        this.set('peopleTotal', peopleTotal);

    }.observes('peopleBedside', 'peoplePlayroom', 'peopleJesus', 'peopleOpenAir', 'peopleMobile', 'peopleMore'),

    bibleReachedTotals: function() {
        var bibleBedside, biblePlayroom, bibleJesus, bibleOpenAir, bibleMobile, bibleMore, bibleTotal;

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

        if(this.get('bibleMore') === undefined || this.get('bibleMore') === "" || this.get('bibleMore') === null) {
            bibleMore = 0;
        } else {
            bibleMore = parseInt(this.get('bibleMore'));
        }

        bibleTotal = bibleBedside + biblePlayroom + bibleJesus + bibleOpenAir + bibleMobile + bibleMore;

        this.set('bibleTotal', bibleTotal);

    }.observes('bibleBedside', 'biblePlayroom', 'bibleJesus', 'bibleOpenAir', 'bibleMobile', 'bibleMore'),
    
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
        /*demographicsTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#demographics').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(6)').addClass('active');
        },*/
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
        // hideNextPrevious: function () {
        //   this.set('submitPage', true);
        //   $('.tab-pane.active').removeClass('active');
        //   $('#submit').addClass('active');
        //   $('ul.nav li.active').removeClass('active');
        //   $('ul.nav li:nth-child(10)').addClass('active');
        // },
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

		// Function generated to show and hide the Christianity Explored content.
//        showChristianityExplored: function() {
//            $('.showHideChristianityExplored').show(500);
//            $('.showChristianityExplored').hide();
//            $('.hideChristianityExplored').show();
//        },

//        hideChristianityExplored: function() {
//            $('.showHideChristianityExplored').hide(500);
//            $('.hideChristianityExplored').hide();
//            $('.showChristianityExplored').show();
//        },

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

        // deleteBeliever: function(model) {
        //     var believer = model.get('believerToDelete');
        //     var believers = this.get('believers');
        //     believers.removeObject(believer);
        //     this.set('believers', believers);
        //     this.send('update', true);
        //     this.send('closeModal');
        // },

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
                communityToEdit = this.store.createRecord('community-event');
            }
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
                leadershipToEdit = this.store.createRecord('leadership-event');
            }
            this.send('openModal', 'ministry.add-leadership', leadershipToEdit);
        },
        
        //Add Participant of Leadership Event
        addLeadershipParticipant: function(newParticipant) {
          //var leadEvent = this.find(newParticipant.get('leadershipEvent'));
          //var participants = leadEvent.getWithDefault('participants', []);
          var participants = this.getWithDefault('participants', []);
          participants.addObject(newParticipant);
          this.send('update', true);
          this.send('closeModal');
        },
        
        //Making Leadership Event Participant
        createParticipant: function(leadershipToConnect) {
            var participants = this.store.createRecord('leadership-participant');
            participants.set('leadershipEvent',leadershipToConnect);
            this.send('openModal', 'ministry.add-leadership-participant', participants);
        },
        
        //Edit a Participant of Leadership Event
        editParticipant: function(participantToEdit) {
            if (Ember.isEmpty(participantToEdit)) {
                participantToEdit = this.store.createRecord('leadership-participant');
            }
            this.send('openModal', 'ministry.add-leadership-participant', participantToEdit);
        },

        showDeleteCommunity: function(commEvent){
                this.send('openModal', 'dialog', Ember.Object.create({
                confirmAction: 'deleteCommEvent',
                title: 'Delete Community Event',
                message: 'Are you sure you want to delete this event?',
                commEventToDelete: commEvent,
                updateButtonAction: 'confirm',
                updateButtonText: 'Ok'
            }));
        },

        deleteCommEvent: function(model) {
            var commEvent = model.get('commEventToDelete');
            var commEvents = this.get('commEvents');
            commEvents.removeObject(commEvent);
            this.set('commEvents', commEvents);
            this.send('update', true);
        },

        showDeleteLeadership: function(leadEvent){
                this.send('openModal', 'dialog', Ember.Object.create({
                confirmAction: 'deleteLeadEvent',
                title: 'Delete Leadership Event',
                message: 'Are you sure you want to delete this event?',
                leadEventToDelete: leadEvent,
                updateButtonAction: 'confirm',
                updateButtonText: 'Ok'
            }));
        },

        deleteLeadEvent: function(model) {
            var leadEvent = model.get('leadEventToDelete');
            var leadEvents = this.get('leadEvents');
            leadEvents.removeObject(leadEvent);
            this.set('leadEvents', leadEvents);
            this.send('update', true);
        }
    }
});
