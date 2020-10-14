(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{516:function(e,o,t){"use strict";t.r(o);var a=t(23),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",[e._v("Okta Data Model")]),e._v(" "),t("p",[e._v("This page provides a high-level overview of the Okta data model.")]),e._v(" "),t("p",[e._v("Entities inside Okta are referred to as resources. Each Okta resource contains:")]),e._v(" "),t("ul",[t("li",[e._v("Attributes, such as "),t("code",[e._v("name")]),e._v(" or "),t("code",[e._v("created")]),e._v(".")]),e._v(" "),t("li",[e._v("Links (URLs) that describe relationships or actions that you can take on the resource. For example, a "),t("code",[e._v("self")]),e._v(" link on a user would reference itself, and a "),t("code",[e._v("deactivate")]),e._v(" link would move the lifecycle state of the user.")]),e._v(" "),t("li",[e._v("A Profile that allows you to store information about the object. For example, a User profile has an "),t("code",[e._v("email")]),e._v(" attribute that contains the value for the email address.")])]),e._v(" "),t("p",[e._v("When you "),t("code",[e._v("sign up")]),e._v(" for Okta, a private data space is created for you that is represented as an "),t("code",[e._v("organization")]),e._v(" in Okta. As an Okta customer, you own your organization and everything in it: Applications, Directories, Users, Groups, Policies, and so on.")]),e._v(" "),t("p",[e._v("A top-level "),t("code",[e._v("Directory")]),e._v(" resource is available for your user base in your organization. Directories can either be hosted inside Okta or can be used to replicate outside user directories, as in the case of Active Directory or LDAP.")]),e._v(" "),t("p",[e._v("Your end users are modeled inside Okta as "),t("RouterLink",{attrs:{to:"/docs/reference/api/users/"}},[t("code",[e._v("Users")])]),e._v(". Users are associated with an email address and a username. The username must be unique, but it can be changed (and often is when, for example, someone changes their name). The email address doesn't need to be unique and often isn't. Uniqueness for a user is determined by their Okta user ID.")],1),e._v(" "),t("p",[e._v("A "),t("RouterLink",{attrs:{to:"/docs/reference/api/groups/"}},[t("code",[e._v("Group")])]),e._v(" is made up of users found within a directory. It can be thought of as a label applied to a set of users. A user can be a member of multiple groups. Groups are useful for representing roles, relationships, and can even be used for subscription tiers.")],1),e._v(" "),t("p",[e._v("An "),t("RouterLink",{attrs:{to:"/docs/reference/api/apps/"}},[t("code",[e._v("Application")])]),e._v(" holds information about the protocol in which it wants Okta to communicate, policies for accessing the application, and which users can use the application after identifying themselves. An Application also contains information about the protocol it uses to communicate with Okta.")],1),e._v(" "),t("p",[e._v("The relationship between an application and a user is stored in Okta as an "),t("RouterLink",{attrs:{to:"/docs/reference/api/apps/#assign-user-to-application-for-sso"}},[t("code",[e._v("AppUser")])]),e._v(". This allows for "),t("code",[e._v("mappings")]),e._v(" between profile values where they are different. For example, application1 may refer to a User's last name as "),t("code",[e._v("lastName")]),e._v(" and application2 may refer to last name as "),t("code",[e._v("surname")]),e._v(".  The "),t("code",[e._v("AppUser")]),e._v(" stores the value as necessary for the application.")],1),e._v(" "),t("p",[e._v("A "),t("RouterLink",{attrs:{to:"/docs/reference/api/policy/"}},[t("code",[e._v("Policy")])]),e._v(" specifies the "),t("code",[e._v("rules")]),e._v(" of how your organization behaves for certain actions. Policies have conditions that need to be met for actions to be applied. Your Okta organization has policies for how to gain access to an application, what the user needs to do to reset their password, and to enroll into multifactor authentication, for example.")],1),e._v(" "),t("p",[e._v("An "),t("RouterLink",{attrs:{to:"/docs/reference/api/authorization-servers/"}},[t("code",[e._v("Authorization Server")])]),e._v(" in your Okta organization has the duty of giving applications tokens that allow those applications to access resources either from your APIs or Okta's. This is done with protocols such as OAuth 2.0, OpenID Connect, and SAML.")],1),e._v(" "),t("p",[e._v("A resource that contains other resources is known as a "),t("code",[e._v("collection")]),e._v(". Collections support additional behavior, such as pagination, sort ordering, and searching. So the "),t("code",[e._v("Users")]),e._v(" collection would contain an array of "),t("code",[e._v("User")]),e._v(" resources.")])])}),[],!1,null,null,null);o.default=s.exports}}]);