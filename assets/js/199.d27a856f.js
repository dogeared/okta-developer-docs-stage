(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{731:function(e,t,s){"use strict";s.r(t);var a=s(38),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("To request an access token using the Client Credentials grant flow, your app makes a request to your Okta "),s("a",{attrs:{href:"/docs/concepts/auth-servers"}},[e._v("Org Authorization Server's")]),e._v(" "),s("code",[e._v("/token")]),e._v(" endpoint.")]),e._v(" "),s("p",[e._v("Include the following parameters:")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("scope")]),e._v(" — Include the scopes that allow you to perform the actions on the endpoint that you want to access. The scopes requested for the access token must already be in the "),s("GuideLink",{attrs:{link:"../create-serviceapp-grantscopes/#grant-allowed-scopes"}},[e._v("application's grants collection")]),e._v(". See "),s("RouterLink",{attrs:{to:"/docs/guides/implement-oauth-for-okta/scopes/"}},[e._v("Scopes and supported endpoints")]),e._v(".")],1),e._v(" "),s("p",[e._v("In this example, we only request access for one scope. When you request an access token for multiple scopes, the format for the scope value looks like this: "),s("code",[e._v("scope=okta.users.read+okta.apps.read")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("client_assertion_type")]),e._v(" — Specifies the type of assertion, in this case a JWT token:  "),s("code",[e._v("urn:ietf:params:oauth:client-assertion-type:jwt-bearer")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("client_assertion")]),e._v(" — The signed JWT. Paste the JWT that you signed in the "),s("GuideLink",{attrs:{link:"../create-sign-jwt"}},[e._v("Create and sign the JWT")]),e._v(" section.")],1)])]),e._v(" "),s("p",[e._v("The following is an example request for an access token (the JWT is truncated for brevity).")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X POST "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://{yourOktaDomain}/oauth2/v1/token"')]),e._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/x-www-form-urlencoded"')]),e._v("\n    -d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"grant_type=client_credentials \\\n    &scope=okta.users.read \\\n    &client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer \\\n    &client_assertion=eyJhbGciOiJSUzI1…..feCJfSqsJeEKGjJqp1accnXpPbCSi1-2UQ"')]),e._v("\n")])])]),s("p",[e._v("The response should look something like this (the token is truncated for brevity):")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"eyJraWQiOiJ.....UfThlJ7w"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scope"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"okta.users.read"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("blockquote",[s("p",[s("strong",[e._v("Note:")]),e._v(" The lifetime for this token is fixed at one hour.")])]),e._v(" "),s("h3",{attrs:{id:"make-a-request"}},[e._v("Make a request "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#make-a-request"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),s("p",[e._v("Make a request to the "),s("code",[e._v("/users")]),e._v(" endpoint using the access token.")]),e._v(" "),s("ol",[s("li",[e._v("If you are using Postman to test, select the "),s("strong",[e._v("List Users")]),e._v(" "),s("code",[e._v("GET")]),e._v(" request to the "),s("code",[e._v("/api/v1/users")]),e._v(" endpoint to get back a list of all users.")]),e._v(" "),s("li",[e._v("On the "),s("strong",[e._v("Header")]),e._v(" tab, remove the existing Okta API token (SSWS Authorization API Key).")]),e._v(" "),s("li",[e._v("Click the "),s("strong",[e._v("Authorization")]),e._v(" tab and from the "),s("strong",[e._v("Type")]),e._v(" drop-down box, select "),s("strong",[e._v("OAuth 2.0")]),e._v(".")]),e._v(" "),s("li",[e._v("On the right, paste the access token into the "),s("strong",[e._v("Access Token")]),e._v(" box and click "),s("strong",[e._v("Send")]),e._v(". The response should contain an array of all the users associated with your app. This is dependent on the user's permissions.")])]),e._v(" "),s("p",[s("strong",[e._v("Example Request")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://{yourOktaDomain}/api/v1/users"')]),e._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/json"')]),e._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Bearer eyJraWQiOiJEa1lUbmhTdkd5OEJkbk9yMVdYTENhbVFRTUZiNTlYbHdBWVR2bVg5ekxNIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmRNcmJJc1paTWtMR0FyN1gwRVNKdmdsX19JOFF4N0pwQlhrVjV6ZGt5bk0iLCJpc3MiOiJodHRwczovL2xvZ2luLndyaXRlc2hhcnBlci5jb20iLCJhdWQiOiJodHRwczovL2dlbmVyaWNvaWRjLm9rdGFwcmV2aWV3LmNvbSIsInN1YiI6IjBvYXI5NXp0OXpJcFl1ejZBMGg3IiwiaWF0IjoxNTg4MTg1NDU3LCJleHAiOjE1ODgxODkwNTcsImNpZCI6IjBvYXI5NXp0OXpJcFl1ejZBMGg3Iiwic2NwIjpbIm9rdGEudXNlcnMubWFuYWdlIl19.TrrStbXUFtuH5TemMISgozR1xjT3rVaLHF8hqnwbe9gmFffVrLovY-JLl63G8vZVnyudvZ_fWkOBUxip1hcGm80KvrSgpdOp9Nazz-mjkP6T6JwslRFHDe8SC_4h2LG9zi5PV9y3hAayBK51q1HIwgAxl_2F7q4l0jLKDFsWjQS8epNaB05NLI12BDvO-C-7ZGGJ4EQfGS9EjN9lS-vWnt_V3ojTL0BJCKgL5Y0c9D2VkSqVN4j-7BSRZt0Un3MAEgznXmk2ecg3y7s9linGR0mC3QqKeyDfFNdsUJG6ac0h2CFFZQizpQu1DFmI_ADKmzxVQGPICuslgJFFoIF4ZA"')]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);