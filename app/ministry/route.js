import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
export default AbstractModuleRoute.extend( {
    addCapability: 'add_ministry_report',
    additionalModels: [],
    moduleName: 'ministry',
    newButtonText: '+ new report',
    sectionTitle: 'Ministry',
    subActions: [{
        text: 'In Progress',
        linkTo: 'ministry.report'
    }, {
        text: 'Report Archive',
        linkTo: 'ministry.index'
    }]
});