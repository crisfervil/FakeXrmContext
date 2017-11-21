class CRMContext {

	public userId: string;
	public clientUrl: string;

	getUserId() {
		return this.userId;
	}
	getClientUrl() {
		return this.clientUrl;
	}
}