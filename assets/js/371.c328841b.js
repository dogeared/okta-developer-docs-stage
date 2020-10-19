(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{449:function(e,t,a){"use strict";a.r(t);var n=a(38),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticStyle:{"font-size":"0.9em","margin-bottom":"-20px"}},[a("a",{attrs:{href:"/books/api-security/sanitizing/"}},[e._v("← Sanitizing Data")])]),e._v(" "),a("h2",{attrs:{id:"sanitizing-attack-vectors"}},[e._v("Look For Other Attack Vectors "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#sanitizing-attack-vectors"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Inputs are everywhere, often only evident in hindsight. User input and file uploads are just the tip of the iceberg, but what if we consider more than input and instead the code itself? Here are a couple of examples to illustrate this point.")]),e._v(" "),a("h3",{attrs:{id:"your-dependencies"}},[e._v("Your Dependencies "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#your-dependencies"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Do you trust all of your dependencies? How about all of the transitive dependencies of your application? It is not uncommon to for an application to have a page that lists its dependencies versions and licenses (the later might even be required depending on the license). The popular Node package manager (npm) has had a few projects which have contained "),a("a",{attrs:{href:"https://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers",target:"_blank",rel:"noopener noreferrer"}},[e._v("maliciously formed license fields"),a("OutboundLink")],1),e._v(". In another npm incident, "),a("a",{attrs:{href:"https://iamakulov.com/notes/npm-malicious-packages/",target:"_blank",rel:"noopener noreferrer"}},[e._v("packages ran malicious scripts"),a("OutboundLink")],1),e._v(" upon installation automatically that uploaded the user's environment variables to a third party.")]),e._v(" "),a("p",[e._v("Every dependency is code you include from other systems across your trust boundary. Properly inspecting and validating your dependencies is a critical first step of any input sanitation plan. GitHub recently introduced "),a("a",{attrs:{href:"https://blog.github.com/2017-11-16-introducing-security-alerts-on-github/",target:"_blank",rel:"noopener noreferrer"}},[e._v("automated security alerting"),a("OutboundLink")],1),e._v(" to let you know when your dependencies might have security issues. Pay attention to these and you can prevent a lot of headaches.")]),e._v(" "),a("h3",{attrs:{id:"inbound-html-requests"}},[e._v("Inbound HTML Requests "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#inbound-html-requests"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Almost all values from an HTTP request can be changed by the sender and need to be handled accordingly. To help illustrate this, here is a simple HTTP POST including numerous headers to "),a("code",[e._v("http://example.com/submit-me")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token property"}},[e._v("POST")]),e._v(" /submit-me HTTP/1.1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" example.com\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept:")]),e._v(" */*\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Referer:")]),e._v(" http://example.com/fake.html\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Language:")]),e._v(" en-us\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type:")]),e._v(" application/x-www-form-urlencoded\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Encoding:")]),e._v(" gzip, deflate\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent:")]),e._v(" My Fake UserAgent <img src onerror='alert(\"haxor\")'>\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Length:")]),e._v(" 37\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" Keep-Alive\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control:")]),e._v(" no-cache\n\nfoo=bar&key=value\n")])])]),a("p",[e._v("You can see right away: request headers are user input too.  Imagine for a moment that an HTTP client maliciously changes the User-Agent header. The logged User-Agent may falsely identify a request as coming from a different client application than the one in which it really originated.originated from. While that's unlikely to affect the current request, it might cause confusion in the application's logging and reporting system.")]),e._v(" "),a("p",[e._v("Further, the User-Agent could be visible from an internal web application that doesn't sanitize the User-Agent values before displaying them. In this case, an HTTP client could maliciously modify their User-Agent to any JavaScript code they want which would then be executed in an internal user's browser via XSS.")]),e._v(" "),a("p",[e._v("As these examples illustrate, even sanitizing relatively innocuous inputs is an important part of an overall security strategy.")])])}),[],!1,null,null,null);t.default=r.exports}}]);