import {Component, View} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {Route} from "angular2/router";
import {LabResultsComponent} from "../lab-results/lab-results.component";


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/components/app/app.component.css'],
    templateUrl: 'app/components/app/app.component.html'
})
@RouteConfig([
   {path: '/', component: LabResultsComponent, name: 'LabResults', useAsDefault: true}
])
export class AppComponent {
    public navigationTitle = 'Rezultāti';
    public title = 'Testu rezultāti';
}
