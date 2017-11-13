import {Collection} from './Collection';
import {UITab} from './UITab';
import {AttributeCollection} from './AttributeCollection';

export class UITabCollection extends Collection<UITab>{
	
		private attributes: AttributeCollection = null;
	
		constructor(attributes:AttributeCollection){
			super();
			this.attributes = attributes;
		}
	
		set (tabName:string, tab:UITab=new UITab(this.attributes)){
			return super.set(tabName,tab);
		}
	}