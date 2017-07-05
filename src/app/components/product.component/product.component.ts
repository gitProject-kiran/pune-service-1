import { Component } from '@angular/core';
import { appService } from '../../../app/services/app-service/app.service';

@Component({
    selector : 'my-app',
    templateUrl : '../../../components/product.component/product.component.html',
    providers : [appService]
})

export class AppProduct{
    value : string = "";

    appList : any[] = [{
        'ID' : '1',
        'Name' : 'One',
        'url':'../../../app/images/product.images/image-1.png'
    },{
        'ID' : '2',
        'Name' : 'Two',
        'url':'../../../app/images/product.images/image-2.png'
    }];

    constructor(private _appService : appService){}
    ngOnInit() : void{
        console.log("==> ngOnInit");
        this.value = this._appService.getApp();
    }
    clicked() : void{
        console.log("==> clicked");
    }
    ngOnChanges():void{
        console.log("==> ngOnChanges");
    }
    ngDoCheck():void{
        console.log("==> ngDoCheck");
    }
    ngAfterContentInit():void{
        console.log("==> ngAfterContentInit");
    }
    ngAfterContentChecked():void{
        console.log("==> ngAfterContentChecked");
    }
    ngAfterViewInit():void{
        console.log("==> ngAfterContentChecked");
    }
    ngAfterViewChecked():void{
        console.log("==> ngAfterContentChecked");
    }
    ngOnDestroy():void{
        console.log("==> ngAfterContentChecked");
    }
}