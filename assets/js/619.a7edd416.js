(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{896:function(t,e,s){"use strict";s.r(e);var a=s(38),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("To enable persistent SSO for iOS apps, you need to update the "),s("RouterLink",{attrs:{to:"/docs/reference/api/policy/#signon-action-object"}},[s("code",[t._v("usePersistentCookie")])]),t._v(" parameter in the appropriate Okta sign-on policy. These steps use the Okta "),s("RouterLink",{attrs:{to:"/docs/reference/postman-collections/"}},[t._v("Policy Postman collection")]),t._v(" to enable the parameter.")],1),t._v(" "),s("p",[t._v("Before you begin, be sure to:")]),t._v(" "),s("ul",[s("li",[t._v("Create an "),s("RouterLink",{attrs:{to:"/docs/guides/create-an-api-token/overview/"}},[t._v("API token")]),t._v(" for your Org.")],1),t._v(" "),s("li",[t._v("Download the "),s("RouterLink",{attrs:{to:"/docs/reference/postman-collections/"}},[t._v("Policy Postman collection")]),t._v(".")],1)]),t._v(" "),s("ol",[s("li",[s("p",[t._v("In Postman, expand the "),s("strong",[t._v("Policies (Okta API)")]),t._v(" folder, and then the "),s("strong",[t._v("Okta Sign On")]),t._v(" folder.")])]),t._v(" "),s("li",[s("p",[t._v("Click the "),s("strong",[t._v("Get Okta Sign On Policies")]),t._v(" request to open it, and then click "),s("strong",[t._v("Send")]),t._v(" to run it.")]),t._v(" "),s("p",[t._v("Example request:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("GET https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/api/v1/policies?type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OKTA_SIGN_ON\n")])])])]),t._v(" "),s("li",[s("p",[t._v("In the response, locate the policy that you want to modify and copy its "),s("code",[t._v("id")]),t._v(" value.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip:")]),t._v(" You can also highlight the policy ID, right-click it, and set it as the value for the "),s("code",[t._v("policyId")]),t._v(" variable in your environment.")])])]),t._v(" "),s("li",[s("p",[t._v("Click the "),s("strong",[t._v("Get Rules")]),t._v(" request to open it.")])]),t._v(" "),s("li",[s("p",[t._v("In the request URL, replace the "),s("code",[t._v("policyId")]),t._v(" variable with the policy ID that you copied. If you assigned the policy ID as a variable in your environment, skip this step.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip:")]),t._v(" To see which value is assigned to a variable, hover over the variable in the request URL and a box pops up that displays the currently assigned variable value.")])])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Send")]),t._v(" to run the request.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("GET https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/api/v1/policies/00p2sy9ploJnRwPwp5g7/rules\n")])])])]),t._v(" "),s("li",[s("p",[t._v("In the response, locate the rule that you want to modify, copy its "),s("code",[t._v("id")]),t._v(" value, and copy the "),s("code",[t._v("actions")]),t._v(" property section of the JSON payload.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip:")]),t._v(" You can also highlight the rule ID, right-click, and set it as the value for the "),s("code",[t._v("ruleId")]),t._v(" variable in your environment.")])])]),t._v(" "),s("li",[s("p",[t._v("Click the "),s("strong",[t._v("Update Sign On Rule")]),t._v(" request to open it.")])]),t._v(" "),s("li",[s("p",[t._v("In the request URL, replace the "),s("code",[t._v("policyId")]),t._v(" and "),s("code",[t._v("ruleId")]),t._v(" variables with the policy ID and rule ID that you copied previously. If you assigned these as variables in your environment, skip this step.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("PUT https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/api/v1/policies/00p2sy9ploJnRwPwp5g7/rules/0pr2syd4moJ2gFXnD5g7\n\n")])])]),s("p",[t._v("Or")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("https://"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/api/v1/policies/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("policyId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/rules/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ruleId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Select the "),s("strong",[t._v("Body")]),t._v(" tab of the request and add "),s("code",[t._v('"type": "SIGN_ON",')]),t._v(" just below the "),s("code",[t._v("name")]),t._v(" parameter.")])]),t._v(" "),s("li",[s("p",[t._v("Replace the "),s("code",[t._v("actions")]),t._v(" property with the "),s("code",[t._v("actions")]),t._v(" property that you copied previously.")])]),t._v(" "),s("li",[s("p",[t._v("In the "),s("code",[t._v("actions")]),t._v(" property section, change the "),s("code",[t._v("usePersistentCookie")]),t._v(" parameter value to "),s("code",[t._v("true")]),t._v(".")]),t._v(" "),s("p",[t._v("Body:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Policy Rule"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SIGN_ON"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"actions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ALLOW"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requireFactor"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"factorPromptMode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ALWAYS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rememberDeviceByDefault"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"session"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usePersistentCookie"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maxSessionIdleMinutes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maxSessionLifetimeMinutes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Send")]),t._v(" to run the update request.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);