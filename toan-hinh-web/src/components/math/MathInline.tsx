'use client';

import React from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathInlineProps {
  math: string;
}

export default function MathInline({ math }: MathInlineProps) {
  return <InlineMath math={math} />;
}
