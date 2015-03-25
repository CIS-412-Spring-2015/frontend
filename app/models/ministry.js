import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';
import Ember from "ember";

export default AbstractModel.extend(ReportDate, {

    reportDate: DS.attr('date'),
    //   Additional Info View    //
    ministryResults: DS.attr('string'),
    recommendationsNeeds: DS.attr('string'),
    otherSignificantItems: DS.attr('string'),

// Additional Info View Details (Celtson)//
    displayMinistryResults: function() {
      var ministryResults = this.get('ministryResults');
      if (!Ember.isEmpty(ministryResults)) {
          return ministryResults;
      } else {
        return null;
      }
    }.property('ministryResults'),

    displayRecommendationsNeeds: function() {
      var recommendationsNeeds = this.get('recommendationsNeeds');
      if (!Ember.isEmpty(recommendationsNeeds)) {
          return recommendationsNeeds;
      } else {
        return null;
      }
    }.property('recommendationsNeeds'),

    displayOtherSignificantItems: function() {
      var otherSignificantItems = this.get('otherSignificantItems');
      if (!Ember.isEmpty(otherSignificantItems)) {
          return otherSignificantItems;
      } else {
        return null;
      }
    }.property('otherSignificantItems'),
// end Additional Info View Details //

    displayReportDate: function() {
        var reportDate = this.get('reportDate'),
            newReportDate = new Date();
        if (!Ember.isEmpty(reportDate)) {
            return reportDate;
        } else {
            this.set('reportDate', newReportDate);
            return newReportDate;
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
