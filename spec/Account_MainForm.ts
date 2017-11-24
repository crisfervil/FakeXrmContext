class Account_MainForm {

	/** Updates the attribute name in test accounts */
	UpdateNameAttribute() {

		// get the attribute
		var nameAttribute = <AttributeValue>Xrm.Page.getAttribute("name");

		if (nameAttribute.getValue() == "test") {
			nameAttribute.setValue("updated");
		}
	}

	/** Disabled all the attributes in the page */
	DisableAllAttributes(){
		Xrm.Page.data.entity.attributes.forEach(function (attribute, index) {
			var control:UIControl = <UIControl>Xrm.Page.getControl(attribute.getName());
			if (control) {
				control.setDisabled(true);
			}
		});
	}
}