import {Component} from 'angular2/core'
import {RouterActive} from "../../directives/router_active";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from 'angular2/router'

@Component({
    selector: 'lab-menu',
    directives: [ROUTER_DIRECTIVES, RouterActive],
    templateUrl: 'app/components/lab-menu/lab-menu.component.html'
})
export class LabMenuComponent {
    constructor(private router: Router) {
    }
}