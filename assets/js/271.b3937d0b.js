(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1158:function(t,n,a){"use strict";a.r(n);var e=a(38),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Call the "),a("RouterLink",{attrs:{to:"/docs/reference/api/apps/#update-key-credential-for-application"}},[t._v("Apps API")]),t._v(" with the app ID you obtained in Step 1. In the body, include\nthe app name and the app label that you obtained in Step 1, the key ID that you obtained in Step 2, and the value "),a("em",[t._v("SAML_2_0")]),t._v(" for the sign on mode.")],1),t._v(" "),a("p",[t._v("Request:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -v -X PUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: SSWS '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${api_token}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "name": "appname",\n  "label": "Application Name",\n  "signOnMode": "SAML_2_0",\n  "credentials": {\n    "signing": {\n      "kid": "w__Yr9AElCftDtLP5CmjzZFMKXndqHtx7B3QPkg9jrI"\n    }\n  }\n}\'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/api/v1/apps/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${aid}")]),t._v('"')]),t._v("\n\n")])])]),a("NextSectionLink")],1)}),[],!1,null,null,null);n.default=s.exports}}]);