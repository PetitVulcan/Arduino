import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-afficheur8',
  templateUrl: './afficheur8.component.html',
  styleUrls: ['./afficheur8.component.css']
})
export class Afficheur8Component implements OnInit {
  result;
  

  constructor() {
  function  ChangeColor(id) {} 
  function AfficherResult() {}
  console.log(this.result);
   }

  ngOnInit() {
    this.AfficherResult();
  }

  AfficherResult()
  {
    this.result = new Array<any>();
    var resultTmp = new Array<any>();
    var idtmp;
    
    for(let i = 1 ; i < 65 ; i++)
    {
      idtmp=i;
      if(document.getElementById(idtmp).className == "pixel")
      {
        resultTmp.push(0);
      }
      else
      {
        resultTmp.push(1);        
      }
    }
    for ( let i = 0 ; i < resultTmp.length ; i++ )
    {
      this.result+=resultTmp[i];        
    }
    console.log(this.result);

    return this.result;
  }
  ChangeColor(id)
  {
    if(document.getElementById(id).className == "pixel")
      {
        document.getElementById(id).className = "pixelB";
      }
    else
    {
      document.getElementById(id).className = "pixel"
    } 
  } 
}
