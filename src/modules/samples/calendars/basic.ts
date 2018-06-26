
export class BasicCalendar{
  constructor() {}  

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

    //loadJs('assets/demo/default/custom/components/calendar/basic.js');
  }  
}
