class UISection {

	constructor(private tab:UITab, public name?: string) {
	}

	getName() {
		return this.name;
	}

	get controls(){
		return this.tab.ui.controls.get(x=>x.section==this);
	}
}
