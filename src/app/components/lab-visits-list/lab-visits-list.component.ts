import {Component,OnInit} from 'angular2/core'
import {LabMenuComponent} from "../lab-menu/lab-menu.component";
import {RouterActive} from "../../directives/router_active";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LabVisit} from "../../models/lab-visits/lab-visit";
import {LabVisitsService} from "../../services/lab-visits.service";
import {Router} from 'angular2/router'
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'lab-tests',
    directives: [ROUTER_DIRECTIVES, LabMenuComponent],
    templateUrl: 'app/components/lab-visits-list/lab-visits-list.component.html',
    styleUrls: ['app/components/lab-visits-list/lab-visits-list.component.css'],
    inputs: ['groupId']
})
export class LabVisitsListComponent implements OnInit {
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