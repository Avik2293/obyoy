import katex from 'katex';
import { useEffect, useRef } from "react";
import "katex/dist/katex.min.css";

const KaTeXComponent = ({ texExpression }) => {
    const containerRef = useRef();

    useEffect(() => {
        katex.render(texExpression, containerRef.current);
    }, [texExpression]);

    // return <div ref={containerRef} />
    return <span ref={containerRef} />
}

export default KaTeXComponent;

// <KaTeXComponent texExpression={"c = \\pm\\sqrt{a^2 + b^2}"} />     ----use this



// for typescript
// npm i katex @types/katex     --- install

// function KaTeXComponent({ texExpression, className }: { texExpression: string, className: string }) {
//   const containerRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     katex.render(texExpression, containerRef.current as HTMLInputElement);
//   }, [texExpression]);

//   return <div ref={containerRef} className={className} />;
// }