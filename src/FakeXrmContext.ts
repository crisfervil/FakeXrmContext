class FakeXrmContext {
    public Page = new Page();
    public Utility = new CRMUtility();

    static init(parentObj:any){

        // This is to keep a reference of the Original Xrm object in case we are 
        // running the tests from the CRM Server
        var _xrm = parentObj.Xrm;

        var xrm = new FakeXrmContext();

        // In case the Xrm namespace was already defined, means we are in "online" mode
        if(_xrm) xrm.Page.context = _xrm.Page.context;

        // Set the Xrm global object
        parentObj.Xrm = xrm;

        return xrm;
    }
}