class UIControl {

	// https://msdn.microsoft.com/en-us/library/gg334266.aspx

	public _visible: boolean = true;
	public _label: string = '';
	public _disabled: boolean = false;

	constructor(public name: string, private _attributeName:string, private _sectionName:string, private _ui:UI) {
	}

	get attribute(){
		return this._attributeName;
	}

	get section(){
		return this._sectionName;
	}

	getAttribute() {
		return this.name;
	}

	getLabel(): string {
		return this._label;
	}

	setLabel(label: string) {
		this._label = label;
	}

	getVisible() {
		return this._visible;
	}

	setVisible(visible: boolean) {
		this._visible = visible;
	}

	getDisabled(){
		return this._disabled;
	}
	setDisabled(disabled: boolean) {
		this._disabled = disabled;
	}
}