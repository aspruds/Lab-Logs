import {ReferenceInterval} from "app/models/lab-visits/reference-interval";
export interface Test {
    name: string;
    date: string;
    value: number;
    referenceInterval: ReferenceInterval;
    units: string;
}
