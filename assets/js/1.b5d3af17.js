(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1064:function(t,e,o){"use strict";o.r(e);var n=o(38),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("Signing out of Okta requires the app to open a browser and navigate to the "),o("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#logout"}},[t._v("end session endpoint")]),t._v(". Okta ends the user's session and immediately redirects the user back to your application. To do this, you must define a callback route for the sign-out process, which means that you need to whitelist the post sign-out URL in your Okta application settings. If you don't specify a "),o("code",[t._v("post_logout_redirect_uri")]),t._v(", then the browser is redirected to the Okta sign-in page.")],1),t._v(" "),o("p",[t._v("Open your Okta Developer Console:")]),t._v(" "),o("p",[o("a",{staticClass:"Button--blue",attrs:{href:"https://login.okta.com/",target:"_blank"}},[t._v("Go to Console")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Select "),o("strong",[t._v("Applications")]),t._v(", and then select your application.")])]),t._v(" "),o("li",[o("p",[t._v("Select "),o("strong",[t._v("General")]),t._v(" and click "),o("strong",[t._v("Edit")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Logout redirect URIs")]),t._v(" section, add the base URI of your application.")]),t._v(" "),o("StackSelector",{attrs:{snippet:"addbaseuri"}})],1),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Save")]),t._v(".")])])]),t._v(" "),o("NextSectionLink")],1)}),[],!1,null,null,null);e.default=s.exports}}]);