(window.webpackJsonp=window.webpackJsonp||[]).push([[774],{1086:function(t,s,n){"use strict";n.r(s);var a=n(38),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Open the controller where you handle the sign-out process and update the "),n("code",[t._v("SignOut")]),t._v(" action. This time you need to also sign the user out of the Okta OIDC middleware with "),n("code",[t._v("OktaDefaults.MvcAuthenticationType")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token type-list"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token attribute"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpPost")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("ActionResult")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Identity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsAuthenticated"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            HttpContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetOwinContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authentication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                CookieAuthenticationDefaults"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthenticationType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                OktaDefaults"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MvcAuthenticationType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RedirectToAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Update your "),n("code",[t._v("using")]),t._v(" statements to import the following namespaces:")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Owin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Security"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cookies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Okta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("After users sign out of Okta, they are redirected to the location defined in "),n("GuideLink",{attrs:{link:"../define-signout-callback"}},[t._v("Define the sign-out callback")]),t._v(" section.")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);