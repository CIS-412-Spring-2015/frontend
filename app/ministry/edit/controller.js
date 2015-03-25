import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import GenderList from 'hospitalrun/mixins/gender-list';
export default AbstractEditController.extend(GenderList, {
  /* religiousAffiliation, presentActivity and declarationType are arrays that
     are accessed within the faith declaration tab to make sure the dropdowns
     are populated with these data. */
  religiousAffiliation: [
    'None',
    'Catholic',
    'Muslim',
    'Protestant',
    'Recommitment',
    'Other'
  ],

  presentActivity: [
      'Bedside Presentations',
      'Playroom Presentations',
      'Jesus Film',
      'Open Air Meetings',
      'Mobile Clinic Outreach',
      'Door to Door Evangelical',
      'Other'
  ],

  declarationType: [
      'New Believer',
      'Recommittment'
  ],

  canBeSeen: false,

  submitPage: false,

  actions: {
    // These are here until I can find a more efficient way to do it.
    // They change the active classes to show and hide the respective tabs
        aiTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#ai').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(8)').addClass('active');
        },
        ceTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#ce').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(5)').addClass('active');
        },
        communityTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#community').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(4)').addClass('active');
        },
        demographicsTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#demographics').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(7)').addClass('active');
        },
        fdTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#fd').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(6)').addClass('active');
        },
        leadershipTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#leadership').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(3)').addClass('active');
        },
        patientTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#patient').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(2)').addClass('active');
        },
        staffTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#staff').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(1)').addClass('active');
        },
        summaryTab: function () {
          this.set('submitPage', false);
          $('#submit').removeClass('active');
          $('#summary').addClass('active');
          $('ul.nav li.active').removeClass('active');
          $('ul.nav li:nth-child(9)').addClass('active');
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
          if ($("#staff").hasClass("active")) {
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
        // To show and hide the general information view within the faith declarations
        // tab at the moment. Will probably change in future.
        toggleGenInfo: function() {
          this.toggleProperty('canBeSeen');
        },
        //end above comment
        updateReport: function() {
            var updateModel = this.get('model');

            if (this.get('isNew')) {
                var newData = updateModel.getProperties('reportDate');

                updateModel.deleteRecord();
                updateModel = this.get('store').createRecord('ministry', newData);
                this.set('model', updateModel);
            }


            updateModel.save().then(function() {
                this.displayAlert('Report Saved', 'The report has been saved.');
            }.bind(this));
        }
  }

});
