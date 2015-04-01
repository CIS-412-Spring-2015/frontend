import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';
import Ember from "ember";

export default AbstractModel.extend(ReportDate, {
    // Report Metadata //
    reportDate: DS.attr('date'),
    reportArchived: DS.attr('boolean'),
    
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
        var reportDate = this.get('reportDate');
        return moment(reportDate).format('MMMM YYYY');
    }.property('reportDate')

});
