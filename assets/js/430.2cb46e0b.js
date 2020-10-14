(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{512:function(e,t,i){"use strict";i.r(t);var o=i(23),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",[e._v("External Identity Providers")]),e._v(" "),i("p",[e._v("As a developer building a custom application, you want to give your users the freedom to choose which Identity Provider that they use to sign in to your application. But first you should understand how various Identity Providers connect to Okta.")]),e._v(" "),i("p",[e._v("What is an Identity Provider? It is a service that creates and maintains identity information and then provides authentication services to your applications. Identity Providers can significantly reduce sign-in and registration friction, which allows your users to easily access applications without needing to create new passwords or remember usernames.")]),e._v(" "),i("h2",{attrs:{id:"the-big-picture"}},[e._v("The big picture "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#the-big-picture"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("Okta manages connections to other Identity Providers for your application and sits between your application and the Identity Provider that authenticates your users.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("When you use Okta as the "),i("a",{attrs:{href:"https://developer.okta.com/product/user-management/",target:"_blank",rel:"noopener noreferrer"}},[e._v("user store"),i("OutboundLink")],1),e._v(" for your applications, users can sign in with their email and password by default. See our guides for how to sign in users to your "),i("RouterLink",{attrs:{to:"/docs/guides/sign-into-web-app/"}},[e._v("web")]),e._v(", "),i("RouterLink",{attrs:{to:"/docs/guides/sign-into-mobile-app/"}},[e._v("mobile")]),e._v(", and "),i("RouterLink",{attrs:{to:"/docs/guides/sign-into-spa/"}},[e._v("single-page")]),e._v(" apps.")],1)]),e._v(" "),i("li",[i("p",[e._v("You can add connections to Identity Providers like Twitter or Facebook. This is called social login or social authentication. It allows your users to sign in to your app using credentials from their existing Identity Providers. After users authenticate, you sync their existing Identity Provider credentials into your Okta Universal Directory while continuing to use that Identity Provider for user authentication. This eliminates the need to store an additional username and password for that user.")])]),e._v(" "),i("li",[i("p",[e._v("You can add connections to Identity Providers that you build in-house that support OpenID Connect or SAML protocols, also referred to as inbound federation or inbound SAML. The SAML flow is initiated with the service provider (in this case, Okta) that redirects the user to the Identity Provider for authentication. After authentication, a user is created inside Okta, and the user is redirected back to your application along with an ID token. This allows you to use Okta to proxy between SAML-only Identity Providers and OpenID Connect-only applications that normally are incompatible.")])])]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note:")]),e._v(" Social and OpenID Connect Identity Providers store access tokens that allow subsequent calls to Identity Providers after the user is authorized. For example, the token may contain the permission to add events to a user's Google calendar. After the user is authorized, the token can be used on additional calls to add events to a user's Google calendar on the user's behalf.")])]),e._v(" "),i("ul",[i("li",[e._v("You can also configure federation between Okta orgs using OpenID Connect or SAML.")])]),e._v(" "),i("p",[e._v("Adding any of these Identity Providers allows users to sign in to your application using their credentials from a specific Identity Provider.")]),e._v(" "),i("h2",{attrs:{id:"benefits-of-using-okta-to-manage-identity-providers"}},[e._v("Benefits of using Okta to manage Identity Providers "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#benefits-of-using-okta-to-manage-identity-providers"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("You could connect your application directly to an Identity Provider (for example, using an SDK to add a button for "),i("strong",[e._v("Sign in with Google")]),e._v("). However, using Okta as the user store for your application and letting Okta manage the Identity Provider connections has some benefits:")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("No custom code:")]),e._v(" Your application only needs to talk to Okta, and Okta does the rest.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("One protocol:")]),e._v(" Your application uses OpenID Connect to talk to Okta. Okta handles whatever protocols the other Identity Providers use, and this is transparent to your application.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Single user store:")]),e._v(" All users are stored in Okta. You can capture the profile attributes from an Identity Provider user and store those attributes in Okta's Universal Directory.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Profile sync:")]),e._v("  If a user updates their profile at the Identity Provider, those changes can be reflected inside Okta the next time that they use the provider to sign in.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Account linking:")]),e._v(" Users can use multiple Identity Providers to sign in, and Okta links those profiles to a single Okta user.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Group sync:")]),e._v(" Okta supports group sync between Okta and enterprise SAML Identity Providers. This allows you to specify the groups that users should be added to.")])])]),e._v(" "),i("h2",{attrs:{id:"how-okta-connects-to-external-identity-providers"}},[e._v("How Okta connects to external Identity Providers "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#how-okta-connects-to-external-identity-providers"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("Okta sits between your application and the external provider. Your application only needs to talk to Okta, and Okta does the rest.")]),e._v(" "),i("h3",{attrs:{id:"sign-in-process"}},[e._v("Sign-in process "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#sign-in-process"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("The sign-in process starts at the "),i("code",[e._v("/authorize")]),e._v(" endpoint, and then goes out to the provider and back:")]),e._v(" "),i("ol",[i("li",[e._v("In your application, the user clicks a button similar to: "),i("strong",[e._v("Sign in with (Identity Provider)")]),e._v(".")]),e._v(" "),i("li",[e._v("Your application redirects the browser to Okta.")]),e._v(" "),i("li",[e._v("Okta redirects the browser to the Identity Provider.")]),e._v(" "),i("li",[e._v("The user is prompted to sign in at the Identity Provider (if they aren't already) and to accept the permissions required by your app.")]),e._v(" "),i("li",[e._v("The Identity Provider redirects the browser back to Okta.")]),e._v(" "),i("li",[e._v("Okta processes the sign-in request and adds the user to your Okta organization's Universal Directory.")]),e._v(" "),i("li",[e._v("Okta redirects the browser back to your application, just like any other sign-in request.")])]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/social_login_flow.png",alt:"Social Login Flow",title:"Social Login Flow"}})]),e._v(" "),i("h2",{attrs:{id:"account-linking-and-just-in-time-provisioning"}},[e._v("Account Linking and Just-in-Time Provisioning "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#account-linking-and-just-in-time-provisioning"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("When you allow your users to sign in to your app using their choice of Identity Providers, you can use account linking to help create a unified view of your users within your org. Additionally, you can use Just-In-Time (JIT) provisioning to create a seamless experience for users that sign-in to your application for the first time using their credentials from another Identity Provider.")]),e._v(" "),i("h3",{attrs:{id:"account-linking"}},[e._v("Account Linking "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#account-linking"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("Users can use multiple Identity Providers to sign in, and Okta can link all of those profiles to a single Okta user. This is called account linking. If, for example, a user signs in to your app using a different Identity Provider than they used for registration, account linking can establish that the user owns both identities, allowing the user to sign in from either account.")]),e._v(" "),i("p",[e._v("Account linking is configured at the Identity Provider level. When you create an Identity Provider using the Developer Console, these values are set by default:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Account Link Policy")]),e._v(" — Automatic")]),e._v(" "),i("li",[i("strong",[e._v("Match Against")]),e._v(" — Okta Username")]),e._v(" "),i("li",[i("strong",[e._v("IdP Username")]),e._v(" — idpuser.email")])]),e._v(" "),i("p",[e._v("With these defaults, when any validated OpenID Connect JWT is provided, Okta searches the Universal Directory for a user's profile where the "),i("code",[e._v("email")]),e._v(" attribute value passed by the Identity Provider (the "),i("strong",[e._v("IdP Username")]),e._v(" value) matches the "),i("code",[e._v("username")]),e._v(" attribute value (the "),i("strong",[e._v("Match Against")]),e._v(" value). If there is a match, then the user is linked by mapping the required, static "),i("code",[e._v("sub")]),e._v(" claim provided in the JWT to that user.")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/docs/reference/social-settings/#authentication-settings"}},[e._v("Authentication Settings")]),e._v(" for more information on these attributes.")],1),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Important:")]),e._v(" After an account is linked, any validated JWT token with the same "),i("code",[e._v("sub")]),e._v(" claim (which is mapped to the "),i("code",[e._v("idp.externalId")]),e._v(" in the Identity Provider profile) is automatically mapped to the same user regardless of the content of the claims in the JWT or if the values for "),i("strong",[e._v("IdP Username")]),e._v(" and "),i("strong",[e._v("Match Against")]),e._v(" no longer result in a match.")])]),e._v(" "),i("p",[e._v("To remove an existing account link or validate account linking on every sign in, we recommend that you make a DELETE call to the "),i("RouterLink",{attrs:{to:"/docs/reference/api/idps/#unlink-user-from-idp"}},[i("code",[e._v("/api/v1/idps/${idpId}/users/${userId}")]),e._v(" endpoint")]),e._v(" to remove the link between the Okta user and the Identity Provider user before authentication.")],1),e._v(" "),i("p",[e._v("If the "),i("strong",[e._v("Account Link Policy")]),e._v(" is disabled, no account linking occurs. You can manually create an account link without a transaction by making a POST call to the "),i("RouterLink",{attrs:{to:"/docs/reference/api/idps/#link-a-user-to-a-social-provider-without-a-transaction"}},[i("code",[e._v("/api/v1/idps/${idps}/users/${userId}")]),e._v(" endpoint")]),e._v(" prior to Okta receiving a validated JWT from an Identity Provider.")],1),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note:")]),e._v(" See "),i("RouterLink",{attrs:{to:"/docs/reference/api/idps/#add-identity-provider"}},[e._v("Add an Identity Provider")]),e._v(" for examples of creating an Identity Provider and the parameter values needed to configure account linking.")],1)]),e._v(" "),i("h3",{attrs:{id:"jit-provisioning"}},[e._v("JIT provisioning "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#jit-provisioning"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("If a user signs in to your application for the first time using another Identity Provider, you can implement "),i("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Identity_Providers",target:"_blank",rel:"noopener noreferrer"}},[e._v("JIT provisioning"),i("OutboundLink")],1),e._v(" to automatically create an Okta account for them. JIT account creation and activation only works for end users who aren't already Okta users.")]),e._v(" "),i("p",[e._v("Additionally, you can apply granular control over account linking and JIT by defining a policy and then rules for the policy. You can base a policy on a variety of factors, such as location, group definitions, and authentication type. A specific policy rule can then be created for groups that have been assigned to your application. You can create multiple policies with more or less restrictive rules and apply them to different groups.")]),e._v(" "),i("p",[e._v("You can also set up group sync to specify the groups that users should be added to and enable profile mastering so that a user's profile gets updated each time that the user signs in. This allows you to always have the most recent data about your users.")]),e._v(" "),i("h2",{attrs:{id:"idp-discovery"}},[e._v("IdP Discovery "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#idp-discovery"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("If you have more than one Identity Provider configured in your org (which can mean just one external Identity Provider, in addition to Okta itself also serving as an Identity Provider), you can define logic to determine which Identity Provider individual end users are routed to when they authenticate. This functionality is called IdP Discovery, or IdP Routing Rules, and is configured by means of the "),i("RouterLink",{attrs:{to:"/docs/reference/api/policy/#idp-discovery-policy"}},[e._v("IdP Discovery Policy")]),e._v(".")],1),e._v(" "),i("p",[e._v("The Okta Sign-In Widget (version 2.5.0 or above) interacts with the IdP Discovery policy to redirect end users as needed to the IdP determined by the policy.")]),e._v(" "),i("p",[e._v("If you don't use the Okta Sign-In Widget, instead interacting directly with the "),i("RouterLink",{attrs:{to:"/docs/reference/api/authn/"}},[e._v("Okta Authentication API")]),e._v(" to implement sign-in yourself, you can integrate IdP Discovery into your flow by including a call to Okta's "),i("RouterLink",{attrs:{to:"/docs/reference/api/webfinger/"}},[e._v("WebFinger")]),e._v(" endpoint. That endpoint returns the name of the IdP that should be used for a given end user, as determined by the org's defined IdP Discovery Policy.")],1),e._v(" "),i("h2",{attrs:{id:"see-also"}},[e._v("See also "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#see-also"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("See the following guides for information on how to set up various IdPs:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/facebook/before-you-begin/"}},[e._v("Facebook")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/google/before-you-begin/"}},[e._v("Google")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/linkedin/before-you-begin/"}},[e._v("LinkedIn")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/microsoft/before-you-begin/"}},[e._v("Microsoft")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/openidconnect/before-you-begin/"}},[e._v("Generic OpenID Connect Identity Provider")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/docs/guides/add-an-external-idp/saml2/before-you-begin/"}},[e._v("SAML Identity Provider")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);