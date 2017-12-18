class Page {

	private _ui: UI;
	private _data: CRMData;
	private _context: CRMContext;

	constructor() {
		this._ui = new UI(this);
		this._data = new CRMData(this);
		this._context = new CRMContext();
	}

	get context() {
		return this._context;
	}

	get data() {
		return this._data;
	}

	get ui() {
		return this._ui;
	}

	getControl(controlName: string) {
		return this._ui.controls.get(controlName);
	}

	addControl(controlName: string, attributeName: string, tabName: string = "tab1", sectionName: string = "section1") {
		var tab1 = this._ui.tabs.get(tabName);
		if (!tab1) tab1 = this._ui.tabs.add(tabName, new UITab(tabName, this._ui));
		var sect1 = tab1.sections.get(sectionName);
		if (!sect1) sect1 = tab1.sections.add(sectionName, new UISection(tab1, sectionName));
		this._ui.controls.add(controlName, new UIControl(controlName, attributeName, sectionName, this._ui));
	}

	getAttribute(attributeName: string) {
		return this._data._entity.attributes.get(attributeName);
	}

	addAttribute(attributeName: string) {
		var attr = this._data._entity.attributes.add(attributeName, new AttributeValue(this._data._entity, attributeName));
		this.addControl(attributeName, attributeName);
		return attr;
	}
}
