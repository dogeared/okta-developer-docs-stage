(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{728:function(e,t,o){"use strict";o.r(t);var a=o(38),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Kicking off this flow is very similar to the "),o("RouterLink",{attrs:{to:"/docs/guides/implement-auth-code/"}},[e._v("authorization code flow")]),e._v(" except that the "),o("code",[e._v("response_type")]),e._v(" is "),o("code",[e._v("token")]),e._v(" and/or "),o("code",[e._v("id_token")]),e._v(" instead of "),o("code",[e._v("code")]),e._v(".")],1),e._v(" "),o("p",[e._v("Your application redirects the user's browser to your authorization server's "),o("code",[e._v("/authorize")]),e._v(" endpoint. If you are using the default Okta authorization server, then your request URL would look something like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("https://${yourOktaDomain}/oauth2/default/v1/authorize?client_id=0oabv6kx4qq6\nh1U5l0h7&response_type=token&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3\nA8080&state=state-296bc9a0-a2a2-4a57-be1a-d0e2fd9bb601&nonce=foo'\n")])])]),o("p",[e._v("Note the parameters that are being passed:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("client_id")]),e._v(" matches the Client ID of your Okta OAuth application that you created above. You can find it at the bottom of your application's General tab.")]),e._v(" "),o("li",[o("code",[e._v("response_type")]),e._v(" is "),o("code",[e._v("token")]),e._v(". It could also be "),o("code",[e._v("id_token")]),e._v(" or both.")]),e._v(" "),o("li",[o("code",[e._v("scope")]),e._v(" is "),o("code",[e._v("openid")]),e._v(" which is required, though additional scopes can be requested. For more information about scopes, see "),o("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#scopes"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("redirect_uri")]),e._v(" is the callback location where the user-agent will be directed to along with the "),o("code",[e._v("access_token")]),e._v('. This must match one of the "Login redirect URIs" you specified when you were creating your Okta application in Step 1.')]),e._v(" "),o("li",[o("code",[e._v("state")]),e._v(" is an arbitrary alphanumeric string that the authorization server will reproduce when redirecting the user-agent back to the client. This is used to help prevent cross-site request forgery.")])]),e._v(" "),o("p",[e._v("For more information on these parameters, see "),o("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#authorize"}},[e._v("the OAuth 2.0 API reference")]),e._v(".")],1),e._v(" "),o("p",[e._v("If the user does not have an existing session, this will open the Okta Sign-in Page. If they have an existing session, or after they authenticate, they will be redirected back to the specified "),o("code",[e._v("redirect_uri")]),e._v(" along with a "),o("code",[e._v("token")]),e._v(" as a hash fragment:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("http://localhost:8080/#access_token=eyJhb[...]erw&token_type=Bearer&expires_in=\n3600&scope=openid&state=state-296bc9a0-a2a2-4a57-be1a-d0e2fd9bb601\n")])])]),o("p",[e._v("Your application must now extract the token(s) from the URI and store them.")]),e._v(" "),o("NextSectionLink",[e._v("Next Steps")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);