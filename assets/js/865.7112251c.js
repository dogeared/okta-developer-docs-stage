(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{1217:function(t,e,i){"use strict";i.r(e);var v=i(23),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",[t._v("Management rate limits")]),t._v(" "),i("p",[t._v("This page provides the API rate limits for management activities, which is part of Okta "),i("a",{attrs:{href:"/docs/reference/rate-limits"}},[t._v("rate limits")]),t._v(".")]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")])]),t._v(" "),i("ul",[i("li",[t._v("To learn more about rate limits, visit our "),i("a",{attrs:{href:"/docs/reference/rate-limits"}},[t._v("overview")]),t._v(" and "),i("a",{attrs:{href:"/docs/reference/rl-best-practices"}},[t._v("best practices")]),t._v(" pages.")]),t._v(" "),i("li",[t._v("In addition to the rate limit per API, Okta implements limits on concurrent requests, Okta-generated email messages, end user requests, and home page endpoints. These limits are described on the "),i("RouterLink",{attrs:{to:"/docs/reference/rl-additional-limits/"}},[t._v("Additional limits")]),t._v(" page.")],1),t._v(" "),i("li",[t._v("You can expand Okta rate limits upon request. To learn how, see "),i("RouterLink",{attrs:{to:"/docs/reference/rl-best-practices/#request-exceptions"}},[t._v("Request exceptions")]),t._v(" and "),i("RouterLink",{attrs:{to:"/docs/reference/rl-dynamic-scale/"}},[t._v("DynamicScale rate limits")]),t._v(".")],1)])]),t._v(" "),i("blockquote",[i("p",[t._v("We enforce limits at the individual API endpoint level "),i("strong",[t._v("as requests per minute")]),t._v(".")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Action and Okta API Endpoint")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Developer (free)")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Developer (paid)")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("One App")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Enterprise")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Workforce Identity")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("strong",[t._v("Cumulative rate limit")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("980")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("2,400")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("2,400")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("5,200")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[i("strong",[t._v("7,000")])])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Create or list applications:")]),i("br"),i("code",[t._v("/api/v1/apps")]),t._v(" except "),i("code",[t._v("/api/v1/apps/{id}")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("20")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("25")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("25")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Get, update, or delete an application by ID:")]),i("br"),i("code",[t._v("/api/v1/apps/{id}")]),t._v(" only")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Create or list groups:")]),i("br"),i("code",[t._v("/api/v1/groups")]),t._v(" except "),i("code",[t._v("/api/v1/groups/{id}")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("500")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Get, update, or delete a group by ID:")]),i("br"),i("code",[t._v("/api/v1/groups/{id}")]),t._v(" only")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,000")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Create or list users:")]),i("br"),t._v("Only "),i("code",[t._v("GET")]),t._v(" or "),i("code",[t._v("POST")]),t._v(" to "),i("code",[t._v("/api/v1/users")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Update or delete a user by ID:")]),i("br"),t._v("Only "),i("code",[t._v("POST")]),t._v(", "),i("code",[t._v("PUT")]),t._v(" or "),i("code",[t._v("DELETE")]),t._v(" to "),i("code",[t._v("/api/v1/users/{id}")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Get System Log data:")]),i("br"),i("code",[t._v("/api/v1/logs")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("20")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("25")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("25")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("50")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("120")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Get System Log data:")]),i("br"),i("code",[t._v("/api/v1/events")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("20")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("25")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("25")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("50")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("OAuth2 client configuration requests:")]),i("br"),i("code",[t._v("/oauth2/v1/clients")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("25")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("50")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("50")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Most other API actions:")]),i("br"),i("code",[t._v("/api/v1")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("600")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,200")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("Get a user by ID or sign in")]),i("br"),t._v("Only "),i("code",[t._v("GET")]),t._v(" to "),i("code",[t._v("/api/v1/users/{idOrLogin}")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("300")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1,000")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2,000")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/api/v1/certificateAuthorities")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("150")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("/api/v1/devices")])]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("150")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);