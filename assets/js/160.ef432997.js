(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{674:function(t,s,e){"use strict";e.r(s);var a=e(38),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("For an Okta Org Authorization Server, you can only create an ID token with a Groups claim, not an access token. For the steps to configure a Groups claim for use with an access token, see the "),e("GuideLink",{attrs:{link:"../use-static-group-allowlist-custom-as"}},[t._v("Use a static group whitelist with a Custom Authorization Server")]),t._v(" section.")],1),t._v(" "),e("RequireClassicUI"),t._v(" "),e("ol",[e("li",[t._v("In the Admin Console, from the "),e("strong",[t._v("Applications")]),t._v(" menu, select "),e("strong",[t._v("Applications")]),t._v(", and then select the OpenID Connect client application that you want to configure.")]),t._v(" "),e("li",[t._v("Navigate to the "),e("strong",[t._v("Sign On")]),t._v(" tab and click "),e("strong",[t._v("Edit")]),t._v(" in the "),e("strong",[t._v("OpenID Connect ID Token")]),t._v(" section.")]),t._v(" "),e("li",[t._v("In the "),e("strong",[t._v("Groups claim type")]),t._v(" section, select "),e("strong",[t._v("Expression")]),t._v(".")]),t._v(" "),e("li",[t._v("In "),e("strong",[t._v("Group claims expression")]),t._v(", leave the default name "),e("code",[t._v("groups")]),t._v(" (or add it if the box is empty) and then add this expression in the second box: "),e("code",[t._v('getFilteredGroups(app.profile.groupwhitelist, "group.name", 40)')])]),t._v(" "),e("li",[t._v("Click "),e("strong",[t._v("Save")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"request-an-id-token-that-contains-the-groups-claim"}},[t._v("Request an ID token that contains the Groups claim "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#request-an-id-token-that-contains-the-groups-claim"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("To obtain a token with the configured Groups claim, send a request for an ID token that includes the Groups claim as a scope to the authorization endpoint. For the specific steps on building the request URL, receiving the response, and decoding the JWT, see "),e("GuideLink",{attrs:{link:"../request-token-claim"}},[t._v("Request a token that contains the claim")]),t._v(".")],1),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" The scopes that you need to include as query parameters are "),e("code",[t._v("openid")]),t._v(" and "),e("code",[t._v("groups")]),t._v(".")])]),t._v(" "),e("p",[t._v("The resulting URL looks something like this:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v('/oauth2/v1/authorize?client_id=0oaoesxtxmPf08QHk0h7\n&response_type=id_token\n&scope=openid%20groups\n&redirect_uri=https%3A%2F%2Fexample.com\n&state=myState\n&nonce=yourNonceValue"')]),t._v("\n")])])]),e("p",[t._v("The decoded JWT looks something like this:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00uixa271s6x7qt8I0h7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ver"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iss"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${yourOktaDomain}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aud"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0oaoesxtxmPf08QHk0h7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iat"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1574117011")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1574120611")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jti"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ID.LPQaDhnBhZ9wy-B5BvamTBs7E2C8EzXuLA5P8Uyx-IE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amr"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mfa"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kba"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pwd"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"idp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00oixa26ycdNcX0VT0h7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nonce"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourNonceValue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"auth_time"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1574117006")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"groups"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IT"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The ID token contains the group "),e("strong",[t._v("IT")]),t._v(", so the audience ("),e("code",[t._v("aud")]),t._v(") has access to the group information about the user.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" For flows other than implicit, post to the token endpoint "),e("code",[t._v("https://${yourOktaDomain}/oauth2/v1/token")]),t._v(" with the user or client that you want. Make sure that the user is assigned to the app and to one of the Groups from your whitelist.")])]),t._v(" "),e("p",[t._v("If the results aren't as expected, start your troubleshooting by inspecting the "),e("RouterLink",{attrs:{to:"/docs/reference/api/system-log/"}},[t._v("System Log")]),t._v(" to see what went wrong.")],1),t._v(" "),e("NextSectionLink")],1)}),[],!1,null,null,null);s.default=n.exports}}]);