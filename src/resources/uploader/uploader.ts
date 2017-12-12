import { childViewer } from './../../helpers/child-viewer';
import { bindable, bindingMode } from 'aurelia-framework';
import axios from 'axios';
export class UploaderCustomElement {
    @bindable uri
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
    selectedFiles
    container
    name
    filesChange() {
        let formData = new FormData();
        formData.append('upload', this.selectedFiles[0]);
        axios.post(this.uri, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            let rec = res.data.result.files.upload[0]
            this.value = this.uri.replace('upload', 'download') + '/' + rec.name
            this.name = rec.name
        }).catch(err => {
        })
    }
}
