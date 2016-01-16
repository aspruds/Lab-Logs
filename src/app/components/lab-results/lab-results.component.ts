import {Component,OnInit} from 'angular2/core'
import {RouterActive} from "../../directives/router_active";
import {LabResults} from "../../models/lab-results/lab-results";
import {LabResultsService} from "../../services/lab-results.service";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from 'angular2/router'

@Component({
    selector: 'lab-tests',
    directives: [ROUTER_DIRECTIVES, RouterActive],
    templateUrl: 'app/components/lab-results/lab-results.component.html',
    styleUrls: ['app/components/lab-results/lab-results.component.css'],
    inputs: ['groupId']
})
export class LabResultsComponent implements OnInit {
    public results: LabResults;
    public groupId:number;

    constructor(private labResultsService:LabResultsService, private router: Router) {
    }

    getLabTests() {
        this.labResultsService.getLabResults().then(results => this.results = results)
    }

    ngOnInit() {
        this.getLabTests()
    }
}