import {ReferenceInterval} from "./reference-interval";

export interface Test {
    name: string;
    value: number;
    units: string;
    referenceInterval: ReferenceInterval;
}