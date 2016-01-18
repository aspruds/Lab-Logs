import {Component,OnInit} from 'angular2/core'
import {LabMenuComponent} from "../lab-menu/lab-menu.component";
import {LabVisitsListComponent} from "../lab-visits-list/lab-visits-list.component";
import {LabVisitDetailsComponent} from "../lab-visit-details/lab-visit-details.component";
import {RouterActive} from "../../directives/router_active";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LabVisit} from "../../models/lab-visits/lab-visit";
import {LabVisitsService} from "../../services/lab-visits.service";
import {Router} from 'angular2/router'
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'lab-visits',
    directives: [ROUTER_DIRECTIVES, LabMenuComponent],
    templateUrl: 'app/components/lab-visits/lab-visits.component.html'
})
@RouteConfig([
    {path: 'list', component: LabVisitsListComponent, as: "List", useAsDefault: true},
    {path: 'details/:id', component: LabVisitDetailsComponent, as: "Details" }
])
export class LabVisitsComponent {
}