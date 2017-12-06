class UIControl {

	public visible: boolean = true;
	public label: string = '';
	public disabled: boolean = false;

	constructor(public name: string, private _attribute:AttributeValue, private _section:UISection) {
	}

	get attribute(){
		return this._attribute;
	}

	get section(){
		return this._section;
	}

	getAttribute() {
		return this.name;
	}

	getLabel(): string {
		return this.label;
	}

	setLabel(label: string) {
		this.label = label;
	}

	getVisible() {
		return this.visible;
	}

	setVisible(visible: boolean) {
		this.visible = visible;
	}

	setDisabled(disabled: boolean) {
		this.disabled = disabled;
	}
}