(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{663:function(t,e,s){"use strict";s.r(e);var a=s(38),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("To include custom claims in an ID token or an access token, add the claim to your Custom Authorization Server.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" You can only add custom claims to a Custom Authorization Server, not the Org Authorization Server. See "),s("RouterLink",{attrs:{to:"/docs/guides/customize-authz-server/overview/"}},[t._v("Authorization Servers")]),t._v(" for more information on the types of authorization servers available to you and what you can use them for.")],1)]),t._v(" "),s("p",[t._v("To add a custom claim:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("In the Developer Console, navigate to "),s("strong",[t._v("API")]),t._v(", and then "),s("strong",[t._v("Authorization Servers")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Select the name of the authorization server and then click "),s("strong",[t._v("Claims")]),t._v(". Okta provides a default subject claim. You can edit that mapping or create your own claims. For this example, we are creating a custom claim.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Add Claim")]),t._v(", and then configure the claim settings:")]),t._v(" "),s("ul",[s("li",[t._v("Enter a "),s("strong",[t._v("Name")]),t._v(" for the claim. In this example, we use "),s("strong",[t._v("IDTClaim")]),t._v(" for the ID token and "),s("strong",[t._v("ATClaim")]),t._v(" for the access token.")]),t._v(" "),s("li",[s("strong",[t._v("Include in token type")]),t._v(" — If you are creating a claim for an ID token, select "),s("strong",[t._v("ID Token")]),t._v(" (for OpenID Connect). You can then define whether you want the claim included only when requested or always included. For this example, select "),s("strong",[t._v("Always")]),t._v(".\nIf you are creating a claim for an access token, leave "),s("strong",[t._v("Access Token")]),t._v(" (for OAuth 2.0) selected.")]),t._v(" "),s("li",[s("strong",[t._v("Value type")]),t._v(" — Select whether you want to define the claim by a "),s("strong",[t._v("Groups")]),t._v(" filter or by an "),s("strong",[t._v("Expression")]),t._v(" written in Okta Expression Language. For this example, select "),s("strong",[t._v("Expression")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("Value")]),t._v(" — This option appears if you chose "),s("strong",[t._v("Expression")]),t._v(". Use "),s("RouterLink",{attrs:{to:"/docs/reference/okta-expression-language/"}},[t._v("Okta Expression Language")]),t._v(" syntax to generate values derived from attributes in Universal Directory and app profiles. For the ID token example, we use "),s("code",[t._v("user.preferredLanguage")]),t._v(" and for the access token example, we use "),s("code",[t._v("user.secondEmail")]),t._v(". These are referencing an Okta user profile attribute.")],1)]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" You can validate that your expression returns the results expected using the "),s("strong",[t._v("Token Preview")]),t._v(" tab.")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Disable claim")]),t._v(" — Select if you want to temporarily disable the claim for testing or debugging. Leave this clear for this example.")]),t._v(" "),s("li",[s("strong",[t._v("Include in")]),t._v(" — Specify whether the claim is valid for any scope or select the scopes for which the claim is valid. Leave "),s("strong",[t._v("Any scope")]),t._v(" selected for this example.")])])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Create")]),t._v(".")])])]),t._v(" "),s("h3",{attrs:{id:"verify-the-custom-claim"}},[t._v("Verify the custom claim "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#verify-the-custom-claim"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),s("p",[t._v("To confirm that your custom claim was successfully added, you can "),s("RouterLink",{attrs:{to:"/docs/reference/api/authorization-servers/#get-all-claims"}},[t._v("retrieve a list of all claims")]),t._v(" from your authorization server, including the custom ones, using the "),s("code",[t._v("/claims")]),t._v(" endpoint:")],1),t._v(" "),s("p",[s("code",[t._v("https://${yourOktaDomain}/api/v1/authorizationServers/${authServerId}/claims")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" If you added the claim to the default authorization server, the "),s("code",[t._v("${authServerId}")]),t._v(" is "),s("code",[t._v("default")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"request-a-token-that-contains-the-custom-claim"}},[t._v("Request a token that contains the custom claim "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#request-a-token-that-contains-the-custom-claim"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),s("p",[t._v("To test the full authentication flow that returns an ID token or an access token, build your request URL. For the specific steps on building the request URL, receiving the response, and decoding the JWT, see "),s("GuideLink",{attrs:{link:"../request-token-claim"}},[t._v("Request a token that contains a custom claim")]),t._v(".")],1),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" The scope that you need to include as a query parameter is "),s("code",[t._v("openid")]),t._v(".")])]),t._v(" "),s("p",[t._v("The resulting URL looks something like this:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/oauth2/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${authServerId}")]),t._v('/v1/authorize?client_id=examplefa39J4jXdcCwWA\n&response_type=id_token\n&scope=openid\n&redirect_uri=https%3A%2F%2FyourRedirectUriHere.com\n&state=myState\n&nonce=myNonceValue"')]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" The "),s("code",[t._v("response_type")]),t._v(" for an access token looks like this: "),s("code",[t._v("&response_type=token")])])]),t._v(" "),s("p",[t._v("The decoded JWT looks something like this:")]),t._v(" "),s("p",[s("strong",[t._v("ID token")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00uixa271s6x7qt8I0h7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iss"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}/oauth2/${authServerId}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aud"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0oaoesxtxmPf08QHk0h7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iat"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1573762864")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1573766464")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jti"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ID.T-ngjNl193t6rg3_eXifJatKDhLPviN8NG02wJLWf2g"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mfa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pwd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kba"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"idp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00oixa26ycdNcX0VT0h7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nonce"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myNonceValue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"auth_time"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1573756969")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IDTClaim"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eng"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Access token")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jti"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AT.bcNo4WsBA8QS81SOrrTxWbqMsO50lrFxlYK88DlAPiM"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iss"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}/oauth2/default"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aud"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api://default"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iat"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1573775216")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1573778816")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0oaoesxtxmPf08QHk0h7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00uixa271s6x7qt8I0h7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openid"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"joe.user@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ATClaim"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"juser@gmail.com"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("NextSectionLink")],1)}),[],!1,null,null,null);e.default=r.exports}}]);