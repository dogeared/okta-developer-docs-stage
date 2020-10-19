(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1105:function(t,s,a){"use strict";a.r(s);var n=a(38),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[t._v("Use the "),a("RouterLink",{attrs:{to:"/docs/reference/api/apps/#list-csrs-for-application"}},[t._v("Apps API")]),t._v(" to return a list of all apps to use with Outbound SAML apps.")],1),t._v(" "),a("li",[t._v("Use the "),a("RouterLink",{attrs:{to:"/docs/reference/api/idps/#list-signing-csrs-for-idp"}},[t._v("IdPs API")]),t._v(" to return a list of all IdPs to use with Inbound SAML apps.")],1)]),t._v(" "),a("p",[t._v("You can generate a CSR and receive the response in either JSON or "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc2986",target:"_blank",rel:"noopener noreferrer"}},[t._v("PKCS#10"),a("OutboundLink")],1),t._v(" format.")]),t._v(" "),a("p",[t._v("The following request generates a CSR in JSON format to use with Outbound SAML apps.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("For Inbound SAML, change the POST statement to "),a("code",[t._v("POST /api/v1/idps/00000id1U3iyFqLu0g4/credentials/csrs/")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("For PKCS#10 format, change the Accept statement to "),a("code",[t._v("Accept: application/pkcs10")]),t._v("."),a("br"),t._v(" "),a("strong",[t._v("Accept")]),t._v(" specifies the response format, and "),a("strong",[t._v("Content-Type")]),t._v(" specifies the request format.")])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("POST /api/v1/apps/00000id1U3iyFqLu0g4/credentials/csrs/\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" application/json\nContent-Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" application/json\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subject"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"countryName"')]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"US"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stateOrProvinceName"')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"California"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"localityName"')]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"San Francisco"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"organizationName"')]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Company, Inc."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"organizationalUnitName"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourOrgUnit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commonName"')]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IdP Issuer"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subjectAltNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dnsNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourorgunit.example.com"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v(" Created\nLocation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//${yourOktaDomain}/api/v1/apps/00000id1U3iyFqLu0g4/credentials/csrs/abckutaSe7fZX0SwN1GqDApofgD1OW8g2B5l2azh000")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abckutaSe7fZX0SwN1GqDApofgD1OW8g2B5l2azh000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-04-19T12:50:58.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"csr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABCC6jCCAdICAQAwdjELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xEzARBgNVBAoMCk9rdGEsIEluYy4xEDAOBgNVBAsMB0phbmt5Q28xEzARBgNVBAMMCklkUCBJc3N1ZXIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCpus1zL9sVhEDhwEcdQFWYerAOkDn+J3OkpXFyTPBUFLDYe21CoQN0TQOl5CgtEa8rViyNj0Drv8bWppojLbEkBO3FY6YqDbqSlU+ZuBlhvwiaxnGBnKeRLH6RoWn/6+I1GwHkJJDGYzVtYfELu92sZnhLzNJFcleI41OK7Ll1fWI+un4N5Ryd2JHHtczo7t9N0hWgulckmXHM+qOk1/0abXGZUV2QMDNVIgDcSswyK/n3Ri1p5ccJGX8sJdYCiihxE+Ms97z+PO7oLVbdVLkRDcSDE0T/dTK8CThI5otvhM4PlEeYbNUa8/9f88bUteA2oxDdTWJVurH6FeMvZ6iFAgMBAAGgLzAtBgkqhkiG9w0BCQ4xIDAeMBwGA1UdEQQVMBOCEWphbmt5LmV4YW1wbGUuY29tMA0GCSqGSIb3DQEBCwUAA4IBAQB3o1VcZ+NnwBzSKITWKnf9Pb0wY8hrHsVo+jAX0eUrotMCSnCIL3hyLOZW+LXvITfaREM6l/L0vKLqbhNto9trmpn9wy+fFqRboC/0zAyIotPiRDBsCVD+UEKea5IIrDAWsq2Guv1RfUcyI79rblwctfNZbIHj5rpoYVpDqYvQpCHRMmQrzKMDb9qVtZVHbAHqTKEDQTLnQbyvwuw/kmaiPMK7SDSHTPpgq+izW2M6Qqqjn8Mz8RNgQcantXvjcb70uAFt1uxkQR4j9K/kRoY7pjR4d/FrAq/oxfnNPQxyvXYr+/MzOxEFdDKts4vSCYqpOLgQs2xpC6vfhAeHGYEFK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kty"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RSA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_links"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"self"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}/api/v1/apps/00000id1U3iyFqLu0g4/credentials/csrs/abckutaSe7fZX0SwN1GqDApofgD1OW8g2B5l2azh000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hints"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allow"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DELETE"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"publish"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}/api/v1/apps/00000id1U3iyFqLu0g4/credentials/csrs/abckutaSe7fZX0SwN1GqDApofgD1OW8g2B5l2azh000/lifecycle/publish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hints"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allow"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("NextSectionLink")],1)}),[],!1,null,null,null);s.default=r.exports}}]);