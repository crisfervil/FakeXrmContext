import {Collection} from './Collection';
import {UIControl} from './UIControl';
import {AttributeCollection} from './AttributeCollection';
import {AttributeValue} from './AttributeValue';


export class UIControlCollection extends Collection<UIControl>{
	
		private attributes:AttributeCollection=null;
	
		constructor(attributes:AttributeCollection){
			super();
			this.attributes = attributes;
		}
	
		/** adds a controls bound to the specified attribute in the UI */
		set (attributeName:string, control?:UIControl){
	
			// get the attribute
			var attr = <AttributeValue>this.attributes.get(attributeName);
			if(attr===null) throw new Error('Attribute not found');
	
			if(control==null) control = new UIControl(attr);
	
			return super.set(attributeName,control);
		}
	}