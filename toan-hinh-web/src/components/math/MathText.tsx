'use client';

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathTextProps {
  text: string;
}

function renderTextWithBold(text: string) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-slate-100 print:text-black">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function MathText({ text }: MathTextProps) {
  if (!text) return null;

  // Split by block math $$
  const blockParts = text.split(/(\$\$.*?\$\$)/g);

  return (
    <>
      {blockParts.map((blockPart, index) => {
        if (blockPart.startsWith('$$') && blockPart.endsWith('$$')) {
          const math = blockPart.slice(2, -2);
          return (
            <div key={index} className="my-3 overflow-x-auto">
              <BlockMath math={math} {...({ options: { strict: 'ignore' } } as any)} />
            </div>
          );
        }

        // Split by inline math $
        const inlineParts = blockPart.split(/(\$.*?\$)/g);
        return (
          <span key={index}>
            {inlineParts.map((inlinePart, subIndex) => {
              if (inlinePart.startsWith('$') && inlinePart.endsWith('$')) {
                const math = inlinePart.slice(1, -1);
                return <InlineMath key={subIndex} math={math} {...({ options: { strict: 'ignore' } } as any)} />;
              }
              // Normal text
              return <span key={subIndex}>{renderTextWithBold(inlinePart)}</span>;
            })}
          </span>
        );
      })}
    </>
  );
}
