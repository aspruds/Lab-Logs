import {Component,OnInit} from 'angular2/core'
import {LabMenuComponent} from "../lab-menu/lab-menu.component";
import {RouterActive} from "../../directives/router_active";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LabVisit} from "../../models/lab-visits/lab-visit";
import {LabVisitsService} from "../../services/lab-visits.service";
import {Router} from 'angular2/router'
import {RouteParams} from "angular2/router";

@Component({
    selector: 'lab-tests',
    directives: [ROUTER_DIRECTIVES, LabMenuComponent],
    templateUrl: 'app/components/lab-visit-details/lab-visit-details.component.html',
    styleUrls: ['app/components/lab-visit-details/lab-visit-details.component.css'],
    inputs: ['showProperties']
})
export class LabVisitDetailsComponent implements OnInit {
    public visit: LabVisit;
    public propertiesVisible: boolean = false;

    constructor(private labVisitsService:LabVisitsService, private router: Router, private routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.visit) {
            let id = +this.routeParams.get('id');
            this.labVisitsService.getVisitDetails(id).then(visit => this.visit = visit);
        }
    }

    showProperties() {
        this.propertiesVisible = true;
    }

    hideProperties() {
        this.propertiesVisible = false;
    }

    goBack() {
        window.history.back();
    }
}