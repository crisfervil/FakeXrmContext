class Collection<T> {

	private items: T[] = new Array<T>();
	private itemsNames: { [name: string]: number } = {};

	get(): Array<T>;
	get(item?: number | string): T;	
	get(item?: number | string): T | Array<T> {
		var retVal: T | Array<T>;

		if (item === undefined) {
			retVal = this.items;
		}
		else if (typeof item === 'number') {
			retVal = this.items[item];
		}
		else if (typeof item === 'string') {
			var ndx = this.itemsNames[item];
			if (ndx === undefined) throw new Error(`item '${item}' not found in collection`);
			retVal = this.items[ndx];
		}
		else {
			throw Error('Not Implemented');
		}

		return retVal;
	}

	set(itemName: string, item: T): T {
		if (this.itemsNames[itemName] === undefined) {
			this.itemsNames[itemName] = this.items.length;
		}
		this.items[this.itemsNames[itemName]] = item;
		return item;
	}

	getLength(): number {
		return this.items.length;
	}

	forEach(cb: (item: T, index: number) => void) {
		for (var i = 0; i < this.items.length; i++) {
			cb(this.items[i], i);
		}
	}
}