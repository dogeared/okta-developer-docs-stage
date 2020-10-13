(window.webpackJsonp=window.webpackJsonp||[]).push([[869],{1223:function(t,e,i){"use strict";i.r(e);var a=i(38),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",[t._v("Authentication/End-user rate limits")]),t._v(" "),i("p",[t._v("This page provides the API rate limits for authentication and end-user activities, which is part of Okta "),i("a",{attrs:{href:"/docs/reference/rate-limits"}},[t._v("rate limits")]),t._v(".")]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")])]),t._v(" "),i("ul",[i("li",[t._v("To learn more about rate limits, visit our "),i("a",{attrs:{href:"/docs/reference/rate-limits"}},[t._v("overview")]),t._v(" and "),i("a",{attrs:{href:"/docs/reference/rl-best-practices"}},[t._v("best practices")]),t._v(" pages.")]),t._v(" "),i("li",[t._v("In addition to the rate limit per API, Okta implements limits on concurrent requests, Okta-generated email messages, end user requests, and home page endpoints. These limits are described on the "),i("RouterLink",{attrs:{to:"/docs/reference/rl-additional-limits/"}},[t._v("Additional limits")]),t._v(" page.")],1),t._v(" "),i("li",[t._v("You can expand Okta rate limits upon request. To learn how, see "),i("RouterLink",{attrs:{to:"/docs/reference/rl-best-practices/#request-exceptions"}},[t._v("Request exceptions")]),t._v(" and "),i("RouterLink",{attrs:{to:"/docs/reference/rl-dynamic-scale/"}},[t._v("DynamicScale rate limits")]),t._v(".")],1)])]),t._v(" "),i("blockquote",[i("p",[t._v("We enforce limits at the individual API endpoint level "),i("strong",[t._v("as requests per minute")]),t._v(".")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Action and Okta API Endpoint")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Developer (free)")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Developer (paid)")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("One App")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Enterprise")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Workforce Identity")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("strong",[t._v("Cumulative rate limit")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("1,600")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("8,400")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("8,400")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("10,600")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("13,000")])])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Authenticate different end users:")]),i("br"),i("code",[t._v("/api/v1/authn")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Verify a factor:")]),i("br"),i("code",[t._v("/api/v1/authn/factors/{factorIdOrFactorType}/verify")]),t._v(" only")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Get session information:")]),i("br"),i("code",[t._v("/api/v1/sessions")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("750")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("OAuth2 requests for Custom Authorization Servers:")]),i("br"),i("code",[t._v("/oauth2/{authorizationServerId}/v1")]),t._v(" except public metadata endpoints (see Note below)")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,200")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,200")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,200")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2,000")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("OAuth2 requests for the Org Authorization Server:")]),i("br"),i("code",[t._v("/oauth2/v1")]),t._v(" except "),i("code",[t._v("/oauth2/v1/clients")]),t._v(" and public metadata endpoints (see Note below)")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,200")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,200")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,200")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2,000")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("All other OAuth2 requests:")]),i("br"),i("code",[t._v("/oauth2")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/app/{app}/{key}/sso/saml")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("750")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/app/office365{appType}/{key}/sso/wsfed/active")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2,000")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,000")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/app/office365{appType}/{key}/sso/wsfed/passive")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("250")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("250")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/app/template_saml_2_0/{key}/sso/saml")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2,500")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/login/login.htm")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("850")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/login/sso_iwa_auth")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/api/{apiVersion}/radius")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/idp/idx")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])])])]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")]),t._v(" The following public metadata endpoints aren't subjected to rate limiting.")]),t._v(" "),i("p",[t._v("Public metadata endpoints for Org Authorization Server are:")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("/oauth2/v1/keys")])]),t._v(" "),i("li",[i("code",[t._v("/.well-known/openid-configuration")])]),t._v(" "),i("li",[i("code",[t._v("/.well-known/oauth-authorization-server")])])]),t._v(" "),i("p",[t._v("Public metadata endpoints for Custom Authorization Servers are:")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("/oauth2/{authorizationServerId}/v1/keys")])]),t._v(" "),i("li",[i("code",[t._v("/oauth2/{authorizationServerId}/.well-known/openid-configuration")])]),t._v(" "),i("li",[i("code",[t._v("/oauth2/{authorizationServerId}/.well-known/oauth-authorization-server")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);