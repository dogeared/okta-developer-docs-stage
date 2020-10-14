(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{844:function(t,s,a){"use strict";a.r(s);var e=a(23),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("To refresh your access token as well as an ID token, you send a token request with a "),a("code",[t._v("grant_type")]),t._v(" of "),a("code",[t._v("refresh_token")]),t._v(". Be sure to include the "),a("code",[t._v("openid")]),t._v(" scope when you want to refresh the ID token.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("http --form POST https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/oauth2/default/v1/token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  accept:application/json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  authorization:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Basic MG9hYmg3M...'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  cache-control:no-cache "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  content-type:application/x-www-form-urlencoded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("grant_type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("refresh_token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("redirect_uri")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://localhost:8080 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("offline_access%20openid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("refresh_token")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("MIOf-U1zQbyfa3MUfJHhvnUqIut9ClH0xjlDXGJAyqo\n")])])]),a("p",[t._v("If the refresh token is valid, then you get back a new access/refresh token combination.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" The access and ID tokens are truncated for brevity.")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJ[...]K1Sun9bA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"offline_access%20openid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIOf-U1zQbyfa3MUfJHhvnUqIut9ClH0xjlDXGJAyqo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJraWQiO[...]hMEJQX6WRQ"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);