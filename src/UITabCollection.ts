class UITabCollection extends Collection<UITab>{
	
		constructor(private _ui:UI){
			super();
		}
	
		add (tabName:string, tab:UITab=new UITab(this._ui)){
			return super.add(tabName,tab);
		}
	}