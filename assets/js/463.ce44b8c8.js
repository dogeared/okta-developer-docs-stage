(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{543:function(t,e,o){"use strict";o.r(e);var n=o(38),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("ol",[o("li",[o("p",[t._v("Create an Azure AD app using these "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Redirect URI")]),t._v(" section of the page, paste the Okta redirect URI. The redirect URI sent in the authorize request from the client needs to match the redirect URI in the Identity Provider (IdP). This is the URL where the IdP returns the authentication response (the access token and the ID token). It needs to be a secure domain that you own. This URL has the same structure for most Identity Providers in Okta and is constructed using your Okta subdomain and then the callback endpoint.")]),t._v(" "),o("p",[t._v("For example, if your Okta subdomain is called "),o("code",[t._v("company")]),t._v(", then the URL would be: "),o("code",[t._v("https://company.okta.com/oauth2/v1/authorize/callback")]),t._v(". If you have configured a custom domain in your Okta Org, use that value to construct your redirect URI, such as "),o("code",[t._v("https://login.company.com/oauth2/v1/authorize/callback")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Copy the Application ID value so that you can add it to the Okta configuration in the "),o("GuideLink",{attrs:{link:"../configure-idp-in-okta"}},[t._v("next section")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("Under "),o("strong",[t._v("Certificates & secrets")]),t._v(", click "),o("strong",[t._v("New client secret")]),t._v(" to generate a client secret for your app. Copy the value so that you can add it to the Okta configuration in the next section. This is the secret that corresponds to your Application ID.")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note:")]),t._v(" There may be additional settings for the app that you can configure. The steps in this guide address the quickest route to setting up Azure AD as an Identity Provider with Okta. See the Azure AD documentation for more information on additional configuration settings.")])])])]),t._v(" "),o("p",[t._v("For use in the "),o("GuideLink",{attrs:{link:"../configure-idp-in-okta"}},[t._v("next section")]),t._v(", do the following:")],1),t._v(" "),o("ol",[o("li",[o("p",[t._v("On the app "),o("strong",[t._v("Overview")]),t._v(" page, click "),o("strong",[t._v("Endpoints")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the panel that appears, copy the "),o("strong",[t._v("OpenID Connect metadata document URL")]),t._v(" and then paste that URL into a browser window to obtain the following endpoints:")]),t._v(" "),o("ul",[o("li",[t._v("Issuer")]),t._v(" "),o("li",[t._v("Authorization")]),t._v(" "),o("li",[t._v("Token")]),t._v(" "),o("li",[t._v("JWKS")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note:")]),t._v(" The userinfo endpoint is optional.")])])]),t._v(" "),o("li",[o("p",[t._v("Paste the endpoints into a text editor for use in the next section.")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);