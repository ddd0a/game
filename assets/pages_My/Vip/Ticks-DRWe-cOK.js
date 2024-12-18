import{a as $}from"../../vendor_emotion-CZWcTM8j.js";import{r as d}from"../../vendor_react-Bz04f6Pj.js";const n=372,u=2*Math.PI*n,p=435,k=435,F=({values:e=[],progress:r=0,style:c,className:i,scaleAngle:t})=>{const f=d.useMemo(()=>{const m=-(t*Math.floor(r)),s=2*Math.PI*n*(r*t/360),g=`${s},${u-s}`,x=e.map((l,a)=>{const o=t*a;return`
        <text
          x="435"
          y="52"
          font-size="20"
          fill="#FF0000"
          text-anchor="middle"
          transform="rotate(${o} 435 435)"
        >
          V${a}
        </text>
        <text
          x="435"
          y="80"
          font-size="10"
          fill="#FF1A1A"
          text-anchor="middle"
          transform="rotate(${o} 435 435)"
        >
          ${l}
        </text>
        <circle
          cx="435"
          cy="63"
          r="4"
          transform="rotate(${o} 435 435)"
          fill="white"
        />
      `}).join(`
`),h=`
       <svg
      viewBox="0 0 870 870"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(${m} ${p} ${k})">
        {/* 進度 */}
        <circle
          cx="435"
          cy="435"
          r="372"
          fill="none"
          stroke="#FF0000"
          stroke-width="6"
          stroke-dasharray="${g}"
          stroke-dashoffset="0"
          stroke-linecap="round"
          transform="rotate(-90, 435, 435)"
        />
  ${x}
        </g>
    </svg>
    `;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(h)}`},[t,r,e]);return $("img",{src:f,className:i,style:c})};export{F as T};
