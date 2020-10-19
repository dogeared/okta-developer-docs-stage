(window.webpackJsonp=window.webpackJsonp||[]).push([[784],{1098:function(t,n,s){"use strict";s.r(n);var a=s(38),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Add a "),s("code",[t._v("SignOut")]),t._v(" action that accepts an "),s("code",[t._v("HTTP POST")]),t._v(" and signs the user out with "),s("code",[t._v("CookieAuthenticationDefaults.AuthenticationType")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpPost")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("ActionResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOut")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Identity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsAuthenticated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            HttpContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetOwinContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authentication\n                       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOut")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CookieAuthenticationDefaults"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthenticationType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RedirectToAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Update your "),s("code",[t._v("using")]),t._v(" statements to import the "),s("code",[t._v("Microsoft.Owin.Security.Cookies")]),t._v(" namespace:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Owin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Security"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cookies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Finally, give the user a "),s("strong",[t._v("Sign Out")]),t._v(" button or link. Open your "),s("code",[t._v("_Layout.cshtml")]),t._v(" file and add the following code:")]),t._v(" "),s("div",{staticClass:"language-cshtml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div>\n    @*...*@\n    @if (Context.User.Identity.IsAuthenticated)\n    {\n        <ul>\n            <li>\n                <p>Hello, <b>@Context.User.Identity.Name</b></p>\n            </li>\n            <li>\n                <a onclick="document.getElementById(\'logout_form\').submit();" style="cursor: pointer;">\n                    Sign out\n                </a>\n            </li>\n        </ul>\n        <form action="/Account/SignOut" method="post" id="logout_form"></form>\n    }\n    else\n    {\n        <ul>\n            <li>@Html.ActionLink("Sign in", "SignIn", "Account")</li>\n        </ul>\n    }\n</div>\n')])])])])}),[],!1,null,null,null);n.default=e.exports}}]);