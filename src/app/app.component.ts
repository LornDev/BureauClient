import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { WebService } from './web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bureau';
  testDoc : any;

  constructor(public webService: WebService) { }

  ngOnInit() {

    //testing API - returns undefined but should return a document object
    this.testDoc = this.webService.getDocument("6645ee7f10f401e57777d6ff")
    console.log(this.testDoc)
  }
  
}
