(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{626:function(e,t,o){"use strict";o.r(t);var s=o(38),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Access policies help you secure your APIs by defining different access and refresh token lifetimes for a given combination of grant type, user, and scope. You create policy rules to determine if an application should be permitted to access specific information from your protected APIs and for how long. Access policies are specific to a particular authorization server and the client applications that you designate for the policy.")]),e._v(" "),o("p",[e._v("For example, an access token for a banking API may include a "),o("code",[e._v("transactions:read")]),e._v(" scope with a multi-hour token lifetime. By contrast, the lifetime of an access token for transferring funds should be only a matter of minutes.")]),e._v(" "),o("p",[e._v("You can also "),o("RouterLink",{attrs:{to:"/docs/guides/customize-authz-server/create-claims/"}},[e._v("include custom claims")]),e._v(" in ID and access tokens to disclose the information that you want to share, depending on the client and the scope of the tokens. Scopes specify what access privileges are being requested as part of the authorization. Claims are statements about the user (or "),o("code",[e._v("subject")]),e._v("), such as name, role, or email address.")],1),e._v(" "),o("p",[e._v("For example, a shopping site might have one set of claims for customers while they browse, but another claim for administrator functions like changing a customer's personal information. Custom claims also help you by reducing the number of lookup calls required to retrieve user information from the Identity Provider (IdP). This benefit depends on the level of security that your apps require.")]),e._v(" "),o("p",[e._v("Policies are evaluated in priority order, as are the rules in a policy. The first policy and rule that match the client request are applied and no further rule or policy processing occurs. If a client matches no policies, the authentication attempt fails and an error is returned.")]),e._v(" "),o("h2",{attrs:{id:"configure-access-policies-for-common-scenarios"}},[e._v("Configure access policies for common scenarios "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#configure-access-policies-for-common-scenarios"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("p",[e._v("This guide provides step-by-step instructions to configure an access policy for two of the most common scenarios:")]),e._v(" "),o("ul",[o("li",[o("GuideLink",{attrs:{link:"../limit-scopes-clients-can-access"}},[e._v("Limit which scopes some clients can access")])],1),e._v(" "),o("li",[o("GuideLink",{attrs:{link:"../configure-token-lifetime-per-client"}},[e._v("Configure a custom token lifetime per client")])],1)]),e._v(" "),o("h2",{attrs:{id:"support"}},[e._v("Support "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#support"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("p",[e._v("If you need help or have an issue, post a question in our "),o("a",{attrs:{href:"https://devforum.okta.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer Forum"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("NextSectionLink")],1)}),[],!1,null,null,null);t.default=i.exports}}]);