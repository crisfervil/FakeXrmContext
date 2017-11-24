declare class Collection<T> {
    private items;
    private itemsNames;
    get(item?: number | string): T | Array<T>;
    set(itemName: string, item: T): T;
    getLength(): number;
}
declare class AttributeCollection extends Collection<AttributeValue> {
    set(attributeName: string, attribute?: AttributeValue): AttributeValue;
}
declare class AttributeValue {
    name: string;
    value: any;
    text: string | undefined;
    options: OptionsetOption[] | undefined;
    constructor(name: string, value?: any, text?: string | undefined, options?: OptionsetOption[] | undefined);
    getName(): string;
    getValue(): any;
    setValue(value: any): void;
    getText(): string | undefined;
    getOptions(): OptionsetOption[] | undefined;
}
declare class CRMContext {
    userId: string;
    clientUrl: string;
    getUserId(): string;
    getClientUrl(): string;
}
declare class CRMData {
    entity: CRMEntity;
    context: CRMContext;
    constructor(attributes: AttributeCollection);
}
declare class CRMEntity {
    attributes: AttributeCollection;
    id: string;
    entityName: string;
    constructor(attributes: AttributeCollection);
    save(): void;
    getId(): string;
    getEntityName(): string;
}
declare class CRMUtility {
    openEntityForm(entityName: string, recordId: string): void;
}
declare class FakeXrmContext {
    Page: Page;
    Utility: CRMUtility;
    static init(parentObj: any): FakeXrmContext;
}
declare enum FormTypes {
    Undefined = 0,
    Create = 1,
    Update = 2,
    ReadOnly = 3,
    Disabled = 4,
    BulkEdit = 6,
}
declare class OptionsetOption {
    text: string;
    value: number;
}
declare class Page {
    attributes: AttributeCollection;
    ui: UI;
    data: CRMData;
    context: CRMContext;
    constructor();
    getAttribute(attributeName: string): AttributeValue | AttributeValue[];
    setAttribute(attributeName: string, value?: any, text?: string, options?: OptionsetOption[]): void;
    getControl(attributeName: string): UIControl | UIControl[];
}
declare class UI {
    tabs: UITabCollection;
    private attributes;
    constructor(attributes: AttributeCollection);
    formType: FormTypes;
    getFormType(): FormTypes;
    readonly controls: UIControlCollection;
}
declare class UIControl {
    attribute: AttributeValue;
    visible: boolean;
    label: string;
    constructor(attribute: AttributeValue);
    getAttribute(): AttributeValue;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
    setVisible(visible: boolean): void;
}
declare class UIControlCollection extends Collection<UIControl> {
    private attributes;
    constructor(attributes: AttributeCollection);
    /** adds a controls bound to the specified attribute in the UI */
    set(attributeName: string, control?: UIControl): UIControl;
}
declare class UISection {
    name: string | undefined;
    private attributes;
    controls: UIControlCollection;
    constructor(attributes: AttributeCollection, name?: string | undefined);
    getName(): string | undefined;
}
declare class UISectionCollection extends Collection<UISection> {
    private attributes;
    constructor(attributes: AttributeCollection);
    set(sectionName: string, section?: UISection): UISection;
}
declare class UITab {
    private attributes;
    sections: UISectionCollection;
    constructor(attributes: AttributeCollection);
}
declare class UITabCollection extends Collection<UITab> {
    private attributes;
    constructor(attributes: AttributeCollection);
    set(tabName: string, tab?: UITab): UITab;
}
declare var Xrm: FakeXrmContext;
