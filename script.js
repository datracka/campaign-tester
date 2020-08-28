//* Configurations *//

let UNIQUE_CAMPAIGN = "zB3cFUUl7vj9BLybZAOQH";
let UNIQUE_FORM = "sF95edmndPP8niRMu46Th";
let ENABLE_DEBUGGING = true;
let CONTAINER_ID = "form-container";
let FIRST_NAME = "Vicens";
let LAST_NAME = "Fayos";
let EMAIL = "datracka@gmail.com";
let PHONE = "(213) 341 343";

//* End of custom configuration *//

function getUrlVars() {
  var vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

let utmTerm = getUrlParam("utm_term", "");
let utmSource = getUrlParam("utm_source", "");
let utmContent = getUrlParam("utm_content", "");
let utmMedium = getUrlParam("utm_medium", "");

ENABLE_DEBUGGING
  ? console.log(
      "parameters to send to lytics",
      `utm_term=${utmTerm} utm_source${utmSource} utm_content=${utmContent} utm_medium=${utmMedium}`
    )
  : null;
// create iFrame and append to `div`
let d = document.getElementById(CONTAINER_ID);
let ifrm = document.createElement("iframe");
ifrm.setAttribute(
  "src",
  `https://takeaction.citizenwindow.io/?uc=${UNIQUE_CAMPAIGN}&uf=${UNIQUE_FORM}&utm_term=${utmTerm}&utm_source=${utmSource}&utm_content=${utmContent}&utm_medium=${utmMedium}&first_name=${FIRST_NAME}&last_name=${LAST_NAME}&email=${EMAIL}&phone=${PHONE}`
);
ifrm.setAttribute("id", "advocates-iframe");
ifrm.setAttribute("width", "100%");
ifrm.setAttribute("height", "720px");
ifrm.setAttribute("allowtransparency", true);
ifrm.setAttribute("frameborder", "0");
ifrm.setAttribute("scrolling", "no");
d.appendChild(ifrm);
