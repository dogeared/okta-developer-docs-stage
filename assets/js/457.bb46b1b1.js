(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{537:function(t,e,o){"use strict";o.r(e);var n=o(38),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("In the "),o("strong",[t._v("General Settings")]),t._v(" section:")]),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("Name")]),t._v(" — Enter a name for the Identity Provider configuration.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Client Id")]),t._v(" — Paste the client ID that you obtained from the Okta org that represents the Identity Provider in the "),o("GuideLink",{attrs:{link:"../create-an-app-at-idp"}},[t._v("previous section")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Client Secret")]),t._v(" — Paste the secret that you obtained in the "),o("GuideLink",{attrs:{link:"../create-an-app-at-idp"}},[t._v("previous section")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Scopes")]),t._v(" — Leave the defaults. These scopes are included when your Okta org makes a request to the other Okta org that represents the Identity Provider.")]),t._v(" "),o("p",[t._v("By default, Okta requires the "),o("code",[t._v("email")]),t._v(" attribute for a user. The "),o("code",[t._v("email")]),t._v(" scope is required to create and link the user to Okta's Universal Directory.")])])]),t._v(" "),o("p",[t._v("In the "),o("strong",[t._v("Endpoints")]),t._v(" section:")]),t._v(" "),o("p",[t._v("Add the following endpoint URLs for the Okta Identity Provider that you are configuring. In the Okta org that represents the Identity Provider, you can find the endpoints in the well-known configuration document (for example, "),o("code",[t._v("https://{theOktaIdPOrg}/.well-known/openid-configuration")]),t._v(".")]),t._v(" "),o("ul",[o("li",{attrs:{theOktaIdPOrg:""}},[o("strong",[t._v("Issuer")]),t._v(" — The identifier of the Okta Identity Provider. For example, the Okta org where you created the Identity Provider app: "),o("code",[t._v("https://")])]),t._v(" "),o("li",[o("strong",[t._v("Authorization endpoint")]),t._v(" — The URL of the Okta Identity Provider's OAuth 2.0 authorization endpoint. For example: "),o("code",[t._v("https://{theOktaIdPOrg}/oauth2/v1/authorize")])]),t._v(" "),o("li",[o("strong",[t._v("Token endpoint")]),t._v(" — The URL of the Okta Identity Provider's token endpoint for obtaining access and ID tokens. For example: "),o("code",[t._v("https://{theOktaIdPOrg}/oauth2/v1/token")])]),t._v(" "),o("li",[o("strong",[t._v("JWKS endpoint")]),t._v(" — The URL of the Okta Identity Provider's JSON Web Key Set document. This document contains signing keys that are used to validate the signatures from the provider. For example: "),o("code",[t._v("https://{theOktaIdPOrg}/oauth2/v1/keys")])]),t._v(" "),o("li",[o("strong",[t._v("Userinfo endpoint")]),t._v(" — The endpoint for getting identity information about the user. For example: "),o("code",[t._v("https://{theOktaIdPOrg}/oauth2/v1/userinfo")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);