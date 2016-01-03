import {Test} from "./test";
export interface TestWithHistory {
    lastValue: Test;
    historicalValues: Test[];
}