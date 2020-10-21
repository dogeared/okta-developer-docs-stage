(window.webpackJsonp=window.webpackJsonp||[]).push([[791],{1104:function(t,e,n){"use strict";n.r(e);var a=n(38),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Components that appear through the "),n("code",[t._v("router-view")]),t._v(" can access properties of that parent component, including the 'authenticated' prop that we added.")]),t._v(" "),n("p",[t._v("Here is a "),n("code",[t._v("Home")]),t._v(" component that checks this property and offers a link to logout if the user is currently authenticated.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  <div id="home">\n    <div v-if="this.$parent.authenticated">\n      <button v-on:click="logout()">\n      Logout\n      </button>\n    </div>\n  </div>\n</template>\n\n<script>\n\nconst PATH_TO_HOME_ROUTE = \'/\'\n\nexport default {\n  name: \'home\',\n  methods: {\n    async logout () {\n      await this.$auth.logout()\n      // Navigate back to home\n      this.$router.push({ path: PATH_TO_HOME_ROUTE })\n    },\n  }\n}\n<\/script>\n')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);