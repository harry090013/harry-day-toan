'use client';

import React from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathBlockProps {
  math: string;
}

export default function MathBlock({ math }: MathBlockProps) {
  return (
    <div className="my-2 overflow-x-auto">
      <BlockMath math={math} />
    </div>
  );
}
