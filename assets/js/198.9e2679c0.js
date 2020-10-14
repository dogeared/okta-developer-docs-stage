(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{725:function(e,t,s){"use strict";s.r(t);var a=s(23),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("blockquote",[s("p",[s("strong",[e._v("Note:")]),e._v(" Okta SDKs support creating and signing the JWT and requesting an access token. If you are using an Okta SDK, you can skip this section and the "),s("GuideLink",{attrs:{link:"../get-access-token"}},[e._v("Get an access token")]),e._v(" section.")],1)]),e._v(" "),s("p",[e._v("Create and sign the JWT with your private key for use as a JWT assertion in the request for a scoped access token. You can create this "),s("code",[e._v("client_credentials")]),e._v(" JWT in several ways.")]),e._v(" "),s("p",[e._v("For testing purposes, use "),s("a",{attrs:{href:"https://www.jsonwebtoken.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tool"),s("OutboundLink")],1),e._v(" to generate and sign a JWT. This tool supports both JWT and PEM formats. For a production use case, see "),s("RouterLink",{attrs:{to:"/docs/guides/build-self-signed-jwt/java/jwt-with-private-key/"}},[e._v("Build a JWT with a private key")]),e._v(" for both a Java and a JavaScript example of signing the JWT.")],1),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Note:")]),e._v(" After the service app has Okta-scoped grants, only an admin with Super Admin role permissions can rotate the keys.")])]),e._v(" "),s("p",[e._v("The following "),s("RouterLink",{attrs:{to:"/docs/reference/api/oidc/#token-claims-for-client-authentication-with-client-secret-or-private-key-jwt"}},[e._v("JWT claims")]),e._v(" can be used in the request for a scoped access token:")],1),e._v(" "),s("ul",[s("li",[s("code",[e._v("aud")]),e._v(" — The full URL of the resource that you're using the JWT to authenticate to")]),e._v(" "),s("li",[s("code",[e._v("exp")]),e._v(" — The expiration time of the token in seconds since January 1, 1970 UTC (current UNIX timestamp). This value must be a maximum of only an hour in the future.")]),e._v(" "),s("li",[s("code",[e._v("jti")]),e._v(" — (Optional) A unique identifier of the token. This value is used to prevent the JWT from being replayed. The claim is a case-sensitive string.")]),e._v(" "),s("li",[s("code",[e._v("iat")]),e._v(" — (Optional) The issuing time of the token in seconds since January 1, 1970 UTC (current UNIX timestamp)")]),e._v(" "),s("li",[s("code",[e._v("iss")]),e._v(" — The issuer of the token. This value must be the same as the "),s("code",[e._v("client_id")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("sub")]),e._v(" — The subject of the token. This value must be the same as the "),s("code",[e._v("client_id")]),e._v(".")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("For this example, include the following parameters in the payload of the JWT:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("aud")]),e._v(" — "),s("code",[e._v("https://{yourOktaDomain}.com/oauth2/v1/token")])]),e._v(" "),s("li",[s("code",[e._v("iss")]),e._v(" — "),s("code",[e._v("client_id")])]),e._v(" "),s("li",[s("code",[e._v("sub")]),e._v(" — "),s("code",[e._v("client_id")])])]),e._v(" "),s("p",[s("strong",[e._v("Payload example")])])])]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"aud"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://{yourOktaDomain}/oauth2/v1/token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"iss"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0oar95zt9zIpYuz6A0h7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0oar95zt9zIpYuz6A0h7"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[e._v("In the "),s("strong",[e._v("Signing Key")]),e._v(" box, paste the public and private key that you generated in the "),s("GuideLink",{attrs:{link:"../create-publicprivate-keypair"}},[e._v("Create a public/private key pair")]),e._v(" step.")],1)]),e._v(" "),s("li",[s("p",[e._v("For the key format, use either the default of "),s("strong",[e._v("JWT")]),e._v(" or switch to "),s("strong",[e._v("PEM")]),e._v(", and then click "),s("strong",[e._v("Generate JWT")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("The signed JWT appears. Copy the JWT for use in the "),s("GuideLink",{attrs:{link:"../get-access-token"}},[e._v("Get an access token")]),e._v(" step.")],1)])]),e._v(" "),s("NextSectionLink")],1)}),[],!1,null,null,null);t.default=n.exports}}]);