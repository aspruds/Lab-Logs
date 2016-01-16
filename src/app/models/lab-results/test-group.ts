import {TestWithHistory} from "./test-with-history";
export interface  TestGroup {
    name: string;
    hasLevels?: boolean;
    tests: TestWithHistory[];
}