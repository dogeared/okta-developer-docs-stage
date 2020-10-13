(window.webpackJsonp=window.webpackJsonp||[]).push([[820],{1173:function(t,s,a){"use strict";a.r(s);var e=a(38),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This code uses the "),a("a",{attrs:{href:"https://github.com/okta/okta-jwt-verifier-golang",target:"_blank",rel:"noopener noreferrer"}},[t._v("Okta JWT Verifier for Golang"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("For any access token to be valid, the following must be asserted:")]),t._v(" "),a("ul",[a("li",[t._v("Signature is valid (the token was signed by a private key which has a corresponding public key in the JWKS response from the authorization server).")]),t._v(" "),a("li",[t._v("Access token is not expired (requires local system time to be in sync with Okta, checks the exp claim of the access token).")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("aud")]),t._v(" claim in the JWT matches any expected "),a("code",[t._v("aud")]),t._v(" claim passed in "),a("code",[t._v("ClaimsToValidate")]),t._v(" during setup.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("iss")]),t._v(" claim matches the issuer the verifier is constructed with.")]),t._v(" "),a("li",[t._v("Any custom claim assertions that you add are confirmed")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("okta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("okta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("jwt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("verifier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("golang\n\ntoValidate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ntoValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aud"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api://default"')]),t._v("\ntoValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{CLIENT_ID}"')]),t._v("\n\njwtVerifierSetup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" jwtverifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JwtVerifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{ISSUER}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ClaimsToValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" toValidate\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nverifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" jwtVerifierSetup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" verifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VerifyAccessToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{JWT}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("You may need to adjust your clock skew leeway. We default to a "),a("code",[t._v("PT2M")]),t._v(" clock skew adjustment in our validation. You can adjust this to your needs by setting the "),a("code",[t._v("SetLeeway")]),t._v(" in seconds after getting a new instance of the verifier:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("jwtVerifierSetup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" JwtVerifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{ISSUER}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nverifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" jwtVerifierSetup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nverifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetLeeway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// seconds")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);