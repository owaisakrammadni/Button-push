
function get() {
  const Http = new XMLHttpRequest();
  const url = 'http://192.168.50.177:3000/bulb';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}
function post() {
  const Http = new XMLHttpRequest();
  const url = 'http://192.168.50.177:3000/bulb';
  Http.open("POST", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}
function put() {
  const Http = new XMLHttpRequest();
  const url = 'http://192.168.50.177:3000/bulb';
  Http.open("PUT", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}
function delet() {
  const Http = new XMLHttpRequest();
  const url = 'http://192.168.50.177:3000/bulb';
  Http.open("DELET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}