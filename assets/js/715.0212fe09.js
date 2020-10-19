(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{1022:function(t,s,a){"use strict";a.r(s);var e=a(38),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("ASP.NET Core automatically populates "),a("code",[t._v("HttpContext.User")]),t._v(" with the information Okta sends back about the user. You can check whether the user is signed in with "),a("code",[t._v("User.Identity.IsAuthenticated")]),t._v(" in your actions or views and see all of the user's claims in "),a("code",[t._v("User.Claims")]),t._v(".")]),t._v(" "),a("p",[t._v("To access claims in your controllers, use the "),a("code",[t._v("User")]),t._v(" property that is attached to the "),a("code",[t._v("HttpContext")]),t._v(" object:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Authorize")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("IActionResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Profile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" userClaims "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HttpContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Claims"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Or use the "),a("code",[t._v("User")]),t._v(" property directly in your views:")]),t._v(" "),a("div",{staticClass:"language-cshtml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@using System.Security.Claims;\n//...\n@foreach (var claim in ((ClaimsIdentity)User.Identity).Claims)\n{\n    <dt title="@claim.Type">@claim.Type</dt>\n    <dd>@claim.Value</dd>\n}\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);