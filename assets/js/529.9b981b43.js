(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{745:function(e,t,o){"use strict";o.r(t);var r=o(38),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Using the ID for the User that you created earlier, add an SMS factor for that User:")]),e._v(" "),o("ol",[o("li",[e._v("In Postman, open the "),o("strong",[e._v("Factors (Okta API)")]),e._v(" collection and then the "),o("strong",[e._v("Factor Lifecycle Operations")]),e._v(" collection.")]),e._v(" "),o("li",[e._v("Select the "),o("strong",[e._v("Enroll Okta SMS Factor")]),e._v(" request template. The request appears on the right.")]),e._v(" "),o("li",[e._v("In the request URL, replace the "),o("code",[e._v("{userId}")]),e._v(" variable with the user ID that you saved in the "),o("GuideLink",{attrs:{link:"../create-test-user"}},[e._v("last step")]),e._v(".")],1),e._v(" "),o("li",[e._v("Replace the "),o("code",[e._v("{phoneNumber}")]),e._v(" variable with the "),o("RouterLink",{attrs:{to:"/docs/reference/api/factors/#sms-profile"}},[e._v("phone number")]),e._v(" you want to use for this test.")],1),e._v(" "),o("li",[e._v("Click "),o("strong",[e._v("Send")]),e._v(" to add the SMS Factor for your user. A successful request results in an HTTP status code of "),o("code",[e._v("200")]),e._v(' and a JSON payload response. The request also results in an SMS stating "Your verification code is" followed by a numerical code. Save this code.')]),e._v(" "),o("li",[e._v("Save the Factor ID value ("),o("code",[e._v("id")]),e._v(") from the response.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" If you don't receive an SMS, wait 30 seconds and try again by sending the same body payload to the "),o("code",[e._v("/resend")]),e._v(" URL found in the Factor's "),o("code",[e._v("_links")]),e._v(" object.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);