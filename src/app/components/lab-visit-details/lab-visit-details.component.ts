import {Component,OnInit} from 'angular2/core'
import {LabMenuComponent} from "app/components/lab-menu/lab-menu.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LabVisit} from "app/models/lab-visits/lab-visit";
import {LabVisitsService} from "app/services/lab-visits.service";
import {Router} from 'angular2/router'
import {RouteParams} from "angular2/router";
import {Test} from "app/models/lab-visits/test";

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

    highlightClass(test: Test) {
        let cssClass = null;

        // for tests with levels
        if(test.level != null) {
            let level = test.level;

            if (level > 0 && level <= 1) {
                cssClass = "highlight-level-1";
            }
            else if (level > 1 && level <= 2) {
                cssClass = "highlight-level-2";
            }
            else if (level > 2) {
                cssClass = "highlight-level-3";
            }
        }

        // for tests with reference values
        else if(test.referenceValue != null && test.value != test.referenceValue) {
            cssClass = "highlight-level-3";
        }

        // for tests with reference intervals
        else if(test.referenceInterval != null) {
            let refInt = test.referenceInterval;
            if(test.value > refInt.maxValue || test.value < refInt.minValue) {
                cssClass = "highlight-level-2";
            }
        }

        return cssClass;
    }
}
