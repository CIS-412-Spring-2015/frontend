import Ember from 'ember';
export default Ember.Mixin.create({
	startOfReportMonth: function() {
		var reportDate = this.get('reportDate');
		return moment(reportDate).startOf('month').toDate();
	}.property('reportDate'),
	
	endOfReportMonth: function() {
		var reportDate = this.get('reportDate');
		return moment(reportDate).endOf('month').toDate();
	}.property('reportDate')
});