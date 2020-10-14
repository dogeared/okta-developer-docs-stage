(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1132:function(t,e,o){"use strict";o.r(e);var a=o(23),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("The Okta Integration Network (OIN) is the identity industry’s broadest and deepest set of pre-built cloud integrations to manage access management, authentication, and provisioning. By adding your integration to the OIN, you can gain exposure to thousands of Okta customers who can discover your integration and deploy your application to millions of users. OIN integrations speed adoption by simplifying configuration steps and reducing friction for your customers.")]),t._v(" "),o("p",[t._v("If you are an independent software vendor (ISV), Okta customer, or IT system integrator who wants to add their integration to the "),o("a",{attrs:{href:"https://www.okta.com/integrations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Okta Integration Network"),o("OutboundLink")],1),t._v(", read this guide for instructions on how to submit your integration. Adding your integration to the Okta Integration Network is completely cost free.")]),t._v(" "),o("h2",{attrs:{id:"protocols-supported"}},[t._v("Protocols supported "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#protocols-supported"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),o("p",[t._v("This guide covers submissions that use one or more of these protocols:")]),t._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"http://www.simplecloud.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("System for Cross-domain Identity Management (SCIM)"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://openid.net/connect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect (OIDC)"),o("OutboundLink")],1)]),t._v(" "),o("p",[o("strong",[t._v("Note:")]),t._v(" To support the potentially large numbers of Okta orgs accessing it through the OIN, an OIDC integration can't use a custom authorization server, including the "),o("code",[t._v("default")]),t._v(" server.")])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/SAML_2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Security Assertion Markup Language (SAML)"),o("OutboundLink")],1)]),t._v(" "),o("p",[o("strong",[t._v("Note:")]),t._v(" SAML integrations must use SHA256 encryption for security. If you are using SHA-1 for encryption, see our guide on how to "),o("RouterLink",{attrs:{to:"/docs/guides/updating-saml-cert/overview/"}},[t._v("Upgrade SAML Apps to SHA256")]),t._v(".")],1)])]),t._v(" "),o("h2",{attrs:{id:"prerequisites"}},[t._v("Prerequisites "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#prerequisites"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),o("p",[t._v("As a prerequisite to submission, you must have a functional integration created and tested in accordance with one of our OIN guides:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/docs/guides/build-provisioning-integration/"}},[t._v("Build a SCIM provisioning integration")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/guides/build-sso-integration/before-you-begin/"}},[t._v("Build a Single-Sign On integration")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"submission-process"}},[t._v("Submission process "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#submission-process"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),o("p",[t._v("After you have built a functioning integration, a few steps are required to submit it to Okta for review and publication in the OIN:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Create a customer-facing configuration guide.")])]),t._v(" "),o("li",[o("p",[t._v("Submit your integration to Okta through the OIN Manager tool. Your submission must provide Okta with the general and protocol-specific metadata needed to create a customized integration for publication in the OIN.")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note:")]),t._v(" In the OIN manager, the Profile Sourcing option (formerly known as Profile Mastering) is enabled for developer orgs by Okta Developer Support. You can contact "),o("a",{attrs:{href:"mailto:developers@okta.com"}},[t._v("developers@okta.com")]),t._v(" to have this capability temporarily activated when submitting a SCIM app integration.")])])]),t._v(" "),o("li",[o("p",[t._v("Work with the Okta OIN team to test your integration using your input and then get it published to the OIN Catalog.")])])]),t._v(" "),o("p",[t._v("The service-level agreement for OIN publication time is:")]),t._v(" "),o("ul",[o("li",[t._v("Initial review by Okta - 5 business days")]),t._v(" "),o("li",[t._v("QA testing by Okta - 5 business days")]),t._v(" "),o("li",[t._v("Final publication in the OIN Catalog - 1 business day")])]),t._v(" "),o("p",[t._v("All submissions go through these phases. The Okta OIN team sends you an email that identifies any issues found in the initial review and QA testing phases. At any point in the process, you can check the status of your submission in the "),o("a",{attrs:{href:"https://oinmanager.okta.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("OIN Manager"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"submission-support"}},[t._v("Submission support "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#submission-support"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),o("p",[t._v("Getting your app integration in the OIN catalog involves two phases: creating a functional integration and submitting it through the OIN publication process. For each phase in the process, Okta has an associated support stream to assist you.")]),t._v(" "),o("p",[t._v("When you are constructing your Okta integration, you can post a question on the Okta Developer Forum or email the Okta Developer Support team at "),o("a",{attrs:{href:"mailto:developers@okta.com"}},[t._v("developers@okta.com")]),t._v(".")]),t._v(" "),o("p",[t._v("When you are troubleshooting a submission or need to know the current publication status, sign in to the "),o("a",{attrs:{href:"https://oinmanager.okta.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("OIN Manager"),o("OutboundLink")],1),t._v(" using your dev credentials. You can make any necessary changes to your submission there. If you have questions or need additional support to publish your app integration, you can reach out to the Okta OIN team directly at "),o("a",{attrs:{href:"mailto:oin@okta.com"}},[t._v("oin@okta.com")]),t._v(".")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note:")]),t._v(" All integrations in the OIN catalog are public. If you want to submit a request to create a private app integration for an application that uses SCIM 1.1 or Profile Sourcing, or for an application that uses a custom header expression for the Header Auth, then use the "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Apps_App_Integration_Wizard-scim",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCIM App Integration Wizard"),o("OutboundLink")],1),t._v(" to create your integration and submit your app via the "),o("a",{attrs:{href:"https://oinmanager.okta.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("OIN Manager"),o("OutboundLink")],1),t._v(". The Okta OIN team will work with you to create an internal-only integration that isn't included in the OIN.")])]),t._v(" "),o("NextSectionLink")],1)}),[],!1,null,null,null);e.default=r.exports}}]);