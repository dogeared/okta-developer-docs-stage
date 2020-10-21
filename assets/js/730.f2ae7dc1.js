(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{1036:function(t,s,n){"use strict";n.r(s);var a=n(38),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("To create a Sign In link, open your "),n("code",[t._v("_Layout.cshtml")]),t._v(" file and add the following code:")]),t._v(" "),n("div",{staticClass:"language-cshtml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('@if (User.Identity.IsAuthenticated)\n{\n    <p class="navbar-text">Hello, @User.Identity.Name</p>\n}\nelse\n{\n    <a asp-controller="Account" asp-action="SignIn">Sign In</a>\n}\n')])])]),n("p",[t._v("The Sign In link uses tag helpers to invoke a "),n("code",[t._v("SignIn")]),t._v(" action on an "),n("code",[t._v("Account")]),t._v(" controller. Create an "),n("code",[t._v("AccountController")]),t._v(" class with this code:")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authentication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authentication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cookies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mvc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Okta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token type-list"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("IActionResult")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignIn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("HttpContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Identity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsAuthenticated"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Challenge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OktaDefaults"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MvcAuthenticationScheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RedirectToAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("At this point, you should be able to run the project and sign in.")])])}),[],!1,null,null,null);s.default=e.exports}}]);