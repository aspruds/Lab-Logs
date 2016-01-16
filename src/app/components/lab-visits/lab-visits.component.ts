import {Component,OnInit} from 'angular2/core'
import {RouterActive} from "../../directives/router_active";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LabVisit} from "../../models/lab-visits/lab-visit";
import {LabVisitsService} from "../../services/lab-visits.service";
import {Router} from 'angular2/router'

@Component({
    selector: 'lab-tests',
    directives: [ROUTER_DIRECTIVES, RouterActive],
    templateUrl: 'app/components/lab-visits/lab-visits.component.html',
    styleUrls: ['app/components/lab-visits/lab-visits.component.css'],
    inputs: ['groupId']
})
export class LabVisitsComponent implements OnInit {
    public visits: LabVisit[];
    public groupId:number;

    constructor(private labVisitsService:LabVisitsService, private router: Router) {
    }

    getLabVisits() {
        this.labVisitsService.getLabVisits().then(visits => this.visits = visits)
    }

    ngOnInit() {
        this.getLabVisits()
    }
}