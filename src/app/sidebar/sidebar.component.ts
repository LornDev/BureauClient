import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  selectDocument(){
    console.log("doc selected")
  }

  addDocument(){
    console.log("add document hit")
  }

}
