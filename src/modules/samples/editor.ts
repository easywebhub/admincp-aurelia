
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
    console.log('monaco', this.monacoEditorValue)  

    this.monacoEditorValue = "clear value";
  }
  monacoEditorValue = 'Hello World!';
  attach() {

   
    // var onGotAmdLoader = () => {
    //   // Load monaco
    //   (<any>window).require(['vs/editor/editor.main'], () => {
    //     this.initMonaco();
    //   });
    // };

    // loadJs('vs/loader.js').then( _ => {
    //   onGotAmdLoader();
    // })    
    
    // // Load AMD loader if necessary
    // if (!(<any>window).require) {
    //   var loaderScript = document.createElement('script');
    //   loaderScript.type = 'text/javascript';
    //   loaderScript.src = 'vs/loader.js';
    //   loaderScript.addEventListener('load', onGotAmdLoader);
    //   document.body.appendChild(loaderScript);
    // } else {
    //   onGotAmdLoader();
    // }
  }

}    
