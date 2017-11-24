class Account_MainForm {

	UpdateNameAttribute() {

		// get the attribute
		var nameAttribute = <AttributeValue>Xrm.Page.getAttribute("name");

		if (nameAttribute.getValue() == "test") {
			nameAttribute.setValue("updated");
		}
	}
}