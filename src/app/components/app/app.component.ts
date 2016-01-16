import {Component, View} from 'angular2/core'
import {RouterActive} from "../../directives/router_active";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {Route} from "angular2/router";
import {LabResultsComponent} from "../lab-results/lab-results.component";
import {LabVisitsComponent} from "../lab-visits/lab-visits.component";
import {Router} from "angular2/router";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, RouterActive],
    styleUrls: ['app/components/app/app.component.css'],
    templateUrl: 'app/components/app/app.component.html'
})
@RouteConfig([
   {path: '/', component: LabResultsComponent, as: "LabResults"},
   {path: '/lab/visits', component: LabVisitsComponent, as: "LabVisits", useAsDefault: true}
])
export class AppComponent {
    public navigationTitle = 'Rezultāti';
    public title = 'Testu rezultāti';

    constructor(private router: Router) {
    }
}
