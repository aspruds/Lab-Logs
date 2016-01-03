import {Component,OnInit} from 'angular2/core'
import {Router} from 'angular2/router'
import {LabResults} from "../../models/lab-results/lab-results";
import {LabResultsService} from "../../services/lab-results.service";

@Component({
    selector: 'lab-tests',
    templateUrl: 'app/components/lab-results/lab-results.component.html',
    styleUrls: ['app/components/lab-results/lab-results.component.css'],
    inputs: ['groupId']
})
export class LabResultsComponent implements OnInit {
    public results: LabResults;
    public groupId:number;

    constructor(private _labResultsService:LabResultsService) {
    }

    getLabTests() {
        this._labResultsService.getLabResults().then(results => this.results = results)
    }

    ngOnInit() {
        this.getLabTests()
    }
}