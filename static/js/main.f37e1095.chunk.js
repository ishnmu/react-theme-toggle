(this["webpackJsonpreact-theme-toggle"]=this["webpackJsonpreact-theme-toggle"]||[]).push([[0],{13:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(8),c=n.n(a),i=n(12),o=n(1),m={body:"#E2E2E2",text:"#363537",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},f={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},s=n(2);function u(){var e=Object(s.a)(["\n    *,\n    *::after,\n    *::before {\n        box-sizing: border-box;\n    }\n\n    *:focus {\n        outline: none;\n    }\n\n    body {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        height: 100vh;\n        margin: 0;\n        padding: 0;\n        background: ",";\n        color: ",";\n        transition: all 0.25s linear;\n        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif\n    }\n\n    footer {\n        text-align: center;\n        position: absolute;\n        bottom: 5%;\n        left: 50%;\n        transform: translateX(-50%);\n        font-size: 0.5rem;\n      }\n    \n      small {\n        display: block;\n      }\n    \n      button {\n        display: block;\n      }\n    \n      a {\n        color: ",";\n      }\n"]);return u=function(){return e},e}var h=Object(o.b)(u(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.text})),d=n(5);function p(){var e=Object(s.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  width: 4rem;\n  height: 2rem;\n\n  svg {\n    height: auto;\n    max-width: 2rem;\n    transition: all 0.3s linear;\n\n    &:first-child {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n"]);return p=function(){return e},e}var g=o.c.button(p(),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.lightTheme?"translateX(0)":"translateX(100px)"}),(function(e){return e.lightTheme?"translateX(-100px)":"translateX(0)"}));function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var v=l.a.createElement("path",{d:"m501.226562 251.113281c0 138.410157-112.203124 250.613281-250.613281 250.613281-138.410156 0-250.613281-112.203124-250.613281-250.613281 0-138.410156 112.203125-250.613281 250.613281-250.613281 138.410157 0 250.613281 112.203125 250.613281 250.613281zm0 0",fill:"#393991"}),y=l.a.createElement("path",{d:"m191.890625 270.117188c-10.351563-93.664063 57.164063-178.988282 150.710937-190.265626 12.589844-1.515624 25.007813-1.636718 37.105469-.492187 2.878907.269531 4.320313-3.382813 2.03125-5.148437-36.761719-28.335938-82.597656-45.476563-132.40625-46.285157-123.445312-2.003906-226.667969 99.3125-226.886719 222.785157-.214843 123.460937 99.792969 223.613281 223.1875 223.613281 51.246094 0 98.449219-17.28125 136.125-46.328125 2.300782-1.773438.832032-5.429688-2.0625-5.152344-.035156 0-.066406.003906-.101562.007812-93.921875 8.898438-177.375-59.285156-187.703125-152.734374zm0 0",fill:"#fdd33a"}),k=l.a.createElement("path",{d:"m97.238281 250.710938c.191407-109.566407 81.5-201.675782 186.066407-219.632813-11.070313-1.886719-22.414063-2.964844-33.976563-3.152344-123.441406-2.003906-226.664063 99.3125-226.882813 222.785157-.214843 123.460937 99.792969 223.613281 223.1875 223.613281 12.757813 0 25.265626-1.070313 37.4375-3.128907-105.605468-17.796874-186.027343-109.761718-185.832031-220.484374zm0 0",fill:"#e8bb2a"}),w=l.a.createElement("g",{fill:"#5dc1d8"},l.a.createElement("path",{d:"m313.757812 209.925781 6.710938 18.515625c1.054688 2.910156 3.347656 5.207032 6.261719 6.261719l18.515625 6.707031c9.179687 3.328125 9.179687 16.3125 0 19.640625l-18.515625 6.710938c-2.914063 1.054687-5.207031 3.347656-6.261719 6.257812l-6.710938 18.515625c-3.328124 9.179688-16.3125 9.179688-19.636718 0l-6.710938-18.515625c-1.054687-2.910156-3.347656-5.203125-6.261718-6.257812l-18.511719-6.710938c-9.183594-3.328125-9.183594-16.3125 0-19.640625l18.511719-6.707031c2.914062-1.058594 5.207031-3.351563 6.261718-6.261719l6.710938-18.515625c3.324218-9.179687 16.3125-9.179687 19.636718 0zm0 0"}),l.a.createElement("path",{d:"m473.628906 344.554688 6.707032 18.511718c1.058593 2.914063 3.351562 5.207032 6.261718 6.261719l18.515625 6.710937c9.179688 3.328126 9.179688 16.3125 0 19.640626l-18.515625 6.707031c-2.910156 1.054687-5.207031 3.351562-6.261718 6.261719l-6.707032 18.515624c-3.328125 9.179688-16.3125 9.179688-19.640625 0l-6.707031-18.515624c-1.058594-2.910157-3.351562-5.207032-6.261719-6.261719l-18.515625-6.707031c-9.179687-3.328126-9.179687-16.3125 0-19.640626l18.515625-6.710937c2.910157-1.054687 5.207031-3.347656 6.261719-6.261719l6.707031-18.511718c3.328125-9.183594 16.3125-9.183594 19.640625 0zm0 0"}),l.a.createElement("path",{d:"m473.628906 75.921875 6.707032 18.511719c1.058593 2.914062 3.351562 5.207031 6.261718 6.261718l18.515625 6.710938c9.179688 3.328125 9.179688 16.3125 0 19.640625l-18.515625 6.707031c-2.910156 1.058594-5.207031 3.351563-6.261718 6.261719l-6.707032 18.515625c-3.328125 9.179688-16.3125 9.179688-19.640625 0l-6.707031-18.515625c-1.058594-2.910156-3.351562-5.207031-6.261719-6.261719l-18.515625-6.707031c-9.179687-3.328125-9.179687-16.3125 0-19.640625l18.515625-6.710938c2.910157-1.054687 5.207031-3.347656 6.261719-6.261718l6.707031-18.511719c3.328125-9.183594 16.3125-9.183594 19.640625 0zm0 0"})),O=l.a.createElement("path",{d:"m301.605469 267.757812-18.511719-6.707031c-9.183594-3.328125-9.183594-16.3125 0-19.640625l18.511719-6.710937c2.914062-1.054688 5.207031-3.347657 6.261719-6.257813l6.300781-17.386718-.410157-1.128907c-3.328124-9.183593-16.3125-9.183593-19.636718 0l-6.710938 18.511719c-1.054687 2.914062-3.347656 5.207031-6.261718 6.261719l-18.511719 6.710937c-9.183594 3.328125-9.183594 16.3125 0 19.640625l18.511719 6.707031c2.914062 1.054688 5.207031 3.347657 6.261718 6.261719l6.710938 18.511719c3.324218 9.183594 16.3125 9.183594 19.636718 0l.410157-1.128906-6.300781-17.382813c-1.054688-2.910156-3.347657-5.203125-6.261719-6.261719zm0 0",fill:"#399faa"}),z=l.a.createElement("path",{d:"m461.476562 402.386719-18.515624-6.710938c-9.179688-3.328125-9.179688-16.3125 0-19.636719l18.515624-6.710937c2.914063-1.054687 5.207032-3.347656 6.261719-6.261719l6.300781-17.386718-.410156-1.128907c-3.328125-9.179687-16.3125-9.179687-19.640625 0l-6.707031 18.515625c-1.058594 2.914063-3.351562 5.207032-6.261719 6.261719l-18.515625 6.710937c-9.179687 3.324219-9.179687 16.3125 0 19.636719l18.515625 6.710938c2.910157 1.054687 5.207031 3.347656 6.261719 6.261719l6.707031 18.515624c3.328125 9.179688 16.3125 9.179688 19.640625 0l.410156-1.132812-6.300781-17.382812c-1.054687-2.914063-3.347656-5.207032-6.261719-6.261719zm0 0",fill:"#399faa"}),x=l.a.createElement("path",{d:"m422.503906 127.046875 18.515625 6.707031c2.910157 1.058594 5.207031 3.351563 6.261719 6.261719l6.707031 18.515625c3.328125 9.179688 16.3125 9.179688 19.640625 0l.410156-1.128906-6.300781-17.386719c-1.054687-2.910156-3.347656-5.207031-6.261719-6.261719l-18.515624-6.707031c-9.179688-3.328125-9.179688-16.316406 0-19.640625l18.515624-6.710938c2.914063-1.054687 5.207032-3.347656 6.261719-6.261718l6.300781-17.382813-.410156-1.128906c-3.328125-9.183594-16.3125-9.183594-19.640625 0l-6.707031 18.511719c-1.058594 2.914062-3.351562 5.207031-6.261719 6.261718l-18.515625 6.710938c-9.179687 3.324219-9.179687 16.3125 0 19.640625zm0 0",fill:"#399faa"}),j=l.a.createElement("path",{d:"m489.460938 175.054688h-56.074219c-7.265625 0-13.160157 5.894531-13.160157 13.164062v1.308594c0 7.265625 5.890626 13.160156 13.160157 13.160156h11.917969c7.632812 0 13.816406 6.183594 13.816406 13.816406 0 6.8125-4.933594 12.457032-11.421875 13.59375h-65.445313c-10.242187 0-18.542968 8.300782-18.542968 18.539063s8.300781 18.539062 18.542968 18.539062h56.851563c7.902343 0 14.304687 6.40625 14.304687 14.308594 0 7.898437-6.402344 14.304687-14.304687 14.304687h-13.390625c-7.265625 0-13.160156 5.890626-13.160156 13.160157v2.289062c0 7.269531 5.890624 13.160157 13.160156 13.160157h64.613281c7.078125-23.183594 10.898437-47.785157 10.898437-73.285157 0-26.519531-4.132812-52.070312-11.765624-76.058593zm0 0",fill:"#4848aa"}),F=function(e){var t=e.svgRef,n=e.title,r=b(e,["svgRef","title"]);return l.a.createElement("svg",E({height:"511pt",viewBox:"0 -5 511.99898 511",width:"511pt",ref:t},r),n?l.a.createElement("title",null,n):null,v,y,k,w,O,z,x,j)},R=l.a.forwardRef((function(e,t){return l.a.createElement(F,E({svgRef:t},e))}));n.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var A=l.a.createElement("path",{d:"m500.785156 255.996094c0 135.316406-109.695312 245.011718-245.011718 245.011718-135.316407 0-245.011719-109.695312-245.011719-245.011718 0-135.3125 109.695312-245.007813 245.011719-245.007813 135.316406 0 245.011718 109.695313 245.011718 245.007813zm0 0",fill:"#fdd33a"}),C=l.a.createElement("path",{d:"m407.78125 255.996094c0 83.792968-67.925781 151.71875-151.71875 151.71875-83.789062 0-151.714844-67.925782-151.714844-151.71875 0-83.789063 67.925782-151.714844 151.714844-151.714844 83.792969 0 151.71875 67.925781 151.71875 151.714844zm0 0",fill:"#fc8e36"}),I=l.a.createElement("path",{d:"m162.347656 255.996094c0-73.871094 52.800782-135.398438 122.71875-148.933594-9.390625-1.820312-19.082031-2.78125-29.003906-2.78125-83.789062 0-151.714844 67.925781-151.714844 151.714844 0 83.792968 67.925782 151.71875 151.714844 151.71875 9.921875 0 19.613281-.964844 29.003906-2.78125-69.917968-13.535156-122.71875-75.066406-122.71875-148.9375zm0 0",fill:"#ed7626"}),P=l.a.createElement("path",{d:"m393.777344 243.496094c0 18.503906-14.996094 33.503906-33.5 33.503906-18.5 0-33.5-15-33.5-33.503906 0-18.5 15-33.5 33.5-33.5 18.503906 0 33.5 15 33.5 33.5zm0 0",fill:"#ffab5f"}),X=l.a.createElement("path",{d:"m342.777344 185.996094c0 11.597656-9.402344 21-21 21s-21.003906-9.402344-21.003906-21c0-11.601563 9.40625-21.003906 21.003906-21.003906s21 9.402343 21 21.003906zm0 0",fill:"#ffab5f"}),M=l.a.createElement("g",{fill:"#fc8e36"},l.a.createElement("path",{d:"m256 86.484375c-4.140625 0-7.5-3.359375-7.5-7.503906v-71.480469c0-4.140625 3.359375-7.5 7.5-7.5 4.144531 0 7.5 3.359375 7.5 7.5v71.480469c0 4.144531-3.355469 7.503906-7.5 7.503906zm0 0"}),l.a.createElement("path",{d:"m256 512c-4.140625 0-7.5-3.359375-7.5-7.5v-71.480469c0-4.144531 3.359375-7.503906 7.5-7.503906 4.144531 0 7.5 3.359375 7.5 7.503906v71.480469c0 4.140625-3.355469 7.5-7.5 7.5zm0 0"}),l.a.createElement("path",{d:"m433.019531 263.5c-4.144531 0-7.503906-3.355469-7.503906-7.5 0-4.140625 3.359375-7.5 7.503906-7.5h71.480469c4.140625 0 7.5 3.359375 7.5 7.5 0 4.144531-3.359375 7.5-7.5 7.5zm0 0"}),l.a.createElement("path",{d:"m7.5 263.5c-4.140625 0-7.5-3.355469-7.5-7.5 0-4.140625 3.359375-7.5 7.5-7.5h71.480469c4.144531 0 7.503906 3.359375 7.503906 7.5 0 4.144531-3.359375 7.5-7.503906 7.5zm0 0"}),l.a.createElement("path",{d:"m381.171875 138.332031c-1.921875 0-3.839844-.734375-5.304687-2.199219-2.929688-2.929687-2.929688-7.675781 0-10.605468l50.546874-50.546875c2.925782-2.929688 7.675782-2.929688 10.605469 0 2.929688 2.929687 2.929688 7.679687 0 10.605469l-50.546875 50.546874c-1.460937 1.464844-3.382812 2.199219-5.300781 2.199219zm0 0"}),l.a.createElement("path",{d:"m80.285156 439.214844c-1.921875 0-3.839844-.730469-5.304687-2.195313-2.929688-2.929687-2.929688-7.679687 0-10.605469l50.546875-50.546874c2.929687-2.929688 7.675781-2.929688 10.605468 0 2.929688 2.929687 2.929688 7.679687 0 10.605468l-50.546874 50.546875c-1.460938 1.464844-3.382813 2.195313-5.300782 2.195313zm0 0"}),l.a.createElement("path",{d:"m431.714844 439.214844c-1.917969 0-3.839844-.730469-5.300782-2.195313l-50.546874-50.546875c-2.929688-2.929687-2.929688-7.675781 0-10.605468 2.929687-2.929688 7.675781-2.929688 10.605468 0l50.546875 50.546874c2.929688 2.925782 2.929688 7.675782 0 10.605469-1.464843 1.464844-3.382812 2.195313-5.304687 2.195313zm0 0"}),l.a.createElement("path",{d:"m130.828125 138.328125c-1.917969 0-3.839844-.730469-5.300781-2.195313l-50.546875-50.546874c-2.929688-2.925782-2.929688-7.675782 0-10.605469 2.929687-2.929688 7.679687-2.929688 10.605469 0l50.546874 50.546875c2.929688 2.929687 2.929688 7.675781 0 10.605468-1.464843 1.464844-3.382812 2.195313-5.304687 2.195313zm0 0"})),D=function(e){var t=e.svgRef,n=e.title,r=S(e,["svgRef","title"]);return l.a.createElement("svg",B({height:"512pt",viewBox:"0 0 512 512",width:"512pt",ref:t},r),n?l.a.createElement("title",null,n):null,A,C,I,P,X,M)},T=l.a.forwardRef((function(e,t){return l.a.createElement(D,B({svgRef:t},e))})),q=(n.p,function(e){var t=e.onClick,n="light"===e.theme;return l.a.createElement(g,{onClick:t,lightTheme:n},l.a.createElement(T,null),l.a.createElement(R,null))});q.prototypes={onClick:d.func.isRequired,theme:d.string.isRequired};var J=q;var U=function(){var e=Object(r.useState)("light"),t=Object(i.a)(e,2),n=t[0],a=t[1];return l.a.createElement(o.a,{theme:"light"===n?m:f},l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(J,{onClick:function(){return a("light"===n?"dark":"light")},theme:n}),l.a.createElement("h1",null,n.toUpperCase()),l.a.createElement("footer",null,l.a.createElement("small",null,l.a.createElement("b",null,"Credits")),l.a.createElement("div",null,"Icons made by"," ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",l.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")),l.a.createElement("div",null,"Inspired by ",l.a.createElement("a",{href:"https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/",title:"css-tricks-article"},"css-tricks article")," from ",l.a.createElement("a",{href:"https://css-tricks.com/author/maksakymenko/",title:"Maks Akymenko"},"Maks Akymenko")))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f37e1095.chunk.js.map