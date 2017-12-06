/// <reference path="../dist/FakeXrmContext.d.ts" />
/// <reference path="./Account_Mainform.ts" />

describe("Account MainForm", () => {
	describe("UpdateNameAttribue", () => {
		it("Updates the name correctly", () => {

			Xrm.Page.data.entity.attributes.add("name", new AttributeValue());

			var accountForm = new Account_MainForm();
			// call the function to be tested
			accountForm.UpdateNameAttribute();

			// check the status of the form
			expect((<AttributeValue>Xrm.Page.getAttribute("name")).getValue()).toBe("updated");

		});

		it("Doesn't updates when not required", () => {

			Xrm.Page.setAttribute("name", "any value");

			var accountForm = new Account_MainForm();
			// call the function to be tested
			accountForm.UpdateNameAttribute();

			// check the status of the form
			expect((<AttributeValue>Xrm.Page.getAttribute("name")).getValue()).toBe("any value");

		});
	});

	describe("DisableAllAttributes", () => {
		it("Disabled all attributes corretly", () => {

			var section1 = Xrm.Page.ui.tabs.add("Tab1").sections.add("Sect1");
			var section2 = Xrm.Page.ui.tabs.add("Tab2").sections.add("Sect2");

			Xrm.Page.setAttribute("name", "test");
			section1.controls.set("name");
			Xrm.Page.setAttribute("name1", "test1");
			section1.controls.set("name1");
			section2.controls.set("name2",);

			var accountForm = new Account_MainForm();
			accountForm.DisableAllAttributes();

			expect((<UIControl>Xrm.Page.getControl("name")).disabled).toBe(true);
			expect((<UIControl>Xrm.Page.getControl("name1")).disabled).toBe(true);
		});
	});

});