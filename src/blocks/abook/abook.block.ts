import { Component } from "@angular/core";

@Component({
  selector: "abook-block",
  templateUrl: "abook.block.html"
})
export class AbookBlock {
  
  onContinue() {
    alert("Looks like that's a mock..."); 
  }
  
}