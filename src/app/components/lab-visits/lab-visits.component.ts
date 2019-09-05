import {Component,OnInit} from 'angular2/core'
import {LabMenuComponent} from "app/components/lab-menu/lab-menu.component";
import {LabVisitsListComponent} from "app/components/lab-visits-list/lab-visits-list.component";
import {LabVisitDetailsComponent} from "app/components/lab-visit-details/lab-visit-details.component";
import {RouterActive} from "app/directives/router_active";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LabVisit} from "app/models/lab-visits/lab-visit";
import {LabVisitsService} from "app/services/lab-visits.service";
import {Router} from 'angular2/router'
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'lab-visits',
    directives: [ROUTER_DIRECTIVES, LabMenuComponent],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    {path: 'list', component: LabVisitsListComponent, as: "List", useAsDefault: true},
    {path: 'details/:id', component: LabVisitDetailsComponent, as: "Details" }
])
export class LabVisitsComponent {
}
