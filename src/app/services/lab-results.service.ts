import {LAB_RESULTS} from './../data/mock-lab-results'
import {Injectable} from 'angular2/core'
import {LabResults} from "../models/lab-results/lab-results";

@Injectable()
export class LabResultsService {
    getLabResults(): Promise<LabResults> {
        return Promise.resolve(LAB_RESULTS)
    }
}