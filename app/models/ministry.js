import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';
import Ember from "ember";

export default AbstractModel.extend(ReportDate, {
    reportDate: DS.attr('date'),
    reportMonth: DS.attr(''),
    reportYear: DS.attr(''),
    
    displayReportDate: function() {
        var reportDate = this.get('reportDate'),
            newReportDate = new Date();
        if (!Ember.isEmpty(reportDate)) {
            return reportDate;
        } else {
            this.set('reportDate', newReportDate);
            return newReportDate;
        }
    }.property('reportDate'),
    
    displayReportMonth: function() {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var reportDate = this.get('reportDate');
        var monthNumber = reportDate.getMonth();
        
        return months[monthNumber];
    }.property('reportMonth'),
    
    displayReportYear: function() {
        var reportDate = this.get('reportDate');
        return reportDate.getFullYear();
    }.property('reportYear')
    
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