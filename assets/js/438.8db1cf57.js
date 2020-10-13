(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{521:function(e,t,o){"use strict";o.r(t);var r=o(38),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",[e._v("Key rotation")]),e._v(" "),o("p",[e._v("Key rotation is when a signing key is retired and replaced by generating a new cryptographic key. Rotating keys on a regular basis is an industry standard and follows cryptographic best practices.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" The current Okta key rotation schedule is four times a year, but can change without notice.")])]),e._v(" "),o("p",[e._v("If you are using a Custom Authorization Server, configure and perform key rollover/rotation at the "),o("RouterLink",{attrs:{to:"/docs/reference/api/authorization-servers/#credentials-object"}},[e._v("Authorization Server level")]),e._v(".")],1),e._v(" "),o("p",[e._v("If you are using the Org Authorization Server, configure and perform key rollover/rotation at the "),o("RouterLink",{attrs:{to:"/docs/reference/api/apps/#generate-new-application-key-credential"}},[e._v("client level")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"key-rotation-for-custom-authorization-servers"}},[e._v("Key rotation for Custom Authorization Servers "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#key-rotation-for-custom-authorization-servers"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("For security purposes, Okta automatically rotates keys used to sign tokens.")])]),e._v(" "),o("li",[o("p",[e._v("In case of an emergency, Okta can rotate keys as needed.")])]),e._v(" "),o("li",[o("p",[e._v("Okta always publishes keys to the "),o("code",[e._v("jwks_uri")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("To save the network round trip, your app should cache the "),o("code",[e._v("jwks_uri")]),e._v(" response locally. The "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[e._v("standard HTTP caching headers"),o("OutboundLink")],1),e._v(" are used and should be respected.")])]),e._v(" "),o("li",[o("p",[e._v("You can switch the Authorization Server key rotation mode by updating the Authorization Server's "),o("code",[e._v("rotationMode")]),e._v(" property. For more information see the API Reference: "),o("RouterLink",{attrs:{to:"/docs/reference/api/authorization-servers/#credentials-object"}},[e._v("Authorization Server Credentials Signing Object")]),e._v(".")],1)])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Caution:")]),e._v(" Keys used to sign tokens automatically rotate and should always be resolved dynamically against the published JWKS. Your app might fail if you hardcode public keys in your applications. Be sure to include key rollover in your implementation.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" When using a Custom Authorization Server, you may work with a client that can't call the "),o("code",[e._v("/keys")]),e._v(" endpoint to dynamically fetch the JWKS. You can pin that specific client to a specific key by "),o("RouterLink",{attrs:{to:"/docs/reference/api/apps/#generate-new-application-key-credential"}},[e._v("generating a key credential")]),e._v(" and "),o("RouterLink",{attrs:{to:"/docs/reference/api/apps/#update-key-credential-for-application"}},[e._v("updating the application")]),e._v(" to use it for signing. This overrides the Custom AS rollover/pinning behavior for that client. Should you need to turn off automatic key rotation for the entire Custom Authorization Server, you can do that by switching the "),o("strong",[e._v("Signing Key Rotation")]),e._v(" value to "),o("strong",[e._v("Manual")]),e._v(" in the Admin Console.")],1)]),e._v(" "),o("h2",{attrs:{id:"key-rotation-for-the-org-authorization-server"}},[e._v("Key rotation for the Org Authorization Server "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#key-rotation-for-the-org-authorization-server"}},[o("svg",{attrs:{viewBox:"0 0 512 512"}},[o("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("For security purposes, Okta automatically rotates keys used to sign the ID token.")])]),e._v(" "),o("li",[o("p",[e._v("Okta doesn't expose the public keys used to sign the access token minted by the Org Authorization Server. You can use the "),o("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#introspect"}},[o("code",[e._v("/introspect")])]),e._v(" endpoint to validate the access token.")],1)]),e._v(" "),o("li",[o("p",[e._v("You can't manually rotate the Org Authorization Server's signing keys.")])])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" If your application can't retrieve keys dynamically, you can pin that specific client to a specific key by "),o("RouterLink",{attrs:{to:"/docs/reference/api/apps/#generate-new-application-key-credential"}},[e._v("generating a key credential")]),e._v(" and "),o("RouterLink",{attrs:{to:"/docs/reference/api/apps/#update-key-credential-for-application"}},[e._v("updating the application")]),e._v(" to use it for signing.")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);