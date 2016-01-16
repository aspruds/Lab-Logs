import {ReferenceInterval} from "./reference-interval";

export interface Test {
    name: string;
    value?: number | boolean;
    units?: string;
    referenceInterval?: ReferenceInterval;
    referenceValue?: boolean;
    comments?: string;
    level?: number;
}