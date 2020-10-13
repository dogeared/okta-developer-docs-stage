(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{567:function(e,t,i){"use strict";i.r(t);var n=i(38),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("Access the external SAML Identity Provider that you want to integrate with and gather the following information for use in configuring the SAML Identity Provider in Okta in the next step. Make sure that the SAML Identity Provider supports Service Provider-initiated SAML.")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note:")]),e._v(" If you need a quick and easy SAML Identity Provider to use for testing purposes, you can try using this "),i("a",{attrs:{href:"https://github.com/mcguinness/saml-idp",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAML Identity Provider on GitHub"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),i("p",[e._v("Sometimes the Issuer, Single Sign-On URL, and Certificate aren't available from the external IdP until the metadata (the Assertion Consumer Service URL (ACS URL) and Audience URI) is uploaded to the external IdP. And, the ACS URL and Audience URI values aren't available until the IdP in Okta is configured. If that is the case with your external IdP, continue to the "),i("GuideLink",{attrs:{link:"../configure-idp-in-okta"}},[e._v("next step")]),e._v(".")],1),e._v(" "),i("ul",[i("li",[i("strong",[e._v("IdP Issuer URI")]),e._v(" — The issuer URI of the Identity Provider. This value is usually the SAML Metadata "),i("code",[e._v("entityID")]),e._v(" of the Identity Provider "),i("code",[e._v("EntityDescriptor")]),e._v(".")]),e._v(" "),i("li",[i("strong",[e._v("IdP Single Sign-On URL")]),e._v(" — The binding specific Identity Provider Authentication Request Protocol endpoint that receives SAML AuthN Request messages from Okta.")]),e._v(" "),i("li",[i("strong",[e._v("IdP Signature Certificate")]),e._v(" — The PEM or DER encoded public key certificate of the Identity Provider used to verify SAML message and assertion signatures.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);