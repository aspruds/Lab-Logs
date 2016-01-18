import {LAB_VISITS} from './mock-lab-visits'
import {Injectable} from 'angular2/core'

@Injectable()
export class LabVisitsService {
    getLabVisits() {
        return Promise.resolve(LAB_VISITS)
    }

    getVisitDetails(id: number) {
        return Promise.resolve(LAB_VISITS.filter(visit => visit.id === id)[0]);
    }
}