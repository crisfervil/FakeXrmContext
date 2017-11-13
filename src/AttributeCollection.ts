import {Collection} from './Collection';
import {AttributeValue} from './AttributeValue';

export class AttributeCollection extends Collection<AttributeValue>{

	set (attributeName:string, attribute:AttributeValue=new AttributeValue(attributeName)){
		return super.set(attributeName,attribute);
	}

}
