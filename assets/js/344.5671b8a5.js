(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{425:function(e,t,a){"use strict";a.r(t);var s=a(23),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticStyle:{"font-size":"0.9em","margin-bottom":"-20px"}},[a("a",{attrs:{href:"/books/api-security/api-keys/"}},[e._v("← Managing API Credentials")])]),e._v(" "),a("h2",{attrs:{id:"api-keys-choosing-a-type"}},[e._v("Choosing a Type of API Token "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#api-keys-choosing-a-type"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Now that we've covered general advice for storing and using API tokens, let's review common options for securing your API. We'll cover the different types of API tokens, touch on the advantages and disadvantages of each, and summarize with suggestions and a recommended approach.")]),e._v(" "),a("h3",{attrs:{id:"secure-your-api"}},[e._v("Secure Your API "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#secure-your-api"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("First, let's dig into some best practices:")]),e._v(" "),a("ul",[a("li",[e._v("If your API is intended to be used to support an end user application, secure it using OAuth 2.0 to act as a Resource Server (RS) as defined by the OAuth 2.0 specification.")]),e._v(" "),a("li",[e._v('If your API is intended to be used as a service by other software, secure your API using an "API token" - a string that is unique for each client.')])]),e._v(" "),a("p",[e._v("The first approach, implementing an OAuth 2.0 Resource Server, is intended to be used when an application is acting on behalf of the person using the app. The Instagram and Spotify APIs are great examples where every action of the API needs the user's context to make sense.")]),e._v(" "),a("p",[e._v("The second approach, using an API token, is the best approach for automated software. Stripe, Twilio, and SendGrid are examples of this type of an API. While you certainly can, and eventually should consider, implementing OAuth 2.0 access tokens, doing so may be more overhead than telling your users to just use an API token.")]),e._v(" "),a("p",[e._v("Regardless of approach, the following patterns apply:")]),e._v(" "),a("ul",[a("li",[e._v("Use the "),a("code",[e._v("Authorization: Bearer")]),e._v(' header for authenticating to your API. The single most important reason is that URL parameters are captured in server access logs and caches. Any "secret" included as a parameter is no longer a secret. As a standard defined by RFC 6750, most HTTP clients have built-in methods for using Bearer tokens.')]),e._v(" "),a("li",[e._v("Further, instead of using a simple unique string, use a JSON Web Token or JWT as the Bearer token. By using JWT and the claims defined by RFC 7519, you can support a wide range of scenarios using just one authentication method. And, since JWT is such a widely adopted standard, most programming languages and frameworks have first-class JWT decoding and validation built in. You get more flexibility and wider compatibility with less work!")])]),e._v(" "),a("p",[e._v('Another important thing to keep in mind is that by using a JWT as a Bearer token, you can support both token types that we describe above. A JWT works equally well as an OAuth 2.0 access token or as an "opaque" generic API token. You could start by just offering authenticating with an API token, but later add support for OAuth 2.0 and give your customers the features that OAuth 2.0 easily enables like automatic rotation of access tokens. You and your users get a clear, simple upgrade path for the life of your API.')])])}),[],!1,null,null,null);t.default=o.exports}}]);