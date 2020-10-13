(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{494:function(t,a,e){"use strict";e.r(a);var n=e(38),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This guide describes how to use "),e("a",{attrs:{href:"https://github.com/rohe/pysaml2",target:"_blank",rel:"noopener noreferrer"}},[t._v("PySAML2"),e("OutboundLink")],1),t._v(" to add support\nfor Okta (via SAML) to applications written in Python. Please note that while the example in this guide uses\n"),e("a",{attrs:{href:"http://flask.pocoo.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flask"),e("OutboundLink")],1),t._v(", the concepts presented here are general enough to use in other Python frameworks.")]),t._v(" "),e("p",[t._v("This guide describes how to install and configure an example\napplication that demonstrates how to use PySAML2 in a Flask application.\nAfter you have Okta working with the example application,\nadapt the example code for your production environment.")]),t._v(" "),e("blockquote",[e("p",[t._v("Note: The library is not Okta's and is not supported by Okta.")])]),t._v(" "),e("p",[t._v("This guide assumes that you are familiar with the basics of Python\nsoftware development: using the command line, editing text files,\nusing "),e("a",{attrs:{href:"https://virtualenv.pypa.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("virtualenv"),e("OutboundLink")],1),t._v(", and using\n"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pip_%28package_manager%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("pip"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v('If you\'re already familiar with Okta, you can skip to the\nsection titled "Configuring PySAML2 to work with Okta."')]),t._v(" "),e("h2",{attrs:{id:"configuring-okta-to-work-with-pysaml2"}},[t._v("Configuring Okta to work with PySAML2 "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#configuring-okta-to-work-with-pysaml2"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Before you can configure your application and PySAML2 set up an\nOkta chiclet (application icon) that enables an Okta user to sign in to your to your application with SAML and PySAML2.")]),t._v(" "),e("p",[t._v("To set up Okta to connect to your application, follow the\n"),e("RouterLink",{attrs:{to:"/docs/guides/build-sso-integration/saml2/overview/"}},[t._v("Build a Single Sign-On Integration")]),t._v("\nguide. As noted in the "),e("RouterLink",{attrs:{to:"/docs/guides/build-sso-integration/saml2/create-your-app/"}},[t._v("Create your integration")]),t._v(" instructions, there are two steps to change:")],1),t._v(" "),e("ul",[e("li",[e("p",[e("em",[t._v("In step #9")]),t._v(": Use "),e("em",[e("strong",[t._v("PySAML2 Example")])]),t._v(" instead of "),e("em",[e("strong",[t._v("Example SAML application")])]),t._v(" .")])]),t._v(" "),e("li",[e("p",[e("em",[t._v("In step #10")]),t._v(": When entering the URL")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("http://example.com/saml/sso/example-okta-com\n")])])]),e("p",[t._v("use the following:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("http://localhost:5000/saml/sso/example-okta-com\n")])])]),e("p",[e("strong",[t._v("Note:")]),t._v(' "5000" is the port that Flask uses by default, if you are using a different port number, change "5000" to the port number you are using.')])])]),t._v(" "),e("h2",{attrs:{id:"configuring-pysaml2-to-work-with-okta"}},[t._v("Configuring PySAML2 to work with Okta "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#configuring-pysaml2-to-work-with-okta"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v('Now that you have configured the PySAML2 Example "chiclet" in your Okta organization, you\nare ready to configure PySAML2 to work with your Okta organization. In this\nsection we use the "Identity Provider metadata" link from the\nsection above to configure PySAML2. After completing\nthe following steps, you will have a working example of connecting Okta to a sample Python application using PySAML2.')]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Install platform-dependent prerequisites:")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" These instructions assume that you are running on a recent version of your operating system.")])]),t._v(" "),e("p",[t._v("For Mac OS X:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libffi libxmlsec1\n")])])]),e("p",[t._v("For RHEL:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libffi-devel xmlsec1 xmlsec1-openssl\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Download the example application for Python:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:jpf/okta-pysaml2-example.git\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("cd")]),t._v(" to the "),e("code",[t._v("okta-pysaml2-example")]),t._v(" directory.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" okta-pysaml2-example\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Open the "),e("code",[t._v("app.py")]),t._v(" file in your favorite text editor.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$EDITOR")]),t._v(" app.py\n")])])])]),t._v(" "),e("li",[e("p",[t._v("After opening the "),e("code",[t._v("app.py")]),t._v(" file, modify the contents of the "),e("code",[t._v("metadata_url_for")]),t._v(" dictionary as shown below.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("metadata_url_for "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example-okta-com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${metadata_url}'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Be sure to replace the contents of "),e("code",[t._v("${metdata_url}")]),t._v(' with the link\nthat you copied in step #10 of the\n"'),e("RouterLink",{attrs:{to:"/docs/guides/customize-authz-server/"}},[t._v("Setting up a SAML application in Okta")]),t._v('"\ninstructions that you followed above!')],1),t._v(" "),e("p",[t._v("Note: The contents of "),e("code",[t._v("${metadata_url}")]),t._v(" should look similar to: "),e("code",[t._v("https://${yourOktaDomain}/app/a0b1c2deFGHIJKLMNOPQ/sso/saml/metadata")])])]),t._v(" "),e("li",[e("p",[t._v("Install the dependencies; for example, Python SAML SP:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ virtualenv venv\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" venv/bin/activate\n$ pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -r requirements.txt\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Start the Python example:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ python app.py\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"test-the-saml-integration"}},[t._v("Test the SAML integration "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#test-the-saml-integration"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Now that you have set up an application in your Okta organization and have\nconfigured PySAML2 to work with your Okta organization, it is ready to test.")]),t._v(" "),e("p",[t._v("There are two ways to test a SAML application:")]),t._v(" "),e("ol",[e("li",[t._v('Starting from the example Python application ("SP initiated").')]),t._v(" "),e("li",[t._v('Starting from Okta ("IdP initiated").')])]),t._v(" "),e("p",[t._v("You will use both methods to test your application. In each case, you will know iff the\ntest worked when you see a screen that looks like the one below:")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/pysaml2-authenticated-user.png",alt:"Authenticated user",title:"Authenticated user"}})]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Login from the Okta PySAML2 example application (This is\nknown as an "),e("strong",[t._v("SP-initiated login")]),t._v(".)")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Start the example application from the command line:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" venv/bin/activate\n")])])])])]),t._v(" "),e("p",[t._v("$ python app.py")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n-   Open the example application in your browser:\n    `http://localhost:5000/`\n\n-   Click on the link for your Okta IdP.\n\n\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Login from Okta (This is known as an "),e("strong",[t._v('IdP-initiated" login')]),t._v(".)")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Start the example application from the command line:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" venv/bin/activate\n")])])])])]),t._v(" "),e("p",[t._v("$ python app.py")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n-   Sign in to your Okta organization.\n\n-   Click the button for the application you created earlier\n    "Configuring Okta to work with PySAML2" section\n')])])])])]),t._v(" "),e("p",[t._v("above:"),e("img",{attrs:{src:"/img/pysaml2-example-okta-chiclet.png",alt:"PySAML2 Example",title:"PySAML2 Example"}})]),t._v(" "),e("p",[t._v('If you can to get to the "Logged in" page using both of the\nmethods above, the test are successful.')]),t._v(" "),e("p",[t._v("Congratulations on getting Okta working with PySAML2!")]),t._v(" "),e("h2",{attrs:{id:"next-steps"}},[t._v("Next Steps "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#next-steps"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("At this point, you should be familiar with setting up a SAML enabled application\nto work with an Okta organization and how to configure PySAML2 to work with Okta.")]),t._v(" "),e("p",[t._v("After you have your Okta organization working with the example Python\napplication, the next step is to take the example code and move\nit to your production application. The specifics of how this works is\ndifferent depending on how your application is set\nup. Pay special attention to the notes in the "),e("code",[t._v("app.py")]),t._v(" file. For\nexample, on a production system, the contents of the\n"),e("code",[t._v("metadata_url_for")]),t._v(" dictionary cannot be hard coded, but must come\nfrom a dynamic datastore.")]),t._v(" "),e("p",[t._v("If you want to learn more about SAML and what to consider when writing a SAML implementation, Okta's\nin-depth "),e("a",{attrs:{href:"https://www.okta.com/integrate/documentation/saml/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SAML guidance"),e("OutboundLink")],1),t._v("\nis a great place to learn more.")]),t._v(" "),e("p",[t._v("Finally, if you got this far in this guide and still have questions,\nplease reach out to me at: joel.franusic@okta.com.")])])}),[],!1,null,null,null);a.default=o.exports}}]);