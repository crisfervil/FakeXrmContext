import {CRMEntity} from './CRMEntity';
import {CRMContext} from './CRMContext';
import {AttributeCollection} from './AttributeCollection';

export class CRMData {
	
	public entity : CRMEntity;
	public context : CRMContext;

	constructor(attributes:AttributeCollection){
		this.entity=new CRMEntity(attributes);
		this.context = new CRMContext();
	}
}