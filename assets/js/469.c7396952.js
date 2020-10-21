(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{550:function(e,t,o){"use strict";o.r(t);var n=o(38),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Use the Identity Provider's documentation to create a client application. For example, if you want to use PayPal as your OpenID Connect Identity Provider, click "),o("strong",[e._v("Create App")]),e._v(" on "),o("a",{attrs:{href:"https://developer.paypal.com/developer/applications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),o("OutboundLink")],1),e._v(" to create a PayPal client application.")]),e._v(" "),o("p",[e._v("You also need to add the redirect URI to the appropriate section. The redirect URI sent in the authorize request from the client needs to match the redirect URI in the Identity Provider (IdP). This is the URL where the IdP returns the authentication response (the access token and the ID token). It needs to be a secure domain that you own. This URL has the same structure for most Identity Providers in Okta and is constructed using your Okta subdomain and then the callback endpoint.")]),e._v(" "),o("p",[e._v("For example, if your Okta subdomain is called "),o("code",[e._v("company")]),e._v(", then the URL would be: "),o("code",[e._v("https://company.okta.com/oauth2/v1/authorize/callback")]),e._v(". If you have configured a custom domain in your Okta Org, use that value to construct your redirect URI, such as "),o("code",[e._v("https://login.company.com/oauth2/v1/authorize/callback")]),e._v(".")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" If you've built your own custom Identity Provider, you need the client ID and the client secret generated for the Identity Provider so you can add it to the Okta configuration in the next section.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);