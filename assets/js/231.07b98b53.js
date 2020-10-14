(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{855:function(e,t,s){"use strict";s.r(t);var a=s(23),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("The token revocation endpoint can revoke either access or refresh tokens. Revoking an access token doesn't revoke the associated refresh token. However, revoking a refresh token does revoke the associated access token.")]),e._v(" "),s("h3",{attrs:{id:"revoke-only-the-access-token"}},[e._v("Revoke only the access token "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#revoke-only-the-access-token"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),s("p",[e._v("Revoking only the access token effectively forces the client to use the refresh token in a request to retrieve a new access token. This could be useful if, for example, you have changed a user's data, and you want this information to be reflected in a new access token.")]),e._v(" "),s("p",[s("strong",[e._v("Request Example")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${yourOktadomain}")]),e._v("/oauth2/v1/revoke'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/x-www-form-urlencoded"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Basic MG9hbmF3ZX...WwtOFRCYQ=="')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"token=eyJraWQiOiJ....aDvfximOQ"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"token_type_hint=access_token"')]),e._v("\n")])])]),s("blockquote",[s("p",[s("strong",[e._v("Note:")]),e._v(" Since revoking a token that is invalid, expired, or already revoked returns a "),s("code",[e._v("200 OK")]),e._v(" status code, you should test that the token has been revoked by making, for example, a GET request to the "),s("code",[e._v("/users")]),e._v(" endpoint.")])]),e._v(" "),s("h3",{attrs:{id:"revoke-only-the-refresh-token"}},[e._v("Revoke only the refresh token "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#revoke-only-the-refresh-token"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),s("p",[e._v("If you revoke only the refresh token, then the access token is also revoked. This allows you to, for example, force a user to reauthenticate.")]),e._v(" "),s("p",[s("strong",[e._v("Request Example")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${yourOktadomain}")]),e._v("/oauth2/v1/revoke'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/x-www-form-urlencoded"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Basic MG9hbmF3...FRCYQ=="')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"token=JSbdNrF...FOtMJw"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"token_type_hint=refresh_token"')]),e._v("\n")])])]),s("p",[e._v("See "),s("RouterLink",{attrs:{to:"/docs/reference/api/authorization-servers/#rule-properties"}},[e._v("Rule policies")]),e._v(" for more information on configuring Time to Live (TTL) and other parameters involving access and refresh tokens.")],1),e._v(" "),s("NextSectionLink")],1)}),[],!1,null,null,null);t.default=n.exports}}]);