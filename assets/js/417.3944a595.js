(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{494:function(e,t,a){"use strict";a.r(t);var o=a(38),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This guide describes how to use\n"),a("a",{attrs:{href:"https://simplesamlphp.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SimpleSAMLphp"),a("OutboundLink")],1),e._v("\nto add support for Okta (via SAML) to applications written in\nPHP.\nPlease note that while the example application in this guide uses plain PHP,\nthe concepts presented here are general enough to use in other\nPHP frameworks.")]),e._v(" "),a("p",[e._v("In this guide, you will install and configure an example\napplication which demonstrates how to use SimpleSAMLphp in a simple\nPHP application.\nAfter you have Okta working with the example application,\nyou will need to adapt the example code to your production environment.")]),e._v(" "),a("p",[e._v("It is assumed that you are familiar with the basics of\nPHP software development as well as using the\ncommand line and editing text files.")]),e._v(" "),a("p",[e._v('If you\'re already familiar with Okta, you can skip to the\nsection titled "Configuring SimpleSAMLphp to work with Okta."')]),e._v(" "),a("h2",{attrs:{id:"configuring-okta-to-work-with-simplesamlphp"}},[e._v("Configuring Okta to work with SimpleSAMLphp "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#configuring-okta-to-work-with-simplesamlphp"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Before you can configure the example application and SimpleSAMLphp\nyou need to set up an Okta chiclet (application icon) that an Okta user selects to sign in to your to your\napplication using SAML via SimpleSAMLphp.")]),e._v(" "),a("p",[e._v("To set up Okta to connect to your application, follow the guide to\n"),a("RouterLink",{attrs:{to:"/docs/guides/build-sso-integration/saml2/overview/"}},[e._v("Build a Single Sign-On Integration")]),e._v(". As you follow the instructions to "),a("RouterLink",{attrs:{to:"/docs/guides/build-sso-integration/saml2/create-your-app/"}},[e._v("Create your integration")]),e._v(", there are two steps where you will do things differently:")],1),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("In step #9")]),e._v(": Use "),a("em",[a("strong",[e._v("SimpleSAMLphp Example")])]),e._v(' instead "Example SAML application"')])]),e._v(" "),a("li",[a("p",[a("em",[e._v("In step #10")]),e._v(": Instead of entering the URL: "),a("code",[e._v("http://example.com/saml/sso/example-okta-com")])]),e._v(" "),a("p",[e._v("Use the following URLs:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('In the "Single sign on URL" field, use:')]),e._v(" "),a("p",[a("code",[e._v("http://localhost/simplesamlphp/www/module.php/saml/sp/saml2-acs.php/example-okta-com")])])]),e._v(" "),a("li",[a("p",[e._v('In the "Audience URI (SP Entity ID)" field, use instead:')]),e._v(" "),a("p",[a("code",[e._v("http://localhost/simplesamlphp/www/module.php/saml/sp/metadata.php/example-okta-com")])])]),e._v(" "),a("li",[a("p",[e._v('For the "Relay State" field, use:')]),e._v(" "),a("p",[a("code",[e._v("http://localhost/okta-simplesamlphp-example/?saml_sso=example-okta-com")])])])])])]),e._v(" "),a("h2",{attrs:{id:"configuring-simplesamlphp-to-work-with-okta"}},[e._v("Configuring SimpleSAMLphp to work with Okta "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#configuring-simplesamlphp-to-work-with-okta"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v('Now that you have configured the "chiclet" for "SimpleSAMLphp Example" in\nyour Okta organization, you are ready to configure SimpleSAMLphp\nto work with your Okta organization. In this\nsection we will use the "Identity Provider metadata" link from the\nsection above to configure SimpleSAMLphp. After completing\nthe following steps, you will have a working example of connecting\nOkta to a sample PHP application using SimpleSAMLphp.')]),e._v(" "),a("p",[e._v("Start by following the "),a("a",{attrs:{href:"https://simplesamlphp.org/docs/stable/simplesamlphp-install",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions for installing\nSimpleSAMLphp"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: SimpleSAMLphp is third-party software and is not supported by Okta.")])]),e._v(" "),a("p",[e._v('Depending on the system you are installing SimpleSAMLphp on, your\ninstallation might require you to make some custom configuration changes.\nIn particular, this guide assumes that you have PHP running on your local\nmachine ("localhost") and that you have installed SimpleSAMLphp in a\ndirectory named '),a("code",[e._v("simplesamlphp")]),e._v(" in the location specified by the\n"),a("code",[e._v("DocumentRoot")]),e._v(" directive in your Apache configuration.  If you are\ndeveloping remotely, or have installed SimpleSAMLphp in a different\nlocation, you will need to use different configuration URLs that take\nthat into account.")]),e._v(" "),a("h3",{attrs:{id:"notes-for-installing-simplesamlphp-on-mac-os-x"}},[e._v("Notes for installing SimpleSAMLphp on Mac OS X "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#notes-for-installing-simplesamlphp-on-mac-os-x"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Getting SimpleSAMLphp working with the example application on Mac OS X\ntakes some additional work, namely: installing the mcrypt library for\nPHP, reconfiguring Apache, and creating some symbolic links.")]),e._v(" "),a("p",[a("em",[e._v("Installing SimpleSAMLphp and the example application:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install SimpleSAMLphp to the "),a("code",[e._v("~/simplesamlphp")]),e._v(" directory.")]),e._v(" "),a("p",[e._v("When you follow the directions for installing SimpleSAMLphp,\ninstall it to a directory named "),a("code",[e._v("simplesamlphp")]),e._v(" in your home directory.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~\n$ mkdir simplesamlphp\n$ cd simplesamlphp\n$ git clone https://github.com/jpf/okta-simplesamlphp-example.git\n$ git clone https://github.com/simplesamlphp/simplesamlphp.git\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Install php56 and php56-mcrypt with "),a("a",{attrs:{href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("homebrew"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ brew install php56\n$ brew install php56-mcrypt\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Edit "),a("code",[e._v("httpd.conf")]),e._v(" to use the new version of PHP that you installed with homebrew.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo $EDITOR /etc/apache2/httpd.conf\n")])])]),a("p",[e._v("Find this line:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LoadModule php5_module libexec/apache2/libphp5.so\n")])])]),a("p",[e._v("and change it to this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LoadModule php5_module /usr/local/Cellar/php56/5.6.7/libexec/apache2/libphp5.so\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Find the "),a("code",[e._v("DocumentRoot")]),e._v(" for your setup of Apache.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ grep ^DocumentRoot /etc/apache2/httpd.conf\n")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("cd")]),e._v(" to the "),a("code",[e._v("DocumentRoot")]),e._v(" directory.")]),e._v(" "),a("p",[e._v("Assuming that the command above returned "),a("code",[e._v('DocumentRoot "/Library/WebServer/Documents"')]),e._v(",\nthen "),a("code",[e._v("cd")]),e._v(" to that directory")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd /Library/WebServer/Documents\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Add symbolic links from "),a("code",[e._v("DocumentRoot")]),e._v(" to your "),a("code",[e._v("simplesamlphp")]),e._v(" and "),a("code",[e._v("okta-simplesamlphp-example")]),e._v(" directories.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo ln -s ~/simplesamlphp/simplesamlphp .\n$ sudo ln -s ~/simplesamlphp/okta-simplesamlphp-example .\n")])])])])]),e._v(" "),a("p",[a("em",[e._v("Configuring SimpleSAMLphp:")])]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("cd")]),e._v(" to the directory you set up earlier.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/simplesamlphp\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Copy the modified SimpleSAMLphp configuration files from the example application\nto the nested "),a("code",[e._v("simplesamlphp")]),e._v(" directory.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cp okta-simplesamlphp-example/saml-autoconfig.php simplesamlphp/\n$ mkdir simplesamlphp/config\n$ cp simplesamlphp/config-templates/config.php simplesamlphp/config/\n$ cp okta-simplesamlphp-example/authsources.php simplesamlphp/config/\n$ mkdir simplesamlphp/metadata\n$ cp okta-simplesamlphp-example/saml20-idp-remote.php simplesamlphp/metadata/\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Install the PHP dependencies for SimpleSAMLphp using "),a("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ brew install homebrew/php/composer\n$ cd ~/simplesamlphp/simplesamlphp\n$ composer install\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Open the "),a("code",[e._v("config.php")]),e._v(" configuration file for SimpleSAMLphp in your favorite text editor.")]),e._v(" "),a("p",[e._v("Run this command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ $EDITOR config/config.php\n")])])]),a("p",[e._v("Then, from inside of your text editor, do the folowing:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Search for "),a("code",[e._v("baseurlpath")]),e._v(" and change the value to "),a("code",[e._v("'/simplesamlphp/www/'")])])]),e._v(" "),a("li",[a("p",[e._v("Search for "),a("code",[e._v("auth.adminpassword")]),e._v(" and change the value to a secure password.")])]),e._v(" "),a("li",[a("p",[e._v("Search for "),a("code",[e._v("secretsalt")]),e._v(" and change the value to something random.")]),e._v(" "),a("p",[e._v('There is an example command in for generating a "secret salt" in the\n'),a("code",[e._v("config.php")]),e._v(" file. If that doesn't work for you, try the one below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ dd if=/dev/urandom bs=1 count=48 2> /dev/null | openssl base64\n")])])])])])]),e._v(" "),a("li",[a("p",[e._v("Open the the "),a("code",[e._v("saml-autoconfig.php")]),e._v(" file for SimpleSAMLphp in your favorite text editor.")]),e._v(" "),a("p",[e._v("Run this command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ $EDITOR saml-autoconfig.php\n")])])]),a("p",[e._v("Then, using your text editor, modify the contents of the "),a("code",[e._v("metadata_url_for")]),e._v(" array as shown below:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$metadata_url_for")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'example-okta-com'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'{metadata-url}'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Be sure to replace the contents of "),a("code",[e._v("{metdata-url}")]),e._v(' with the link\nthat you copied in step #10 of the\n"'),a("RouterLink",{attrs:{to:"/docs/guides/build-sso-integration/saml2/create-your-app/"}},[e._v("Setting up a SAML application in Okta")]),e._v('"\ninstructions that you followed above!')],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" The contents of "),a("code",[e._v("{metadata-url}")]),e._v(" should look similar to this:\n"),a("code",[e._v("https://${yourOktaDomain}/app/a0b1c2deFGHIJKLMNOPQ/sso/saml/metadata")])])])])]),e._v(" "),a("h2",{attrs:{id:"test-the-saml-integration"}},[e._v("Test the SAML integration "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#test-the-saml-integration"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v('Now that you have set up a "chiclet" in your Okta organization and have\nconfigured SimpleSAMLphp to work with your Okta organization, it is ready to test.')]),e._v(" "),a("p",[e._v("There are two ways to test a SAML application:")]),e._v(" "),a("ol",[a("li",[e._v('Starting from the example PHP application ("SP initiated").')]),e._v(" "),a("li",[e._v('Starting from Okta ("IdP initiated").')])]),e._v(" "),a("p",[e._v("You will use both methods to test your application. In each case, you will know if the\ntest worked when you see a screen that looks like the one below:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/example-application-authenticated-user.png",alt:"Authenticated user",title:"Authenticated user"}})]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Login from the Okta SimpleSAMLphp example application (This is\nknown as an "),a("strong",[e._v("SP-initiated login")]),e._v(".)")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Open the example application in your browser:")]),e._v(" "),a("p",[a("code",[e._v("http://localhost/okta-simplesamlphp-example/")])])]),e._v(" "),a("li",[a("p",[e._v("Click on the 'example-okta-com' link.")])])])]),e._v(" "),a("li",[a("p",[e._v("Login from Okta (This is known as an "),a("strong",[e._v('IdP-initiated" login')]),e._v(".)")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Sign in to your Okta organization.")])]),e._v(" "),a("li",[a("p",[e._v('Click the button for the application you created earlier\n"Configuring Okta to work with SimpleSAMLphp" section\nabove:'),a("img",{attrs:{src:"/img/simplesamlphp-example-okta-chiclet.png",alt:"SimpleSAMLphp Example",title:"SimpleSAMLphp Example"}})])])])])]),e._v(" "),a("p",[e._v('You will know that your testing was successful if are able to get to the "Logged in"\npage pictured above using both "SP initated" and "IdP initated" login.')]),e._v(" "),a("p",[e._v("Congratulations on getting Okta working with SimpleSAMLphp!")]),e._v(" "),a("h2",{attrs:{id:"next-steps"}},[e._v("Next Steps "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#next-steps"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("At this point, you should be familiar with setting up a SAML enabled application\nto work with an Okta organization and how to configure SimpleSAMLphp to work with Okta.")]),e._v(" "),a("p",[e._v("After you have your Okta organization working with the example\nPHP application, your next step will be to take the\nexample code and move it to your production application. The specifics of how\nthis works will be different depending on how your application is set up.\nPay special attention to the notes in the "),a("code",[e._v("index.php")]),e._v(" file.\nFor example, on a production system, the contents of the "),a("code",[e._v("metadata_url_for")]),e._v("\narray should not be hard coded, but should come from a dynamic datastore.")]),e._v(" "),a("p",[e._v("If you want to learn more about SAML and what to consider when writing a\nSAML implementation, Okta's in-depth\n"),a("a",{attrs:{href:"https://www.okta.com/integrate/documentation/saml/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAML guidance"),a("OutboundLink")],1),e._v("\nis a great place to learn more.")]),e._v(" "),a("p",[e._v("Finally, if you got this far in this guide and still have questions,\nplease reach out to us at: "),a("a",{attrs:{href:"mailto:developers@okta.com"}},[e._v("developers@okta.com")])])])}),[],!1,null,null,null);t.default=i.exports}}]);