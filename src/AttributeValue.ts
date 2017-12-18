class AttributeValue {
	
		constructor(private _entity:CRMEntity, public name:string, public value?:any, public text?:string, public options?:OptionsetOption[]){
		}
	
		getName(){
			return this.name;
		}
	
		getValue(){
			return this.value;
		}
	
		setValue(value:any){
			this.value=value;
		}
	
		getText(){
			return this.text;
		}
	
		getOptions(){
			return this.options;
		}

		get controls(){
			return this._entity.data.page.ui.controls.get(x=>x.attribute===this.name);
		}
	}
	