(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{1219:function(t,e,i){"use strict";i.r(e);var a=i(38),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",[t._v("Additional rate limits")]),t._v(" "),i("p",[t._v("This page provides Okta's additional limits on:")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#concurrent-rate-limits"}},[t._v("Concurrent requests")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#end-user-rate-limits"}},[t._v("End-user rate limit")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#home-page-endpoints-and-per-minute-limits"}},[t._v("Home page endpoints")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#per-user-limits"}},[t._v("Per-user limits")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#okta-generated-email-message-rate-limits"}},[t._v("Okta-generated email messages")])])]),t._v(" "),i("p",[t._v("These limits are part of the Okta "),i("a",{attrs:{href:"/docs/reference/rate-limits"}},[t._v("Rate limit")]),t._v(" policy.")]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")])]),t._v(" "),i("ul",[i("li",[t._v("In addition to the rate limits listed on this page, Okta applies rate limits per API, divided into three categories. See the "),i("a",{attrs:{href:"/docs/reference/rate-limits"}},[t._v("Rate limit overview")]),t._v(".")]),t._v(" "),i("li",[t._v("To learn more about how to manage rate limits, see our "),i("a",{attrs:{href:"/docs/reference/rl-best-practices"}},[t._v("best practices")]),t._v(".")]),t._v(" "),i("li",[t._v("You can expand Okta rate limits upon request. To learn how, see "),i("RouterLink",{attrs:{to:"/docs/reference/rl-best-practices/#request-exceptions"}},[t._v("Request exceptions")]),t._v(" and "),i("RouterLink",{attrs:{to:"/docs/reference/rl-dynamic-scale/"}},[t._v("DynamicScale rate limits")]),t._v(".")],1)])]),t._v(" "),i("h2",{attrs:{id:"concurrent-rate-limits"}},[t._v("Concurrent rate limits "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#concurrent-rate-limits"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),i("p",[t._v("To protect the service for all customers, Okta enforces concurrent rate limits, which is a limit on the number of simultaneous transactions. Concurrent rate limits are distinct from "),i("RouterLink",{attrs:{to:"/docs/reference/rate-limits/"}},[t._v("the org-wide, per-minute API rate limits")]),t._v(", which measure the total number of transactions per minute. Transactions are typically very short-lived. Even very large bulk loads rarely use more than 10 simultaneous transactions at a time.")],1),t._v(" "),i("p",[t._v("For concurrent rate limits, traffic is measured in three different areas. Counts in one area aren't included in counts for the other two:")]),t._v(" "),i("ul",[i("li",[t._v("For agent traffic, Okta has set the limit based on typical org use. This limit varies from agent to agent.")]),t._v(" "),i("li",[t._v("For Office365 traffic, the limit is 75 concurrent transactions per org.")]),t._v(" "),i("li",[t._v("For all other traffic, including API requests, the limit is described in the table below.")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"right"}},[t._v("Developer (free)")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Developer (paid)")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("One App")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Enterprise")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Workforce Identity")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("15")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("35")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("35")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("75")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("75")])])])]),t._v(" "),i("p",[t._v("The first request to exceed the concurrent limit returns an HTTP 429 error, and the first error every 60 seconds is written to the log. Reporting concurrent rate limits once a minute keeps log volume manageable.")]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")]),t._v(" Under normal circumstances, customers don't exceed the concurrency limits. Exceeding them may be an indication of a problem that requires investigation.")])]),t._v(" "),i("p",[t._v("These rate limits apply to all new Okta organizations. For orgs created before 2018-05-17, the "),i("RouterLink",{attrs:{to:"/docs/reference/rl-previous/"}},[t._v("previous rate limits")]),t._v(" still apply.")],1),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")]),t._v(" For information on possible interaction between Inline Hooks and concurrent rate limits, see "),i("RouterLink",{attrs:{to:"/docs/concepts/inline-hooks/#inline-hooks-and-concurrent-rate-limits"}},[t._v("Inline hooks and concurrent rate limits")]),t._v(".")],1)]),t._v(" "),i("h3",{attrs:{id:"end-user-rate-limits"}},[t._v("End-user rate limits "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#end-user-rate-limits"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),i("p",[t._v("Okta limits the number of requests from the Admin Console and End-User Dashboard to 40 requests per user per 10 seconds per endpoint. This rate limit protects users from each other and from other API requests in the system.")]),t._v(" "),i("p",[t._v("If a user exceeds this limit, they receive an HTTP 429 error response without affecting other users in your org. A message is written to the System Log that indicates that the end-user rate limit was encountered.")]),t._v(" "),i("h3",{attrs:{id:"home-page-endpoints-and-per-minute-limits"}},[t._v("Home page endpoints and per-minute limits "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#home-page-endpoints-and-per-minute-limits"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),i("p",[t._v("The following endpoints are used by the Okta home page for authentication and user sign in and have org-wide rate limits:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Okta Home Page Endpoints")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Developer (free)")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Developer (paid)")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("One App")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Enterprise")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Workforce Identity")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("code",[t._v("/app/{app}/{key}/sso/saml")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("750")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/app/office365/{key}/sso/wsfed/active")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2000")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1000")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/app/office365/{key}/sso/wsfed/passive")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("N/A")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("250")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("250")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/app/template_saml_2_0/{key}/sso/saml")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2500")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/login/do-login")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("200")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/login/login.htm")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("850")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/login/sso_iwa_auth")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/api/plugin/{protocolVersion}/form-cred/{appUserIds}/{formSiteOption}")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("650")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/api/plugin/{protocolVersion}/sites")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("20")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("50")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("50")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("150")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/bc/image/fileStoreRecord")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/bc/globalFileStoreRecord")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("*600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])])])]),t._v(" "),i("p",[t._v("These rate limits apply to all new Okta organizations. For orgs created before 2018-05-17, the "),i("RouterLink",{attrs:{to:"/docs/reference/rl-previous/"}},[t._v("previous rate limits")]),t._v(" still apply.")],1),t._v(" "),i("p",[t._v("The limits for these endpoints can be increased by purchasing the "),i("RouterLink",{attrs:{to:"/docs/reference/rl-previous/#high-capacity-rate-limits"}},[t._v("High-capacity add-on")]),t._v(".")],1),t._v(" "),i("h3",{attrs:{id:"per-user-limits"}},[t._v("Per-user limits "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#per-user-limits"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),i("p",[t._v("API endpoints that take username and password credentials, including the "),i("RouterLink",{attrs:{to:"/docs/reference/api/authn/"}},[t._v("Authentication API")]),t._v(" and the "),i("RouterLink",{attrs:{to:"/docs/guides/implement-password/"}},[t._v("OAuth 2.0 resource owner password flow")]),t._v(", have a per-username rate limit to prevent brute force attacks with the user's password:")],1),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Action and Okta API Endpoint")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Per User Limits (All Orgs)")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("strong",[t._v("Authenticate the same user:")]),i("br"),i("code",[t._v("/api/v1/authn")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("4 per second")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Generate or refresh an OAuth 2.0 token:")]),i("br"),i("code",[t._v("/oauth2/v1/token")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("4 per second")])])])]),t._v(" "),i("h3",{attrs:{id:"okta-generated-email-message-rate-limits"}},[t._v("Okta-generated email message rate limits "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#okta-generated-email-message-rate-limits"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),i("p",[t._v("Limits are applied on a per-recipient basis and vary by email type. The limit for some email types is no more than 30 emails per-recipient, per-minute, while other email types are configured with higher limits. These limits protect your org against denial-of-service attacks and help ensure that adequate resources are available for all customers.")])])}),[],!1,null,null,null);e.default=r.exports}}]);