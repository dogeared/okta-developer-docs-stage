(window.webpackJsonp=window.webpackJsonp||[]).push([[869],{1218:function(e,t,r){"use strict";r.r(t);var o=r(38),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",[e._v("SCIM Protocol")]),e._v(" "),r("p",[e._v("The System for Cross-domain Identity Management (SCIM) specification is a provisioning protocol to create, retrieve, update, and deactivate users and groups between Okta and downstream applications and directories.")]),e._v(" "),r("p",[e._v("For more background on the SCIM protocol, how it works, and particular use cases, see our topic on "),r("RouterLink",{attrs:{to:"/docs/concepts/scim/"}},[e._v("Understanding SCIM")]),e._v(".")],1),e._v(" "),r("p",[e._v("For a developer's guide to implementing the SCIM REST API with Okta and your application, the following links each contain all the information relevant to your specific SCIM:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/docs/reference/scim/scim-20/"}},[e._v("Okta and SCIM Version 2.0")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/reference/scim/scim-11/"}},[e._v("Okta and SCIM Version 1.1")])],1)]),e._v(" "),r("p",[e._v("Okta currently supports both Version 2.0 and Version 1.1 of the SCIM protocol specifications. If you haven't yet implemented SCIM, Okta recommends that you implement SCIM 2.0.")]),e._v(" "),r("p",[e._v("To work with Okta, your SCIM application must use RESTful endpoints constructed according to either the "),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7644",target:"_blank",rel:"noopener noreferrer"}},[e._v("V2.0"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"http://www.simplecloud.info/specs/draft-scim-api-01.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("V1.1"),r("OutboundLink")],1),e._v(" SCIM protocol specification. The URL of your SCIM server is plugged into the SCIM integration in your Okta org. Okta then communicates with the endpoints through a series of HTTP requests and responses using POST, GET, PUT, and PATCH operations.")]),e._v(" "),r("h3",{attrs:{id:"differences-between-version-2-0-and-1-1"}},[e._v("Differences between version 2.0 and 1.1 "),r("a",{staticClass:"header-anchor header-link",attrs:{href:"#differences-between-version-2-0-and-1-1"}},[r("svg",{attrs:{viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),r("ul",[r("li",[e._v("Different namespaces means that Version 2.0 URIs are not backwards compatible with 1.1:\n"),r("ul",[r("li",[e._v("V2.0:\n"),r("ul",[r("li",[r("code",[e._v("urn:ietf:params:scim:schemas:core:2.0:User")])]),e._v(" "),r("li",[r("code",[e._v("urn:ietf:params:scim:schemas:extension:enterprise:2.0:User")])])])]),e._v(" "),r("li",[e._v("V1.1:\n"),r("ul",[r("li",[r("code",[e._v("urn:scim:schemas:core:1.0")])]),e._v(" "),r("li",[r("code",[e._v("urn:scim:schemas:extension:enterprise:1.0")])])])])])]),e._v(" "),r("li",[e._v("The Service Provider configuration endpoint has no "),r("code",[e._v("s")]),e._v(" at the end of the SCIM 2.0 endpoint:\n"),r("ul",[r("li",[e._v("V2.0:\n"),r("ul",[r("li",[r("code",[e._v("/ServiceProviderConfig")])])])]),e._v(" "),r("li",[e._v("V1.1:\n"),r("ul",[r("li",[r("code",[e._v("/ServiceProviderConfigs")])])])])])]),e._v(" "),r("li",[e._v("V2.0 also :\n"),r("ul",[r("li",[e._v("Supports using JSON PATCH operations "),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7644#section-3.5.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Section 3.5.2"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Requires that the response include the "),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7644#section-3.12",target:"_blank",rel:"noopener noreferrer"}},[e._v("errors in a JSON body"),r("OutboundLink")],1),e._v(", using the error response schema "),r("code",[e._v("urn:ietf:params:scim:api:messages:2.0:Error")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);