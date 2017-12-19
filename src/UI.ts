class UI {

	private _tabs: UITabCollection;
	private _attributes: AttributeCollection;
	private _controls: UIControlCollection;
	// https://msdn.microsoft.com/en-us/library/gg327828.aspx#BKMK_getFormType
	private _formType: FormTypes = FormTypes.Undefined;

	constructor(private _page: Page) {
		this._controls = new UIControlCollection();
		this._tabs = new UITabCollection();
	}

	getFormType(): FormTypes {
		return this._formType;
	}

	setFormType(value: FormTypes) {
		this._formType = value;
	}

	get controls(): UIControlCollection {
		return this._controls;
	}

	get tabs(): UITabCollection {
		return this._tabs;
	}
}