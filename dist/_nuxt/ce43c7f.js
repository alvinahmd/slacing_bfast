(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{337:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(34),r(27),r(66),{data:function(){return{inputPasswd:!1,showPassword:!1,password:null}},computed:{buttonLabel:function(){return this.showPassword?"Hide":"Show"}},methods:{toggleShow:function(){this.showPassword=!this.showPassword},login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new t.$fireModule.auth.GoogleAuthProvider).setCustomParameters({prompt:"select_account"}),e.next=4,t.$fire.auth.signInWithPopup(r).then((function(e){t.$cookiz.set("name",e.user.displayName),t.$cookiz.set("email",e.user.email),t.$cookiz.set("token",e.credential.accessToken),t.$router.replace("/home"),console.log("res",e)})).catch((function(t){console.log("[g]",t)}));case 4:case"end":return e.stop()}}),e)})))()}}}),l=r(47),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-neutral-lighter"},[t._m(0),t._v(" "),e("section",{staticClass:"relative text-neutral-darkness body-font"},[e("div",{staticClass:"container relative z-10 px-2 md:px-8 pt-32 mx-auto -top-60 md:-top-44 lg:px-4"},[e("div",{staticClass:"flex flex-col w-full p-4 mx-auto mt-10 bg-white rounded-lg shadow-md md:p-8 lg:w-1/3 md:w-3/4 md:ml-auto md:mt-0"},[e("form",[t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"relative"},[e("div",{staticClass:"mb-1 pl-1 text-gray-600",attrs:{for:"password"}},[t._v("\n                Kata Sandi\n              ")]),t._v(" "),t.showPassword?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPasswd,expression:"inputPasswd"}],staticClass:"w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2",attrs:{type:"text",name:"password",placeholder:"Password"},domProps:{value:t.inputPasswd},on:{input:function(e){e.target.composing||(t.inputPasswd=e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPasswd,expression:"inputPasswd"}],staticClass:"w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.inputPasswd},on:{input:function(e){e.target.composing||(t.inputPasswd=e.target.value)}}}),t._v(" "),e("div",{staticClass:"absolute inset-y-0 right-0 flex items-center text-sm leading-5 pr-5 pt-2 text-neutral-dark cursor-pointer",on:{click:t.toggleShow}},[t.showPassword?e("span",[e("svg",{attrs:{width:"26",height:"24",viewBox:"0 0 26 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24.853 5.80498C24.9861 5.94021 25.1206 6.07688 25.257 6.21486C24.8353 6.56669 24.4249 6.92761 24.0207 7.28307C23.7794 7.49533 23.5402 7.70565 23.3022 7.91091C22.5218 8.58388 21.7318 9.2224 20.8387 9.77797C19.068 10.8794 16.8561 11.6772 13.4937 11.6772C7.09369 11.6772 3.31137 8.78335 0.726526 6.26775C0.734986 6.26004 0.743442 6.25233 0.751895 6.24462C2.40883 4.73393 3.91474 3.36094 5.75854 2.32869C7.73649 1.22132 10.1198 0.5 13.4937 0.5C16.8672 0.5 19.0768 1.22097 20.8387 2.31697C22.3368 3.24886 23.5242 4.45504 24.853 5.80498Z",stroke:"black"}}),t._v(" "),e("circle",{attrs:{cx:"13.1643",cy:"6.25315",r:"5.42405",stroke:"black"}}),t._v(" "),e("circle",{attrs:{cx:"13.1642",cy:"6.25327",r:"2.63291",fill:"black"}})])]):t._e(),t._v(" "),t.showPassword?t._e():e("span",[e("svg",{attrs:{width:"26",height:"24",viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24.853 11.805C24.9861 11.9402 25.1206 12.0769 25.257 12.2149C24.8353 12.5667 24.4249 12.9276 24.0207 13.283C23.7794 13.4953 23.5402 13.7056 23.3022 13.9109C22.5218 14.5839 21.7318 15.2224 20.8387 15.778C19.068 16.8794 16.8561 17.6772 13.4937 17.6772C7.09369 17.6772 3.31137 14.7833 0.726526 12.2678C0.734986 12.26 0.743442 12.2523 0.751895 12.2446C2.40883 10.7339 3.91474 9.36094 5.75854 8.32869C7.73649 7.22132 10.1198 6.5 13.4937 6.5C16.8672 6.5 19.0768 7.22097 20.8387 8.31697C22.3368 9.24887 23.5242 10.455 24.853 11.805Z",stroke:"black"}}),t._v(" "),e("circle",{attrs:{cx:"13.1643",cy:"12.2532",r:"5.42405",stroke:"black"}}),t._v(" "),e("circle",{attrs:{cx:"13.1642",cy:"12.2533",r:"2.63291",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M22 1L7 23.5",stroke:"white","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M21 1L6 23.5",stroke:"black","stroke-linecap":"round"}})])])])]),t._v(" "),t._m(3),t._v(" "),e("button",{staticClass:"px-8 w-full py-3.5 mb-3 mt-4 uppercase font-semibold text-white transition duration-500 ease-in-out transform bg-blue-800 rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",attrs:{type:"submit"}},[t._v("\n              Masuk\n            ")])]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"flex justify-between my-5"},[e("button",{staticClass:"px-8 py-4 w-full flex justify-center font-semibold items-center mr-2 text-neutral-dark transition duration-500 ease-in-out transform bg-white shadow-lg rounded-lg md:px-12 hover:bg-neutral-darkness hover:text-white hover:to-neutral-darkness focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2",on:{click:t.login}},[e("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7VdNTBNBFP5mW7RojAuJB/TAcpJ4oT2hicZWLygaFy9qYgLEeK8Hf/ACXI0GPHug3PRiGzVeC/EnxostmkiMpks8gE2MLQhSlt3xbVHYtjtLl9KTfsl0XnffzPfmzXtvZoF/HQxbAD8MBX5qjBqQA6fmR4pNUF8vA/jVhiDmjF7kTZUIFYGaRm0COobZm6JcuwE8DBkGRkjsgzfEqjHE1QB+FGHSiJMoY2vQyFv97CV5RQBJ9IIfoxUzJGsgt6AQw4ibgiQgV6kbQ61gSBFDBF4MoD23oltsNSd3ckQpLhT2AsxqJIfoTT9JWjn5ZplREQO8WxrDvNnnoGul2xDt5324gLwXpVl7qyGvMIAnAwqlWQaPdSDDS8kNmvA1rWqbUboFPnMQTWTTlR3ACZ/NMlp5HcgtlHpgcmcGsBWZWfLCQ11jCd6GOmHdAJ6UZUi/flSqmH3suD4ummD/zSnP2bJUMK7lRkPF+PBvPF4OOmqbSMMFnHuukAg0+GLUTVqyLQZMx4LDIvr27z2TlL+izQBeS8XzBM7MnIMBPs1R+VWgFdsMZm7UB1sMOJ9asyu7qCwvC4sPxUBMSAQepFpZEVvLupHe0LFPVpaGDxYP4UmhdeJZT8K1novQcmOqNK3XWLTZOx3raV1+FiSsn29GIwbmOy1y62+4O65G4Zk8Ha0ktzxGBdqGUgNM//h7vRm3FzrxYbV5/TG5afB0XHVOUwccuP6OdJnzgaYbw0IDWGQxNbDQGcuajeXDZFJMVuOJs6TTEMgnnd5Z8TI3GtJKOMuV1LgqG2tHkXNdoGBlEoZWqUA970mk/oxRTAnnTLN4jwivFGR8mb6EpaUWO73GV8zIpgZYOBNXw9Q5rsILvmZOITt3pCgbhtGTvRdKlOv4nAZ+ejStHbzYPkOiihqwt+kzZSFHPq9Es3eDjueJ66WUPKHSVowwCK/hmyHHOFOfno9PihQkt9GU/wmKhwiHuNiIYI35CbS5kVuo+sOkiwKN9muQxLDII0Sq7WOFRHvge+xW19t0NfNu6dMsTJmyx8c6sArZpENM8jPtwu5p7fLJjzP4D4/4DTOTHvVCohmaAAAAAElFTkSuQmCC"}}),t._v(" "),e("div",{staticClass:"pl-2"},[t._v("\n                Google\n              ")])])]),t._v(" "),e("a",{staticClass:"mx-auto mt-5 font-bold text-primary",attrs:{href:"/register"}},[t._v("\n            Buat Akun Baru\n          ")])])])]),t._v(" "),t._m(5)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"z-0 flex w-full h-56 bg-blue-800 border place-content-center rounded-b-3xl"},[t("img",{staticClass:"w-84 h-32 mt-8",attrs:{src:"/logo1.png",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-6"},[e("h1",{staticClass:"text-2xl font-bold"},[t._v("\n                Login\n              ")]),t._v(" "),e("p",{staticClass:"text-gray-500 text-sm"},[t._v("\n                Keseruan bermula dari sini\n              ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[e("div",{staticClass:"mb-1 pl-1 text-gray-600",attrs:{for:"text"}},[t._v("\n                Email atau Username\n              ")]),t._v(" "),e("input",{staticClass:"w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2",attrs:{id:"email",type:"text",name:"email",placeholder:"Masukan Email atau Usename"}})])},function(){var t=this._self._c;return t("div",{staticClass:"flex justify-end"},[t("a",{staticClass:"text-primary text-sm font-semibold",attrs:{href:"/forgot-password"}},[this._v("Lupa Password?")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center mt-4 justify-between mb-3"},[e("span",{staticClass:"w-full h-0.5 bg-primary"}),t._v(" "),e("p",{staticClass:"mx-3 text-sm text-primary font-semibold"},[t._v("\n              Atau\n            ")]),t._v(" "),e("span",{staticClass:"w-full h-0.5 bg-primary"})])},function(){var t=this._self._c;return t("div",{staticClass:"w-full p-4 mx-auto md:p-8"},[t("p",{staticClass:"mx-auto text-center text-blue-400"},[this._v("\n        @2021 B-Fast. PT BP Batam. All Right Reserved\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);