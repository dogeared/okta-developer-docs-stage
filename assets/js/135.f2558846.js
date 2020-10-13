(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{655:function(e,t,o){"use strict";o.r(t);var n=o(38),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Tokens contain claims that are statements about the subject (for example: name, role, or email address).")]),e._v(" "),o("p",[e._v("Create ID Token claims for OpenID Connect or access tokens for OAuth 2.0:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("In the Developer Console, navigate to "),o("strong",[e._v("API > Authorization Servers")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the name of the authorization server, and then click "),o("strong",[e._v("Claims")]),e._v(". Okta provides a default subject claim. You can edit the mapping or create your own claims.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Add Claim")]),e._v(", enter a "),o("strong",[e._v("Name")]),e._v(" for the claim, and configure the claim settings:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Include in token type")]),e._v(" — Select "),o("strong",[e._v("Access Token")]),e._v(" (OAuth 2.0) or "),o("strong",[e._v("ID Token")]),e._v(" (OpenID Connect). If you choose "),o("strong",[e._v("ID Token")]),e._v(", you can also define whether you want the claim included only when requested or always included.")]),e._v(" "),o("li",[o("strong",[e._v("Value type")]),e._v(" — Select whether you want to define the claim by a "),o("strong",[e._v("Groups")]),e._v(" filter or by an "),o("strong",[e._v("Expression")]),e._v(" written in Okta Expression Language.\n"),o("ul",[o("li",[o("strong",[e._v("Value")]),e._v(" — This option appears if you chose "),o("strong",[e._v("Expression")]),e._v(". Use Okta Expression Language syntax to generate values derived from attributes in Universal Directory and app profiles. Add the mapping here using "),o("RouterLink",{attrs:{to:"/docs/reference/okta-expression-language/"}},[e._v("Okta's Expression Language")]),e._v(", for example "),o("code",[e._v("appuser.username")]),e._v(".\nBe sure to check that your expression returns the results expected. You can validate an expression using the "),o("strong",[e._v("Token Preview")]),e._v(" tab.")],1),e._v(" "),o("li",[o("strong",[e._v("Filter")]),e._v(" — This option appears if you chose "),o("strong",[e._v("Groups")]),e._v(". Use it to add a group filter.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" Up to 100 groups are included in the claim. If the filter results in more than that, the request fails.")])])]),e._v(" "),o("li",[o("strong",[e._v("Disable claim")]),e._v(" — Select if you want to temporarily disable the claim for testing or debugging.")]),e._v(" "),o("li",[o("strong",[e._v("Include in")]),e._v(" — Specify whether the claim is valid for any scope or select the scopes for which the claim is valid.")])])])]),e._v(" "),o("NextSectionLink")],1)}),[],!1,null,null,null);t.default=s.exports}}]);