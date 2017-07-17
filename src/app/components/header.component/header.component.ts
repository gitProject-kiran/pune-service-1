import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'header-content',
    templateUrl: '../../../components/header.component/header.component.html',
    styleUrls: ['../../../components/header.component/header.component.css']
})

export class headerComponent {
    @ViewChild('toggleButton') toggleButton: ElementRef;
    toggleButtonIsVisible() {
        console.log("==>", this.toggleButton.nativeElement);
        return this.toggleButton.nativeElement.offsetParent !== null;
    }
    collapseNav() {
        if (this.toggleButtonIsVisible()) {
            this.toggleButton.nativeElement.click();
        }
    }
}