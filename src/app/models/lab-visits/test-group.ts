import {Test} from "./test";

export interface TestGroup {
    name: string;
    tests: Test[];
    hasLevels?: boolean;
}