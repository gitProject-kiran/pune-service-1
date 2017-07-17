import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'header-content',
    templateUrl: '../../../components/header.component/header.component.html',
    styleUrls: ['../../../components/header.component/header.component.css']
})

export class headerComponent {
    @ViewChild('navbarToggler') navbarToggler: ElementRef;
    navBarTogglerIsVisible() {
        console.log("==>", this.navbarToggler.nativeElement);
        return this.navbarToggler.nativeElement.offsetParent !== null;
    }
    collapseNav() {
        if (this.navBarTogglerIsVisible()) {
            this.navbarToggler.nativeElement.click();
        }
    }
}