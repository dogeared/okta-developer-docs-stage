(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{529:function(e,t,o){"use strict";o.r(t);var r=o(38),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",[e._v("SCIM technical questions")]),e._v(" "),o("p",[o("strong",[e._v("Q: Our API is similar to SCIM, but isn't 100% compliant. Can we still integrate with Okta?")])]),e._v(" "),o("p",[e._v("Guidance on what endpoints need to be implemented can be found in our "),o("RouterLink",{attrs:{to:"/docs/reference/scim/"}},[e._v("SCIM Reference")]),e._v(" documentation for either SCIM "),o("RouterLink",{attrs:{to:"/docs/reference/scim/scim-20/"}},[e._v("V2.0")]),e._v(" or "),o("RouterLink",{attrs:{to:"/docs/reference/scim/scim-11/"}},[e._v("V1.1")]),e._v(" deployments.")],1),e._v(" "),o("p",[o("strong",[e._v("Q: How should I be managing authentication to my SCIM API?")])]),e._v(" "),o("p",[e._v("Okta recommends using the "),o("RouterLink",{attrs:{to:"/docs/guides/implement-auth-code/"}},[e._v("OAuth 2.0 Authorization Code grant flow")]),e._v(". Okta doesn't support the Client Credentials or Resource Owner Password Credentials Authorization grant flows for SCIM. The Authorization Code grant flow is more common in SaaS and cloud integrations and is also more secure.")],1),e._v(" "),o("p",[e._v("In addition to OAuth, Okta also supports connections with basic auth and header token auth options.")]),e._v(" "),o("p",[o("strong",[e._v("Q: I have a multi-tenant integration. How do I allow my customers to customize their specific tenant in Okta?")])]),e._v(" "),o("p",[e._v("Use the OAuth 2.0 Authorization Code grant flow, so that you know exactly which token the customer is using.")]),e._v(" "),o("p",[e._v("Another option is when the customer configures your Okta integration, Okta can prompt them to add their unique subdomain for your cloud application.")]),e._v(" "),o("p",[e._v("Okta can use part of this URL in the SCIM endpoint for that customer, for example:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("http://www.company.com/**tenantA**/scim")])]),e._v(" "),o("li",[o("code",[e._v("http://www.company.com/**tenantB**/scim")])])]),e._v(" "),o("p",[e._v("This subdomain field can be configured in consultation with Okta after you submit your integration for Okta review.")]),e._v(" "),o("p",[o("strong",[e._v("Q: I only have one email/phone number/address in my user profile. Do I need to use an array for it?")])]),e._v(" "),o("p",[e._v("Yes, you must return these fields in an array structure. This is a multi-valued attribute as outlined in "),o("a",{attrs:{href:"https://tools.ietf.org/html/rfc7159#section-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("section 5"),o("OutboundLink")],1),e._v(" of the SCIM specification.")]),e._v(" "),o("p",[o("strong",[e._v("Q: What determines the primary value for email, phone numbers, or addresses?")])]),e._v(" "),o("p",[e._v("The returned array must have a "),o("code",[e._v("primary=true")]),e._v(" attribute for the value that Okta takes as the primary value for the user profile.")]),e._v(" "),o("p",[o("strong",[e._v("Q: When would I need to implement the "),o("code",[e._v("type")]),e._v(" sub-attribute for emails, phone numbers, or addresses?")])]),e._v(" "),o("p",[e._v("By default, Okta doesn't use the "),o("code",[e._v("type")]),e._v(" sub-attribute, other than to read the type attribute of your primary value attribute. However, if your SCIM integration does need to distinguish between various canonical entries for an attribute (for example, differentiating between a home and work email address), then you can use the "),o("code",[e._v("type")]),e._v(" sub-attribute in the returned array.")]),e._v(" "),o("p",[e._v("If your integration doesn't need to distinguish between canonical entries, you can just delete the "),o("code",[e._v("emailType")]),e._v(" (or "),o("code",[e._v("addressType")]),e._v(" or "),o("code",[e._v("primaryPhoneType")]),e._v(") attribute and mapping from your profile schema.")]),e._v(" "),o("ul",[o("li",[e._v("See "),o("a",{attrs:{href:"https://tools.ietf.org/html/rfc7643#section-2.4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Section 2.4 of RFC 7643"),o("OutboundLink")],1),e._v(" for more details on returning multi-valued attributes.")]),e._v(" "),o("li",[e._v("You shouldn't return the same value and type combination more than once per attribute, as this complicates processing by the client.")]),e._v(" "),o("li",[e._v("In the schema definition, you can define a list of recommended canonical values for an attribute (see "),o("a",{attrs:{href:"https://tools.ietf.org/html/rfc7643#section-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 7643 Section 7"),o("OutboundLink")],1),e._v(").")])]),e._v(" "),o("p",[o("strong",[e._v("Q: Why doesn't Okta support DELETE /Users?")])]),e._v(" "),o("p",[e._v('In Okta, user profiles are marked as "deactivated". This fact means that Okta never makes a DELETE request against a user resource through your SCIM API. Instead, Okta sends a request to set the '),o("code",[e._v("active")]),e._v(" value to "),o("code",[e._v("false")]),e._v('. You\'ll need to support the concept of an "active" and "inactive" user within your application.')]),e._v(" "),o("p",[e._v("For a detailed explanation on deleting user profiles, see "),o("RouterLink",{attrs:{to:"/docs/concepts/scim/#delete-deprovision"}},[e._v("Delete (Deprovision)")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("Q: What parts of the SCIM spec aren't included in Okta's SCIM implementation?")])]),e._v(" "),o("p",[e._v("Okta continually strives to improve our support for components of the SCIM protocol specification. Currently, we don't use the following parts of the SCIM specification:")]),e._v(" "),o("ul",[o("li",[e._v("Search queries using POST")]),e._v(" "),o("li",[e._v("Bulk operations")]),e._v(" "),o("li",[o("code",[e._v("/Me")]),e._v(" endpoint")]),e._v(" "),o("li",[o("code",[e._v("/Schemas")]),e._v(" endpoint")]),e._v(" "),o("li",[o("code",[e._v("/ServiceProviderConfig")]),e._v(" endpoint")]),e._v(" "),o("li",[o("code",[e._v("/ResourceTypes")]),e._v(" endpoint")]),e._v(" "),o("li",[e._v("Query filtering using "),o("code",[e._v("meta.lastModified")])])]),e._v(" "),o("p",[o("strong",[e._v("Q: How does data validation work with SCIM provisioning? For example, if my application requires the phone number in a specific format, how do I ensure that Okta passes the attribute in that format? If a data validation error issue occurs, how does error reporting work?")])]),e._v(" "),o("p",[e._v("The SCIM specification identifies valid data formats for a given user profile attribute. However, to preserve flexibility, Okta doesn't rigorously validate that the customer has submitted values that meet those requirements.")]),e._v(" "),o("p",[e._v("Therefore, data validation should be handled by your application. When Okta provisions a user profile to your server, your application should check that the data is valid according to any special requirements. Error messages sent in response from your application are surfaced to the Okta administrator through alerts and tasks in the Okta interface.")]),e._v(" "),o("p",[e._v("You should also specify your data requirements in the configuration document that you provide for using your integration.")]),e._v(" "),o("p",[o("strong",[e._v("Q: How much support is required for filtering results?")])]),e._v(" "),o("p",[e._v("The filtering capabilities in the SCIM protocol are pretty broad, but the common filtering use case with Okta is quite narrow. Okta determines if a newly created user already exists in your application based on a matching identifier. This means the "),o("code",[e._v("eq")]),e._v(" (equals) operator is all you really need to support.")]),e._v(" "),o("p",[o("strong",[e._v("Q: How do I import users?")])]),e._v(" "),o("p",[e._v("User import operations are initiated by Okta, either manually or on a schedule. To run an import for your SCIM users, go into the Okta Admin Console:")]),e._v(" "),o("ol",[o("li",[e._v("Select your SCIM integration from the list of integrations in your Okta org.")]),e._v(" "),o("li",[e._v("Under the "),o("strong",[e._v("Import")]),e._v(" tab, click "),o("strong",[e._v("To Okta")]),e._v(" and "),o("strong",[e._v("Import Now")]),e._v(" to do a one-time import.")]),e._v(" "),o("li",[e._v("Okta prompts you to review and confirm assignments for any users that aren't automatically matched to existing Okta users.")])]),e._v(" "),o("p",[e._v("To set up a regular schedule for importing users, go into the Okta Admin Console:")]),e._v(" "),o("ol",[o("li",[e._v("Select your SCIM integration from the list of integrations in your Okta org.")]),e._v(" "),o("li",[e._v("Under the "),o("strong",[e._v("Provisioning")]),e._v(" tab, click "),o("strong",[e._v("To Okta")]),e._v(" and "),o("strong",[e._v("Edit")]),e._v(" in the General section.")]),e._v(" "),o("li",[e._v("In the "),o("strong",[e._v("Full Import Schedule")]),e._v(" drop down, you can choose from hourly, daily, or weekly imports.")])]),e._v(" "),o("p",[e._v("For more details on the import functionality of Okta, see "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Importing_People",target:"_blank",rel:"noopener noreferrer"}},[e._v("Import users"),o("OutboundLink")],1),e._v(" in our Product Help documentation.")]),e._v(" "),o("p",[o("strong",[e._v("Q: How do I get my SCIM integration to use "),o("code",[e._v("PUT")]),e._v(" requests instead of "),o("code",[e._v("PATCH")]),e._v(" when updating users and groups?")])]),e._v(" "),o("p",[e._v("SCIM integrations that are created using the templates from the OIN catalog have "),o("code",[e._v("PATCH")]),e._v(" enabled by default. However, if your SCIM server doesn't support "),o("code",[e._v("PATCH")]),e._v(", you can send an email to "),o("a",{attrs:{href:"mailto:developers@okta.com"}},[e._v("developers@okta.com")]),e._v(" and request to change your integration to use "),o("code",[e._v("PUT")]),e._v(" for updates.")]),e._v(" "),o("p",[e._v("SCIM integrations that are created using the Application Integration Wizard use "),o("code",[e._v("PUT")]),e._v(" by default. They can't be reconfigured to use "),o("code",[e._v("PATCH")]),e._v(" for updates.")]),e._v(" "),o("p",[o("strong",[e._v("Q: How do I get a SCIM application that resides inside my corporate firewall to integrate with Okta?")])]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/docs/guides/build-provisioning-integration/"}},[e._v("Build a SCIM provisioning integration")]),e._v(" instructions target cloud-based applications, but Okta does have a solution for on-premises applications. For more details about the Okta agent-based provisioning solution, see the "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_OPP_configure",target:"_blank",rel:"noopener noreferrer"}},[e._v("On-Premises Provisioning"),o("OutboundLink")],1),e._v(" configuration guide.")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);