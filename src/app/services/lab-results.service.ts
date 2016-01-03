import {LAB_RESULTS} from './mock-lab-results'
import {Injectable} from 'angular2/core'

@Injectable()
export class LabResultsService {
    getLabResults() {
        return Promise.resolve(LAB_RESULTS)
    }
}