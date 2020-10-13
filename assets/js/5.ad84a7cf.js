(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{531:function(t,e,o){"use strict";o.r(e);var a=o(38),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("You want to give your users the freedom to choose which Identity Provider that they can use to sign in to your application. Okta manages connections to Identity Providers for your application, sitting between your application and the Identity Provider that authenticates your users. The industry-standard term for this is Inbound Federation.")]),t._v(" "),o("p",[t._v("We also support additional services such as directories and credential providers. See the "),o("a",{attrs:{href:"https://www.okta.com/okta-integration-network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Okta Integration Network Catalog"),o("OutboundLink")],1),t._v(" to browse all integrations by use case.")]),t._v(" "),o("p",[t._v("This guide assumes that you:")]),t._v(" "),o("ul",[o("li",[t._v("Have an Okta Developer Edition organization. Don't have one? "),o("a",{attrs:{href:"https://developer.okta.com/signup",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create one for free"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("Have an application that you want to add authentication to.")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note:")]),t._v(" This guide doesn't explain the differences between SAML and OpenID Connect and doesn't help you choose between them. See "),o("RouterLink",{attrs:{to:"/docs/concepts/identity-providers/#the-big-picture"}},[t._v("External Identity Providers")]),t._v(" for more information.")],1)]),t._v(" "),o("h2",{attrs:{id:"supported-identity-providers"}},[t._v("Supported Identity Providers "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#supported-identity-providers"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),o("p",[t._v("We support a lot of Identity Providers. This guide provides instructions for the following Identity Providers. If the provider that you need isn't listed, we may still support it through generic OpenID Connect or SAML. The Identity Provider's documentation should say which protocol you need to use.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/apple/create-an-app-at-idp/"}},[t._v("Apple")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/azure/create-an-app-at-idp/"}},[t._v("Azure AD")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/facebook/create-an-app-at-idp/"}},[t._v("Facebook")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/google/create-an-app-at-idp/"}},[t._v("Google")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/linkedin/create-an-app-at-idp/"}},[t._v("LinkedIn")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/microsoft/create-an-app-at-idp/"}},[t._v("Microsoft")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/oktatookta/create-an-app-at-idp/"}},[t._v("Okta to Okta")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/openidconnect/create-an-app-at-idp/"}},[t._v("OpenID Connect")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/saml2/create-an-app-at-idp/"}},[t._v("SAML 2.0")])],1)]),t._v(" "),o("h2",{attrs:{id:"support"}},[t._v("Support "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#support"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),o("p",[t._v("If you need help or have an issue, post a question in our "),o("a",{attrs:{href:"https://devforum.okta.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Developer Forum"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("NextSectionLink")],1)}),[],!1,null,null,null);e.default=r.exports}}]);