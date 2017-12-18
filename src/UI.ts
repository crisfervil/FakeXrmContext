class UI {

	public tabs: UITabCollection;
	private attributes: AttributeCollection;
	private _controls: UIControlCollection;

	constructor(private _page: Page) {
		this._controls = new UIControlCollection();
		this.tabs = new UITabCollection();
	}

	// https://msdn.microsoft.com/en-us/library/gg327828.aspx#BKMK_getFormType
	public formType: FormTypes = FormTypes.Undefined;

	getFormType(): FormTypes {
		return this.formType;
	}

	get controls(): UIControlCollection {
		return this._controls;
	}
}