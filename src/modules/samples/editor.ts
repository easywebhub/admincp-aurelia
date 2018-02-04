
// import * as monaco from '@timkendrick/monaco-editor';
import { DOM } from 'aurelia-pal'
import { inject } from 'aurelia-framework';
import * as monaco from '@timkendrick/monaco-editor';

@inject(DOM)
export class EwEditor {

  editorHost: HTMLElement
  DOM;
  constructor(DOM) {
    this.DOM = DOM;
  }
  activate() {
  }

  uploadLink: string = '/upload';

  ckconfig = {
    extraPlugins: 'uploadimage,customupload',
    height: '500px',
    uploadUrl: this.uploadLink,
    downloadUrl: '/download'
  }
  ckEditorValue = 'I am from viewmodel';
  log() {
    console.log('ck5', this.ckEditorValue)  
  }
  
  getMonaco() {
    console.log('monaco', this.monacoEditorValue)  
  }  
  setValue() {
      
  }
  monacoEditorValue = 'Hello World!';
  attach() {
   
  }

}    
