class CRMData {
	
	public _entity : CRMEntity;

	constructor(private _page:Page){
		this._entity=new CRMEntity(this);
	}

	get entity(){
		return this._entity;
	}
	get page(){
		return this._page;
	}

}