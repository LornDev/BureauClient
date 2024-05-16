import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InlineEditorComponent } from './editor/inline-editor/inline-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor/editor.component';
import { LoreComponent } from './lore/lore/lore.component';
import { ExportComponent } from './export/export/export.component';
import { WebService } from './web.service';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http'

var routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'lore',
    component: LoreComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InlineEditorComponent,
    EditorComponent,
    LoreComponent,
    ExportComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
