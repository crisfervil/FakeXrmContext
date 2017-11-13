import {AttributeCollection} from './AttributeCollection';
import {UISectionCollection} from './UISectionCollection';

export class UITab{
    private attributes: AttributeCollection = null;
    public sections: UISectionCollection = null;

    constructor(attributes:AttributeCollection){
        this.attributes = attributes;
        this.sections = new UISectionCollection(attributes);
    }    
}
