(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{591:function(t,e,s){"use strict";s.r(e);var a=s(23),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("The best way to develop and verify your SCIM integration is to use an automated test suite that runs on the "),s("a",{attrs:{href:"https://www.runscope.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BlazeMeter Runscope"),s("OutboundLink")],1),t._v(" API monitoring tool.")]),t._v(" "),s("h2",{attrs:{id:"set-up-runscope"}},[t._v("Set up Runscope "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#set-up-runscope"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),s("p",[t._v("If you don't have a Runscope account, you can sign up with a "),s("a",{attrs:{href:"https://www.runscope.com/okta",target:"_blank",rel:"noopener noreferrer"}},[t._v("free trial to Runscope"),s("OutboundLink")],1),t._v(" for Okta developers.")]),t._v(" "),s("p",[t._v("If you are developing your SCIM integration in a local environment and need to expose it to Runscope for testing, we suggest using the "),s("a",{attrs:{href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngrok"),s("OutboundLink")],1),t._v(" tool so you can route external address requests to your local web server.")]),t._v(" "),s("p",[t._v("To get started using Runscope to test your SCIM API:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download the Okta SCIM Spec Test file that corresponds to the version of SCIM you set up on your server. You will use this file to import the Okta SCIM test suite into Runscope.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/standards/SCIM/SCIMFiles/Okta-SCIM-20-SPEC-Test.json"}},[t._v("Okta SCIM 2.0 Spec Test JSON")])]),t._v(" "),s("li",[s("a",{attrs:{href:"/standards/SCIM/SCIMFiles/Okta-SCIM-11-SPEC-Test.json"}},[t._v("Okta SCIM 1.1 Spec Test JSON")])])])]),t._v(" "),s("li",[s("p",[t._v("If you are new to Runscope, your dashboard displays sample Runscope tutorials. Click "),s("strong",[t._v("Skip Tutorial")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("You should now see a screen titled "),s("strong",[t._v("API Tests")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("In the lower left of your screen, click "),s("strong",[t._v("Import Test")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("A new screen appears, titled "),s("strong",[t._v("Import Tests into …")])])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("strong",[t._v("Runscope API Tests")]),t._v(" as the import format.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Choose File")]),t._v(" and select the JSON file that you saved in Step 1.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Import API Test")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("After the import is finished, click "),s("strong",[t._v("All Tests")]),t._v(" on the left hand side of your screen.")])])]),t._v(" "),s("p",[t._v("After you've imported the Okta SCIM test suite into Runscope, the next step is to customize the test suite with the variables for your SCIM implementation.")]),t._v(" "),s("h2",{attrs:{id:"customize-the-imported-runscope-test-for-your-scim-integration"}},[t._v("Customize the imported Runscope test for your SCIM integration "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#customize-the-imported-runscope-test-for-your-scim-integration"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),s("p",[t._v("After importing the Okta SCIM test suite into Runscope, you need to configure the test settings for your SCIM integration:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("You should be looking at the "),s("strong",[t._v("API Tests")]),t._v(" window in Runscope, if not, click the "),s("strong",[t._v("Tests")]),t._v(" tab at the top of the Runscope user interface.")])]),t._v(" "),s("li",[s("p",[t._v("You should see a test named "),s("strong",[t._v("Okta SCIM X.X Spec Test")]),t._v(" (where X.X corresponds to the SCIM version of the JSON file you uploaded).")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Edit")]),t._v(" on the test panel.")])]),t._v(" "),s("li",[s("p",[t._v("The "),s("strong",[t._v("Okta SCIM X.X SPEC Test")]),t._v(" window appears. Under the "),s("strong",[t._v("Environment")]),t._v(" section of your test, there is a collapsed section labelled "),s("strong",[t._v("Test Settings")]),t._v(". Click the small arrow to expand this section.")])]),t._v(" "),s("li",[s("p",[t._v("Select the "),s("strong",[t._v("Initial Variables")]),t._v(" tab.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/oin/scim_test-init_variables.png",alt:"Initial Variables tab",title:"Showing the location of the Initial Variables tab"}})])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Add Initial Variable")]),t._v(" and add the following case-sensitive variables:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Variable Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Example Values")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("SCIMBaseURL")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("https://example.com/scim/v2")]),t._v(" "),s("code",[t._v("https://example.com/scim/v1")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("For example, if your SCIM integration is hosted on "),s("a",{attrs:{href:"https://example.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com"),s("OutboundLink")],1),t._v(" and uses a prefix of /scim/v2 then the "),s("em",[t._v("SCIMBaseURL")]),t._v(" value for your integration would be: "),s("code",[t._v("https://example.com/scim/v2")]),t._v(".")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("auth")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Bearer abcxyz1234567890")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("OAuth 2.0 Bearer token or Basic authentication code.")])])])]),t._v(" "),s("p",[t._v("Click "),s("strong",[t._v("Save")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("In a new browser window, open the "),s("a",{attrs:{href:"/standards/SCIM/SCIMFiles/Initial_Script_Spec.txt"}},[t._v("Initial Script Spec")]),t._v(" text file and copy all the text to your clipboard.")])]),t._v(" "),s("li",[s("p",[t._v("Back in the Runscope "),s("strong",[t._v("Environment")]),t._v(" panel, select the "),s("strong",[t._v("Initial Script")]),t._v(" tab, and then paste the text into the script console on this tab.\n"),s("img",{attrs:{src:"/img/oin/scim-test_init-script.png",alt:"Initial Script tab",title:"Showing the location of the Initial Script tab"}})]),t._v(" "),s("p",[t._v('This script sets up a number of randomly generated "dummy" variables that are used during the testing process:')]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Variable Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Example Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("InvalidUserEmail")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("abcdefgh@atko.com")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A specific email address considered invalid by the test.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("randomEmail")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Runscope300Hfluaklab151@atko.com")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A valid email address.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("randomFamilyName")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Hfluaklab151")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A valid last name.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("randomGivenName")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Runscope300")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A valid first name.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("randomUsername")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Runscope300Hfluaklab151@atko.com")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A valid user name.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("randomUsernameCaps")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("RUNSCOPE300HFLUAKLAB151@ATKO.COM")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The random user name in all caps to test case sensitivity.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("UserIdThatDoesNotExist")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("010101001010101011001010101011")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A specific UUID considered invalid by the test.")])])])]),t._v(" "),s("p",[t._v('A "Script ON" label appears on your Test Settings page to indicate that the script is accepted and will be run before the first request in the test.')])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Save")]),t._v(".")])])]),t._v(" "),s("h2",{attrs:{id:"running-okta-spec-tests-against-your-scim-server"}},[t._v("Running Okta SPEC tests against your SCIM server "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#running-okta-spec-tests-against-your-scim-server"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),s("p",[t._v("After you have customized your SCIM test in Runscope with the details of your SCIM server, you can run the test:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("If you followed the steps above, "),s("strong",[t._v("Run Now")]),t._v(" appears at the top of your test.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("Run Now")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("On the left side of your screen, the test appears in the "),s("strong",[t._v("Recent Test Runs")]),t._v(" section.")])]),t._v(" "),s("li",[s("p",[t._v("Click "),s("strong",[t._v("View Progress")]),t._v(" in the "),s("strong",[t._v("Recent Test Runs")]),t._v(" section.")])]),t._v(" "),s("li",[s("p",[t._v("While the test is still running, it displays live updates of the test in progress.")]),t._v(" "),s("p",[t._v("During the test phase, several additional variables are created, based on results returned from your SCIM server.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Variable Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Example Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ISVUserid")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("29cb3ed0-b0da-498a-ba0c-f146f15a65d5")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The first UUID returned from a GET request to your "),s("code",[t._v("/Users")]),t._v(" endpoint.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("idUserOne")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("323da8f8-21b8-4b25-8322-90673d9e1bc7")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A UUID of a test user created on your SCIM server.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("randomUserEmail")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Runscope300Hfluaklab151@atko.com")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("An email address returned from your SCIM server.")])])])])]),t._v(" "),s("li",[s("p",[t._v("To see the details of tests, click the name of each particular test case to expand the section. The details have information on the "),s("strong",[t._v("Request")]),t._v(", "),s("strong",[t._v("Response")]),t._v(", and "),s("strong",[t._v("Connection")]),t._v(" for each HTTP request involved in the test. Each test sends a composed GET or POST request to your SCIM server, and the HTTP status received in response determines the success or failure of each test.")])]),t._v(" "),s("li",[s("p",[t._v("After the test is complete, the main panel displays the results of your test.")])])]),t._v(" "),s("p",[t._v("Since this test is running in your own Runscope instance, you can modify the tests to better fit your own environment and complete the test run again. If you need more technical details, see the "),s("RouterLink",{attrs:{to:"/docs/reference/scim/"}},[t._v("SCIM Reference")]),t._v(", or the previous step on how to "),s("RouterLink",{attrs:{to:"/docs/guides/build-provisioning-integration/prepare-api/"}},[t._v("Prepare your SCIM service")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"sharing-test-results-from-runscope"}},[t._v("Sharing test results from Runscope "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#sharing-test-results-from-runscope"}},[s("svg",{attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),s("p",[t._v("As you refine your SCIM implementation, you can share API test results with your teammates or with people outside of your organization:")]),t._v(" "),s("ol",[s("li",[t._v("From your Runscope dashboard, open the test result that you want to share.")]),t._v(" "),s("li",[t._v("At the top of the test result, Change the "),s("strong",[t._v("Private | Shareable")]),t._v(" toggle from "),s("strong",[t._v("Private")]),t._v(" to "),s("strong",[t._v("Shareable")]),t._v(".")]),t._v(" "),s("li",[t._v("Copy the URL for the test result, it will look something like this:\n"),s("code",[t._v("https://www.runscope.com/radar/abcdefghijkl/m01nopq2-3456-7r8s-9012-t34567uvw890/history/123ef4gh-i567-89j0-1k2l-3m4n5o678901")]),t._v(".\nThe test results can be viewed in detail, but the test can't be edited or re-run by people outside of your team.")])]),t._v(" "),s("NextSectionLink")],1)}),[],!1,null,null,null);e.default=i.exports}}]);