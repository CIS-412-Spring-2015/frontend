import AbstractEditRoute from 'hospitalrun/routes/abstract-edit-route';
export default AbstractEditRoute.extend({
    modelName: 'ministry',
    editTitle: 'Edit Monthly Report - {{currentMonth}}',
    newTitle: 'New Report - {{currentMonth}}'
    });