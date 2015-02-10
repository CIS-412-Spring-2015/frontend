import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
    addCapability: '',
    additionalModels: [{ 

    }],
    moduleName: 'ministry',
    newButtonText: '+ new ministry event',
    sectionTitle: 'Ministry',
    subActions: [{
        text: 'Demographics',
        linkTo: 'ministry.demographics'
    }, {
        text: 'Hospital',
        linkTo: 'ministry.hospital'
    }, {
        text: 'Leadership',
        linkTo: 'ministry.leadership'
    }, {
        text: 'Community',
        linkTo: 'ministry.community'
    }, {
        text: 'Christianity Explored',
        linkTo: 'ministry.christianityExplored'
    }, {
        text: 'Faith Declarations',
        linkTo: 'ministry.faithDeclarations'
    }, {
        text: 'Additional Information',
        linkTo: 'ministry.additionalInformation'
    }]
});