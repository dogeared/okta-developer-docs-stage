(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{596:function(e,t,a){"use strict";a.r(t);var o=a(38),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("JSON Web Tokens (JWTs) allow claims, such as user data, to be represented in a secure manner, helping to ensure trust and security in your app. JWTs are an open standard, and there are various libraries available that allow you to create, verify, and inspect them.")]),e._v(" "),a("p",[e._v("Okta uses JWTs for many purposes. For example, when you make requests to Okta API endpoints that require "),a("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#client-authentication-methods"}},[e._v("client authentication")]),e._v(", you can optionally use a JWT for additional security.")],1),e._v(" "),a("p",[e._v("Use this guide to understand:")]),e._v(" "),a("ul",[a("li",[e._v("How to build a signed JWT for use when making requests to the OpenID Connect endpoints")]),e._v(" "),a("li",[e._v("Which claims are required in your JWT payload")]),e._v(" "),a("li",[e._v("How to sign the JWT with a shared secret or a private key")])]),e._v(" "),a("h3",{attrs:{id:"jwt-types"}},[e._v("JWT Types "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#jwt-types"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("There are two types of self-signed JWT assertions that you can build for use when you make requests to endpoints that require client authentication:")]),e._v(" "),a("ul",[a("li",[e._v("JWT With a Shared Key ("),a("code",[e._v("client_secret_jwt")]),e._v(")")]),e._v(" "),a("li",[e._v("JWT With a Private Key ("),a("code",[e._v("private_key_jwt")]),e._v(")")])]),e._v(" "),a("p",[e._v("The difference between building these two types of assertions is the algorithm and key used to sign the JWT.")]),e._v(" "),a("p",[e._v("Which JWT type that you use depends on the client authentication method configured in your OAuth 2.0 client application. See "),a("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#client-authentication-methods"}},[e._v("Client Authentication Methods")]),e._v(" for more information on the supported methods and when to use them.")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" To create a client application and specify either the "),a("code",[e._v("client_secret_jwt")]),e._v(" or "),a("code",[e._v("private_key_jwt")]),e._v(" authentication method, see the "),a("RouterLink",{attrs:{to:"/docs/reference/api/apps/#add-oauth-2-0-client-application"}},[e._v("Add OAuth 2.0 Client Application")]),e._v(" API reference section. To change the client authentication method of an existing app, see the "),a("RouterLink",{attrs:{to:"/docs/reference/api/apps/#update-the-client-authentication-method"}},[e._v("Update the Client Authentication Method")]),e._v(" API reference section.")],1)]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip:")]),e._v(" Don't know which method is configured for your client app? You can quickly check the settings by doing a GET to "),a("code",[e._v("https://${yourOktaDomain}/api/v1/apps/${appId}")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"support"}},[e._v("Support "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#support"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("If you need help or have an issue, post a question in our "),a("a",{attrs:{href:"https://devforum.okta.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer Forum"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("NextSectionLink")],1)}),[],!1,null,null,null);t.default=n.exports}}]);