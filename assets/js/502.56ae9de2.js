(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{617:function(t,e,o){"use strict";o.r(e);var n=o(38),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h3",{attrs:{id:"create-a-saml-integration"}},[t._v("Create a SAML integration "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#create-a-saml-integration"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),o("ol",{attrs:{start:"6"}},[o("li",[t._v("Select "),o("strong",[t._v("Web")]),t._v(" as the platform for your integration. Web is the only supported platform for SAML 2.0 applications in the OIN.")]),t._v(" "),o("li",[t._v("Select "),o("strong",[t._v("SAML 2.0")]),t._v(" in the "),o("strong",[t._v("Sign on method")]),t._v(" section.")]),t._v(" "),o("li",[t._v("Click "),o("strong",[t._v("Create")]),t._v(".")]),t._v(" "),o("li",[t._v("On the "),o("strong",[t._v("General Settings")]),t._v(" tab, enter a name for your integration and optionally upload a logo. You can also hide the integration from your end-user's Okta dashboard or mobile app.")]),t._v(" "),o("li",[t._v("On the "),o("strong",[t._v("Configure SAML")]),t._v(" tab, use the SAML information that you gathered in the "),o("GuideLink",{attrs:{link:"../before-you-begin"}},[t._v("first step")]),t._v(" to configure the settings of your integration. See "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Apps_App_Integration_Wizard-saml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create a SAML integration using AIW"),o("OutboundLink")],1),t._v(" in the Okta product documentation.\n"),o("ul",[o("li",[t._v("In the "),o("strong",[t._v("Single sign on URL")]),t._v(" field, enter the Assertion Consumer Service (ACS) URL.")]),t._v(" "),o("li",[t._v("Enter the Audience URI into the "),o("strong",[t._v("Audience URI (SP Entity ID)")]),t._v(" field.\n"),o("blockquote",[o("p",[o("strong",[t._v("Note:")]),t._v(" If you are just testing your setup using a sample SAML SP (such as this "),o("a",{attrs:{href:"https://github.com/mcguinness/saml-sp",target:"_blank",rel:"noopener noreferrer"}},[t._v("SAML Service Provider on GitHub"),o("OutboundLink")],1),t._v("), enter the following test URL into the "),o("strong",[t._v("Single sign on URL")]),t._v(" and "),o("strong",[t._v("Audience URI (SP Entity ID)")]),t._v(" fields: "),o("code",[t._v("http://example.com/saml/sso/example-okta-com")])])])]),t._v(" "),o("li",[t._v("Choose the "),o("strong",[t._v("Name ID format")]),t._v(" and "),o("strong",[t._v("Application username")]),t._v(" that must be sent to your application in the SAML response (for example, "),o("code",[t._v("EmailAddress")]),t._v(" and "),o("code",[t._v("Email")]),t._v(") or leave the defaults.")]),t._v(" "),o("li",[t._v("In the "),o("strong",[t._v("ATTRIBUTE STATEMENTS (OPTIONAL)")]),t._v(" section, enter the SAML attributes to be shared with your application.\nFor example:\n"),o("table",[o("thead",[o("tr",[o("th",[t._v("Name (in SAML application)")]),t._v(" "),o("th",[t._v("Value (in Okta profile)")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("FirstName")])]),t._v(" "),o("td",[o("code",[t._v("user.firstName")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("LastName")])]),t._v(" "),o("td",[o("code",[t._v("user.lastName")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("Email")])]),t._v(" "),o("td",[o("code",[t._v("user.email")])])])])])]),t._v(" "),o("li",[t._v("If your org uses groups to categorize users, fill in the "),o("strong",[t._v("GROUP ATTRIBUTE STATEMENTS (OPTIONAL)")]),t._v(" section to filter by group membership in your SAML assertion. For example:\n"),o("ul",[o("li",[o("strong",[t._v("Name")]),t._v(" — "),o("code",[t._v("groups")])]),t._v(" "),o("li",[o("strong",[t._v("Filter")]),t._v(" — "),o("code",[t._v("Matches regex")])]),t._v(" "),o("li",[o("strong",[t._v("Value")]),t._v(" — "),o("code",[t._v(".*")])])])]),t._v(" "),o("li",[t._v("You can preview the generated SAML assertion by clicking the button in Section B.")]),t._v(" "),o("li",[t._v("Click "),o("strong",[t._v("Next")]),t._v(".")])])],1),t._v(" "),o("li",[t._v("In the final creation step, the "),o("strong",[t._v("Feedback")]),t._v(" tab helps Okta to understand how you want to position this application.\n"),o("ul",[o("li",[t._v("If you are only creating an internal SAML integration:\n"),o("ol",[o("li",[t._v("Select "),o("strong",[t._v("I'm an Okta customer adding an internal app")]),t._v(".")]),t._v(" "),o("li",[t._v("For the check boxes that appear, select the "),o("strong",[t._v("App type")]),t._v(" check box if your company created the integration and it won't be released publicly. If you check this box, you don't need to enter any further information.")]),t._v(" "),o("li",[t._v("Select the "),o("strong",[t._v("Contact app vendor")]),t._v(" check box if Okta needs to contact you to enable SAML for the integration. If you select this check box, you need to provide further general information about your integration to the Okta OIN team.")]),t._v(" "),o("li",[t._v("Click "),o("strong",[t._v("Finish")]),t._v(".")])])]),t._v(" "),o("li",[t._v("For ISVs that are creating a SAML integration for the OIN:\n"),o("ol",[o("li",[t._v("Select "),o("strong",[t._v("I'm a software vendor. I'd like to integrate my app with Okta")]),t._v(".")]),t._v(" "),o("li",[t._v("Click "),o("strong",[t._v("Finish")]),t._v(".")])])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);