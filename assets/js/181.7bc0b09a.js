(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{718:function(e,t,a){"use strict";a.r(t);var o=a(38),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Just like with the regular authorization code flow, your app starts by redirecting the user's browser to your authorization server's "),a("code",[e._v("/authorize")]),e._v(" endpoint. However, in this instance you will also have to pass along a code challenge.")]),e._v(" "),a("p",[e._v("Your first step is to generate a code verifier and challenge:")]),e._v(" "),a("ul",[a("li",[e._v("Code verifier: Random URL-safe string with a minimum length of 43 characters.")]),e._v(" "),a("li",[e._v("Code challenge: Base64 URL-encoded SHA-256 hash of the code verifier.")])]),e._v(" "),a("p",[e._v("You'll need to add code in your native app to create the code verifier and code challenge. For examples of code that handles this, see "),a("a",{attrs:{href:"#examples"}},[e._v("below")]),e._v(".")]),e._v(" "),a("p",[e._v("The PKCE generator code will create output like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "code_verifier":"M25iVXpKU3puUjFaYWg3T1NDTDQtcW1ROUY5YXlwalNoc0hhakxifmZHag",\n  "code_challenge":"qjrzSW9gMiUgpUvqgEPE4_-8swvyCtfOVvg55o5S_es"\n}\n')])])]),a("p",[e._v("The "),a("code",[e._v("code_challenge")]),e._v(" is a Base64-URL-encoded string of the SHA256 hash of the "),a("code",[e._v("code_verifier")]),e._v(". Your app will save the "),a("code",[e._v("code_verifier")]),e._v(" for later, and send the "),a("code",[e._v("code_challenge")]),e._v(" along with the authorization request to your authorization server's "),a("code",[e._v("/authorize")]),e._v(" URL.")]),e._v(" "),a("p",[e._v("If you are using the default Okta authorization server, then your request URL would look something like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://${yourOktaDomain}/oauth2/default/v1/authorize?client_id=0oabygpxgk9l\nXaMgF0h7&response_type=code&scope=openid&redirect_uri=yourApp%3A%2Fcallback&st\nate=state-8600b31f-52d1-4dca-987c-386e3d8967e9&code_challenge_method=S256&code_\nchallenge=qjrzSW9gMiUgpUvqgEPE4_-8swvyCtfOVvg55o5S_es\n")])])]),a("p",[e._v("Note the parameters that are being passed:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("client_id")]),e._v(" matches the Client ID of your Okta OAuth application that you created above. You can find it at the bottom of your application's General tab.")]),e._v(" "),a("li",[a("code",[e._v("response_type")]),e._v(" is "),a("code",[e._v("code")]),e._v(", indicating that we are using the authorization code grant type.")]),e._v(" "),a("li",[a("code",[e._v("scope")]),e._v(" is "),a("code",[e._v("openid")]),e._v(", which means that the "),a("code",[e._v("/token")]),e._v(" endpoint will return an ID token. For more information about scopes, see "),a("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#scopes"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[a("code",[e._v("redirect_uri")]),e._v(" is the callback location where the user-agent will be directed to along with the "),a("code",[e._v("code")]),e._v('. This must match one of the "Login redirect URIs" you specified when you were creating your Okta application in Step 1.')]),e._v(" "),a("li",[a("code",[e._v("state")]),e._v(" is an arbitrary alphanumeric string that the authorization server will reproduce when redirecting the user-agent back to the client. This is used to help prevent cross-site request forgery.")]),e._v(" "),a("li",[a("code",[e._v("code_challenge_method")]),e._v(" is the hash method used to generate the challenge, which will always be "),a("code",[e._v("S256")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("code_challenge")]),e._v(" is the code challenge used for PKCE.")])]),e._v(" "),a("p",[e._v("For more information on these parameters, see "),a("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#authorize"}},[e._v("the OAuth 2.0 API reference")]),e._v(".")],1),e._v(" "),a("p",[e._v("If the user does not have an existing session, this will open the Okta Sign-in Page. If they have an existing session, or after they authenticate, they will arrive at the specified "),a("code",[e._v("redirect_uri")]),e._v(" along with an authorization "),a("code",[e._v("code")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yourApp:/callback?code=BdLDvZvO3ZfSwg-asLNk&state=state-8600b31f-52d1-4dca-\n987c-386e3d8967e9\n")])])]),a("p",[e._v("This code can only be used once, and will remain valid for 60 seconds, during which time it can be exchanged for tokens.")]),e._v(" "),a("NextSectionLink")],1)}),[],!1,null,null,null);t.default=i.exports}}]);