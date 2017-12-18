class UITab{
    private _sections: UISectionCollection;

    constructor(private _name:string, private _ui:UI){
        this._sections = new UISectionCollection();
	}

	get sections(){
		return this._sections;
	}
	
	getName(){
		return this._name;
	}

	get ui(){
		return this._ui;
	}
}
