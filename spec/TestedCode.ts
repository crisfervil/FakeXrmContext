class TestedCode {

	GetAndSetFormAttributes() {

		// get the attribute
		var nameAttribute = <AttributeValue>Xrm.Page.getAttribute("name");

		if (nameAttribute.getValue() == "test") {
			nameAttribute.setValue("updated");
		}

	}
}