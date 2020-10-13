(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{492:function(t,r,e){"use strict";e.r(r);var a=e(38),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("Library Versions")]),t._v(" "),e("p",[t._v("Okta publishes a number of officially-supported libraries and SDKs on "),e("a",{attrs:{href:"https://github.com/okta",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(". These libraries follow a consistent versioning and release pattern, described here. Note that this is separate from how Okta's HTTP APIs are "),e("RouterLink",{attrs:{to:"/docs/reference/releases-at-okta/"}},[t._v("versioned and released")]),t._v(".")],1),t._v(" "),e("p",[t._v("You can see a list of all our library versions and their support status at the "),e("a",{attrs:{href:"#current-versions"}},[t._v("bottom of this page")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"semantic-versioning"}},[t._v("Semantic Versioning "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#semantic-versioning"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("All of our libraries and SDKs follow "),e("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("semantic versioning"),e("OutboundLink")],1),t._v(". Library versions will always be "),e("code",[t._v("major.minor.patch")]),t._v(" - for example, "),e("code",[t._v("0.1.2")]),t._v(" or "),e("code",[t._v("2.1.33")]),t._v(".")]),t._v(" "),e("p",[t._v("We will:")]),t._v(" "),e("ul",[e("li",[t._v("Increase the "),e("strong",[t._v("patch")]),t._v(" version for bug fixes, security fixes, and code documentation. Backwards compatible; no breaking changes.")]),t._v(" "),e("li",[t._v("Increase the "),e("strong",[t._v("minor")]),t._v(" version for new features and additions to the library's interface. Backwards compatible; no breaking changes.")]),t._v(" "),e("li",[t._v("Increase the "),e("strong",[t._v("major")]),t._v(" version for breaking changes to the library's interface or breaking changes to behavior.")])]),t._v(" "),e("h2",{attrs:{id:"version-lifecycle"}},[t._v("Version Lifecycle "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#version-lifecycle"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Semantic versioning means that within a "),e("strong",[t._v("major")]),t._v(" version, you can safely apply minor and patch updates without your code breaking. The status of each major version series (for example, "),e("code",[t._v("1.x")]),t._v(" or "),e("code",[t._v("2.x")]),t._v(") follows this lifecycle:")]),t._v(" "),e("h3",{attrs:{id:"beta"}},[t._v("Beta "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#beta"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Beta versions are currently in development and are not ready for production use. While a library version is in beta, the code interface is not final and breaking changes could occur without warning.")]),t._v(" "),e("p",[t._v("New libraries (or new major versions of existing libraries) typically stay in beta for a period of time while we iterate on the design and get feedback from the community. When the library is ready for production, it will be marked as stable.")]),t._v(" "),e("h3",{attrs:{id:"stable"}},[t._v("Stable "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#stable"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Stable version series are supported by Okta for use in production code. Semantic versioning means that a stable major version may get new features (minor updates) or bug fixes (patch updates), but no breaking changes.")]),t._v(" "),e("h3",{attrs:{id:"retiring"}},[t._v("Retiring "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#retiring"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("When a new major version of a library is released, the old major version series will be marked as "),e("strong",[t._v("retiring")]),t._v(". Retiring libraries are supported by Okta for at least nine months. After this period of time, the version series will be officially retired (below).")]),t._v(" "),e("p",[t._v("For example, if version 2.0.0 of "),e("code",[t._v("okta-sdk-foobar")]),t._v(" is published in January, the 1.x series of "),e("code",[t._v("okta-sdk-foobar")]),t._v(" (any version starting 1) will be officially supported until "),e("em",[t._v("at least")]),t._v(" September. The retirement dates will be posted in the library's readme or documentation.")]),t._v(" "),e("h3",{attrs:{id:"retired"}},[t._v("Retired "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#retired"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Retired version series are no longer supported by Okta, and are no longer recommended for production use. Okta will not publish new features or bug fixes for retired versions, except for critical security fixes (at our discretion).")]),t._v(" "),e("p",[t._v("For example, after "),e("code",[t._v("okta-sdk-foobar")]),t._v(" version 1.x has a retiring period (of at least nine months), it is no longer supported. Customers and developers are encouraged to upgrade to 2.0.0 or later.")]),t._v(" "),e("p",[t._v("When in doubt, check GitHub! The library's readme will clearly state any versions that are retiring or have been retired.")]),t._v(" "),e("h2",{attrs:{id:"current-versions"}},[t._v("Current Versions "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#current-versions"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("This table lists the current (and historical) major versions of our open-source libraries and tools. The most up-to-date information is always available from the GitHub readme of a particular project.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Library")]),t._v(" "),e("th",[t._v("Version")]),t._v(" "),e("th",[t._v("Status")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-signin-widget",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sign-In Widget"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("1.13.0"),e("br"),t._v("2.21.0"),e("br"),t._v("3.9.2"),e("br"),e("strong",[t._v("4.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retired"),e("br"),t._v("Retiring on 2021-02-01"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-auth-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auth.js"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("1.x"),e("br"),t._v("2.x"),e("br"),t._v("3.x"),e("br"),e("strong",[t._v("4.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retiring on 2020-09-30"),e("br"),t._v("Retiring on 2021-05-30"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-sdk-appauth-android",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android AppAuth SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.2.4")]),t._v(" "),e("td",[t._v("Retired")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-oidc-android",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android OIDC"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("1.0.1")]),t._v(" "),e("td",[e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.1.0"),e("br"),t._v("1.x"),e("br"),e("strong",[t._v("2.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retiring on 2020-12-10"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-aspnet/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASP.NET SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("strong",[t._v("1.x")])]),t._v(" "),e("td",[e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-aspnet/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASP.NET Core SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("1.x"),e("br"),e("strong",[t._v("3.x")])]),t._v(" "),e("td",[e("strong",[t._v("Stable")]),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-jwt-verifier-golang",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT verifier for Go"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.x")]),t._v(" "),e("td",[t._v("Beta")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-oidc-ios",target:"_blank",rel:"noopener noreferrer"}},[t._v("OIDC iOS"),e("OutboundLink")],1),t._v(" ("),e("i",[t._v("formerly "),e("strong",[t._v("iOS AppAuth SDK")])]),t._v(")")]),t._v(" "),e("td",[t._v("1.x"),e("br"),t._v("2.x"),e("br"),e("strong",[t._v("3.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retired"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-ios-jwt",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS OktaJWT"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.1.0"),e("br"),e("strong",[t._v("1.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-auth-swift",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS authentication SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.1.0")]),t._v(" "),e("td",[t._v("Beta")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-sdk-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java management SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.0.x"),e("br"),e("strong",[t._v("1.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-auth-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java authentication SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("strong",[t._v("1.x")])]),t._v(" "),e("td",[e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-jwt-verifier-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT verifier for Java"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("strong",[t._v("0.x")])]),t._v(" "),e("td",[e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-spring-boot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot Starter"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("strong",[t._v("0.x")])]),t._v(" "),e("td",[e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-sdk-dotnet",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET management SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-sdk-dotnet/releases/tag/0.3.3.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("0.3.3"),e("OutboundLink")],1),e("br"),t._v("1.x"),e("br"),t._v("2.x"),e("br"),e("strong",[t._v("3.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retiring on 2020-12-27"),e("br"),t._v(" Retiring on 2021-04-10"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-auth-dotnet",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET authentication SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("1.x"),e("br"),e("strong",[t._v("2.x")])]),t._v(" "),e("td",[t._v("Retiring on 2021-03-29"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-sdk-nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js management SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("1.2.0"),e("br"),t._v("2.x"),e("br"),t._v("3.x"),e("br"),e("strong",[t._v("4.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retiring on 2020-12-04"),e("br"),t._v("Retiring on 2021-04-08"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-oidc-js/tree/master/packages/jwt-verifier",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT verifier for Node.js"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("strong",[t._v("0.x")])]),t._v(" "),e("td",[e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-oidc-js/blob/master/packages/oidc-middleware",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect middleware for Node.js"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("1.x"),e("br"),t._v("2.x"),e("br"),t._v("3.x"),e("br"),e("strong",[t._v("4.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retiring on 2020-10-10"),e("br"),t._v("Retiring on 2020-11-26"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-sdk-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP management SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.2.0"),e("br"),e("strong",[t._v("1.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-sdk-dotnet/tree/legacy/Okta.Core.Automation",target:"_blank",rel:"noopener noreferrer"}},[t._v("PowerShell Module"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("1.0.2")]),t._v(" "),e("td",[t._v("Retired")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-jwt-verifier-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT verifier for PHP"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("strong",[t._v("0.x")])]),t._v(" "),e("td",[e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-oidc-js/blob/master/packages/okta-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("React SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.0.13"),e("br"),t._v("1.x"),e("br"),t._v("2.x"),e("br"),e("strong",[t._v("3.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retiring on 2020-12-03"),e("br"),t._v("Retiring on 2020-12-25"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-oidc-js/blob/master/packages/okta-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.1.0"),e("br"),e("strong",[t._v("1.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),e("strong",[t._v("Stable")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/okta/okta-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue SDK"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("0.1.0"),e("br"),t._v("1.x"),e("br"),e("strong",[t._v("2.x")])]),t._v(" "),e("td",[t._v("Retired"),e("br"),t._v("Retiring on 2021-01-03"),e("br"),e("strong",[t._v("Stable")])])])])])])}),[],!1,null,null,null);r.default=o.exports}}]);