import {Component, View} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {Route} from "angular2/router";
import {LabResultsComponent} from "app/components/lab-results/lab-results.component";
import {LabVisitsComponent} from "app/components/lab-visits/lab-visits.component";
import {LabVisitDetailsComponent} from "app/components/lab-visit-details/lab-visit-details.component";
import {Router} from "angular2/router";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/components/app/app.component.css'],
    templateUrl: 'app/components/app/app.component.html'
})
@RouteConfig([
   {path: 'lab/results', component: LabResultsComponent, as: "LabResults", useAsDefault: true},
   {path: 'lab/visits/...', component: LabVisitsComponent, as: "LabVisits"}
])
export class AppComponent {
    public navigationTitle = 'Rezultāti';
    public title = 'Testu rezultāti';
    public route = null;

    constructor(private router: Router) {
        router.subscribe((url:any) =>
            this.route = url
        );
    }

    isRouteActive(routePath: string) {
        return this.route == routePath;
    }
}
