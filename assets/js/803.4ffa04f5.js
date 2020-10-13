(window.webpackJsonp=window.webpackJsonp||[]).push([[803],{1147:function(e,t,o){"use strict";o.r(t);var i=o(38),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h4",{attrs:{id:"setup-instructions"}},[e._v("Setup instructions "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#setup-instructions"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Is your Service Provider configured as a “Big Bang”?")]),e._v(' — If yes, what is the backdoor URL for admins to sign in if SAML is misconfigured? If the SP is a "Big Bang", Okta suggests that you have a backdoor URL or some other recovery mechanism available.')])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Is SAML support available in the SP for all tenants by default or is it available only for specific SKUs?")]),e._v(" — If you select only certain SKUs, provide details on which products provide SAML support.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("To configure SAML, can your customers do it by themselves from your app's UI, or do they need to contact your support team?")]),e._v(" — If a customer needs support to configure your integration, you need to include support contact information in your configuration guide. We recommend that you build a UI that enables self-service configuration to reduce the set up time for your customers.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Are tenants deployed on-premises?")]),e._v(" — If tenant data for you application is hosted locally on your customer's systems, select "),o("strong",[e._v("Yes")]),e._v(". If the tenant data for your application is hosted on your servers, select "),o("strong",[e._v("No")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Is the Assertion Consumer Service (ACS) URL the same for all tenants and environments?")]),e._v(" — If "),o("strong",[e._v("No")]),e._v(", enter which part of the ACS URL is customizable. For example, the "),o("code",[e._v("subdomain")]),e._v(" in "),o("code",[e._v("https://<subdomain>.example.com/saml2/")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Is your app capable of requesting other SSO URLs?")]),e._v(" — Select this option to configure support for multiple ACS URLs where the SAML Response can be sent. Specify an index or URL to uniquely identify each ACS URL endpoint. If an "),o("strong",[e._v("AuthnRequest")]),e._v(" message does not specify an index or URL, the SAML Response is sent to the default ACS URL specified above. Enter the SSO URLs and an index value for any other nodes.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Is the audience URI the same for all tenants and environments?")]),e._v(" — If "),o("strong",[e._v("No")]),e._v(", enter which part of the audience URI is customizable. For example, the "),o("code",[e._v("subdomain")]),e._v(" in "),o("code",[e._v("https://<subdomain>.example.com/saml2/")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("What is the unique SAML identifier for authentication: the subject NameID or a specific SAML attribute?")]),e._v(" — What identifier is used by the integration to perform authentication against your SAML application? If you are using an attribute different than the "),o("code",[e._v("NameID")]),e._v(" attribute, what is the name of that attribute?")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Link to configuration guide")]),e._v(" — Your configuration guide (in either HTML or PDF format) should have step by step instructions on how to set up SSO between Okta and your systems. See "),o("a",{attrs:{href:"/docs/guides/submit-app/create-guide"}},[e._v("Prepare a customer-facing configuration guide")]),e._v(".")])])]),e._v(" "),o("h4",{attrs:{id:"supported-features"}},[e._v("Supported Features "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#supported-features"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Do you support SAML Just-In-Time provisioning?")]),e._v(" — With Just-in-Time provisioning, you can use a SAML assertion to create users on the fly the first time they try to log in. This eliminates the need to create user accounts in advance.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Do you support receiving SAML user/group attribute statements?")]),e._v(" — If "),o("strong",[e._v("Yes")]),e._v(", you can add the attribute statements or group attribute statements in the provided fields. For more details on configuring attribute statements in SAML integrations, see "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Apps_App_Integration_Wizard-saml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a SAML integration using AIW"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Can one tenant connect to multiple Identity Providers?")]),e._v(" — Select "),o("strong",[e._v("Yes")]),e._v(" if your customers can set up a SAML connection between their tenant in your application and multiple external IdPs or even multiple instances inside a single IdP.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("What type(s) of sign-in flows do you support?")]),e._v(" — Choose from IdP or SP initiated, or both. If you support SP-initiated flows, you must specify the URL used to initiate the SP flow and include a description of how the SP flow is triggered by your integration.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Force authentication?")]),e._v(" — Select "),o("strong",[e._v("Yes")]),e._v(" if your application forces users to authenticate again, even if they have an existing session. If you select "),o("strong",[e._v("Yes")]),e._v(", include how customers configure force authentication on your end? Provide the steps for Okta to test this forced authentication.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Do you support SP-initiated Single-Logout?")]),e._v(" — If you select "),o("strong",[e._v("Yes")]),e._v(", then "),o("strong",[e._v("Are you going to use the same single-logout certificate for all tenants?")])]),e._v(" "),o("p",[e._v("If you support the same single-logout certificate for all tenants, copy your certificate and paste it in the field provided.")]),e._v(" "),o("p",[e._v("The Single Logout URL and SP Issuer should be specified in the test application.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" Okta only supports signed logout requests.")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Do you require a default relay state")]),e._v(" — The default relay state is the page where your users land after they successfully sign on. If you have this configured, enter a specific application resource for an IdP initiated Single Sign-On scenario.")])])]),e._v(" "),o("h4",{attrs:{id:"review-info"}},[e._v("Review info "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#review-info"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Optional: link to demo video")]),e._v(" — If you have prepared a video that explains how to configure access to your SAML application, enter the URL here. A short demo video showing your working test application helps expedite the review process. Please show the IdP and SP-initiated sign-in flows and sign-out (if applicable).")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Optional: link to the test results of a SAML validation tool")]),e._v(" — Use the tool at "),o("a",{attrs:{href:"http://saml.oktadev.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://saml.oktadev.com"),o("OutboundLink")],1),e._v(" to validate your SAML Service Provider implementation. The results help expedite the review process.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);