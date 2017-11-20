import {AttributeCollection} from './AttributeCollection';
import {Collection} from './Collection';
import {UISection} from './UISection';


export class UISectionCollection extends Collection<UISection>{
	
		private attributes: AttributeCollection;
		constructor(attributes:AttributeCollection){
			super();
			this.attributes = attributes;
		}
	
		set (sectionName:string, section:UISection=new UISection(this.attributes, sectionName)){
			return super.set(sectionName,section);
		}
	}