import {Router} from 'angular2/router';
import {isPresent} from 'angular2/src/facade/lang';
import {Directive, Query, QueryList, Attribute, ElementRef, Renderer} from 'angular2/core';
import {Instruction, RouterLink} from 'angular2/router';

/**
 * RouterActive dynamically finds the first element with routerLink and toggles the active class
 *
 * ## Use
 *
 * ```
 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
 * ```
 */
@Directive({
    selector: '[routerActive]',
    inputs: ['routerActive']
})
export class RouterActive {
    routerActive: string = null;
    routerActiveAttr: string = 'active';

    constructor(
        router: Router,
        element: ElementRef,
        renderer: Renderer,
        @Query(RouterLink, {descendants: false}) routerLink: QueryList<RouterLink>,
        @Attribute('routerActive') routerActiveAttr: string) {

        router.subscribe(() => {
            let active = routerLink.first.isRouteActive;
            renderer.setElementClass(element, this._attrOrProp(), active);
        });

        if(router.parent != null) {
            router.parent.subscribe((url) => {
                let routerLinkURL = routerLink.first.visibleHref;
                let routerURL = '/' + url;
                let active = routerLinkURL == routerURL;
                renderer.setElementClass(element, this._attrOrProp(), active);
            });
        }

        if(router.parent != null && router.parent.parent != null) {
            router.parent.parent.subscribe((url) => {
                let routerLinkURL = routerLink.first.visibleHref;
                let routerURL = '/' + url;
                let active = routerLinkURL == routerURL;
                renderer.setElementClass(element, this._attrOrProp(), active);
            });
        }

        if(router.parent != null && router.parent.parent != null && router.parent.parent.parent != null) {
            router.parent.parent.parent.subscribe((url) => {
                let routerLinkURL = routerLink.first.visibleHref;
                let routerURL = '/' + url;
                let active = routerLinkURL == routerURL;
                renderer.setElementClass(element, this._attrOrProp(), active);
            });
        }
    }
    private _attrOrProp() {
        return isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
    }
}