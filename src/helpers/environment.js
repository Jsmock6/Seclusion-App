let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL= 'http://localhost:3002';
        break;
    case 'seclusion-app.herokuapp.com' :
        APIURL= 'https://js-seclusion-app.herokuapp.com'
}

export default APIURL;