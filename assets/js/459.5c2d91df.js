(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{543:function(e,t,n){"use strict";n.r(t);var o=n(23),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("In the "),n("strong",[e._v("General Settings")]),e._v(" section:")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Name")]),e._v(" — Enter a name for the Identity Provider configuration.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Client Id")]),e._v(" — Paste the app ID or client ID that you obtained when you configured the Identity Provider in the "),n("GuideLink",{attrs:{link:"../create-an-app-at-idp"}},[e._v("previous section")]),e._v(".")],1)]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Client Secret")]),e._v(" — Paste the secret that you obtained in the "),n("GuideLink",{attrs:{link:"../create-an-app-at-idp"}},[e._v("previous section")]),e._v(".")],1)]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Scopes")]),e._v(" — Leave the defaults. These scopes are included when Okta makes an OpenID Connect request to the Identity Provider.")]),e._v(" "),n("p",[e._v("By default, Okta requires the "),n("code",[e._v("email")]),e._v(" attribute for a user. The "),n("code",[e._v("email")]),e._v(" scope is required to create and link the user to Okta's Universal Directory.")])])]),e._v(" "),n("p",[e._v("In the "),n("strong",[e._v("Endpoints")]),e._v(" section:")]),e._v(" "),n("p",[e._v("Add the following endpoint URLs for the OpenID Connect Identity Provider that you are configuring. You can obtain the appropriate endpoints and the required scopes in the well-known configuration document for the Identity Provider (for example, "),n("code",[e._v("https://{theIdPdomain}/.well-known/openid-configuration")]),e._v("). See the "),n("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/openidconnect/configure-idp-in-okta/#well-known-configuration-urls"}},[e._v("Well-known configuration URLs")]),e._v(" section for URL details for the Identity Providers that we support.")],1),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Issuer")]),e._v(" — The identifier of the OpenID Connect provider. For example, where you created the Identity Provider app: "),n("code",[e._v("https://{theIdPdomain}/")])]),e._v(" "),n("li",[n("strong",[e._v("Authorization endpoint")]),e._v(" — The URL of the Identity Provider's OAuth 2.0 authorization endpoint. For example: "),n("code",[e._v("https://{theIdPdomain}/oauth2/v1/authorize")])]),e._v(" "),n("li",[n("strong",[e._v("Token endpoint")]),e._v(" — The URL of the Identity Provider's token endpoint for obtaining access and ID tokens. For example: "),n("code",[e._v("https://{theIdPdomain}/oauth2/v1/token")])]),e._v(" "),n("li",[n("strong",[e._v("JWKS endpoint")]),e._v(" — The URL of the Identity Provider's JSON Web Key Set document. This document contains signing keys that are used to validate the signatures from the provider. For example: "),n("code",[e._v("https://{theIdPdomain}/oauth2/v1/keys")])]),e._v(" "),n("li",[n("strong",[e._v("Userinfo endpoint")]),e._v(" — The endpoint for getting identity information about the user. For example: "),n("code",[e._v("https://{theIdPdomain}/oauth2/v1/userinfo")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);