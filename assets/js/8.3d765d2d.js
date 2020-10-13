(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{559:function(e,t,o){"use strict";o.r(t);var i=o(38),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("The Okta Identity Provider that you created in the "),o("GuideLink",{attrs:{link:"../configure-idp-in-okta"}},[e._v("second step")]),e._v(" generated an authorize URL with a number of blank parameters that you can fill in to test the flow with the Identity Provider. The authorize URL initiates the authorization flow that authenticates the user with the Identity Provider.")],1),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" Use this step to test your authorization URL as an HTML link. For information on using the Sign-in Widget, Okta Hosted Sign-in Page, or AuthJS, see the "),o("GuideLink",{attrs:{link:"../use-idp-to-sign-in"}},[e._v("next step")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("In the URL, replace {yourOktaDomain} with your org's base URL, and then replace the following values:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("client_id")]),e._v(": Use the "),o("code",[e._v("client_id")]),e._v(" value that you obtained from the OpenID Connect client application in the "),o("GuideLink",{attrs:{link:"../register-app-in-okta"}},[e._v("previous section")]),e._v(". This is not the "),o("code",[e._v("client_id")]),e._v(" from the Identity Provider.")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("response_type")]),e._v(" —; Determines which flow is used. For the "),o("RouterLink",{attrs:{to:"/docs/guides/implement-implicit/overview/"}},[e._v("Implicit")]),e._v(" flow, this should be "),o("code",[e._v("id_token")]),e._v(". For the "),o("RouterLink",{attrs:{to:"/docs/guides/implement-auth-code/overview/"}},[e._v("Authorization Code")]),e._v(" flow, this should be "),o("code",[e._v("code")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("response_mode")]),e._v(" —; Determines how the authorization response should be returned. This should be "),o("code",[e._v("fragment")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("scope")]),e._v(" —; Determines the claims that are returned in the ID token. Include the scopes that you want to request authorization for and separate each by a space. You need to include at least the "),o("code",[e._v("openid")]),e._v(" scope. You can request any of the standard OpenID Connect scopes about users, such as "),o("code",[e._v("profile")]),e._v(" and "),o("code",[e._v("email")]),e._v(" as well as any custom scopes specific to your Identity Provider.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("redirect_uri")]),e._v(" —; The location where Okta returns a browser after the user finishes authenticating with their Identity Provider. This URL must start with HTTPS and must match one of the redirect URIs that you configured in the "),o("GuideLink",{attrs:{link:"../register-app-in-okta"}},[e._v("previous section")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("code",[e._v("state")]),e._v(" —; Protects against cross-site request forgery (CSRF). Can be any value.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("nonce")]),e._v(" —; A string included in the returned ID token. Use it to associate a client session with an ID token and to mitigate replay attacks. Can be any value.")])])]),e._v(" "),o("p",[e._v("For a full explanation of all of these parameters, see: "),o("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#request-parameters"}},[e._v("/authorize Request parameters")]),e._v(".")],1),e._v(" "),o("p",[e._v("An example of a complete URL looks like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("https://${yourOktaDomain}/oauth2/v1/authorize?idp=0oaaq9pjc2ujmFZexample&client_id=GkGw4K49N4UEE1example&response_type=id_token&response_mode=fragment&scope=openid%20email&redirect_uri=https%3A%2F%2FyourAppUrlHere.com%2F&state=WM6D&nonce=YsG76jo\n")])])]),o("NextSectionLink")],1)}),[],!1,null,null,null);t.default=n.exports}}]);