import {CRMEntity} from './CRMEntity';
import {CRMContext} from './CRMContext';
import {AttributeCollection} from './AttributeCollection';

export class CRMData {
	
	public entity : CRMEntity = null;
	public context : CRMContext = null;

	constructor(attributes:AttributeCollection){
		this.entity=new CRMEntity(attributes);
		this.context = new CRMContext();
	}
}