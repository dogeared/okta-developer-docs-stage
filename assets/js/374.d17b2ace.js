(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{452:function(t,a,e){"use strict";e.r(a);var s=e(38),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sanitizing"}},[t._v("Sanitizing Data")]),t._v(" "),e("div",{staticClass:"chapter-author"},[t._v("By Brian Demers")]),t._v(" "),e("p",[t._v("The inputs to your application represent the most significant surface area of attack for any application. Does your API power forms for user input? Do you display data that didn't originate in your API? Do users upload files through your API?")]),t._v(" "),e("p",[t._v("Any time data crosses a trust boundary - the boundary between any two systems - it should be validated and handled with care. For example, a trust boundary would be any input from an HTTP request, data returned from a database, or calls to remote APIs.")]),t._v(" "),e("p",[t._v("Let's start with a simple example: a user submission to the popular internet forum, Reddit.  A user could try to include a malicious string in a comment such as:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onerror")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("alert("),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("haxor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(")"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("If this were rendered as is, in an HTML page, it would pop up an annoying message to the user.  However, to get around this, when Reddit displays the text to the user, it is escaped:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("img src onerror="),e("span",{pre:!0,attrs:{class:"token entity",title:"'"}},[t._v("&#39;")]),t._v("alert("),e("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v("haxor"),e("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v(")"),e("span",{pre:!0,attrs:{class:"token entity",title:"'"}},[t._v("&#39;")]),e("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("\n")])])]),e("p",[t._v("which will make the comment appear as visible text instead of HTML, as shown in "),e("a",{staticClass:"figref",attrs:{href:"#fig_sanitizing_reddit"}}),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/books/api-security/sanitizing/images/reddit.png",alt:"Reddit properly escapes user input",title:"Reddit properly escapes user input"}})]),t._v(" "),e("p",[t._v("In this example the trust boundary is obvious as any user input should not be trusted.")]),t._v(" "),e("p",[t._v("There are a few different approaches you can use when validating input:")]),t._v(" "),e("ul",[e("li",[t._v("Accept known good")]),t._v(" "),e("li",[t._v("Reject bad")]),t._v(" "),e("li",[t._v("Sanitize")]),t._v(" "),e("li",[t._v("Do nothing")])]),t._v(" "),e("section",{staticClass:"chapter-subsection-list"},[e("ul",[e("li",[e("a",{attrs:{href:"/books/api-security/sanitizing/accept-good"}},[t._v("Accept Known Good")])]),e("li",[e("a",{attrs:{href:"/books/api-security/sanitizing/reject-bad"}},[t._v("Reject Bad Inputs")])]),e("li",[e("a",{attrs:{href:"/books/api-security/sanitizing/sanitize-inputs"}},[t._v("Sanitize Inputs")])]),e("li",[e("a",{attrs:{href:"/books/api-security/sanitizing/common-attacks"}},[t._v("Common Attacks")])]),e("li",[e("a",{attrs:{href:"/books/api-security/sanitizing/attack-vectors"}},[t._v("Look For Other Attack Vectors")])]),e("li",[e("a",{attrs:{href:"/books/api-security/sanitizing/best-practices"}},[t._v("Best Practices for Secure Data")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);