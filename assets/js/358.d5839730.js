(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{439:function(e,t,a){"use strict";a.r(t);var s=a(23),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticStyle:{"font-size":"0.9em","margin-bottom":"-20px"}},[a("a",{attrs:{href:"/books/api-security/dos/"}},[e._v("← DOS Mitigation Strategies")])]),e._v(" "),a("h2",{attrs:{id:"dos-how"}},[e._v("How to Mitigate DoS Attacks "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#dos-how"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Now that you know what DoS attacks are and why attackers perform them, let's discuss how you can protect yourself and your services. Most common mitigation techniques work by detecting illegitimate traffic and blocking it at the routing level, managing and analyzing the bandwidth of the services, and being mindful when architecting your APIs, so they're able to handle large amounts of traffic.")]),e._v(" "),a("h3",{attrs:{id:"attack-detection"}},[e._v("Attack Detection "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#attack-detection"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v('The first step of any mitigation strategy is understanding when you are the target of a DoS attack. Analyzing incoming traffic and determining whether or not it\'s legitimate is the first step in keeping your service available and responsive. Scalable cloud service providers are great (and may even "absorb" a DoS attack transparently) which is fantastic until you receive an enormous bill for bandwidth or resource overuse. Making sure your cloud provider makes scaling decisions based only on legitimate traffic is the best way to ensure your company is not spending unnecessary elasticity dollars due to an attack. Early detection of an attack dramatically increases the efficacy of any mitigation strategy.')]),e._v(" "),a("h3",{attrs:{id:"ip-whitelisting-blacklisting"}},[e._v("IP Whitelisting/Blacklisting "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#ip-whitelisting-blacklisting"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("The simplest defense against a DoS attack is either whitelisting only legitimate IP addresses or blocking ones from known attackers. For instance, if the application is meant to be used only by employees of a specific company, a hardware or software rule could be created to disallow any traffic, not from a specific IP range. For example, 192.168.0.0/16 would allow any IP address between 192.168.0.0 and 192.168.255.255. The rule rejects any IP address outside that range. If the software is only meant to be used by US citizens, a rule could be created only to allow access to US IP addresses. Inversely, IP blacklisting adds a rule to reject traffic from specific IP addresses or IP ranges making it possible to create rules to disallow traffic coming from China or Russia.")]),e._v(" "),a("p",[e._v("It is important to remember that blocking IP addresses in this way may prevent legitimate traffic from those countries. Blacklisting IP addresses is also dangerous in that you may end up blacklisting all users sharing an IP address, even if many of those users are legitimate. For example, what would happen if a bad actor used an Amazon EC2 server instance to attack a host and that host blocked all Amazon EC2 IP addresses? While the attack might stop, all legitimate Amazon users are now blacklisted from accessing the service.")]),e._v(" "),a("p",[e._v("Also, this strategy may not be effective against DDoS attacks or DoS attacks using spoofed IP addresses. In the distributed scenario, there may be zombie computers with IP addresses all over the place. Creating a rule to filter them out may become complicated and untenable. For instance, if an attacker is generating many requests to your service using a single spoofed IP address, when you block that address the attacker can start spoofing a new IP address and continue the attack.")]),e._v(" "),a("h3",{attrs:{id:"rate-limiting"}},[e._v("Rate Limiting "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#rate-limiting"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("Rate limiting is the practice of limiting the amount of traffic available to a specific Network Interface Controller (NIC). It can be done at the hardware or software level to mitigate the chances of falling victim to a DoS attack. At the hardware level, switches and routers usually have some degree of rate-limiting capabilities. At the software level, it's essential to have a limit on the number of concurrent calls available to a specific customer. Giving users strictly defined limits on concurrent requests or total requests over a given duration (50 requests per minute) can be an excellent way to reject traffic and maintain service stability. The rate limit is usually tied to the customer's plan or payment level. For example, customers on a free plan may only get 1,000 API calls, whereas customers at the premium level may get 10,000 API calls. Once the user reaches their rate limit, the service returns an HTTP status code indicating \"too many requests\" (status code 429).")]),e._v(" "),a("p",[e._v("While rate limiting is useful, depending on it alone is not enough. Using a router's rate limiting features means that requests will still reach the router. Even the best routers can be overwhelmed and DoSed. At the software level, requests still need to reach your service even if a rate-limit has been reached to serve up a 429 status code. This means that your service could still be overwhelmed by requests, even if your service is only returning an error status code.")]),e._v(" "),a("h3",{attrs:{id:"upstream-filtering-and-dds"}},[e._v("Upstream Filtering and DDS "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#upstream-filtering-and-dds"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v('One of the best mitigation strategies is to filter requests upstream, long before it reaches the target network. Done effectively, your API never even sees this traffic, so any rate limiting policies are not triggered. There are many providers of "Mitigation Centers" that will filter the incoming network traffic. For example '),a("a",{attrs:{href:"https://aws.amazon.com/shield/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Shield"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudflare"),a("OutboundLink")],1),e._v(" both offer products that allow for protection against DoS and DDoS attacks by checking incoming packet IPs against known attackers and BotNets and attempt to only forward legitimate traffic. Various API gateways have the same capabilities but can also filter based on the requested endpoint, allowed HTTP verbs, or even a combination of verbs and endpoints.")]),e._v(" "),a("p",[e._v("Passing DoS mitigation responsibility to upstream providers can be a great way to reduce liability and risk as mitigation can be incredibly complex and is an ever-changing cat-and-mouse game between service providers and attackers.")]),e._v(" "),a("p",[e._v("These companies typically offer support should your service be currently under attack in an attempt to minimize damages. It then becomes the responsibility of the provider to keep abreast of new DDoS attack vectors and strategies, leaving you to focus on building your service.")]),e._v(" "),a("h3",{attrs:{id:"programming-for-scale"}},[e._v("Programming for Scale "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#programming-for-scale"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])])]),e._v(" "),a("p",[e._v("With the proliferation of easily-scalable cloud services, it's easy to become lazy and not think about efficient development patterns. Sometimes it's easy to spot DoS-vulnerable parts of your application while other times it's not so apparent. It's vital to offload resource-intensive processes to systems that are designed to handle those operations. In some cases, you may even be able to queue expensive work for later batch processing, reducing DoS attack surface area. For instance, uploading or encoding images or video can take a lot of processing power, and it's essential that your application is not affected by those processes. In some cases, a well-configured cache — at the network or application level — can return data previously processed and unchanged. After all, the fastest processing possible is the processing you don't have to perform.")]),e._v(" "),a("p",[e._v("Sometimes, when a startup is first creating their product, the team pays less attention to performance and more attention to shipping features. While this can be okay early on, as a service becomes popular, it's hard to go back and fix performance issues before they cause a widened surface area for attackers. It's good practice to make performance testing part of the development cycle and continuous integration process. By running the "),a("a",{attrs:{href:"https://httpd.apache.org/docs/2.4/programs/ab.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Bench command"),a("OutboundLink")],1),e._v(", you can get basic performance information about your service. You can also use AB to write automated tests that simulate many users and check that your service responds to requests within a specified time. These performance tests can be run during the continuous integration process to ensure the application code performs at a level that is satisfactory to your organization.")])])}),[],!1,null,null,null);t.default=r.exports}}]);