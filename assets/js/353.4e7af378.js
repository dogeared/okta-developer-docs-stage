(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{430:function(e,t,a){"use strict";a.r(t);var i=a(38),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticStyle:{"font-size":"0.9em","margin-bottom":"-20px"}},[a("a",{attrs:{href:"/books/api-security/authz/"}},[e._v("← Authorization")])]),e._v(" "),a("h2",{attrs:{id:"authz-attribute-based"}},[e._v("Attribute-Based Access Control "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#authz-attribute-based"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("The pattern must be obvious by now – in ABAC, access is defined by the attributes on the user or service, and a policy that enforces what actions these attributes are allowed to perform. As we saw in the above section, implementing RBAC is relatively simple but maintaining it over time becomes cumbersome as the system grows and permissions get more fine-grained. With ABAC, it's the opposite. Implementing it can be a herculean task but once complete, maintaining it is relatively simple and efficient.")]),e._v(" "),a("p",[e._v("With RBAC, every action that can be carried out in a system is tied to a complex set of role combinations. If a new role is introduced, every action that this new role can access must be updated. However with ABAC, you can create a central policy engine in which you define complex boolean logic for what attributes are allowed to do based on various conditions. ABAC is a great model for fine-grained (deep/specific) access control whereas RBAC is good for coarse-grained (broad/generic) access control.")]),e._v(" "),a("p",[e._v("It's also important to note that attributes can be about anything or anyone:")]),e._v(" "),a("ul",[a("li",[e._v("There can be user or subject attributes like name, ID, role, department, status")]),e._v(" "),a("li",[e._v("There can be attributes to actions like CRUD: add, edit, remove, approve")]),e._v(" "),a("li",[e._v("There can be resource attributes like the bank example we covered earlier: bank account, bank balance, or resource clarification like top secret, public access")]),e._v(" "),a("li",[e._v("There can also be attributes about the context of an interaction: time, location, device")])]),e._v(" "),a("p",[e._v("Let's revisit the Wookie Inc. example from the RBAC section. We created a simple RBAC management model for an IT admin As the organization grows and enters new markets, the access requirements also go up, introducing all sorts of complexity:")]),e._v(" "),a("ul",[a("li",[e._v("HIPAA regulations specify only HIPAA certified users can look at user data")]),e._v(" "),a("li",[e._v("To handle scale, Wookie Inc. decides to move to a microservices architecture")]),e._v(" "),a("li",[e._v("Other compliance requirements mean that Wookie Inc. has to have a way to audit everything, including APIs.")]),e._v(" "),a("li",[e._v("They have decided to open up some of their APIs for public access.")])]),e._v(" "),a("p",[e._v("All of these requirements aren't uncommon for companies to address as they grow. Let's take a deeper look at the last one on the list: exposing APIs for public consumption. This can be third party developers that want to build against the platform or customers that need to build custom workflows. Either way, making sure the right user has the right privileges is incredibly important and difficult to implement. Unlike a product where actions are simple and what a user can do is based on roles, API actions are more granular.")]),e._v(" "),a("p",[e._v("This adds more complexity to API authorization Take a simple music playlist API, can the consumers of my API:")]),e._v(" "),a("ul",[a("li",[e._v("Read what songs are in a users playlist?")]),e._v(" "),a("li",[e._v("Add or delete songs from a playlist?")]),e._v(" "),a("li",[e._v("Change the description?")]),e._v(" "),a("li",[e._v("Change the playlist order? Sort it?")])]),e._v(" "),a("p",[e._v("Even in the simplest of scenarios, authorization can get complex quickly.")]),e._v(" "),a("p",[e._v("All of these actions can be modelled as attributes of the resource that's being accessed. For example, being able to add, edit user details are attributes of the user resource. When writing code, I need a better way to model these attributes. We can utilize scopes here. If you recall, back in the Authentication chapter, OAuth 2.0 had the concept of scopes. We can use that model again here:")]),e._v(" "),a("ul",[a("li",[e._v("User scopes: read:name, edit:name, read:email, edit:email")]),e._v(" "),a("li",[e._v("Playlist scopes: read:playlist, edit:playlist, edit:description, sort:playlist")])]),e._v(" "),a("p",[e._v("The naming convention can be anything you prefer. You could also model some of these as read_name, edit_name, etc.")]),e._v(" "),a("p",[e._v("We now have a model for all the resource types and the various actions that can be carried out on these resources. You can also take this a step further and define more granular attributes: playlists can be public or private. Songs can be explicit or non-explicit.")]),e._v(" "),a("p",[e._v("We can repeat the same model for users also. Users can:")]),e._v(" "),a("ul",[a("li",[e._v("Be Account admins")]),e._v(" "),a("li",[e._v("Be in listen only mode")]),e._v(" "),a("li",[e._v("Be paid subscribers")]),e._v(" "),a("li",[e._v("Be the primary account holder")]),e._v(" "),a("li",[e._v("Have genre preferences.")])]),e._v(" "),a("p",[e._v("These attributes can be defined on the user object however you like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/users\n    id\n    Name\n    admin\n      yes or no\n    subscription\n      free, family, premium\n    /preferences\n    /profile\n    /playlists\n")])])]),a("p",[e._v("These are all user attributes and I can model the actions on them using scopes in a similar fashion:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("read:account_status")]),e._v(", "),a("code",[e._v("edit:listening_mode")]),e._v(", "),a("code",[e._v("edit:genre_preferences")])]),e._v(" "),a("li",[a("code",[e._v("edit:subscription")]),e._v(", "),a("code",[e._v("read:subscription")]),e._v(", "),a("code",[e._v("read:genre_preferences")])])]),e._v(" "),a("p",[e._v("At the same time, you can use these user attributes to enforce access:")]),e._v(" "),a("ul",[a("li",[e._v("Access to social groups in Wookie Inc. can be enforced based on genre preferences or subscription status")]),e._v(" "),a("li",[e._v("Allowing users to skip songs and that can be based on their mode and subscription status")])]),e._v(" "),a("p",[e._v("Using this model, you can now architect a simple model for making authorization decisions. ABAC has a standardized architecture that we can use. Let's take an simple example: Leia is a free user that wants to edit Han's workout playlist. Editing playlists depends on a simple factor: It is only available to paid members.")]),e._v(" "),a("p",[e._v("How would this flow?")]),e._v(" "),a("p",[e._v("There are multiple ways to architect this but ABAC proposes the following architecture:")]),e._v(" "),a("ul",[a("li",[e._v("Policy Enforcement Point (PEP) - Think of this as a gateway. Its protecting all the resources and all requests are routed to this point to make a decision. It takes the incoming HTTP request and creates an authorization specific request.")]),e._v(" "),a("li",[e._v("Policy Decision Point (PDP) - This is really the brain of the architecture. It consumes the authorization request sent from PEP, breaks it down, and evaluates all the attributes: Who is accessing? What attributes do they have? What are they requesting? With all this data in hand, it can consult various sources like a database or a 3rd party system like Okta or LDAP to make a decision.")])]),e._v(" "),a("p",[e._v("Using this, let's see how Leia's request to edit Han's playlist will be evaluated:")]),e._v(" "),a("p",[e._v('Leia presses the "Edit Playlist" Button → Request is routed to PEP → PEP constructs an authorization request → PEP requests edit:playlist, edit:description scopes along with some identifying information like user id → PDP uses this information to lookup policy, user info, and returns allow or deny.')]),e._v(" "),a("p",[e._v("While this is a simple example, from it we can extrapolate more complex requests and apply the same architecture for an entire system. For APIs, the PEP is usually the API Gateway. This gateway can then rely on an internal policy engine or potentially using information from a 3rd party identity provider to act as the PDP.")]),e._v(" "),a("p",[e._v("ABAC is a powerful and flexible approach for API authorization that requires an early investment but scales efficiently as your requirements and use cases As a general rule of thumb to decide if ABAC is better than RBAC, estimate how granular your authorization must be. Starting with RBAC for a limited set of roles and actions is a safe choice but as the number of roles and permissions increase, ABAC becomes a better choice. ABAC is also great at establishing governance policies and implementing legal/data protection compliance requirements.")]),e._v(" "),a("p",[e._v("The OAuth 2.0 framework is specifically designed for ABAC that works for many use cases, especially for APIs. When you combine it with tools like JWTs and OpenID Connect, you have a token which represents an authenticated user, additional context information such as their profile, and the scopes to which they have authorization. The OAuth 2.0 extensions allow you to implement RBAC + ABAC and scale as your API and use cases grow.")])])}),[],!1,null,null,null);t.default=s.exports}}]);