export interface Image {
    uri: string;
    set: string;
}

export interface Grs {
    amount: number;
    currency: string;
}

export interface Nt {
    amount: number;
    currency: string;
}

export interface Price {
    gross: string;
    grs: Grs;
    net: string;
    nt: Nt;
    type: string;
    vat: number;
}

export interface Phone {
    type: string;
    number: string;
    uri: string;
}

export interface LatLong {
    lon: number;
    lat: number;
}

export interface Contact {
    type: string;
    country: string;
    enumType: string;
    name: string;
    address1: string;
    address2: string;
    phones: Phone[];
    latLong: LatLong;
    withMobileSince: string;
    imprint: string;
    canSendCcMail: boolean;
}

export interface Attribute {
    label: string;
    tag: string;
    value: string;
}

export interface AdMobTargeting {
    make: string;
    model: string;
    price: string;
    dealer: string;
    channel: string;
    preis: string;
    ma: string;
    kw: string;
    ez: string;
    intid: string;
    advid: string;
}

export default interface CarResponse {
    id: number;
    sellerId: number;
    title: string;
    makeId: number;
    makeKey: string;
    modelKey: string;
    images: Image[];
    price: Price;
    vat: string;
    contact: Contact;
    isNew: boolean;
    isConditionNew: boolean;
    isPreRegistration: boolean;
    category: string;
    description: string;
    attributes: Attribute[];
    features: string[];
    hasDamage: boolean;
    isDamageCase: boolean;
    htmlDescription: string;
    segment: string;
    vc: string;
    created: number;
    adMobTargeting: AdMobTargeting;
}
