(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{832:function(t,e,a){"use strict";a.r(e);var s=a(38),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("You've seen how Okta handles sign-in for your app and how you can use the Developer Console to manage users. Okta offers much more, including a large set of APIs your software can interact with, either directly, through REST calls, or by means of SDKs that support various coding languages.")]),t._v(" "),a("h4",{attrs:{id:"get-an-api-token"}},[t._v("Get an API token "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#get-an-api-token"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),a("p",[t._v("To secure access to API endpoints, Okta requires an API token consisting of a secret value to be included in the header of each request.")]),t._v(" "),a("p",[t._v("To obtain an API token, use the Developer Console:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select "),a("strong",[t._v("Tokens")]),t._v(" from the "),a("strong",[t._v("API")]),t._v(" menu.")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v("Create Token")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Name your token and click "),a("strong",[t._v("Create Token")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Record the token value. This is the only opportunity to see it and record it.")])])]),t._v(" "),a("p",[t._v("For full details on API tokens, see "),a("RouterLink",{attrs:{to:"/docs/guides/create-an-api-token/create-the-token/"}},[t._v("Create an API token")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"create-a-user-by-api"}},[t._v("Create a user by API "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#create-a-user-by-api"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),a("p",[t._v("To create an additional end user in your org, you can make a REST API call to the "),a("code",[t._v("/users")]),t._v(" endpoint.")]),t._v(" "),a("p",[t._v("The full URL of the endpoint needs to begin with your Okta domain. That should be followed by the specific path for this endpoint, which is "),a("code",[t._v("/api/v1/users")]),t._v(". For example: "),a("code",[t._v("https://dev-133337.okta.com/api/v1/users")]),t._v(".")]),t._v(" "),a("p",[t._v("To create a new user, you make a "),a("code",[t._v("POST")]),t._v(" call to that endpoint, supplying information about the new user in a JSON object in the request body.")]),t._v(" "),a("p",[t._v("You need to include your API token in the "),a("code",[t._v("Authorization")]),t._v(" header of the request.")]),t._v(" "),a("p",[t._v("Here's how you would do it using curl from the command line:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -v -X POST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: SSWS 00QCjAl4MlV-WPXM...0HmjFx-vbGua"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "profile": {\n    "firstName": "Isaac",\n    "lastName": "Brock",\n    "email": "isaac.brock@example.com",\n    "login": "isaac.brock@example.com",\n    "mobilePhone": "555-415-1337"\n  }\n}\'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://dev-33337.okta.com/api/v1/users?activate=false"')]),t._v("\n")])])]),a("p",[t._v("In the above example, you'd need to replace the Okta domain in the URL with your own Okta domain. You'd also need to replace the API token in the "),a("code",[t._v("Authorization")]),t._v(" header with the API token you created. Note that the value of the API token needs to be prefaced with "),a("code",[t._v("SSWS")]),t._v(" followed by a space.")]),t._v(" "),a("p",[t._v("For full details of the "),a("code",[t._v("/users")]),t._v(" API and everything it can do, see the "),a("RouterLink",{attrs:{to:"/docs/reference/api/users/"}},[t._v("Users")]),t._v(" API reference page.")],1),t._v(" "),a("p",[t._v("For information on using Postman to explore Okta APIs, see "),a("RouterLink",{attrs:{to:"/code/rest/"}},[t._v("Use Postman with the Okta REST APIs")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"create-a-user-by-sdk"}},[t._v("Create a user by SDK "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#create-a-user-by-sdk"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),a("p",[t._v("Instead of making REST API calls directly, you can use one of the Okta SDKs provided for specific languages and frameworks.")]),t._v(" "),a("p",[t._v("For example, to create a user with the Java SDK, you could use the following code:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"joe.coder@example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFirstName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Joe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLastName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildAndCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The Java SDK and its documentation are available at its "),a("a",{attrs:{href:"https://github.com/okta/okta-sdk-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Repository"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/docs/"}},[t._v("Languages & SDKs")]),t._v(" for information on getting started with a variety of Okta SDKs.")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);