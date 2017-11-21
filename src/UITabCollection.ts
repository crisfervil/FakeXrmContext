class UITabCollection extends Collection<UITab>{
	
		private attributes: AttributeCollection;
	
		constructor(attributes:AttributeCollection){
			super();
			this.attributes = attributes;
		}
	
		set (tabName:string, tab:UITab=new UITab(this.attributes)){
			return super.set(tabName,tab);
		}
	}