
// import * as monaco from '@timkendrick/monaco-editor';
import { DOM } from 'aurelia-pal'
import { inject } from 'aurelia-framework';
import * as monaco from '@timkendrick/monaco-editor';

@inject(DOM)
export class MonacoEditor {

  editorHost: HTMLElement
  DOM;
  constructor(DOM) {
    this.DOM = DOM;
  }
  activate() {
  }

  uploadLink: string = '/upload';

  
  getMonaco() {
    console.log('monaco', this.monacoEditorValue)  
  }  
  setValue() {
      
  }
  monacoEditorValue = 'var a = "Hello World!";';
  attach() {
   
  }
}    
