import AbstractPagedController from 'hospitalrun/controllers/abstract-paged-controller';
import PouchAdapterUtils from "hospitalrun/mixins/pouch-adapter-utils";
import UserSession from "hospitalrun/mixins/user-session";
export default AbstractPagedController.extend(PouchAdapterUtils, UserSession,{
    addPermission: 'add_ministry_report',
    
    canAddReport: function() {        
        return this.currentUserCan('add_ministry_report');
    }.property(),
    
    updateCapability: 'add_ministry_report'
});