/// <reference path="../dist/FakeXrmContext.d.ts" />
/// <reference path="./Account_Mainform.ts" />

describe("Account MainForm", ()=>{
	describe("UpdateNameAttribue", ()=>{
		it("Updates the name correctly", ()=>{

			Xrm.Page.setAttribute("name","test");

			var accountForm = new Account_MainForm();
			// call the function to be tested
			accountForm.UpdateNameAttribute();

			// check the status of the form
			expect((<AttributeValue>Xrm.Page.getAttribute("name")).getValue()).toBe("updated");

		});

		it("Doesn't updates when not required", ()=>{
			
			Xrm.Page.setAttribute("name","any value");

			var accountForm = new Account_MainForm();
			// call the function to be tested
			accountForm.UpdateNameAttribute();

			// check the status of the form
			expect((<AttributeValue>Xrm.Page.getAttribute("name")).getValue()).toBe("any value");

		});		
	});
});