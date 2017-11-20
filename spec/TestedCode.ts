import {Xrm} from '../src/Xrm';
import { AttributeValue } from '../src/AttributeValue';


export class TestedCode {


	GetAndSetFormAttributes() {

		// get the attribute
		var nameAttribute = <AttributeValue>Xrm.Page.getAttribute("name");

		if(nameAttribute.getValue()=="test"){
			nameAttribute.setValue("updated");
		}

	}
}