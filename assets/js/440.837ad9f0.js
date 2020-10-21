(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{518:function(e,t,i){"use strict";i.r(t);var a=i(38),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",[e._v("SAML")]),e._v(" "),i("p",[e._v("Traditionally, enterprise applications are deployed and run within the company network. To obtain information about users such as user profile and group information, many of these applications are built to integrate with corporate directories such as Microsoft Active Directory. More importantly, a user's credentials are typically stored and validated using the directory. For example, if you use SharePoint and Exchange that are running on-premises, your sign-in credentials are your Active Directory credentials.")]),e._v(" "),i("p",[e._v("However, with increased collaboration and the move towards cloud-based environments, many applications have moved beyond the boundaries of a company's domain. Federated Authentication is the solution to this problem.")]),e._v(" "),i("h2",{attrs:{id:"authentication"}},[e._v("Authentication "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#authentication"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("Before looking at federated authentication, we need to understand what authentication really means. Authentication defines the way a user is identified and validated through some sort of credentials as part of a sign-in flow. Most applications present a sign-in page to an end user, allowing the user to specify a username and a password. In some cases, additional information may be required to locate the user, like a company ID or a client code. This information allows the application to narrow down the search of the username applicable to the provided info. This is often used to allow the same username to exist across multiple tenants belonging to different customers.")]),e._v(" "),i("p",[e._v("Most applications have a user store (DB or LDAP) that contains, among other things, user profile information and credentials. When a user signs in, the credentials are validated against this user store. The advantage of this simple approach is that everything is managed within the application, providing a single and consistent way to authenticate an end user. However, if a user needs to access multiple applications where each one requires a different set of credentials, it becomes a problem for the end user. First, the user needs to remember different passwords, in addition to any other corporate password (for example, their AD password) that may already exist. The user is now forced to maintain separate usernames and passwords, and must handle different password policies and expirations. In addition, this scenario also creates a headache for administrators and ISVs when application users continue to have access to applications that should have been revoked.")]),e._v(" "),i("h2",{attrs:{id:"federated-identity"}},[e._v("Federated Identity "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#federated-identity"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("Federated Identity started with the need to support application access that spans beyond a company or organization boundary. Imagine a relationship between a juice company (JuiceCo) selling its product to a large supermarket chain (BigMart). As an employee of JuiceCo, you need to access an application provided by BigMart to manage the relationship and monitor supplies and sales.")]),e._v(" "),i("p",[e._v("In this case, BigMart (who is providing this application) will need to take care of user authentication. The simple way is to require a different user name and password from users working at JuiceCo. But think about all the users that this application will need to maintain - including all of the other suppliers and their users who need to access the application.")]),e._v(" "),i("p",[e._v('A more elegant way to solve this problem is to allow JuiceCo and every other supplier to share or "federate" the identities with BigMart. As an employee of JuiceCo, you already have a corporate identity and credentials. What Federated Identity provides is a secure way for the supermarket chain (Service Provider) to externalize authentication by integrating with the existing identity infrastructure of its suppliers (Identity Provider).')]),e._v(" "),i("p",[e._v("This type of use case is what led to the birth of federated protocols such as "),i("a",{attrs:{href:"http://en.wikipedia.org/wiki/Security_Assertion_Markup_Language",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Assertion Markup Language (SAML)"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("See the "),i("a",{attrs:{href:"http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Assertion Markup Language (SAML) V2.0 Technical Overview"),i("OutboundLink")],1),e._v(" for a more in-depth overview.")]),e._v(" "),i("h2",{attrs:{id:"planning-for-saml"}},[e._v("Planning for SAML "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#planning-for-saml"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("SAML is mostly used as a web-based authentication mechanism as it relies on using the browser agent to broker the authentication flow. At a high-level, the authentication flow of SAML looks like this:")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_saml_flow.png",alt:"SAML Flow",title:"SAML Flow"}})]),e._v(" "),i("p",[e._v("We are now ready to introduce some common SAML terms. We will go into the technical details of these later, but it is important to understand the high-level concept during the planning stage.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("A "),i("strong",[e._v("Service Provider (SP)")]),e._v(" is the entity providing the service, typically in the form of an application.")])]),e._v(" "),i("li",[i("p",[e._v("An "),i("strong",[e._v("Identity Provider (IdP)")]),e._v(" is the entity providing the identities, including the ability to authenticate a user. The Identity Provider typically also contains the user profile: additional information about the user such as first name, last name, job code, phone number, address, and so on. Depending on the application, some service providers may require a very simple profile (username, email), while others may require a richer set of user data (job code, department, address, location, manager, and so on).")])]),e._v(" "),i("li",[i("p",[e._v("A "),i("strong",[e._v("SAML Request")]),e._v(', also known as an authentication request, is generated by the Service Provider to "request" an authentication.')])]),e._v(" "),i("li",[i("p",[e._v("A "),i("strong",[e._v("SAML Response")]),e._v(" is generated by the Identity Provider. It contains the actual assertion of the authenticated user. In addition, a SAML Response may contain additional information, such as user profile information and group/role information, depending on what the Service Provider can support.")])]),e._v(" "),i("li",[i("p",[e._v("A "),i("strong",[e._v("Service Provider Initiated (SP-initiated)")]),e._v(" sign-in describes the SAML sign-in flow when initiated by the Service Provider. This is typically triggered when the end user tries to access a resource or sign in directly on the Service Provider side, such as when the browser tries to access a protected resource on the Service Provider side.")])]),e._v(" "),i("li",[i("p",[e._v("An "),i("strong",[e._v("Identity Provider Initiated (IdP-initiated)")]),e._v(" sign-in describes the SAML sign-in flow initiated by the Identity Provider. Instead of the SAML flow being triggered by a redirection from the Service Provider, in this flow the Identity Provider initiates a SAML Response that is redirected to the Service Provider to assert the user's identity.")])])]),e._v(" "),i("p",[e._v("A couple of key things to note:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("The Service Provider never directly interacts with the Identity Provider. A browser acts as the agent to carry out all the redirections.")])]),e._v(" "),i("li",[i("p",[e._v("The Service Provider needs to know which Identity Provider to redirect to before it has any idea who the user is.")])]),e._v(" "),i("li",[i("p",[e._v("The Service Provider doesn't know who the user is until the SAML assertion comes back from the Identity Provider.")])]),e._v(" "),i("li",[i("p",[e._v("This flow doesn't have to start from the Service Provider. An Identity Provider can initiate an authentication flow.")])]),e._v(" "),i("li",[i("p",[e._v("The SAML authentication flow is asynchronous. The Service Provider doesn't know if the Identity Provider will ever complete the entire flow. Because of this, the Service Provider doesn't maintain any state of any authentication requests generated. When the Service Provider receives a response from an Identity Provider, the response must contain all the necessary information.")])])]),e._v(" "),i("h2",{attrs:{id:"planning-checklist"}},[e._v("Planning checklist "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#planning-checklist"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("While the SAML protocol is a standard, there are different ways to implement it depending on the nature of your application. The following is a checklist that will guide you through some of key considerations.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Understanding the role of a Service Provider")])]),e._v(" "),i("li",[i("p",[e._v("Single IdP vs multiple IdPs")])]),e._v(" "),i("li",[i("p",[e._v("Understanding SP-initiated sign-in flow")])]),e._v(" "),i("li",[i("p",[e._v("Exposing SAML configuration in SP")])]),e._v(" "),i("li",[i("p",[e._v("Enabling SAML for everyone vs a subset of users")])]),e._v(" "),i("li",[i("p",[e._v('Implementing a "backdoor"')])])]),e._v(" "),i("h3",{attrs:{id:"understanding-the-role-of-a-service-provider"}},[e._v("Understanding the role of a Service Provider "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#understanding-the-role-of-a-service-provider"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("A SAML IdP generates a SAML response based on configuration that is mutually agreed to by the IdP and the SP. After receiving the SAML assertion, the SP needs to validate that the assertion comes from a valid IdP and then parse the necessary information from the assertion: the username, attributes, and so on.")]),e._v(" "),i("p",[e._v("To do this, the SP requires at least the following:")]),e._v(" "),i("ul",[i("li",[e._v("Certificate - The SP needs to obtain the public certificate from the IdP to validate the signature. The certificate is stored on the SP side and used whenever a SAML response arrives.")]),e._v(" "),i("li",[e._v("ACS Endpoint - Assertion Consumer Service URL - often referred to simply as the SP sign-in URL. This is the endpoint provided by the SP where SAML responses are posted. The SP needs to provide this information to the IdP.")]),e._v(" "),i("li",[e._v("IdP Sign-in URL - This is the endpoint on the IdP side where SAML requests are posted. The SP needs to obtain this information from the IdP.")])]),e._v(" "),i("p",[e._v("The easiest way to implement SAML is to leverage an OpenSource SAML toolkit. We have included a list at the end of this article of recommended toolkits for several languages. These toolkits provide the logic needed to digest the information in an incoming SAML Response. In addition, if the SP needs to support the SP-initiated sign-in flow, the toolkits also provide the logic needed to generate an appropriate SAML Authentication Request.")]),e._v(" "),i("h3",{attrs:{id:"single-idp-vs-multiple-idps"}},[e._v("Single IdP vs multiple IdPs "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#single-idp-vs-multiple-idps"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("If you are building an internal integration and you want to SAML-enable it to integrate with your corporate SAML identity provider, then you are looking at supporting only a single IdP. In this case, your integration only needs to deal with a single set of IdP metadata (cert, endpoints, and so on).")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_one_idp.png",alt:"Single IdP",title:"Single IdP"}})]),e._v(" "),i("p",[e._v("If you are an ISV building an enterprise SaaS product, or if you are building an external facing website/portal/community for your customers and partners, then you need to look at supporting multiple IdPs. This is the typical use case for many SaaS ISVs that need to integrate with customers' corporate identity infrastructure. Depending on the architecture of your application, you need to think about ways to store the SAML configuration (Certificates or IdP sign-in URLs, for example) from each identity provider, as well as how to provide the necessary SP information for each.")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_many_idp.png",alt:"Many IdPs",title:"Many IdPs"}})]),e._v(" "),i("p",[e._v("A key consideration involves the ACS URL endpoint on the SP side where SAML responses are posted. It is possible to expose a single endpoint even when dealing with multiple IdPs. For a single-instance multi-tenant application where the tenancy isn't defined in the URL (such as when using a subdomain), this might be a simpler way to implement. However, you must then rely on additional information in the SAML response to determine which IdP is trying to authenticate (for example, using the IssuerID). If your application is set up in a multi-tenant fashion with domain information in the URL (for example, using either "),i("code",[e._v("https://domain1.example.com")]),e._v(" or "),i("code",[e._v("https://www.example.com/domain1")]),e._v("), then having an ACS URL endpoint for each subdomain might be a good option since the URL itself identifies the domain.")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_many_idp_subdomain.png",alt:"SPs with Subdomains",title:"SPs with Subdomains"}})]),e._v(" "),i("h3",{attrs:{id:"understanding-sp-initiated-sign-in-flow"}},[e._v("Understanding SP-initiated sign-in flow "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#understanding-sp-initiated-sign-in-flow"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("As discussed earlier, an IdP-initiated sign-in flow starts from the IdP. Since it begins on the IdP side, there is no additional context about what the user is trying to access on the SP side other than the fact that the user is trying to get authenticated and access the SP. Typically, after the user is authenticated, the browser will be taken to a generic landing page in the SP.")]),e._v(" "),i("p",[e._v('In an SP-initiated flow, the user tries to access a protected resource directly on the SP side without the IdP being aware of the attempt. Two issues arise. First is the need to identify the right IdP if authentication of a federated identity is needed. With SP-initiated sign in, the SP initially doesn\'t know anything about the identity. As a developer, you need to figure out how the SP can determine which IdP should be receiving the SAML request. In some cases, if your application URLs contain subdomain information that is mapped to a unique tenant and IdP, then the resource link being hit is enough to identify the IdP. If this isn\'t the case, then you might need to prompt the end user for additional information from the end user such as user ID, email, or a company ID. You need something that allows the SP to identify which IdP the user attempting to access the resource belongs to. Remember, you are only prompting for an identifier, not credentials. Okta also supports to pass the identifier to the IdP with parameter "LoginHint", so that the user doesn\'t need to input the identifier again when redirected to IdP to sign in. For instruction to trigger Okta to send the "LoginHint" to IdP, see '),i("a",{attrs:{href:"/docs/reference/api/idps#redirecting-with-saml-deep-links"}},[e._v("Redirecting with SAML Deep Links")]),e._v(".")]),e._v(" "),i("p",[e._v("Another issue with SP-initiated sign-in flow is the support for deep links. Most applications support deep links. For example, you might receive a link to a document that resides on a content management system. Ideally, if you need to authenticate prior to accessing the document, you would like to be taken to the document immediately after authentication.")]),e._v(" "),i("p",[e._v("SAML is an asynchronous protocol by design. The SP-initiated sign-in flow begins by generating a SAML Authentication Request that gets redirected to the IdP. At this point, the SP doesn't store any information about the request. When the SAML response comes back from the IdP, the SP wouldn't know anything about the initial deep-link that triggered the authentication request. Luckily, SAML supports this with a parameter called RelayState.")]),e._v(" "),i("p",[e._v("A RelayState is an HTTP parameter that can be included as part of the SAML request and SAML response. In an SP-initiated sign-in flow, the SP can set the RelayState parameter in the SAML request with additional information about the request. A SAML IdP, after receiving the SAML request, takes the RelayState value and simply attaches it back as an HTTP parameter in the SAML response after the user has been authenticated. This way, when the round trip completes, the SP can use the RelayState information to get additional context about the initial SAML authentication request.")]),e._v(" "),i("p",[e._v("In the case of a deep link, the SP sets the RelayState of the SAML request with the deep-link value. When the SAML response comes back, the SP can use the RelayState value and take the authenticated user to the right resource.")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_deeplink.png",alt:"SP-initiated flow with Deep Link",title:"SP-initiated Login with Deep Link"}})]),e._v(" "),i("p",[e._v("For instructions to construct a deep link for SAML IdPs, see "),i("a",{attrs:{href:"/docs/reference/api/idps#redirecting-with-saml-deep-links"}},[e._v("Redirecting with SAML Deep Links")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"exposing-saml-configuration-in-sp"}},[e._v("Exposing SAML configuration in SP "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#exposing-saml-configuration-in-sp"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("As discussed before, the SP needs the IdP configuration to complete the SAML setup. While many ISVs choose to do this through support and email, the better way to do this is by exposing a self-service administrator page for your customer's IT administrator to enable SAML. SAML supports metadata on both the IdP and SP side. One way to configure the IdP/SP relationship on the SP side is to build the ability to receive an IdP metadata file and the ability to generate an SP metadata file for consumption by the IdP. This is the preferred method.")]),e._v(" "),i("p",[e._v("However, some ISVs choose to allow configuration of several key SAML parameters directly rather than through a metadata file. Typical parameters would include the IdP redirect URL (for SAML Request), IssuerID, IdP Logout URL. The SP must also allow the IdP public certificate to be uploaded or saved.")]),e._v(" "),i("p",[e._v("Using a metadata file is preferred because it can handle any future additions/enhancements in your SAML support without making UI changes that would otherwise be required if you expose specific SAML configuration parameters in your UI.")]),e._v(" "),i("h3",{attrs:{id:"enabling-saml-for-everyone-vs-a-subset-of-users"}},[e._v("Enabling SAML for everyone vs a subset of users "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#enabling-saml-for-everyone-vs-a-subset-of-users"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("Depending on the nature of your application, there might be reasons to allow only a subset of users to be SAML enabled. Imagine an application that is accessed by internal employees and external users like partners. The employees may use SAML to sign in into the application, while the external users may use a separate set of credentials.")]),e._v(" "),i("p",[e._v("Even in cases where the intent is to have all the users of a particular tenant be SAML-enabled, it might be useful to enable just a subset of users during proof-of-concept, testing and roll-out to test out authentication with a smaller subset of users before going-live for the entire population.")]),e._v(" "),i("h3",{attrs:{id:"implementing-a-backdoor"}},[e._v('Implementing a "backdoor" '),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#implementing-a-backdoor"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("p",[e._v("This is particularly important where the entire population is intended to be SAML-enabled in your application. Sometimes, there might be a mistake in the SAML configuration - or something changes in SAML IdP endpoints. In any case, you don't want to be completely locked out. Having a backdoor available for an administrator to use to access a locked system becomes extremely important. This is often accomplished by having a \"secret\" sign-in URL that doesn't trigger a SAML redirection when accessed. Typically, the administrator uses a username and password to sign in and make the necessary changes to fix the problem.")]),e._v(" "),i("h2",{attrs:{id:"reference"}},[e._v("Reference "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#reference"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("h3",{attrs:{id:"saml-2-0"}},[e._v("SAML 2.0 "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#saml-2-0"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Assertions and Protocols for the OASIS Security Assertion Markup Language (SAML) V2.0"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-bindings-2.0-os.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bindings for the OASIS Security Assertion Markup Language (SAML) V2.0"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Profiles for the OASIS Security Assertion Markup Language (SAML) V2.0"),i("OutboundLink")],1)])]),e._v(" "),i("h3",{attrs:{id:"saml-faqs"}},[e._v("SAML FAQs "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#saml-faqs"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/docs/concepts/saml/faqs/"}},[e._v("Okta SAML frequently asked questions")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);