class UITab{
    public sections: UISectionCollection;

    constructor(private _ui:UI){
        this.sections = new UISectionCollection(this);
	}
	
	get ui(){
		return this._ui;
	}
}
