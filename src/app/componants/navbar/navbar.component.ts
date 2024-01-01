import { Component, OnInit } from '@angular/core';
declare var $: any; // Declare $ to use jQuery
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

constructor(){
  this.toggleElementOnScreenSize()
}
toggleElementOnScreenSize() {
  const screenSize = window.innerWidth;
  const smallScreenMaxWidth = 768; // Change this value based on your screen size threshold

  if (screenSize <= smallScreenMaxWidth) {
   
      // Use jQuery to toggle the element
      $('.element-to-toggle').slideToggle(2000);
    
  } 
  else {
  
      // Use jQuery to toggle the element
      $('.element-to-toggle').slideToggle(2000);
    
  }
}
if(){

}
toggleElement() {
  // Use jQuery to toggle the element
  $('.element-to-toggle').slideToggle(2000);
}
  ngOnInit(): void {}

}

