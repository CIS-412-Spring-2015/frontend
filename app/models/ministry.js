import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';
import Ember from "ember";

export default AbstractModel.extend(ReportDate, {
    // Report Metadata //
    reportDate: DS.attr('string'),
    reportArchived: DS.attr('boolean'),
    newReportDate: DS.attr('string'),
    
    //   Additional Info View    //
    ministryResults: DS.attr('string'),
    otherSignificantItems: DS.attr('string'),
    recommendationsNeeds: DS.attr('string'),

    //   Faith Declaration View  //
    // These are going to have to be directed to each believer//
    address: DS.attr('string'),
    address2: DS.attr('string'),
    address3: DS.attr('string'),
    address4: DS.attr('string'),
    age: DS.attr('string'),
    declarationType: DS.attr('string'),
    email: DS.attr('string'),
    firstName: DS.attr('string'),
    gender: DS.attr('string'),
    lastName: DS.attr('string'),
    phone: DS.attr('string'),
    presentActivity: DS.attr('string'),
    religiousAffiliation: DS.attr('string'),

// Additional Info View Details //
    displayMinistryResults: function() {
      var ministryResults = this.get('ministryResults');
      return (!Ember.isEmpty(ministryResults));
    }.property('ministryResults'),

    displayRecommendationsNeeds: function() {
      var recommendationsNeeds = this.get('recommendationsNeeds');
      return (!Ember.isEmpty(recommendationsNeeds));
    }.property('recommendationsNeeds'),

    displayOtherSignificantItems: function() {
      var otherSignificantItems = this.get('otherSignificantItems');
      return (!Ember.isEmpty(otherSignificantItems));
    }.property('otherSignificantItems'),
// end Additional Info View Details //

    displayReportDate: function() {
        var reportDate = this.get('reportDate'),
            newReportDate = new Date();
        if (!Ember.isEmpty(reportDate)) {
            return reportDate;
        } else {            
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNumber = newReportDate.getMonth(),
                reportYear = newReportDate.getFullYear();
            
            var monthAndYear = months[monthNumber] + " " + reportYear;
            
            this.set('reportDate', monthAndYear);
            this.set('reportArchived', false);
            return monthAndYear;
        }
    }.property('reportDate')

//    displayMinistryId: function() {
//        var id = this.get('id');
//        console.log(id);
//
//        return id;
//    }.property('id')
//    displayPatientId: function() {
//        var externalPatientId = this.get('externalPatientId'),
//            friendlyId = this.get('friendlyId'),
//            id = this.get('id');
//        if (!Ember.isEmpty(friendlyId)) {
//            return friendlyId;
//        } else {
//            return id;
//        }
//    }.property('id','friendlyId'),

//    reportDateChanged: function() {
//        var isNew = this.get('isNew'),
//            reportDate = this.get('reportDate'),
//            sectionDetails = {};
//        if (isNew) {
//            //sectionDetails.currentScreenTitle = 'New Report for %@'.fmt(_dateFormat(reportDate));
//        } else {
//            //sectionDetails.currentScreenTitle = 'Report for %@'.fmt(_dateFormat(reportDate));
//        }
//        this.send('setSectionHeader', sectionDetails);
//    }.observes('reportDate')

});
