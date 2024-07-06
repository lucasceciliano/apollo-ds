import{r}from"./index-lToYTJ1z.js";import{r as y}from"./index-DCvIRzM-.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p.apply(null,arguments)}function S(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function h(...e){return n=>e.forEach(t=>S(t,n))}function j(...e){return r.useCallback(h(...e),e)}const x=r.forwardRef((e,n)=>{const{children:t,...o}=e,i=r.Children.toArray(t),s=i.find(P);if(s){const c=s.props.children,l=i.map(u=>u===s?r.Children.count(c)>1?r.Children.only(null):r.isValidElement(c)?c.props.children:null:u);return r.createElement(v,p({},o,{ref:n}),r.isValidElement(c)?r.cloneElement(c,void 0,l):null)}return r.createElement(v,p({},o,{ref:n}),t)});x.displayName="Slot";const v=r.forwardRef((e,n)=>{const{children:t,...o}=e;return r.isValidElement(t)?r.cloneElement(t,{...w(o,t.props),ref:n?h(n,t.ref):t.ref}):r.Children.count(t)>1?r.Children.only(null):null});v.displayName="SlotClone";const g=({children:e})=>r.createElement(r.Fragment,null,e);function P(e){return r.isValidElement(e)&&e.type===g}function w(e,n){const t={...n};for(const o in n){const i=e[o],s=n[o];/^on[A-Z]/.test(o)?i&&s?t[o]=(...l)=>{s(...l),i(...l)}:i&&(t[o]=i):o==="style"?t[o]={...i,...s}:o==="className"&&(t[o]=[i,s].filter(Boolean).join(" "))}return{...e,...t}}function M(e,n){const t=r.createContext(n);function o(s){const{children:c,...l}=s,u=r.useMemo(()=>l,Object.values(l));return r.createElement(t.Provider,{value:u},c)}function i(s){const c=r.useContext(t);if(c)return c;if(n!==void 0)return n;throw new Error(`\`${s}\` must be used within \`${e}\``)}return o.displayName=e+"Provider",[o,i]}function R(e,n=[]){let t=[];function o(s,c){const l=r.createContext(c),u=t.length;t=[...t,c];function $(f){const{scope:a,children:m,...d}=f,E=(a==null?void 0:a[e][u])||l,C=r.useMemo(()=>d,Object.values(d));return r.createElement(E.Provider,{value:C},m)}function b(f,a){const m=(a==null?void 0:a[e][u])||l,d=r.useContext(m);if(d)return d;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${s}\``)}return $.displayName=s+"Provider",[$,b]}const i=()=>{const s=t.map(c=>r.createContext(c));return function(l){const u=(l==null?void 0:l[e])||s;return r.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return i.scopeName=e,[o,N(i,...n)]}function N(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const c=o.reduce((l,{useScope:u,scopeName:$})=>{const f=u(s)[`__scope${$}`];return{...l,...f}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:c}),[c])}};return t.scopeName=n.scopeName,t}const k=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{};function A(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>{var o;return(o=n.current)===null||o===void 0?void 0:o.call(n,...t)},[])}const _=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],B=_.reduce((e,n)=>{const t=r.forwardRef((o,i)=>{const{asChild:s,...c}=o,l=s?x:n;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(l,p({},c,{ref:i}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function H(e,n){e&&y.flushSync(()=>e.dispatchEvent(n))}export{R as $,p as _,B as a,A as b,k as c,x as d,j as e,H as f,M as g};