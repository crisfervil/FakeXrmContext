class Page {

	private _ui: UI;
	private _data: CRMData;
	private _context: CRMContext;

	constructor() {
		this._ui = new UI(this);
		this._data = new CRMData(this);
		this._context = new CRMContext();
	}

	get context(){
		return this._context;
	}

	get data(){
		return this._data;
	}

	get ui(){
		return this._ui;
	}

	getControl(attributeName: string) {
		return this._ui.controls.get(attributeName);
	}
}
