(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{456:function(e,t,a){"use strict";a.r(t);var s=a(23),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticStyle:{"font-size":"0.9em","margin-bottom":"-20px"}},[a("a",{attrs:{href:"/books/api-security/sanitizing/"}},[e._v("← Sanitizing Data")])]),e._v(" "),a("h2",{attrs:{id:"sanitizing-reject-bad"}},[e._v("Reject Bad Inputs "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#sanitizing-reject-bad"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Rejecting known invalid inputs is more complicated than only accepting known good inputs (which we talked about above) and far less accurate.  This strategy is typically implemented as a blacklist of strings or patterns.  This technique may require many regular expressions to be run against a single field which may also affect the speed of your application. It also means that this blacklist will require updates any time a new pattern needs to be blocked.")]),e._v(" "),a("p",[e._v("Take a typical use-case of blocking 'bad-words'.  This problem is incredibly complex as language usage varies across locale. These complexities can be demonstrated using the simple word: "),a("code",[e._v("ass")]),e._v(". It would be pretty easy to block this word alone, but doing so would also block the proper use of the word referring to donkeys. Then you need to think about both variations of the word and where those letters happen to come together: 'badass,' 'hard-ass,' 'amass,' 'bagasse', the first two are questionable while the second two are fine. Even if you block all of these and the thousands of other words that contain these three letters, there are still variations that would make it past: '4ss', 'as.s,' 'azz,' '@ss,' 'āss,' or '\\41\\73\\73' (escaped characters). As time goes on the list of blocked words would increase raising the total cost of the solution.")]),e._v(" "),a("p",[e._v("Another famous example of this technique is antivirus software. Your antivirus updates every few days to get a new blacklist of items to scan. And we all know how well that works 😉")])])}),[],!1,null,null,null);t.default=o.exports}}]);