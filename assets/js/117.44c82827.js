(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{631:function(e,t,o){"use strict";o.r(t);var n=o(38),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("In addition to the Okta Sign-On Policy, there is a sign-on policy for each application that determines the extra levels of authentication that you may want performed before a user can access an application. The following are step-by-step instructions to configure an App sign-on policy to prompt a user for an MFA factor when the user is outside the United States.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" This example assumes that you have already "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Security_Network",target:"_blank",rel:"noopener noreferrer"}},[e._v("set up a Dynamic Zone"),o("OutboundLink")],1),e._v(" for the United States.")])]),e._v(" "),o("h3",{attrs:{id:"select-the-app"}},[e._v("Select the App "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#select-the-app"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("From the Developer Console, select "),o("strong",[e._v("Applications")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the app that you want to configure a sign-on policy for. In this example, we are using a Web App.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Sign On")]),e._v(" and scroll down to the "),o("strong",[e._v("Sign On Policy")]),e._v(" section.")])])]),e._v(" "),o("h3",{attrs:{id:"create-the-rule-and-define-conditions"}},[e._v("Create the rule and define conditions "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#create-the-rule-and-define-conditions"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" Some options described in this section may not be available in your org. To enable them, contact "),o("a",{attrs:{href:"https://support.okta.com/help/s/?_ga=2.17747641.1660906902.1597076228-1076744453.1575496867",target:"_blank",rel:"noopener noreferrer"}},[e._v("Okta Support"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Click "),o("strong",[e._v("Add Rule")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Enter a "),o("strong",[e._v("Rule Name")]),e._v(" such as "),o("strong",[e._v("Prompt for an MFA factor when a user is outside the US")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select who the rule applies to in the "),o("strong",[e._v("People")]),e._v(" section. In this use case example, select "),o("strong",[e._v("The following groups and users:")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Groups")]),e._v(" box that appears, enter the group that you want this rule to apply to. In this example, we are using "),o("strong",[e._v("Everyone")]),e._v(". You can also add specific users that you want to include in the "),o("strong",[e._v("Users")]),e._v(" box.")]),e._v(" "),o("p",[e._v("If you want to exclude specific groups and users from the policy rule, select "),o("strong",[e._v("Exclude the following users and groups from this rule:")]),e._v(" and then specify the groups and users.")])]),e._v(" "),o("li",[o("p",[e._v("Specify the location to which you want the policy to apply in the "),o("strong",[e._v("LOCATION")]),e._v(" section of the dialog box. In this example, select "),o("strong",[e._v("In Zone")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Network Zones")]),e._v(" box that appears, enter the name of the zone that you want to apply, and then add it when it appears in the list. In this example, we are adding the "),o("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Security_Network",target:"_blank",rel:"noopener noreferrer"}},[e._v("network zone"),o("OutboundLink")],1),e._v(" for the United States that we suggested you create "),o("GuideLink",{attrs:{link:"../before-you-begin"}},[e._v("before starting")]),e._v(" the steps in this guide.")],1)]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("CLIENT")]),e._v(" section, clear the platform conditions that you don't want the rule to apply to. In this example, leave the default of all platforms selected.")])]),e._v(" "),o("li",[o("p",[e._v("For this use case, in the "),o("strong",[e._v("ACTIONS")]),e._v(" section, leave the default of "),o("strong",[e._v("Allowed")]),e._v(" for the "),o("strong",[e._v("When all the conditions above are met, sign on to this application is")]),e._v("  drop-down box.")])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("strong",[e._v("Prompt for factor")]),e._v(" check box to require users who are outside of the United States to choose an MFA option for additional authentication.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" The "),o("strong",[e._v("Multifactor Settings")]),e._v(" link takes you to the Multifactor Authentication page, where you can add factors.")])])]),e._v(" "),o("li",[o("p",[e._v("Then, specify how frequently you want the users to be prompted. Select "),o("strong",[e._v("Once per session")]),e._v(" for this use case.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" While you can configure your App sign-on policies to prompt end users for MFA, be aware that legacy protocols such as "),o("code",[e._v("POP")]),e._v(" or "),o("code",[e._v("IMAP")]),e._v(" don't support MFA even if MFA is configured.")])])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Save")]),e._v(".")])])]),e._v(" "),o("NextSectionLink",[e._v("Next steps")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);