/// <reference path="../dist/FakeXrmContext.d.ts" />

class Account_MainForm {

	/** Updates the attribute name in test accounts */
	UpdateNameAttribute() {

		// get the attribute
		var nameAttribute = Xrm.Page.getAttribute("name");

		if (nameAttribute.getValue() === "test") {
			nameAttribute.setValue("updated");
		}
	}

	/** Disabled all the attributes in the page */
	DisableAllAttributes(){
		Xrm.Page.data.entity.attributes.forEach((attribute, index) => attribute.controls.forEach((control, index)=>control.setDisabled(true)));
	}
}