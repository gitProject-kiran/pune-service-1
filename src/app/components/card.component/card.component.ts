import { Component } from '@angular/core';

@Component({
    selector : 'card-content',
    templateUrl : '../../../components/card.component/card.component.html',
    styleUrls: ['../../../components/card.component/card.component.css']
})

export class cardComponent{
    value : string = "";
    cardContainer : number[] = [1,2,3,4,5,6,7,8,9,10];
    titleStyle = 'red-title';

    getImage(card):string{
        return '../../../app/images/products/'+ card +'.jpg';
    }
}