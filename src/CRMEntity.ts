class CRMEntity {
    private _attributes:AttributeCollection;

	public id:string;
    public entityName:string = '';

    constructor(private _data:CRMData) {
		this._attributes = new AttributeCollection(this);
    }

	get data(){
		return this._data;
	}

	get attributes(){
		return this._attributes;
	}

    save(){
        console.log('saved');
    }

    getId(){
        return this.id;
    }

    getEntityName(){
        return this.entityName;
    }
}
