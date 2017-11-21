/// <reference path="Collection.ts" />
class AttributeCollection extends Collection<AttributeValue>{

	set (attributeName:string, attribute:AttributeValue=new AttributeValue(attributeName)){
		return super.set(attributeName,attribute);
	}

}
