(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1130:function(t,o,e){"use strict";e.r(o);var n=e(38),r=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Your application needs to support at least one protocol for interacting with Okta: SAML or OIDC for authentication, or SCIM for provisioning.")]),t._v(" "),e("p",[t._v("Protocol support details can be submitted all together or asynchronously. For example, if your application currently only supports SAML and SCIM, you can create the submission with the SAML and SCIM protocol details. At a later date, when you add OIDC support to your application, you can return to your integration submission, activate the OIDC support panel, and add in the details needed for Okta to enable OIDC support.")]),t._v(" "),e("p",[t._v("For each protocol, click on the appropriate tab name and change the protocol support drop-down box from "),e("strong",[t._v("Off")]),t._v(" to "),e("strong",[t._v("On")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"instance-url"}},[t._v("Instance URL "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#instance-url"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("For each protocol, enter the "),e("strong",[t._v("Okta instance URL")]),t._v(" for your integration in the first field.")]),t._v(" "),e("p",[t._v("To get your Okta instance URL:")]),t._v(" "),e("ol",[e("li",[t._v("Open the Okta Admin Console in your development org.")]),t._v(" "),e("li",[t._v("If you are not in the "),e("strong",[t._v("Classic UI")]),t._v(", switch to that view.")]),t._v(" "),e("li",[t._v("Click "),e("strong",[t._v("Applications > Applications")]),t._v(" to see all the integrations in your org.")]),t._v(" "),e("li",[t._v("Click on the name of the integration you are going to submit. The browser opens the settings page. Confirm that the settings match what you want as the global defaults for all customers.")]),t._v(" "),e("li",[t._v("In your browser, click on the address bar showing the current URL and copy it to your clipboard. This is the Okta instance URL for your integration.")]),t._v(" "),e("li",[t._v("Back in the OIN Manager, paste that URL into your submission.")])]),t._v(" "),e("p",[t._v("For example:\n"),e("img",{attrs:{src:"/img/oin/isv-portal_okta-instance-url-oidc.png",alt:"Okta OIDC instance URL",title:"Okta instance URL for an OIDC integration in the browser address bar"}})]),t._v(" "),e("h2",{attrs:{id:"protocol-specific-settings"}},[t._v("Protocol-specific settings "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#protocol-specific-settings"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Each of the supported protocols has different configuration settings for the remainder of the submission.")]),t._v(" "),e("StackSelector",{attrs:{snippet:"submit"}}),t._v(" "),e("br"),t._v(" "),e("p",[t._v("As you add configuration information about your integration to the submission page, the indicators in the top right show your progress towards 100% completion.")]),t._v(" "),e("p",[t._v("You must include all required information before you can click the "),e("strong",[t._v("Submit for Review")]),t._v(" button to move your integration into the submission phase.")]),t._v(" "),e("NextSectionLink")],1)}),[],!1,null,null,null);o.default=r.exports}}]);