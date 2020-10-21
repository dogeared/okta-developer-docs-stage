(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{457:function(t,e,i){"use strict";i.r(e);var a=i(38),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticStyle:{"font-size":"0.9em","margin-bottom":"-20px"}},[i("a",{attrs:{href:"/books/api-security/tls/"}},[t._v("← Transport Layer Security")])]),t._v(" "),i("h2",{attrs:{id:"tls-certificate-verification"}},[t._v("Certificate Verification "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#tls-certificate-verification"}},[i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),t._v(" "),i("p",[t._v("Now that we understand the importance of trusted certificates and why certificate authorities are necessary, let's walk through the missing middle step: how a client verifies a server's SSL/TLS certificate.")]),t._v(" "),i("p",[t._v("First, the client gets the server's certificate as part of the SSL/TLS handshake. (If you are writing an application that is hitting an HTTPS API endpoint, this step happens before any application data is exchanged.)")]),t._v(" "),i("p",[t._v("The client checks to ensure that the server's certificate is not expired and that the domain name or IP address on the certificate matches the server's information. Then, the client attempts to verify that the server's certificate has been properly signed by the certificate authority who authorized it. Due to the nature of asymmetric encryption, the client is able to do this using the information within the server's response -- without even contacting the certificate authority.")]),t._v(" "),i("p",[t._v("It's unlikely that the server's certificate is signed directly by a root certificate authority that is trusted by the client. However, the client can trust any number of intermediate certificate authorities, as long as the trust chain eventually leads back to one of the client's trusted root certificates, as illustrated in "),i("a",{staticClass:"figref",attrs:{href:"#fig_tls_certificate_chain"}}),t._v(".")]),t._v(" "),i("p",[t._v("For each intermediate certificate, the client completes the same process: it verifies the issuer's name matches the certificate owner's name, and uses the signature and public key to verify that the certificate is properly signed.")]),t._v(" "),i("p",[i("img",{attrs:{src:"/img/books/api-security/tls/images/certificate-chain.png",alt:"Illustrating the chain of trust from a root CA through an intermediate certificate",title:"Illustrating the chain of trust from a root CA through an intermediate certificate"}})]),t._v(" "),i("p",[t._v("Eventually, in a successful transaction, the client will come to a self-signed root certificate that the client implicitly trusts. At this point, the client has built a cryptographic chain of trust to the server, and the SSL/TLS handshake can proceed.")])])}),[],!1,null,null,null);e.default=r.exports}}]);