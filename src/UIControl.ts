class UIControl {

	public visible: boolean = true;
	public label: string = '';

	constructor(public attribute: AttributeValue) {

	}

	getAttribute() {
		return this.attribute;
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
}