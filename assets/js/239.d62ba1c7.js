(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{866:function(e,t,r){"use strict";r.r(t);var o=r(23),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("A new user's first impression starts with the registration process, making it a critical aspect to get right. Because you're asking a user to give you information for the first time, you need to personalize and streamline the experience.")]),e._v(" "),r("p",[e._v("Okta's self-service registration lets you configure a custom app or the Okta Homepage for use when users self-register. After you configure and enable your self-service registration policy, a sign-up link appears in the "),r("RouterLink",{attrs:{to:"/code/javascript/okta_sign-in_widget/"}},[e._v("Okta Sign-In Widget")]),e._v(". Users who click this link are directed to a Create Account registration form that is based on your registration policy.")],1),e._v(" "),r("p",[r("strong",[e._v("Self-service registration supports these registration workflows:")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Make email verification mandatory.")]),e._v(" After registering their information, users are immediately sent an email to verify their email address. Users must click the link in the email to complete the registration process. Users are then redirected to your app or to your org's Okta Homepage.")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note:")]),e._v(" The lifetime of the emailed link is dictated by the "),r("strong",[e._v("Activation emails are valid for")]),e._v(" setting on the "),r("strong",[e._v("Security")]),e._v(" > "),r("strong",[e._v("General")]),e._v(" page of the Admin Console.")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Make email verification optional.")]),e._v(" After registration, end users are immediately redirected to your custom app/portal or to your org's Okta Homepage. Okta then sends the user an email requesting verification of their email address.")])]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[e._v("Prerequisites "),r("a",{staticClass:"header-anchor header-link",attrs:{href:"#prerequisites"}},[r("svg",{attrs:{viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note:")]),e._v(" This is an Early Access feature. To enable it, contact "),r("a",{attrs:{href:"https://support.okta.com/help/s/?_ga=2.17747641.1660906902.1597076228-1076744453.1575496867",target:"_blank",rel:"noopener noreferrer"}},[e._v("Okta Support"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_superadmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Super admin permissions"),r("OutboundLink")],1),e._v(" are required to enable self-service registration.")]),e._v(" "),r("li",[e._v("If you are hosting your own "),r("a",{attrs:{href:"https://developer.okta.com/code/javascript/okta_sign-in_widget/",target:"_blank",rel:"noopener noreferrer"}},[e._v("customized Widget"),r("OutboundLink")],1),e._v(", version 2.9 or later is required.")])]),e._v(" "),r("h2",{attrs:{id:"support"}},[e._v("Support "),r("a",{staticClass:"header-anchor header-link",attrs:{href:"#support"}},[r("svg",{attrs:{viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),r("p",[e._v("If you need help or have an issue, post a question in our "),r("a",{attrs:{href:"https://devforum.okta.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer Forum"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("NextSectionLink")],1)}),[],!1,null,null,null);t.default=i.exports}}]);