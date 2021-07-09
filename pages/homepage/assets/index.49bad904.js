import{q as e,D as t,a as n,R as i,b as o}from"./vendor.a71d09be.js";const c=e.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`,l=e.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	z-index: -1;
	font-size: 0;
`,d=e.canvas`
	width: 100%;
	height: 100%;
`,r=e.h1`
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
`;function s(){const e=t.exports.useRef(null);return t.exports.useEffect((()=>{if(e.current){const t=e.current,i=t.getBoundingClientRect();t.width=i.width,t.height=i.height;const o=new n({canvas:t,background:"/assets/bk3.8f4dc3f9.jpg"});window.onresize=()=>{const e=t.getBoundingClientRect();o.resize(e.width,e.height)},o.start()}}),[]),i.createElement(c,null,i.createElement(l,null,i.createElement(d,{ref:e})),i.createElement(r,null,"Wang Cao"))}((e=1080,t=2e3)=>{const n=document.querySelectorAll("html")[0],i=window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth,o=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;n.style.fontSize=i<o?i/e*100+"px":i/t*100+"px"})(),o.render(i.createElement(i.StrictMode,null,i.createElement(s,null)),document.getElementById("root"));
