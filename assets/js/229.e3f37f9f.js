(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{847:function(t,e,a){"use strict";a.r(e);var r=a(38),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("If you would like to disable an access or refresh token, simply send a request to the "),a("code",[t._v("/revoke")]),t._v(" endpoint for the appropriate Authorization Server.")]),t._v(" "),a("p",[t._v("This example makes a request to revoke an access token issued by the Org Authorization Server. The URL of the Authorization Server for your request might be different than this example. See "),a("RouterLink",{attrs:{to:"/docs/concepts/auth-servers/#available-authorization-server-types"}},[t._v("Authorization Servers")]),t._v(" for more information.")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("http --form POST https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/oauth2/v1/revoke "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  accept:application/json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  authorization:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Basic ZmEz...'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  cache-control:no-cache "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  content-type:application/x-www-form-urlencoded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("token")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("eyJhbG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("token_type_hint")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("access_token\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" Revoking a token that is invalid, expired, or already revoked returns a "),a("code",[t._v("200 OK")]),t._v(" status code to prevent any information leaks.")])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#revoke"}},[t._v("Revoke a token")]),t._v(" in the Okta OpenID Connect & OAuth 2.0 API reference.")],1),t._v(" "),a("h2",{attrs:{id:"support"}},[t._v("Support "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#support"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),a("p",[t._v("If you need help or have an issue, post a question in our "),a("a",{attrs:{href:"https://devforum.okta.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Developer Forum"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("NextSectionLink")],1)}),[],!1,null,null,null);e.default=o.exports}}]);