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

function renderMathAndBoldInline(text: string) {
  if (!text) return null;
  
  // Clean up KaTeX incompatible overparen / wideparen with overset frown
  const cleanedText = text
    .replace(/\\overparen\{([^{}]+)\}/g, '\\overset{\\frown}{$1}')
    .replace(/\\wideparen\{([^{}]+)\}/g, '\\overset{\\frown}{$1}');

  // Split by block math $$
  const blockParts = cleanedText.split(/(\$\$.*?\$\$)/g);

  return (
    <>
      {blockParts.map((blockPart, index) => {
        if (blockPart.startsWith('$$') && blockPart.endsWith('$$')) {
          const math = blockPart.slice(2, -2);
          return (
            <div key={index} className="my-1 overflow-x-auto">
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

function renderTable(rows: string[][], key: any) {
  if (rows.length === 0) return null;
  const headers = rows[0];
  const bodyRows = rows.slice(1);

  return (
    <div key={key} className="my-4 overflow-x-auto w-full rounded-xl border border-slate-800 bg-slate-950/20 shadow-lg print:border-slate-300 print:bg-white print:shadow-none">
      <table className="min-w-full divide-y divide-slate-800 print:divide-slate-300 text-left text-xs sm:text-sm">
        <thead className="bg-slate-900/40 print:bg-slate-50">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold text-indigo-400 print:text-indigo-800 print:border-b print:border-slate-300">
                {renderMathAndBoldInline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-900/60 print:divide-slate-200">
          {bodyRows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-slate-900/10 print:hover:bg-transparent">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-3 text-slate-300 print:text-slate-800 font-medium">
                  {renderMathAndBoldInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function parseMarkdownAndMath(text: string) {
  if (!text) return null;

  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  
  let currentTableRows: string[][] = [];
  let isTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('|')) {
      isTable = true;
      // Skip the separator row like |---|---|
      if (line.includes('---|') || line.includes('--- |') || line.includes('-|')) {
        continue;
      }
      const cols = line.split('|').map(c => c.trim()).filter((c, idx, arr) => {
        return idx > 0 && idx < arr.length - 1;
      });
      currentTableRows.push(cols);
    } else {
      // If a table ended, render it
      if (isTable && currentTableRows.length > 0) {
        elements.push(renderTable(currentTableRows, `table-${i}`));
        currentTableRows = [];
        isTable = false;
      }
      
      if (line !== '') {
        elements.push(
          <div key={`p-${i}`} className="mb-2 leading-relaxed">
            {renderMathAndBoldInline(lines[i])}
          </div>
        );
      }
    }
  }

  // If table ended at the very end of content
  if (isTable && currentTableRows.length > 0) {
    elements.push(renderTable(currentTableRows, `table-end`));
  }

  return <>{elements}</>;
}

export default function MathText({ text }: MathTextProps) {
  return parseMarkdownAndMath(text);
}
