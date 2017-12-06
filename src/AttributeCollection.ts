/// <reference path="Collection.ts" />
class AttributeCollection extends Collection<AttributeValue>{

	constructor(private _entity:CRMEntity){
		super();
	}

	add (attributeName:string, attribute:AttributeValue=new AttributeValue(this._entity,attributeName)){
		return super.add(attributeName,attribute);
	}

}
