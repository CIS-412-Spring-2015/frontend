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



//    {
//        text: 'Demographics',
//        linkTo: 'ministry.demographics'
//    }, {
//        text: 'Hospital',
//        linkTo: 'ministry.hospital'
//    }, {
//        text: 'Leadership',
//        linkTo: 'ministry.leadership'
//    }, {
//        text: 'Community',
//        linkTo: 'ministry.community'
//    }, {
//        text: 'Christianity Explored',
//        linkTo: 'ministry.christianityExplored'
//    }, {
//        text: 'Faith Declarations',
//        linkTo: 'ministry.faithDeclarations'
//    }, {
//        text: 'Additional Information',
//        linkTo: 'ministry.additionalInformation'
//    }, {
//        text: 'Summary',
//        linkTo: 'ministry.summary'
//    }