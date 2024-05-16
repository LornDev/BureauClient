import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  project_list: any;
  selected_document: any;
  status: any;

  constructor(private http: HttpClient) { }

  getDocument(docId: any) {
    return this.http.get(`http://localhost:5000/api/v1/documents/` + docId).subscribe((response: any) => {
        this.selected_document = response;
      })
  }

}
