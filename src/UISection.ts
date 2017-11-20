import {AttributeCollection} from './AttributeCollection';
import {UIControlCollection} from './UIControlCollection';

export class UISection{
    private attributes:AttributeCollection;
    public controls:UIControlCollection;

    constructor(attributes:AttributeCollection, public name?:string){
        this.attributes = attributes; 
        this.controls = new UIControlCollection(this.attributes);   
    }

    getName(){
        return this.name;
    }
}
