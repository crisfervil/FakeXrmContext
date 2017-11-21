class UITab{
    private attributes: AttributeCollection;
    public sections: UISectionCollection;

    constructor(attributes:AttributeCollection){
        this.attributes = attributes;
        this.sections = new UISectionCollection(attributes);
    }    
}
