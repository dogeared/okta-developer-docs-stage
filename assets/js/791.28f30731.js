(window.webpackJsonp=window.webpackJsonp||[]).push([[791],{1109:function(t,s,n){"use strict";n.r(s);var a=n(38),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Add a "),n("code",[t._v("SignOut")]),t._v(" action that accepts an "),n("code",[t._v("HTTP POST")]),t._v(" and signs the user out with "),n("code",[t._v("CookieAuthenticationDefaults.AuthenticationScheme")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token type-list"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token attribute"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpPost")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IActionResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOutAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" HttpContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOutAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CookieAuthenticationDefaults"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthenticationScheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RedirectToAction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Update your "),n("code",[t._v("using")]),t._v(" statements to import the following namespaces:")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authentication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authentication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cookies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mvc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Okta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Finally, give the user a "),n("strong",[t._v("Sign Out")]),t._v(" button or link. Open your "),n("code",[t._v("_Layout.cshtml")]),t._v(" file and add the following code:")]),t._v(" "),n("div",{staticClass:"language-cshtml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div>\n    @*...*@\n    @if (User.Identity.IsAuthenticated)\n    {\n        <ul>\n            <li><p>Hello, @User.Identity.Name</p></li>\n            <li>\n                <a onclick="document.getElementById(\'logout_form\').submit();" style="cursor: pointer;">\n                    Sign out\n                </a>\n            </li>\n        </ul>\n        <form asp-controller="Account" asp-action="SignOutAsync" method="post" id="logout_form"></form>\n    }\n    else\n    {\n        <ul>\n            <li><a asp-controller="Account" asp-action="SignIn">Sign in</a></li>\n        </ul>\n    }\n</div>\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);