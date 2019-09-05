import {Component} from 'angular2/core'
import {RouterActive} from "app/directives/router_active";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from 'angular2/router'
import {Attribute} from "angular2/core";

@Component({
    selector: 'lab-menu',
    directives: [ROUTER_DIRECTIVES, RouterActive],
    templateUrl: 'app/components/lab-menu/lab-menu.component.html'
})
export class LabMenuComponent {
    constructor(private router: Router,
                @Attribute('selected') private selected: string) {
    }

    isSelected(route: string) {
        let active = this.selected == route;
        return active;
    }
}
