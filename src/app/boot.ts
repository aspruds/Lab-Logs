import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app/app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LabResultsService} from "./services/lab-results.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, LabResultsService]);
