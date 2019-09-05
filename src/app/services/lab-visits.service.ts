import {LAB_VISITS} from 'app/data/mock-lab-visits'
import {Injectable} from 'angular2/core'
import {LabVisit} from "app/models/lab-visits/lab-visit";

@Injectable()
export class LabVisitsService {
    getLabVisits(): Promise<LabVisit[]>  {
        return Promise.resolve(LAB_VISITS.sort(
            (first, second) => second.material.dateTested.localeCompare(first.material.dateTested))
        )
    }

    getVisitDetails(id: number): Promise<LabVisit> {
        return Promise.resolve(LAB_VISITS.filter(visit => visit.id === id)[0]);
    }
}
