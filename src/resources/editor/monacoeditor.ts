import { PLATFORM } from 'aurelia-pal';
import { bindable, bindingMode, inject, customAttribute } from 'aurelia-framework';
@inject(Element)
@customAttribute('monacoeditor')

export class MonacoEditorAttribute {
  constructor(private element) {
  }
  attached() {
    // const monaco = require('@timkendrick/monaco-editor');
    // monaco.editor.create(this.element, {
    //   value: "function hello() {\n\talert('Hello world!');\n}",
    //   language: "javascript"
    // })
    //   .then(editor => {
    //     console.log('monaco', editor)
    //   });
    // this.loadJs('vs/loader.js')
    // .then( _ => {
    //    console.log('monaco')
    //    this.onGotAmdLoader();
    // })    
    // .catch(err => {
    //   console.log('err', err)  
    // })

    this.initMonaco();

    // var $s = require('scriptjs');
    // $s('../../../assets/plugins/ckeditor/ckeditor.js', () => {
    //     PLATFORM.global.CKEDITOR.replace(this.element).on('change', (e) => {
    //         this.element.value = e.editor.getData()
    //         this.element.dispatchEvent(new Event('change'));
    //     });
    // });

  }
  onGotAmdLoader = () => {
    // Load monaco
    this.initMonaco();
    // (<any>window).require(['vs/editor/editor.main'], () => {
    //   this.initMonaco();
    // });
  };

  loadJs(file) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = file;
      //script.addEventListener('load', this.onGotAmdLoader());
      document.body.appendChild(script);

      script.onload = function () {
        resolve()
      }
      script.onerror = function () {
        reject()
      }
    })
  }

  editor: any; 
  // Will be called once monaco library is available
  initMonaco() {
    // const monaco = require('@timkendrick/monaco-editor');
    const monaco = require('@timkendrick/monaco-editor');
    console.log('initMonaco');
    this.editor = monaco.editor.create(this.element, {
      value: this.element.value,
      language: 'javascript'
    });
    let that = this;
    this.editor.onDidChangeModelContent((e)=> {
      that.element.value = that.editor.getValue()
        console.log(that.editor.getValue())
        console.log(that.element.value)
        that.element.dispatchEvent(new Event('change'));
    });
  }
  detached() { 
    this.destroyMonaco();   
  }

  destroyMonaco(){
    if(typeof this.editor!="undefined")
      this.editor.destroy();
  }
}
