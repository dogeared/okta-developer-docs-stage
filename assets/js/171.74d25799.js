(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{688:function(t,e,r){"use strict";r.r(e);var o=r(38),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/cors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cross-Origin Resource Sharing (CORS)"),r("OutboundLink")],1),t._v(" is a mechanism that allows a web page to make an AJAX call using "),r("a",{attrs:{href:"https://xhr.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMLHttpRequest (XHR)"),r("OutboundLink")],1),t._v(" to a domain that is different than the domain where the script was loaded. Such cross-domain requests would otherwise be forbidden by web browsers as indicated by the "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("same origin security policy"),r("OutboundLink")],1),t._v(". CORS defines a "),r("a",{attrs:{href:"http://www.w3.org/TR/cors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("standardized"),r("OutboundLink")],1),t._v(" way in which the browser and the server can interact to determine whether or not to allow the cross-origin request.")]),t._v(" "),r("p",[t._v("In Okta, CORS allows JavaScript hosted on your websites to make a request using "),r("code",[t._v("XMLHttpRequest")]),t._v(" to the Okta API with the Okta session cookie. Every website origin must be explicitly permitted as a Trusted Origin.")]),t._v(" "),r("p",[t._v("If you are using "),r("RouterLink",{attrs:{to:"/docs/guides/implement-oauth-for-okta/overview/"}},[t._v("OAuth 2.0")]),t._v(" tokens to make calls to Okta APIs, you don't need to add a Trusted Origin because OAuth for Okta APIs don't rely on cookies. These APIs use bearer tokens instead. See "),r("RouterLink",{attrs:{to:"/docs/guides/implement-oauth-for-okta/scopes/"}},[t._v("Scopes and supported endpoints")]),t._v(".")],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Caution:")]),t._v(" You should only grant access to specific origins (websites) that you control and trust to access the Okta API.")])]),t._v(" "),r("h3",{attrs:{id:"api-support"}},[t._v("API Support "),r("a",{staticClass:"header-anchor header-link",attrs:{href:"#api-support"}},[r("svg",{attrs:{viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),r("p",[t._v("The Okta API supports CORS on an API by API basis. If you're building an application that needs CORS, check that the specific operation supports CORS for your use case. APIs that support CORS are marked with the following icon "),r("span",{staticClass:"api-label api-label-small api-label-cors"},[r("i",{staticClass:"fa fa-cloud-download"}),t._v(" CORS")]),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"browser-support"}},[t._v("Browser Support "),r("a",{staticClass:"header-anchor header-link",attrs:{href:"#browser-support"}},[r("svg",{attrs:{viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),r("p",[t._v("Not all browsers supports CORS. The following table describes which browsers support this feature.")]),t._v(" "),r("iframe",{attrs:{frameborder:"0",width:"225%",height:"460px",src:"https://caniuse.com/cors/embed/description&links"}}),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note:")]),t._v(" IE8 and IE9 don't support authenticated requests and can't use the Okta session cookie with CORS.")])]),t._v(" "),r("h2",{attrs:{id:"support"}},[t._v("Support "),r("a",{staticClass:"header-anchor header-link",attrs:{href:"#support"}},[r("svg",{attrs:{viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),r("p",[t._v("If you need help or have an issue, post a question in our "),r("a",{attrs:{href:"https://devforum.okta.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Developer Forum"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("NextSectionLink")],1)}),[],!1,null,null,null);e.default=a.exports}}]);