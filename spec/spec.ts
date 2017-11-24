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

	describe("DisableAllAttributes", ()=>{
		it("Disabled all attributes corretly", ()=>{

			var section1 = Xrm.Page.ui.tabs.set("Tab1").sections.set("Sect1"); 
			var section2 = Xrm.Page.ui.tabs.set("Tab2").sections.set("Sect2"); 
			
			Xrm.Page.setAttribute("name","test");
			section1.controls.set("name");
			Xrm.Page.setAttribute("name1","test1");
			section1.controls.set("name1");
			section2.controls.set("name1");
			
			var accountForm = new Account_MainForm();
			accountForm.DisableAllAttributes();

			expect((<UIControl>Xrm.Page.getControl("name")).disabled).toBe(true);
			expect((<UIControl>Xrm.Page.getControl("name1")).disabled).toBe(true);
		});
	});		

});