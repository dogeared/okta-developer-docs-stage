(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{894:function(e,t,a){"use strict";a.r(t);var o=a(38),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("RouterLink",{attrs:{to:"/docs/reference/api/apps/#application-key-credential-object"}},[e._v("Application Key Credential objects")]),e._v(" contain an opaque key ID ("),a("code",[e._v("kid")]),e._v(") and a corresponding certificate. To use the "),a("RouterLink",{attrs:{to:"/docs/reference/api/apps/#clone-application-key-credential"}},[e._v("API")]),e._v(" to share application key credentials between apps, you need to clone an application key credential. You create and use a new credential in one app, and then share and update the credential in another app.")],1),e._v(" "),a("p",[e._v("Sharing certificates is useful for Okta orgs that have apps with "),a("RouterLink",{attrs:{to:"/docs/reference/api/apps/#sign-on-modes"}},[e._v("sign-on modes")]),e._v(" such as "),a("code",[e._v("SAML_2_0")]),e._v(", "),a("code",[e._v("SAML_1_1")]),e._v(", or "),a("code",[e._v("WS_FEDERATION")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"why-should-i-do-this"}},[e._v("Why should I do this "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#why-should-i-do-this"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("When configuring multiple apps, you might need them to accept the same Identity Provider (IdP). In that case, the assertions from the two apps must be signed by the same key.")]),e._v(" "),a("p",[e._v("For example, a company wants to implement SSO for their Finance app. The company requires two app instances of the Finance app for their implementation, and the Finance app only accepts one SAML Identity Provider. The assertions from the two app instances of Finance need to look identical.")]),e._v(" "),a("h3",{attrs:{id:"how-to-share-the-certificate"}},[e._v("How to share the certificate "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#how-to-share-the-certificate"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("For this example, we assume that you want to share a certificate between two instances of an app:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("app1")]),e._v(" is the source app, the app from which you want to share a certificate.")]),e._v(" "),a("li",[a("code",[e._v("app2")]),e._v(" is the target app, the app that receives the source app's certificate.")])]),e._v(" "),a("p",[e._v("This example also works if the apps are two instances of the same app or two different apps.")]),e._v(" "),a("h2",{attrs:{id:"support"}},[e._v("Support "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#support"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("If you need help or have an issue, post a question in our "),a("a",{attrs:{href:"https://devforum.okta.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer Forum"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("NextSectionLink")],1)}),[],!1,null,null,null);t.default=c.exports}}]);