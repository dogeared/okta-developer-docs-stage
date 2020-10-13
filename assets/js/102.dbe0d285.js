(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{592:function(t,e,a){"use strict";a.r(e);var r=a(38),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Now that you have created an integration within your Okta org, you need to configure the SCIM options for that integration. These settings tell your Okta integration how to handle provisioning between the users in your downstream SCIM app and their Okta user profiles.")]),t._v(" "),a("p",[t._v("On the "),a("strong",[t._v("Provisioning")]),t._v(" tab of your Okta integration page, there are now three options listed in the "),a("strong",[t._v("SETTINGS")]),t._v(" panel:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("To App")])]),t._v(" "),a("li",[a("strong",[t._v("To Okta")])]),t._v(" "),a("li",[a("strong",[t._v("API Integration")])])]),t._v(" "),a("h2",{attrs:{id:"to-app"}},[t._v("To App "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#to-app"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),a("p",[t._v("This page contains settings for all information that flows from Okta user profiles and through this integration downstream to your application.")]),t._v(" "),a("p",[t._v("Click "),a("strong",[t._v("Edit")]),t._v(" to make changes to the following sections.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Create Users")]),t._v(" — Assigns a new account in your downstream application for each user managed by Okta. Okta doesn't create a new account if it detects that the username specified in Okta already exists in your application. The user's Okta username is assigned by default.")]),t._v(" "),a("p",[t._v("In addition to the user profile, Okta sends a random password in its request to create a new user.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Update User Attributes")]),t._v(" — Syncs any updates made to the profiles of users assigned to the integration and sends those changes to your downstream application. Profile changes made in your application are overwritten with their respective Okta profile values.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Deactivate Users")]),t._v(" — Automatically deactivates user accounts in the downstream application when either the integration is removed from a user profile in Okta or if the Okta account is deactivated.")]),t._v(" "),a("p",[t._v("Okta can also reactivate the user account in the downstream application if the integration is later reassigned to a user in Okta.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Exclude Username Updates")]),t._v(" — Prevents your downstream application profile from overwriting the Okta user profile when using the "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Using_Selective_Profile_Push",target:"_blank",rel:"noopener noreferrer"}},[t._v("Selective Profile Push"),a("OutboundLink")],1),t._v(" feature.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Sync Password")]),t._v(" — Ensures that a user's application password is always the same as their Okta password or, alternatively, allows Okta to generate a unique password for the user. See "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext-password-sync-main",target:"_blank",rel:"noopener noreferrer"}},[t._v("Synchronize passwords"),a("OutboundLink")],1),t._v(" .")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Profile Attribute Mappings")]),t._v(" — Edit attributes and mappings through the Profile Editor. See the "),a("GuideLink",{attrs:{link:"../attribute-mapping/"}},[t._v("Attributes and mappings")]),t._v(" section in this guide or "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Directory_Manage_Profile_Attributes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Work with Okta user profiles and attributes"),a("OutboundLink")],1),t._v(" in the Okta product documentation.")],1)])]),t._v(" "),a("h2",{attrs:{id:"to-okta"}},[t._v("To Okta "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#to-okta"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),a("p",[t._v("This page contains settings for all information that flows from your application upstream into Okta.")]),t._v(" "),a("p",[t._v("Click "),a("strong",[t._v("Edit")]),t._v(" to make changes to the following sections.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("General")]),t._v(" — Schedules imports and dictates a username format for imported users. You can also define a percentage of acceptable assignments before the "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#csh-eu-import-safeguard",target:"_blank",rel:"noopener noreferrer"}},[t._v("import safeguards"),a("OutboundLink")],1),t._v(" feature is automatically triggered.")]),t._v(" "),a("p",[t._v("If the Okta username is overridden due to mapping from a provisioning-enabled app, the custom mapping appears in this section.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("User Creation & Matching")]),t._v(" — Sets up matching rules to use when importing users from your application. Establishing matching criteria allows you to specify how an imported user is defined when creating a new user or mapping to an existing Okta user.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Imported user is an exact match to Okta user if")]),t._v(" — Sets the matching criteria to determine when an imported user matches to an existing Okta user. For the new imported user to be considered an exact match, each option that you select must be true. Note that if you choose the third option, the first and second choices are disabled.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Allow partial matches")]),t._v(" — Permits partial matching when the first and last name of an imported user match those of an existing Okta user, but not the username or email address.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Confirm matched users")]),t._v(" — Automates the confirmation or activation of existing users. If the option isn't selected, matches are confirmed manually.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Confirm new users")]),t._v(" — Automates the confirmation or activation of a newly imported user. If this option is selected, you can clear it during import confirmation. Note that this feature doesn't apply to users who already exist in Okta.")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Profile & Lifecycle Mastering")]),t._v(" — Allows your downstream application to master Okta user profiles. If enabled, your application appears in the list of profile masters on the "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Directory_Profile_Masters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Profile Masters"),a("OutboundLink")],1),t._v(" page.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Allow "),a("code",[t._v("<app>")]),t._v(" to master Okta users")]),t._v(" — Enables profile mastering and determine what happens when a user is deactivated or reactivated in your application. Only the highest priority profile master for that Okta user can deactivate or suspend an Okta user. To verify the highest priority profile master, check the Profile Masters page for your integration.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("When a user is deactivated in the app")]),t._v(" — Select "),a("strong",[t._v("Do Nothing")]),t._v(" to prevent activity in your application from controlling the user life cycle when a user is removed from your application. This option still permits profile master control of attributes and mappings.")]),t._v(" "),a("p",[t._v("The other options are to deactivate or suspend the Okta user profile if the user is removed from your downstream application.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("When a user is reactivated in the app")]),t._v(" — Determines if deactivated or suspended Okta user profiles that are assigned to your Okta integration should also be reactivated when they have been reactivated in your downstream application.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" When a user is reactivated in your application, the user profile must be an exact match to the Okta profile for the reactivation to occur in Okta. If any user profile is not an exact match, then after importing the reactivated users, the user profiles appear in "),a("strong",[t._v("Pending Activation")]),t._v(" state.")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Import Safeguards")]),t._v(" — Defines the maximum percentage of users in your org that can be left unassigned while still allowing the import to proceed. App-level and org-level safeguards are enabled by default and set at 20 percent.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Inline Hooks")]),t._v(" — Configures custom logic to the process of importing new users into Okta from a downstream application. You can program the hooks to resolve conflicts in profile attributes and control whether imported users are treated as matches for existing users. To enable an import inline hook, see "),a("RouterLink",{attrs:{to:"/docs/concepts/inline-hooks/"}},[t._v("Inline hooks")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Okta Attribute Mappings")]),t._v(" — Edit attributes and mappings through the Profile Editor. See the "),a("GuideLink",{attrs:{link:"../attribute-mapping/"}},[t._v("Attributes and mappings")]),t._v(" section in this guide or "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Directory_Manage_Profile_Attributes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Work with Okta user profiles and attributes"),a("OutboundLink")],1),t._v(" in the Okta product documentation.")],1)])]),t._v(" "),a("h2",{attrs:{id:"api-integration"}},[t._v("API Integration "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#api-integration"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),a("p",[t._v("If your API authentication credentials change at any point, this panel allows you to modify any of the authentication settings needed to connect to your SCIM application.")]),t._v(" "),a("NextSectionLink")],1)}),[],!1,null,null,null);e.default=o.exports}}]);