import {Page} from './Page';
import {CRMUtility} from './CRMUtility';


export class FakeXrmContext{
    public Page = new Page();
    public Utility = new CRMUtility();

    static init(parentObj:any){

        // This is to keep a reference of the Original Xrm object in case we are 
        // running the tests from CRM Server
        var _xrm = parentObj.Xrm;

        var xrm = new FakeXrmContext();

        // In case the Xrm namespace was already defined, means we are in "online" mode
        if(_xrm) xrm.Page.context = _xrm.Page.context;

        // Set the Xrm global object
        parentObj.Xrm = xrm;

        return xrm;
    }

    static setUrlDataParameter(value:string){
        var utils = new Utils();
        var newUrl = utils.updateURLParameter(window.location.href, 'data', value);
        if(window.history.pushState){
            window.history.pushState({path:newUrl},'',newUrl);
        }
        else {
            // Trick to make it work in IE9
            var updatedAlready = utils.getParameterByName('data',window.location.href);
            if(!updatedAlready){
                window.location.href = newUrl;
            }
        }
    }
}