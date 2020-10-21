(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{520:function(e,t,a){"use strict";a.r(t);var r=a(38),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",[e._v("SCIM")]),e._v(" "),a("p",[e._v("This topic covers the concepts and use cases for SCIM and Okta.")]),e._v(" "),a("p",[e._v("If you are ready to start creating a SCIM integration, see our "),a("RouterLink",{attrs:{to:"/docs/guides/build-provisioning-integration/"}},[e._v("Build a SCIM provisioning integration")]),e._v(" guide and our technical references on how the "),a("RouterLink",{attrs:{to:"/docs/reference/scim/"}},[e._v("SCIM protocol is implemented with Okta")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"what-is-scim-for"}},[e._v("What is SCIM for? "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#what-is-scim-for"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("SCIM, or the "),a("a",{attrs:{href:"http://www.simplecloud.info/",target:"_blank",rel:"noopener noreferrer"}},[e._v("System for Cross-domain Identity Management"),a("OutboundLink")],1),e._v(" specification, is an open standard designed to manage user identity information. SCIM provides a defined schema for representing users and groups, and a RESTful API to run CRUD operations on those user and group resources.")]),e._v(" "),a("p",[e._v("The goal of SCIM is to securely automate the exchange of user identity data between your company's cloud applications and any service providers, such as enterprise SaaS applications.")]),e._v(" "),a("p",[e._v("Managing user lifecycles in your organization is a fundamental business problem. Hiring new employees is just the first step - you also need to provision the applications that they need for their job, enforce the corporate security policies, and update their user accounts as they advance through their time with your company. At the end of their employment period, you need to make sure that all access is quickly and thoroughly revoked across all applications. Handling all of this can be a time-consuming and error-prone process if done manually.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/oin/scim_lifecycle.png",alt:"SCIM Lifecycle",title:"User lifecycle diagram: 1 - new employee 2 - provision applications 3 - enforce security 4 - update user information 5 - off-board"}})]),e._v(" "),a("p",[e._v("As your company grows, the number of user accounts and provisioned software applications increases exponentially. Requests to add and remove users, reset passwords, change permissions, and add new types of accounts all take up valuable IT department time.")]),e._v(" "),a("p",[e._v("With the SCIM protocol, user data is stored in a consistent way and can be shared with different applications. Since data is transferred automatically, complex exchanges are simplified and the risk of error is reduced.")]),e._v(" "),a("p",[e._v("Adopting SCIM for domain management improves overall security for your company. Employees no longer need to sign in to each of their accounts. As teams develop new workflows and adopt new applications, your company can ensure security policy compliance across all accounts.")]),e._v(" "),a("h2",{attrs:{id:"how-does-okta-help"}},[e._v("How does Okta help? "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#how-does-okta-help"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_prov_con_okta_prov",target:"_blank",rel:"noopener noreferrer"}},[e._v("Okta Lifecycle Management"),a("OutboundLink")],1),e._v(" is a platform solution to provision and manage user accounts in cloud-based applications. Okta serves as a universal directory for identity-related information, giving the following benefits:")]),e._v(" "),a("ul",[a("li",[e._v("IT departments can manage the user provisioning lifecycle through a single system.")]),e._v(" "),a("li",[e._v("New employees are automatically provisioned with a user account for their applications.")]),e._v(" "),a("li",[e._v("Employee accounts can be created either directly from Okta accounts, or shared from external systems like HR applications or Active Directory.")]),e._v(" "),a("li",[e._v("Any profile updates - like department changes - populate automatically.")]),e._v(" "),a("li",[e._v("Inactive employees are automatically deactivated from their applications.")])]),e._v(" "),a("h2",{attrs:{id:"how-does-scim-work"}},[e._v("How does SCIM work? "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#how-does-scim-work"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Provisioning consists of a set of actions between a service provider - like Okta - and the cloud-based integration (the SCIM client). Using REST style architecture and JSON objects, the SCIM protocol communicates data about users or groups.  As an application developer, you define the use cases needed and then build the corresponding SCIM actions into your integration.")]),e._v(" "),a("p",[e._v("By implementing support for the SCIM standard, an integration in the Okta Integration Network can be notified when a user is created, updated, or removed from their application in Okta.")]),e._v(" "),a("p",[e._v('The provisioning actions performed by an integration are described using the database operation acronym "CRUD": Create, Read, Update, and Delete. The four CRUD operations are the building blocks that combine to solve your end-to-end use cases:')]),e._v(" "),a("h3",{attrs:{id:"create"}},[e._v("Create "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#create"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("This SCIM operation creates new users in your downstream application based on the values in the Okta user profile and group assignments.")]),e._v(" "),a("h3",{attrs:{id:"read"}},[e._v("Read "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#read"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Information about user and group resources can be queried from your application to match them against existing Okta resources, or to import them into Okta if the resources don't already exist.")]),e._v(" "),a("h3",{attrs:{id:"update"}},[e._v("Update "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#update"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("If a resource in your application needs to be updated based on data changed in Okta, this operation updates existing user or group attributes. Alternatively, if your application functions as the source of truth for specific attributes of a user identity, this action updates the Okta user profile.")]),e._v(" "),a("p",[e._v("User attributes can be mapped from your source into Okta and conversely, an attribute can be mapped from Okta to a target attribute in your application.")]),e._v(" "),a("h3",{attrs:{id:"delete-deprovision"}},[e._v("Delete (Deprovision) "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#delete-deprovision"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("The deletion or deprovisioning of end-user profiles in SCIM operations depends on whether Okta or your SCIM application functions as the source of truth for user profile information.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If an admin deprovisions an end-user's profile inside Okta, the user resource inside your SCIM application is updated with "),a("code",[e._v("active=false")]),e._v(". If that user needs to be reprovisioned at a later date (for example, a return from parental leave or if a contractor is rehired), then the "),a("code",[e._v("active")]),e._v(" attribute can be switched back to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("p",[e._v("Deactivated end-user accounts lose access to their provisioned Okta integrations. Your application can run different actions after deprovisioning a user, such as changing user access permissions, removing a license, or completely disabling the user account.")])]),e._v(" "),a("li",[a("p",[e._v("If an admin deletes a deactivated end-user profile inside Okta, the user resource inside your SCIM application isn't changed. The initial deactivation step already set "),a("code",[e._v("active=false")]),e._v(". Okta doesn't send a request to delete the user resource inside the customer's SCIM application.")])]),e._v(" "),a("li",[a("p",[e._v("Conversely, if an end-user profile is marked with "),a("code",[e._v("active=false")]),e._v(" inside your SCIM application, and the Okta integration is mastered by that SCIM application, then when an import from your SCIM application is run, the user's profile is marked as deactivated inside Okta.")])]),e._v(" "),a("li",[a("p",[e._v("Similarly, if an end-user profile is deleted from inside your SCIM application, and the end user is mastered by that SCIM application, then when an import from your SCIM application is run, the user's profile is deleted inside Okta.")])])]),e._v(" "),a("h3",{attrs:{id:"sync-passwords"}},[e._v("Sync passwords "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#sync-passwords"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Outside of the base CRUD operations, Okta supports additional provisioning features like syncing passwords.")]),e._v(" "),a("p",[e._v("Password synchronization helps you coordinate Okta-mastered users to ensure that a user’s Active Directory (AD) password and their Okta password always match. With password synchronization, your users have a single password to access applications and devices.")]),e._v(" "),a("p",[e._v("This option sets the user's password for your integration to match the Okta password or to be assigned a randomly generated password. For more information about this functionality and how to configure it in the Okta product, see "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Security_Using_Sync_Password",target:"_blank",rel:"noopener noreferrer"}},[e._v("Synchronize passwords from Okta to Active Directory"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"map-profile-attributes"}},[e._v("Map profile attributes "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#map-profile-attributes"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Another provisioning feature supported by Okta is the mapping of user profile attributes.")]),e._v(" "),a("p",[e._v('After provisioning is enabled, you can set an application to be the "source" from which users profiles are imported or the "target" to which attributes are sent.')]),e._v(" "),a("p",[e._v("Okta uses a Profile Editor to map specific user attributes from the source application to the Okta user profile.")]),e._v(" "),a("h2",{attrs:{id:"lifecycle-management-using-profile-mastering"}},[e._v("Lifecycle management using profile mastering "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#lifecycle-management-using-profile-mastering"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Profile mastering defines the flow and maintenance of user attributes. When a profile is mastered using a source outside of Okta (for example, an HR application, Active Directory, or LDAP), then the Okta user's attributes and lifecycle state are derived exclusively from that resource. The SCIM protocol is used to handle the secure exchange of user identity data between the profile master and Okta. In this scenario, the profile isn't editable in Okta by the user or an Okta admin.")]),e._v(" "),a("p",[e._v('For example, if the lifecycle state of the user is changed to "Disabled" in Active Directory, then on the next SCIM read operation, the linked Okta user profile is switched and given the corresponding lifecycle state of '),a("code",[e._v("active=false")]),e._v(".")]),e._v(" "),a("p",[e._v("For more information about profile mastering and how to configure it in the Okta Admin Console, see:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Directory_Profile_Masters",target:"_blank",rel:"noopener noreferrer"}},[e._v("Profile mastering"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Provisioning_Deprovisioning_Overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Provisioning and Deprovisioning"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"provisioning-use-cases"}},[e._v("Provisioning use cases "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#provisioning-use-cases"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Provisioning actions can be combined to solve for end-to-end use cases. Okta supports these common Provisioning use cases:")]),e._v(" "),a("ul",[a("li",[e._v("Provision downstream applications automatically when a new employee joins the company.")]),e._v(" "),a("li",[e._v("Update your downstream applications automatically when employee profile attributes change.")]),e._v(" "),a("li",[e._v("Remove an employee's access to downstream applications automatically on termination or leave.")]),e._v(" "),a("li",[e._v("Link existing downstream application users with Okta users using a one-time import.")])]),e._v(" "),a("h2",{attrs:{id:"publish-scim-based-provisioning-integrations"}},[e._v("Publish SCIM-based provisioning integrations "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#publish-scim-based-provisioning-integrations"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("For your customers to use your SCIM provisioning integration with Okta, you need to publish it through the "),a("a",{attrs:{href:"https://www.okta.com/integrations/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Okta Integration Network"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("After you have built and tested your SCIM application, read through our "),a("RouterLink",{attrs:{to:"/docs/guides/submit-app/overview/"}},[e._v("Submit an app integration")]),e._v(" guide.")],1),e._v(" "),a("h2",{attrs:{id:"additional-background"}},[e._v("Additional background "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#additional-background"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("If you want to read more about how to use the Okta Admin Console to set up provisioning in your integration or have additional questions about SCIM, visit the following links:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_prov_okta_lcm_user_provision",target:"_blank",rel:"noopener noreferrer"}},[e._v("Okta Lifecycle Management User Provisioning"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/docs/concepts/scim/faqs/"}},[e._v("SCIM Technical FAQs")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/docs/guides/build-provisioning-integration/overview/"}},[e._v("Build a SCIM provisioning integration")])],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Apps_App_Integration_Wizard-scim",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a SCIM integration using AIW"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://support.okta.com/help/s/article/Provisioning-Concepts-and-Methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("Provisioning Concepts"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://support.okta.com/help/s/article/29448976-Configuring-On-Premises-Provisioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring On-Premises Provisioning"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("IETF "),a("a",{attrs:{href:"http://www.simplecloud.info/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview and Specification of the SCIM Protocol"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("For setting up Active Directory or LDAP for profile mastering:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_okta_active_directory_agent",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manage your Active Directory integration"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_LDAP_Provisioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manage your LDAP provisioning integration"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);