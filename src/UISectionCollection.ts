class UISectionCollection extends Collection<UISection>{
	
	constructor(private _tab:UITab){
		super();
	}
	
	add (sectionName:string, section:UISection=new UISection(this._tab, sectionName)){
		return super.add(sectionName,section);
	}
}