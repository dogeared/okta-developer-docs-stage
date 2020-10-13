(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{595:function(e,t,o){"use strict";o.r(t);var n=o(38),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("After you have a SCIM implementation that passes all of the Runscope tests, you need to create your SCIM integration directly within Okta.")]),e._v(" "),o("p",[e._v("Begin by signing up for an "),o("a",{attrs:{href:"https://developer.okta.com/signup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Okta developer account"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("After you request the developer account and have received the initial email, open the link to your developer org.")])]),e._v(" "),o("li",[o("p",[e._v("Navigate to the Admin Console in your Okta org by clicking "),o("strong",[e._v("Admin")]),e._v(".\n"),o("img",{attrs:{src:"/img/oin/scim_end-user-ui.png",alt:"Admin Button",title:"Admin Button"}})])]),e._v(" "),o("li",[o("p",[e._v("If you are in the Developer Console, click "),o("strong",[e._v("Developer Console")]),e._v(" and then "),o("strong",[e._v("Classic UI")]),e._v(" to switch over to the Admin Console in your Okta org.\n"),o("img",{attrs:{src:"/img/oin/scim_switch-ui.png",alt:"Switch to Admin Console",title:"Switch to Admin UI"}})])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Applications")]),e._v(" > "),o("strong",[e._v("Applications")]),e._v(".\n"),o("img",{attrs:{src:"/img/oin/scim_open-apps.png",alt:"Open Applications",title:"Open Applications"}})])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Add Application")]),e._v(".\n"),o("img",{attrs:{src:"/img/oin/scim_create-app.png",alt:"Create New Application",title:"Create App button"}})])]),e._v(" "),o("li",[o("p",[e._v('Search for "SCIM 2.0" or "SCIM 1.1" (your choice depends on which version your SCIM server supports). You\'ll see three different SCIM template applications, one for each of the three authentication methods that you can use to connect to your SCIM implementation (Basic Auth, Header Auth, or OAuth Bearer Token).\n'),o("img",{attrs:{src:"/img/oin/scim_app-templates.png",alt:"SCIM 2.0 Templates",title:"List of SCIM templates"}}),e._v("\nClick "),o("strong",[e._v("Add")]),e._v(" on the template you want to use.")])]),e._v(" "),o("li",[o("p",[e._v("On the "),o("strong",[e._v("General Settings")]),e._v(" page, give your integration a descriptive name and specify whether you want it to be hidden from general and mobile users. Additionally, you can decide if you want to have your users automatically be logged in when they reach the landing page in their web browser. Click "),o("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("On the "),o("strong",[e._v("Sign-On Options")]),e._v(" page, you specify how your users sign in to your integration. You can select either SAML or SWA. See the "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Apps_Apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Applications topic"),o("OutboundLink")],1),e._v(" in the Okta product documentation if you need guidance on which single sign-on access method to choose. Click "),o("strong",[e._v("Done")]),e._v(" to create the integration.")])]),e._v(" "),o("li",[o("p",[e._v("After the integration is created, click the "),o("strong",[e._v("Provisioning")]),e._v(" tab, and in the main panel, click "),o("strong",[e._v("Configure API Integration")]),e._v(". Select the "),o("strong",[e._v("Enable API Integration")]),e._v(" check box.\n"),o("img",{attrs:{src:"/img/oin/scim_app-enable-api.png",alt:"SCIM Integration - Enable API",title:"Enable the API integration for your integration"}}),e._v("\nEnter the base URL for your SCIM server.\nThe credential options vary depending on your choice of authentication method:")]),e._v(" "),o("ul",[o("li",[e._v("Basic Auth: To authenticate using Basic Auth mode, you need to provide the username and password for the account that handles the create, update, and deprovisioning actions on your SCIM implementation.")]),e._v(" "),o("li",[e._v("HTTP Header: To authenticate using HTTP Header, you need to provide a bearer token to access your SCIM implementation.")]),e._v(" "),o("li",[e._v("OAuth: To authenticate using OAuth, you need to provide the OAuth access token to access your SCIM implementation.")])]),e._v(" "),o("p",[e._v("Fill in this information and click "),o("strong",[e._v("Test API Credentials")]),e._v(" to test whether the Okta integration can connect to your SCIM API.")]),e._v(" "),o("p",[e._v("Click "),o("strong",[e._v("Save")]),e._v(" to complete the API integration.")])])]),e._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[e._v("Troubleshooting "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#troubleshooting"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("p",[e._v("If you experience any difficulties when creating your SCIM integration in Okta, check out the system log information available in the Okta Admin Console.")]),e._v(" "),o("ol",[o("li",[e._v("From the Admin Console for your developer org, go to "),o("strong",[e._v("Applications > Applications")]),e._v(".")]),e._v(" "),o("li",[e._v("Select your Okta integration to open the integration settings page.")]),e._v(" "),o("li",[e._v("Click "),o("strong",[e._v("View Logs")]),e._v(" to open the System Log.")])]),e._v(" "),o("p",[e._v("The system log captures all events in your developer org for the previous seven days. This information is invaluable to troubleshoot any connection or authentication issues between Okta and your application. See "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Reports_SysLog",target:"_blank",rel:"noopener noreferrer"}},[e._v("System Log"),o("OutboundLink")],1),e._v(" in the Okta product documentation.")]),e._v(" "),o("NextSectionLink")],1)}),[],!1,null,null,null);t.default=i.exports}}]);