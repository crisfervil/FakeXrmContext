import {AttributeCollection} from './AttributeCollection';

export class CRMEntity {
    public attributes:AttributeCollection = null;
    public id:string = null;
    public entityName:string = '';

    constructor(attributes:AttributeCollection){
        this.attributes = attributes;
    }

    save(){
        if(window.console) console.log('saved');
    }

    getId(){
        return this.id;
    }

    getEntityName(){
        return this.entityName;
    }
}
