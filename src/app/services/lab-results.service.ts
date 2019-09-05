import {LAB_RESULTS} from 'app/data/mock-lab-results'
import {Injectable} from 'angular2/core'
import {LabResults} from "app/models/lab-results/lab-results";

@Injectable()
export class LabResultsService {
    getLabResults(): Promise<LabResults> {
        return Promise.resolve(LAB_RESULTS)
    }
}
