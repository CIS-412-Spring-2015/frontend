import AbstractModel from "hospitalrun/models/abstract";
import ReportDate from 'hospitalrun/mixins/dob-days';

export default AbstractModel.extend(ReportDate, {
    
//    dateOfBirth: DS.attr('date'),
//    
//    age: function() {
//        var reportDate = this.get('reportDate'),
//            newReportDate = new Date();
//        if (!Ember.isEmpty(reportDate)) {
//            return this.convertDOBToText(reportDate);
//        } else {
//            return this.convertDOBToText(newReportDate);
//        }
//    }.property('reportDate')
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