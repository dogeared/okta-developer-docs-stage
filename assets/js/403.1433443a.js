(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{481:function(t,a,e){"use strict";e.r(a);var s=e(38),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This guide describes how to use Spring Security SAML to add support for Okta (via SAML) to Java applications that use the Spring framework. In this guide, you learn how to install and configure an Okta SAML application.")]),t._v(" "),e("p",[t._v("This guide assumes that you are familiar with the basics of Java software development: editing text files, using the command line, and running Tomcat, Maven, or Gradle.")]),t._v(" "),e("p",[t._v("If you're already familiar with Okta and Spring, you can skip to the "),e("strong",[t._v("Configure Spring Security SAML to work with Okta")]),t._v(" section.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" The Spring Security SAML toolkit that you download isn't an Okta toolkit and isn't supported by Okta.")])]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[t._v("Requirements "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#requirements"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Please make sure that the following are installed before starting installation:")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/overview/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 1.6+ SDK"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Check using the following command:")]),t._v(" "),e("p",[e("code",[t._v("java -version")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://maven.apache.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Maven"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Check using the following command:")]),t._v(" "),e("p",[e("code",[t._v("mvn --version")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[t._v("Installation "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#installation"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("This section covers what you need to do to install and configure Tomcat from scratch on Mac OS X. If you already have Tomcat on your system, you can skip to the "),e("strong",[t._v("Download the Spring SAML Extension")]),t._v(" step.")]),t._v(" "),e("p",[t._v("How to install the Spring Security SAML sample Okta application on Mac OS X:")]),t._v(" "),e("p",[e("strong",[t._v("1. Install Tomcat")])]),t._v(" "),e("p",[t._v("If it's not already installed, install Tomcat with Homebrew using "),e("a",{attrs:{href:"https://github.com/mhulse/mhulse.github.io/wiki/Installing-Apache-Tomcat-using-Homebrew-on-OS-X-Yosemite",target:"_blank",rel:"noopener noreferrer"}},[t._v("these directions"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("2. Download the Spring SAML Extension")])]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("git clone")]),t._v(" to clone the extention locally:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/spring-projects/spring-security-saml.git\n")])])]),e("p",[e("strong",[t._v("3. Download the sample application")])]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("git clone")]),t._v(" to clone this repository locally:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/nshobayo/okta-SpringSAML.git\n")])])]),e("p",[t._v("Use this command to copy the sample Okta application into the Extension's "),e("code",[t._v("src")]),t._v(" folder:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf spring-security-saml/sample/src/main\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r okta-SpringSAML/src/main spring-security-saml/sample/src\n")])])]),e("p",[e("strong",[t._v("4. Compile")])]),t._v(" "),e("p",[t._v("Make sure that your working directory is the "),e("code",[t._v("sample")]),t._v(" subdirectory of the "),e("code",[t._v("spring-security-saml")]),t._v(" directory:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" spring-security-saml/sample\n")])])]),e("p",[t._v("To compile:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/gradlew build "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("This task compiles, tests, and assembles the code into a "),e("code",[t._v(".war")]),t._v(" file. A successful build should look something like this: "),e("img",{attrs:{src:"/img/spring-security-saml-build.png",alt:"successful build",title:"successful build"}})]),t._v(" "),e("p",[t._v("You can find your compiled WAR archive file, "),e("code",[t._v("spring-security-SAML2-sample.war")]),t._v(", in the "),e("code",[t._v("build/libs/")]),t._v(" directory.")]),t._v(" "),e("p",[e("strong",[t._v("5. Deploy")])]),t._v(" "),e("p",[t._v("Assuming that your current directory is "),e("code",[t._v("spring-security-saml/sample")]),t._v(", use the following command to copy the compiled "),e("code",[t._v("spring-security-SAML2-sample.war")]),t._v(" file to the Tomcat directory that you set up in step one:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" build/libs/spring-security-SAML2-sample.war /Library/Tomcat/webapps/\n")])])]),e("p",[e("strong",[t._v("6. Start Tomcat")])]),t._v(" "),e("p",[t._v("Use the following command to start Tomcat:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/Library/Tomcat/bin/startup.sh\n")])])]),e("p",[e("strong",[t._v("7. Start the Application")])]),t._v(" "),e("p",[t._v("Load the Spring SAML application by opening this link: "),e("code",[t._v("http://localhost:8080/spring-security-saml2-sample/saml/discovery?entityID=http%3A%2F%2Flocalhost%3A8080%2Fspring-security-saml2-sample%2Fsaml%2Fmetadata&returnIDParam=idp")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" Links in the app aren't functional yet because we haven't configured any IDPs. Full app functionality is completed after the "),e("strong",[t._v("Configure Spring Security SAML to work with Okta")]),t._v(" section.")])]),t._v(" "),e("p",[t._v("Here's what it should look like: "),e("img",{attrs:{src:"/img/spring-security-saml-intro.png",alt:"App Running",title:"App Running"}})]),t._v(" "),e("h2",{attrs:{id:"configure-okta-to-work-with-spring-security-saml"}},[t._v("Configure Okta to work with Spring Security SAML "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#configure-okta-to-work-with-spring-security-saml"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Before we can configure Spring Security SAML, we need to set up an application in Okta that connects to Spring Security SAML.")]),t._v(" "),e("p",[t._v("In SAML terminology, what we are doing here is configuring Okta, which is our SAML Identity Provider (SAML IdP), with the details of Spring Security SAML, which is the new SAML Service Provider (SAML SP) that you create next.")]),t._v(" "),e("p",[t._v("Here is how to configure Okta:")]),t._v(" "),e("p",[e("strong",[t._v("1.")]),t._v(" Sign in to your Okta organization as a user with administrative privileges. If you don't have an Okta organization, you can "),e("a",{attrs:{href:"https://developer.okta.com/signup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("create a free Okta Developer Edition organization"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("2.")]),t._v(" Click "),e("strong",[t._v("Admin")]),t._v(", and then "),e("strong",[t._v("Add Applications")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("3.")]),t._v(" Click "),e("strong",[t._v("Create New App")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("4.")]),t._v(" In the dialog box that appears, select "),e("strong",[t._v("SAML 2.0")]),t._v(", and then click "),e("strong",[t._v("Create")]),t._v(". "),e("img",{attrs:{src:"/img/okta-admin-ui-create-new-application-integration.png",alt:"Create a New Application Integration",title:"Create a New Application Integration"}})]),t._v(" "),e("p",[e("strong",[t._v("5.")]),t._v(" In the "),e("strong",[t._v("General Settings")]),t._v(" section, enter "),e("strong",[t._v("Spring Security SAML")]),t._v(" in the "),e("strong",[t._v("Appname")]),t._v(" box, and then click "),e("strong",[t._v("Next")]),t._v(". "),e("img",{attrs:{src:"/img/spring-security-saml-okta-general-settings.png",alt:"General Settings",title:"General Settings"}})]),t._v(" "),e("p",[e("strong",[t._v("6.")]),t._v(" In the "),e("strong",[t._v("Configure SAML")]),t._v(" section, paste the following URL into the "),e("strong",[t._v("Single sign on URL")]),t._v(" box:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("http://localhost:8080/spring-security-saml2-sample/saml/SSO\n")])])]),e("p",[e("strong",[t._v("7.")]),t._v(" Then paste the following URL into the "),e("strong",[t._v("Audience URI (SP Entity ID)")]),t._v(" box:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("http://localhost:8080/spring-security-saml2-sample/saml/metadata\n")])])]),e("p",[t._v("You can add user attributes sent in each SAML assertion under "),e("strong",[t._v("Attribute Statements")]),t._v(" during this step, if desired. Theses attribute values can be derived and used from the SP side.")]),t._v(" "),e("p",[e("strong",[t._v("8.")]),t._v(" Click "),e("strong",[t._v("Next")]),t._v(". "),e("img",{attrs:{src:"/img/spring-security-saml-settings.png",alt:"SAML Settings",title:"SAML Settings"}})]),t._v(" "),e("p",[e("strong",[t._v("9.")]),t._v(" In the "),e("strong",[t._v("Feedback")]),t._v(" section, select the "),e("strong",[t._v("This is an internal application that we created")]),t._v(" check box and click "),e("strong",[t._v("Finish")]),t._v(". "),e("img",{attrs:{src:"/img/okta-admin-ui-new-application-step-3-feedback.png",alt:"App type",title:"App type"}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("The **Sign On** section of your newly created Spring Security SAML application appears.\n")])])]),e("p",[e("strong",[t._v("10.")]),t._v(" Copy the "),e("strong",[t._v("Identity Provider metadata")]),t._v(" link by right-clicking the "),e("strong",[t._v("Identity Provider metadata")]),t._v(" link and selecting "),e("strong",[t._v("Copy")]),t._v(". You will need this link later. "),e("img",{attrs:{src:"/img/okta-admin-ui-identity-provider-metadata-link.png",alt:"Sign on methods",title:"Sign on methods"}})]),t._v(" "),e("p",[e("strong",[t._v("11.")]),t._v(" Right-click the "),e("strong",[t._v("People")]),t._v(" section of the Spring Security SAML application and select "),e("strong",[t._v("Open Link In New Tab")]),t._v(" (so that you can come back to the "),e("strong",[t._v("Sign On")]),t._v(" section later).")]),t._v(" "),e("p",[e("strong",[t._v("12.")]),t._v(" In the new tab that opens, click "),e("strong",[t._v("Assign Application")]),t._v(". "),e("img",{attrs:{src:"/img/spring-security-saml-okta-assign-people-to-application.png",alt:"Assign Application",title:"Assign Application"}})]),t._v(" "),e("p",[e("strong",[t._v("13.")]),t._v(" The "),e("strong",[t._v("Assign Spring Security SAML to up to 500 people")]),t._v(" dialog box appears. Enter your username into the search box, select the check box next to your username, and then click "),e("strong",[t._v("Next")]),t._v(". "),e("img",{attrs:{src:"/img/okta-admin-ui-confirm-assignments.png",alt:"People search box",title:"People search box"}})]),t._v(" "),e("p",[e("strong",[t._v("14.")]),t._v(" You are prompted to enter user-specific attributes. Click "),e("strong",[t._v("Confirm Assignments")]),t._v(" to keep the defaults. "),e("img",{attrs:{src:"/img/spring-security-saml-okta-confirm-assignments.png",alt:"Enter user attributes",title:"Enter user attributes"}})]),t._v(" "),e("h2",{attrs:{id:"configure-spring-security-saml-to-work-with-okta"}},[t._v("Configure Spring Security SAML to work with Okta "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#configure-spring-security-saml-to-work-with-okta"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Now that you have configured a Spring Security SAML application, you are ready to configure Spring Security SAML to work with Okta. In this section we use the Identity Provider metadata link that you copied in the last section to configure Spring Security SAML. Once you've completed these steps, you'll have a working example of connecting Okta to Spring.")]),t._v(" "),e("p",[e("strong",[t._v("1.")]),t._v(" Open the "),e("code",[t._v("securityContext.xml")]),t._v(' file in your favorite text editor. If you followed the instructions in the last section for "Installing the Spring Security SAML sample application" on Mac OS X, this file is located at '),e("code",[t._v("/Library/Tomcat/webapps/spring-security-saml2-sample/WEB-INF/securityContext.xml")]),t._v(". (Normally, \tyou would do this step "),e("em",[t._v("before")]),t._v(" running Maven or Gradle to create the WAR file that you deploy to Tomcat. In this case, I'm having you edit the file in the \tTomcat path directly, since it's easier to make small changes and test them this way).")]),t._v(" "),e("p",[e("strong",[t._v("2.")]),t._v(" Once you've opened the "),e("code",[t._v("securityContext.xml")]),t._v(" file, add the following XML to the end of the tag identified by this CSS selector syntax:")]),t._v(" "),e("p",[e("code",[t._v("#metadata > constructor-arg > list")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.opensaml.saml2.metadata.provider.HTTPMetadataProvider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- URL containing the metadata --\x3e")]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("constructor-arg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- This URL should look something like this: https://${yourOktaDomain}/app/abc0defghijK1lmN23o4/sso/saml/metadata --\x3e")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("value")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("java.lang.String"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{metadata-url}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("constructor-arg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Timeout for metadata loading in ms --\x3e")]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("constructor-arg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("value")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("int"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5000"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("constructor-arg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parserPool"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parserPool"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("strong",[t._v("3.")]),t._v(" Make sure to replace the contents of "),e("code",[t._v("{metdata-url}")]),t._v(" with the link that you copied in step 11 of the "),e("a",{attrs:{href:"http://localhost:8080/code/java/spring_security_saml/#configure-okta-to-work-with-spring-security-saml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configure Okta to work with Spring Security SAML"),e("OutboundLink")],1),t._v(" section.")]),t._v(" "),e("p",[e("strong",[t._v("4.")]),t._v(" Save the "),e("code",[t._v("securityContext.xml")]),t._v(" file, then restart Tomcat. If you are using Mac OS X, you can restart Tomcat using the following commands:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("\t/Library/Tomcat/bin/shutdown.sh\n\t/Library/Tomcat/bin/startup.sh\n")])])]),e("h2",{attrs:{id:"test-the-saml-integration"}},[t._v("Test the SAML integration "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#test-the-saml-integration"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("Now that you've set up an application in Okta and configured the Spring Security SAML example application to use that application, you're ready\nto test it out.")]),t._v(" "),e("p",[t._v('There are two ways to test a SAML application: Starting from the Spring application ("SP initiated") and starting from Okta ("IdP initiated").\nYou will be testing both methods. In both cases, you will know if the test worked when you see a screen that looks like the following: '),e("img",{attrs:{src:"/img/spring-security-saml-assert.png",alt:"Authenticated user",title:"Authenticated user"}})]),t._v(" "),e("p",[e("strong",[t._v("1.")]),t._v(' Sign in from the Spring Security SAML sample application (This is known as an "SP initiated" sign in).')]),t._v(" "),e("p",[t._v("-Open the sample application in your browser:")]),t._v(" "),e("p",[e("code",[t._v("http://localhost:8080/spring-security-saml2-sample")])]),t._v(" "),e("p",[t._v("-Select the Okta IdP from the list. It is a URL that starts with: "),e("code",[t._v("http://www.okta.com/")]),t._v(".")]),t._v(" "),e("p",[t._v("-Click "),e("strong",[t._v("Start single sign-on")]),t._v(". "),e("img",{attrs:{src:"/img/spring-security-saml-selection.png",alt:"Start single sign-on",title:"Start single sign-on"}})]),t._v(" "),e("p",[e("strong",[t._v("2.")]),t._v(' Sign in from Okta (This is known as an "IdP initiated" sign in).')]),t._v(" "),e("p",[t._v("-Sign in to your Okta organization.")]),t._v(" "),e("p",[t._v("-Click the button for the application that you created in the "),e("strong",[t._v("Configure Okta to work with Spring Security SAML")]),t._v(" section. "),e("img",{attrs:{src:"/img/spring-security-saml-okta-chiclet.png",alt:"Spring Security SAML",title:"Spring Security SAML"}})]),t._v(" "),e("p",[t._v("If you're able to access the Authenticated User page using both of these methods, then you're done. Congratulations on getting Okta working with Spring!")]),t._v(" "),e("h2",{attrs:{id:"next-steps"}},[t._v("Next Steps "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#next-steps"}},[e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),e("p",[t._v("At this point, you should be familiar with setting up SAML-enabled applications to work with an Okta organization and how to configure Spring Security SAML to work with Okta.")]),t._v(" "),e("p",[t._v("After you have Okta working with the example Spring Security SAML application, the next step is to take the example code and move it to your production application. The specifics of how this works is different depending on how your application is set up. Pay special attention to the "),e("code",[t._v("securityContext.xml")]),t._v(", which allows you to add more IDPs to the app as well as control page redirects. Before any changes are made to the "),e("code",[t._v("securityContext.xml")]),t._v(" file, you should consider reading the "),e("a",{attrs:{href:"http://docs.spring.io/spring-security-saml/docs/1.0.x/reference/html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Security SAML reference documents"),e("OutboundLink")],1),t._v(" that provide a detailed overview of all the components and features of Spring Security SAML.")]),t._v(" "),e("p",[t._v("If you want to learn more about configuring SAML and what to consider when writing a SAML application, see the in-depth Okta "),e("a",{attrs:{href:"https://www.okta.com/integrate/documentation/saml/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SAML guidance"),e("OutboundLink")],1),t._v(" documentation, which is great place to learn more.")])])}),[],!1,null,null,null);a.default=n.exports}}]);