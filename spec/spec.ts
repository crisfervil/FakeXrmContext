describe("test1", ()=>{
	it("exp1", ()=>{

		Xrm.Page.setAttribute("name","test");

		var testedCode = new TestedCode();

		// this method contains the logig to be tested
		testedCode.GetAndSetFormAttributes();

		expect((<AttributeValue>Xrm.Page.getAttribute("name")).getValue()).toBe("updated");
	});
});