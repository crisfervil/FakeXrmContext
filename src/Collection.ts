
type CollectionSelector<T> = (x: T) => boolean;

class Collection<T> {


	private items: T[] = new Array<T>();
	private itemsNames: { [name: string]: number } = {};

	get(): Array<T>;
	get(selector: CollectionSelector<T>): Array<T>;
	get(item?: number | string): T;
	get(item?: number | string | CollectionSelector<T>): T | Array<T> | null {
		var retVal: T | Array<T> | null = null;

		if (item === undefined) {
			retVal = this.items;
		}
		else if (typeof item === 'function') {
			retVal = new Array<T>();
			for (var i = 0; i < this.items.length; i++) {
				var result = item(this.items[i]);
				if (result) {
					retVal.push(this.items[i]);
				}
			}
		}
		else if (typeof item === 'number') {
			retVal = this.items[item];
		}
		else if (typeof item === 'string') {
			var ndx = this.itemsNames[item];
			if (ndx !== undefined){
				retVal = this.items[ndx];
			}
		}
		else {
			throw Error('Not Implemented');
		}

		return retVal;
	}

	add(itemName: string, item: T): T {
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