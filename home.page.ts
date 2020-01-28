import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public num1:any='';
public fact:any='';

factorial(){
  this.fact=1;
  for(let i=1; i<=parseInt(this.num1);i++){
    
    this.fact=this.fact*i;
}

}
}