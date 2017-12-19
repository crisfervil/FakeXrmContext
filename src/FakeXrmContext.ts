class FakeXrmContext {

	constructor(window?:any){
		if(window){
			window.Xrm = this;
		}
	}

	// https://msdn.microsoft.com/en-us/library/gg328474.aspx#BKK_XrmPageObjects
    public Page = new Page();
    public Utility = new CRMUtility();
}