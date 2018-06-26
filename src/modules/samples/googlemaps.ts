
export class GoogleMaps {

  constructor() {

  }
  activate() {
  }

  attached() {
    function loadJs(file) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = file;
        script.type = 'text/javascript';
        script.defer = true;
        document.getElementsByTagName('body').item(0).appendChild(script);

        script.onload = function () {
          resolve()
        }
        script.onerror = function () {
          reject()
        }
      })
    }
    loadJs('//maps.google.com/maps/api/js?key=AIzaSyDBGVDv5fOFgfW4ixNZL_2krgkriGu6vvc').then(() => { });
    loadJs('../../../assets/vendors/custom/gmaps/gmaps.js').then(() => {
      loadJs('../../../assets/demo/default/custom/components/maps/google-maps.js').then(() => {
      });
    });
    // loadJs('//maps.google.com/maps/api/js?key=AIzaSyDBGVDv5fOFgfW4ixNZL_2krgkriGu6vvc').then(() => {
    //   loadJs('../../../assets/vendors/custom/gmaps/gmaps.js').then(() => {
    //     loadJs('../../../assets/demo/default/custom/components/maps/google-maps.js').then(() => {
    //     });
    //   });
    // });
  }
}    
