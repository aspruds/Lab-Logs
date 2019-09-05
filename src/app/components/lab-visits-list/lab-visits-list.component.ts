import {Component,OnInit} from 'angular2/core'
import {LabMenuComponent} from "app/components/lab-menu/lab-menu.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LabVisit} from "app/models/lab-visits/lab-visit";
import {LabVisitsService} from "app/services/lab-visits.service";
import {Router} from 'angular2/router'
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'lab-tests',
    directives: [ROUTER_DIRECTIVES, LabMenuComponent],
    templateUrl: 'app/components/lab-visits-list/lab-visits-list.component.html',
    styleUrls: ['app/components/lab-visits-list/lab-visits-list.component.css']
})
export class LabVisitsListComponent implements OnInit {
    public visits: LabVisit[];

    constructor(private labVisitsService:LabVisitsService, private router: Router) {
    }

    getLabVisits() {
        this.labVisitsService.getLabVisits().then(visits => this.visits = visits)
    }

    ngOnInit() {
        this.getLabVisits()
    }
}
