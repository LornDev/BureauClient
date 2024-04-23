import { Component, Input } from '@angular/core';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

@Component({
  selector: 'app-inline-editor',
  templateUrl: './inline-editor.component.html',
  styleUrl: './inline-editor.component.css'
})
export class InlineEditorComponent {
  editor = InlineEditor as {
    create: any;
  };
  editorConfig = {
    allowedContent: true,
     toolbar: [ 'heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList' ]
  };
  data: any = `
  <h2>Scene Planning</h2>
  <p></p>
  <p><strong>First bit</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur. Magna sit amet purus gravida quis blandit.</p>
  <p><strong>Second bit</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Lectus sit amet est placerat in.</p>
  <p><strong>Ending:</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  `;
}
