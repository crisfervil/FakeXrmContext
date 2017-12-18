/// <reference path="../dist/FakeXrmContext.d.ts" />
/// <reference path="./Account_Mainform.ts" />

describe("Account MainForm", () => {
	describe("UpdateNameAttribue", () => {
		it("Updates the name correctly", () => {

			Xrm.Page.addAttribute("name").setValue("test"); // this add an attribute, control, a tab and a section

			var accountForm = new Account_MainForm();
			// call the function to be tested
			accountForm.UpdateNameAttribute();

			// check the status of the form
			expect(Xrm.Page.getAttribute("name").getValue()).toBe("updated");
			expect(Xrm.Page.data.entity.attributes.get("name").getValue()).toBe("updated");
			
		});

		it("Doesn't updates when not required", () => {

			Xrm.Page.addAttribute("name").setValue("any value");

			var accountForm = new Account_MainForm();
			// call the function to be tested
			accountForm.UpdateNameAttribute();

			// check the status of the form
			expect(Xrm.Page.getAttribute("name").getValue()).toBe("any value");

		});
	});

	describe("DisableAllAttributes", () => {
		it("Disabled all attributes corretly", () => {

			Xrm.Page.addAttribute("name");
			Xrm.Page.addControl("name1","name")

			var accountForm = new Account_MainForm();
			accountForm.DisableAllAttributes();

			expect(Xrm.Page.getControl("name").getDisabled()).toBe(true);
			expect(Xrm.Page.getControl("name1").getDisabled()).toBe(true);
		});
	});

});