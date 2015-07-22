import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
export default AbstractModuleRoute.extend( {
    addCapability: 'add_ministry_report',
    additionalModels: [{ 
        name: 'communityEventType',
		findArgs: ['lookup','community_event_type']
    }],
    moduleName: 'ministry',
    newButtonText: '+ new report',
    sectionTitle: 'Ministry',
    subActions: [{
        text: 'In Progress',
        linkTo: 'ministry.index'
    }, {
        text: 'Report Archive',
        linkTo: 'ministry.report'
    }]
});