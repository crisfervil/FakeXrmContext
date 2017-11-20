import {UITabCollection} from './UITabCollection';
import {AttributeCollection} from './AttributeCollection';
import {FormTypes} from './FormTypes';
import {UIControlCollection} from './UIControlCollection';
import {UITab} from './UITab';
import {UISection} from './UISection';
import {UIControl} from './UIControl';

export class UI {
	
		public tabs : UITabCollection;
		private attributes: AttributeCollection;
	
		constructor(attributes:AttributeCollection){    
			this.attributes = attributes;
			this.tabs = new UITabCollection(this.attributes);
		}
	
		// https://msdn.microsoft.com/en-us/library/gg327828.aspx#BKMK_getFormType
		public formType:FormTypes = FormTypes.Undefined;
	
		getFormType(){ 
			return this.formType;
		}
	
		get controls():UIControlCollection{
	
			var retVal = new UIControlCollection(this.attributes);
	
			for (var i = 0; i < this.tabs.getLength(); i++) {
				var tab = <UITab>this.tabs.get(i);
				for (var j = 0; j < tab.sections.getLength(); j++) {
					var section = <UISection>tab.sections.get(j);
					var sectionControls:UIControl[] = <UIControl[]>section.controls.get();
					for (var k = 0; k < sectionControls.length; k++) {
						var control = sectionControls[k];
						retVal.set(control.attribute.name,control);
					}
				}
			}
	
			return retVal;
		}
	}