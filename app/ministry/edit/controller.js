import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import Ember from 'ember';
import GenderList from 'hospitalrun/mixins/gender-list';
import NewBelieverInfo from 'hospitalrun/mixins/new-believer-info';
export default AbstractEditController.extend(GenderList, NewBelieverInfo, {

    canBeSeen: false,

    showPreview: false,

    submitPage: false,

    //Function sets default variables for new report
    reportDateChanged: function() {

        if (Ember.isEmpty(this.get('reportDate'))) {
            this.set('reportDate', new Date());
            this.set('reportArchived', false);
        }

    }.observes('reportDate'),
    
    //summary page totals
    peopleReachedTotals: function() {
        var peopleBedside, peoplePlayroom, peopleJesus, peopleOpenAir, peopleMobile, peopleMore, peopleTotal;
        
        if(this.get('peopleBedside') === undefined || this.get('peopleBedside') === "") {
            peopleBedside = 0;
        } else {
            peopleBedside = parseInt(this.get('peopleBedside'));
        }
        
        if(this.get('peoplePlayroom') === undefined || this.get('peoplePlayroom') === "") {
            peoplePlayroom = 0;
        } else {
            peoplePlayroom = parseInt(this.get('peoplePlayroom'));
        }
        
        if(this.get('peopleJesus') === undefined || this.get('peopleJesus') === "") {
            peopleJesus = 0;
        } else {
            peopleJesus = parseInt(this.get('peopleJesus'));
        }
        
        if(this.get('peopleOpenAir') === undefined || this.get('peopleOpenAir') === "") {
            peopleOpenAir = 0;
        } else {
            peopleOpenAir = parseInt(this.get('peopleOpenAir'));
        }
        
        if(this.get('peopleMobile') === undefined || this.get('peopleMobile') === "") {
            peopleMobile = 0;
        } else {
            peopleMobile = parseInt(this.get('peopleMobile'));
        }
        
        if(this.get('peopleMore') === undefined || this.get('peopleMore') === "") {
            peopleMore = 0;
        } else {
            peopleMore = parseInt(this.get('peopleMore'));
        }
        
        peopleTotal = peopleBedside + peoplePlayroom + peopleJesus + peopleOpenAir + peopleMobile + peopleMore;
        
        this.set('peopleTotal', peopleTotal);
                    
    }.observes('peopleBedside', 'peoplePlayroom', 'peopleJesus', 'peopleOpenAir', 'peopleMobile', 'peopleMore'),
    
    bibleReachedTotals: function() {
        var bibleBedside, biblePlayroom, bibleJesus, bibleOpenAir, bibleMobile, bibleMore, bibleTotal;
        
        if(this.get('bibleBedside') === undefined || this.get('bibleBedside') === "") {
            bibleBedside = 0;
        } else {
            bibleBedside = parseInt(this.get('bibleBedside'));
        }
        
        if(this.get('biblePlayroom') === undefined || this.get('biblePlayroom') === "") {
            biblePlayroom = 0;
        } else {
            biblePlayroom = parseInt(this.get('biblePlayroom'));
        }
        
        if(this.get('bibleJesus') === undefined || this.get('bibleJesus') === "") {
            bibleJesus = 0;
        } else {
            bibleJesus = parseInt(this.get('bibleJesus'));
        }
        
        if(this.get('bibleOpenAir') === undefined || this.get('bibleOpenAir') === "") {
            bibleOpenAir = 0;
        } else {
            bibleOpenAir = parseInt(this.get('bibleOpenAir'));
        }
        
        if(this.get('bibleMobile') === undefined || this.get('bibleMobile') === "") {
            bibleMobile = 0;
        } else {
            bibleMobile = parseInt(this.get('bibleMobile'));
        }
        
        if(this.get('bibleMore') === undefined || this.get('bibleMore') === "") {
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

        // To show and hide the general information view within the faith declarations
        // tab at the moment. Will probably change in future.
        toggleGenInfo: function() {
          this.toggleProperty('canBeSeen');
        },

        showAddBeliever: function() {
          this.send('openModal', 'ministry.add-believer', {
            title: 'Add Believer',
            updateButtonText: 'Add',
            updateButtonAction: 'add',
            showUpdateButton: true,
          });
        },

        showEditBeliever: function(believer) {
          this.send('openModal', 'ministry.add-believer', {
            title: "Edit this believer's information",
            updateButtonText: 'Update',
            updateButtonAction: 'update',
            showUpdateButton: true,
            believerToEdit: believer,
          });
        },

        addBeliever: function(newBeliever) {
          var believers = this.getWithDefault('believers', []);
          believers.addObject(newBeliever);
          this.set('believers', believers);
          this.send('update', true);
          this.send('closeModal');
        },

        editBeliever: function(updatedBeliever) {
          // Add new info to believer
          var believers = this.getWithDefault('believers', []);
          believers.addObject(updatedBeliever);
          console.log(believers);
          this.set('believers', believers);
          // this.send('update', true);
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

        addCommunity: function(newCommunity) {
          var commEvents = this.getWithDefault('commEvents', []);
          commEvents.addObject(newCommunity);
          this.send('update', true);
          this.send('closeModal');

        },

        editCommunity: function(communityToEdit) {
            if (Ember.isEmpty(communityToEdit)) {
                communityToEdit = this.store.createRecord('community-event');
            }   
            this.send('openModal', 'ministry.add-community', communityToEdit);
        },
        
        addLeadership: function(newLeadership) {
          var leadEvents = this.getWithDefault('leadEvents', []);
          leadEvents.addObject(newLeadership);
          this.send('update', true);
          this.send('closeModal');
        },
        
        editLeadership: function(leadershipToEdit) {
            if (Ember.isEmpty(leadershipToEdit)) {
                leadershipToEdit = this.store.createRecord('leadership-event');
            }   
            this.send('openModal', 'ministry.add-leadership', leadershipToEdit);
        },
        
        addLeadershipParticipant: function(newParticipant) {
          var participants = this.getWithDefault('participants', []);
          participants.addObject(newParticipant);
          this.send('update', true);
          this.send('closeModal');
        },
        
        createParticipant: function(leadershipToConnect) {
            var participantToEdit = this.store.createRecord('leadership-participant');
            participantToEdit.set('leadershipEvent',leadershipToConnect);
            this.send('openModal', 'ministry.add-leadership-participant', participantToEdit);
        },
        
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
