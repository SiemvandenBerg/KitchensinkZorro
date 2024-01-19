import { NgModule, Component } from '@angular/core'; // add Component import here
import { CommonModule } from '@angular/common';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent {
  // your component logic goes here
}

@NgModule({
  declarations: [
    CodeEditorComponent
  ],
  imports: [
    CommonModule,
    NzCodeEditorModule
  ],
  exports: [
    CodeEditorComponent
  ]
})
export class CodeEditorModule { }