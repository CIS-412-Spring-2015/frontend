import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import Ember from 'ember';
import GenderList from 'hospitalrun/mixins/gender-list';
import NewBelieverInfo from 'hospitalrun/mixins/new-believer-info';
export default AbstractEditController.extend(GenderList, NewBelieverInfo, {

    canBeSeen: false,

    showPreview: false,

    submitPage: false,

    reportDateChanged: function() {
        var reportDate = moment(this.get('reportDate')).format('MMMM YYYY'),
            sectionDetails = {};

        if (Ember.isEmpty(this.get('reportDate'))) {
            this.set('reportDate', new Date());   
            this.set('reportArchived', false);
        }

        sectionDetails.currentScreenTitle = 'Edit Monthly Report For ' + reportDate;

        this.send('setSectionHeader', sectionDetails);    

        //Save changed reportDate
       // this.get('model').save();
    }.observes('reportDate'),

    actions: {
        // These are here until I can find a more efficient way to do it.
        // They change the active classes to show and hide the respective tabs
        aiTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#ai').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(4)').addClass('active');
        },
        demographicsTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#demographics').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(6)').addClass('active');
        },
        eventsTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#events').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(2)').addClass('active');
        },
        fdTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#fd').addClass('active');
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
		showChristianityExplored: function() {
			$('.showHideChristianityExplored').show(500);
			$('.showChristianityExplored').hide();
			$('.hideChristianityExplored').show();
        },
		
        hideChristianityExplored: function() {
			$('.showHideChristianityExplored').hide(500);
			$('.hideChristianityExplored').hide();
			$('.showChristianityExplored').show();
        },
		
        // To show and hide the general information view within the faith declarations
        // tab at the moment. Will probably change in future.
        toggleGenInfo: function() {
          this.toggleProperty('canBeSeen');
        },
        //end above comment

        //Toggle Preview
        togglePreview: function() {
          this.toggleProperty('showPreview');  
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
        }
    }
});
