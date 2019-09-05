import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from 'app/components/app/app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LabVisitsService} from "app/services/lab-visits.service";
import {LabResultsService} from "app/services/lab-results.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, LabVisitsService, LabResultsService]);
