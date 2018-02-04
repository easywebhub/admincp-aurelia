import { PLATFORM } from 'aurelia-pal';
import { bindable, bindingMode, inject, customAttribute } from 'aurelia-framework';

@inject(Element)
@customAttribute('monacoeditor')
export class MonacoEditorAttribute {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) data;
  @bindable options;  

  constructor(private element) {
  }

  dataChanged(newValue, oldValue) {
  //  console.log('new: ', newValue)  
    this.data = newValue; 
  }  
  
  optionsChanged(newValue, oldValue) {
    this.options = newValue; 
  } 
  binding() {

  }
  attached() {
    this.initMonaco();
  }

  editor: any; 
  // Will be called once monaco library is available
  initMonaco() {
    // const monaco = require('@timkendrick/monaco-editor');
    const monaco = require('@timkendrick/monaco-editor');
    console.log('initMonaco');
    this.editor = monaco.editor.create(this.element, {
      value: this.data,
      language: 'javascript',
      theme: "vs-dark",
      scrollbar: { //https://microsoft.github.io/monaco-editor/playground.html#customizing-the-appearence-scrollbars
        // Subtle shadows to the left & top. Defaults to true.
        useShadows: false,
    
        // Render vertical arrows. Defaults to false.
        verticalHasArrows: true,
        // Render horizontal arrows. Defaults to false.
        horizontalHasArrows: true,
    
        // Render vertical scrollbar.
        // Accepted values: 'auto', 'visible', 'hidden'.
        // Defaults to 'auto'
        vertical: 'visible',
        // Render horizontal scrollbar.
        // Accepted values: 'auto', 'visible', 'hidden'.
        // Defaults to 'auto'
        horizontal: 'visible',
    
        verticalScrollbarSize: 17,
        horizontalScrollbarSize: 17,
        arrowSize: 30
      }
    });
    if(typeof this.editor!="undefined") {
    
      //https://microsoft.github.io/monaco-editor/playground.html#interacting-with-the-editor-listening-to-key-events      
      var myBinding = this.editor.addCommand(monaco.KeyCode.F1, function() {
        alert('F1 pressed!');
      });  

      //      
      this.editor.onDidChangeModelContent((e)=> {
          this.data = this.editor.getValue()
       //   console.log(this.editor.getValue())
       //   console.log('data', this.data)
          this.element.dispatchEvent(new Event('change'));
      });
    }
  }
  detached() { 
    this.destroyMonaco();   
  }

  destroyMonaco(){
    if(typeof this.editor!="undefined")
      this.editor.destroy();
  }
}
