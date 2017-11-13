
export class CRMContext {
	
		private OFFLINE_TOKEN:string = 'offline';
		public userId:string = null;
	
		getUserId(){
			return this.userId;
		}
	
		getTestRunnerParameter(index:number){
			if((<any>window).__karma__ && (<any>window).__karma__.config && (<any>window).__karma__.config.args[index]){
				return (<any>window).__karma__.config.args[index];
			}
			return null;
		}
	
		getClientUrl (){ 
			return utils.getParameterByName("url", window.location.href) || this.getTestRunnerParameter(0) || this.OFFLINE_TOKEN;
		}
	
		isOffline():boolean{
			return this.getClientUrl()===this.OFFLINE_TOKEN;
		}
	}