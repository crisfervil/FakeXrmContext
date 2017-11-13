import {AttributeCollection} from './AttributeCollection';
import {CRMData} from './CRMData';
import {CRMContext} from './CRMContext';
import {UI} from './UI';
import {AttributeValue} from './AttributeValue';


export class Page{
	
		public attributes:AttributeCollection = null;
		public ui : UI = null;
		public data : CRMData = null;
		public context : CRMContext = null;
	
		constructor(){
			this.attributes = new AttributeCollection();
			this.ui = new UI(this.attributes);
			this.data = new CRMData(this.attributes);
			this.context = new CRMContext();
		}
	
		getAttribute(attributeName:string){
			return this.attributes.get(attributeName);
		}
	
		setAttribute(attributeName:string, value?:any, text?:string, options?:OptionsetOption[]){
			var attr = this.attributes.set(attributeName,new AttributeValue(attributeName, value, text, options));
		}
	
		getControl(attributeName:string){
			return this.ui.controls.get(attributeName);
		}
	}
	