'use client';

import React from 'react';
import { GeometryDiagram } from '@/data/curriculum/types';

interface GeometryDiagramRendererProps {
  diagram: GeometryDiagram;
  className?: string;
}

export default function GeometryDiagramRenderer({ diagram, className = '' }: GeometryDiagramRendererProps) {
  // Common colors for dark mode geometry
  const colors = {
    primary: '#818cf8',    // Indigo-400
    accent: '#34d399',     // Emerald-400
    warning: '#fbbf24',    // Amber-400
    danger: '#f87171',     // Rose-400
    neutral: '#94a3b8',    // Slate-400
    fill: 'rgba(129, 140, 248, 0.05)',
    grid: 'rgba(148, 163, 184, 0.1)'
  };

  const renderContent = () => {
    const data = diagram.data || {};

    switch (diagram.variant) {
      case 'point-line-membership': {
        const lineLabel = (data.lineLabel as string) || 'd';
        const points = (data.points as Array<{ label: string; x: number; y: number; onLine?: boolean }>) || [];
        return (
          <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
            {/* Draw grid lines for visual depth */}
            <line x1="10" y1="80" x2="310" y2="80" stroke={colors.grid} strokeWidth="1" strokeDasharray="4" />
            
            {/* Draw main line */}
            <line x1="30" y1="100" x2="290" y2="60" stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round" />
            <text x="295" y="58" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">
              {lineLabel}
            </text>

            {/* Draw points */}
            {points.map((p) => (
              <g key={p.label}>
                <circle cx={p.x} cy={p.y} r="5" fill={p.onLine ? colors.accent : colors.danger} />
                <circle cx={p.x} cy={p.y} r="8" stroke={p.onLine ? colors.accent : colors.danger} strokeWidth="1.5" fill="none" opacity="0.4" />
                <text x={p.x + 10} y={p.y - 10} fontSize="14" fontWeight="bold" fill="#f1f5f9">
                  {p.label}
                </text>
              </g>
            ))}
          </svg>
        );
      }

      case 'between-points': {
        const points = (data.points as Array<{ label: string; x: number; y: number }>) || [];
        return (
          <svg viewBox="0 0 320 120" className="w-full h-auto max-h-[120px] mx-auto">
            {/* Draw main line containing the points */}
            <line x1="20" y1="60" x2="300" y2="60" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="50" y1="60" x2="270" y2="60" stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round" />
            
            {points.map((p) => (
              <g key={p.label}>
                <circle cx={p.x} cy={p.y} r="5" fill={colors.accent} />
                <circle cx={p.x} cy={p.y} r="8" stroke={colors.accent} strokeWidth="1" fill="none" opacity="0.3" />
                <text x={p.x} y={p.y - 12} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">
                  {p.label}
                </text>
              </g>
            ))}
          </svg>
        );
      }

      case 'ray': {
        const origin = (data.origin as string) || 'O';
        const label = (data.label as string) || 'x';
        const points = (data.points as Array<{ label: string; x: number; y: number }>) || [];
        
        return (
          <svg viewBox="0 0 320 120" className="w-full h-auto max-h-[120px] mx-auto">
            {/* Ray path starting at 60,60 and extending to 260,60 */}
            <line x1="60" y1="60" x2="260" y2="60" stroke={colors.primary} strokeWidth="2.5" />
            <polygon points="260,56 268,60 260,64" fill={colors.primary} />
            
            {/* Origin */}
            <circle cx="60" cy="60" r="5" fill={colors.accent} />
            <text x="60" y="82" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{origin}</text>
            
            {/* Ray label */}
            <text x="250" y="80" textAnchor="middle" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label}</text>

            {/* Additional points on ray */}
            {points.map((p) => (
              <g key={p.label}>
                <circle cx={p.x} cy={p.y} r="4.5" fill="#f1f5f9" />
                <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{p.label}</text>
              </g>
            ))}
          </svg>
        );
      }

      case 'segment-length': {
        const aLabel = (data.aLabel as string) || 'A';
        const bLabel = (data.bLabel as string) || 'B';
        const lengthLabel = (data.lengthLabel as string) || '';
        
        return (
          <svg viewBox="0 0 320 120" className="w-full h-auto max-h-[120px] mx-auto">
            <line x1="60" y1="60" x2="260" y2="60" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" />
            <circle cx="60" cy="60" r="5" fill={colors.accent} />
            <circle cx="260" cy="60" r="5" fill={colors.accent} />
            
            <text x="60" y="42" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{aLabel}</text>
            <text x="260" y="42" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{bLabel}</text>
            
            {lengthLabel && (
              <g>
                {/* Visual dimension lines */}
                <line x1="60" y1="80" x2="260" y2="80" stroke={colors.neutral} strokeWidth="1" strokeDasharray="3 3" />
                <line x1="60" y1="75" x2="60" y2="85" stroke={colors.neutral} strokeWidth="1" />
                <line x1="260" y1="75" x2="260" y2="85" stroke={colors.neutral} strokeWidth="1" />
                <rect x="130" y="70" width="60" height="20" fill="#0f172a" rx="4" />
                <text x="160" y="84" textAnchor="middle" fontSize="12" fontWeight="bold" fill={colors.accent}>{lengthLabel}</text>
              </g>
            )}
          </svg>
        );
      }

      case 'midpoint-segment': {
        const points = (data.points as Array<{ label: string; x: number; y: number }>) || [];
        const labels = (data.labels as string[]) || [];
        const a = points[0] || { label: 'A', x: 60, y: 60 };
        const m = points[1] || { label: 'M', x: 160, y: 60 };
        const b = points[2] || { label: 'B', x: 260, y: 60 };

        return (
          <svg viewBox="0 0 320 130" className="w-full h-auto max-h-[130px] mx-auto">
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={colors.primary} strokeWidth="3" />
            
            <circle cx={a.x} cy={a.y} r="5" fill={colors.accent} />
            <circle cx={m.x} cy={m.y} r="5" fill={colors.warning} />
            <circle cx={b.x} cy={b.y} r="5" fill={colors.accent} />

            <text x={a.x} y={a.y - 12} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{a.label}</text>
            <text x={m.x} y={m.y - 12} textAnchor="middle" fontSize="14" fontWeight="bold" fill={colors.warning}>{m.label}</text>
            <text x={b.x} y={b.y - 12} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{b.label}</text>

            {/* Equivalence ticks on segments AM and MB */}
            {/* AM Tick */}
            <line x1="110" y1="52" x2="110" y2="68" stroke={colors.accent} strokeWidth="2" />
            {/* MB Tick */}
            <line x1="210" y1="52" x2="210" y2="68" stroke={colors.accent} strokeWidth="2" />

            {/* Labels underneath if present */}
            {labels.length > 0 && (
              <text x="160" y="90" textAnchor="middle" fontSize="13" fill={colors.neutral}>
                {labels.join(' ; ')}
              </text>
            )}
          </svg>
        );
      }

      case 'angle-basic':
      case 'angle-measure': {
        const vertex = (data.vertex as string) || 'O';
        const rays = (data.rays as Array<{ label: string; angleDeg: number }>) || [];
        const measure = data.measure !== undefined ? Number(data.measure) : null;
        
        // Let's compute ray coordinates. Origin at 80, 120
        const ox = 100;
        const oy = 110;
        const length = 120;
        
        const rayCoords = rays.map(r => {
          // Subtract angle to go counterclockwise in standard coordinate system
          const rad = (r.angleDeg * Math.PI) / 180;
          const rx = ox + length * Math.cos(-rad);
          const ry = oy + length * Math.sin(-rad);
          const lx = ox + (length - 15) * Math.cos(-rad);
          const ly = oy + (length - 15) * Math.sin(-rad);
          return { label: r.label, rx, ry, lx, ly, angle: r.angleDeg };
        });

        // Compute angle arc path
        let arcPath = '';
        if (rayCoords.length >= 2) {
          const a1 = rayCoords[0].angle;
          const a2 = rayCoords[1].angle;
          const r = 25; // Arc radius
          
          const rad1 = (a1 * Math.PI) / 180;
          const rad2 = (a2 * Math.PI) / 180;
          
          const sx = ox + r * Math.cos(-rad1);
          const sy = oy + r * Math.sin(-rad1);
          const ex = ox + r * Math.cos(-rad2);
          const ey = oy + r * Math.sin(-rad2);
          
          // Large arc flag
          const largeArc = Math.abs(a2 - a1) > 180 ? 1 : 0;
          // Sweep flag: standard counterclockwise
          const sweep = a2 > a1 ? 0 : 1;
          
          arcPath = `M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} ${sweep} ${ex} ${ey}`;
        }

        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            {/* Draw angle arc */}
            {arcPath && <path d={arcPath} fill="none" stroke={colors.accent} strokeWidth="2" />}
            
            {/* Draw rays */}
            {rayCoords.map((r, i) => (
              <g key={i}>
                <line x1={ox} y1={oy} x2={r.rx} y2={r.ry} stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round" />
                <text x={r.lx + 8} y={r.ly - 5} fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">
                  {r.label}
                </text>
              </g>
            ))}
            
            {/* Draw vertex */}
            <circle cx={ox} cy={oy} r="5" fill={colors.warning} />
            <text x={ox - 15} y={oy + 5} fontSize="14" fontWeight="bold" fill="#f1f5f9">{vertex}</text>
            
            {/* Draw measure value if present */}
            {measure !== null && (
              <text x={ox + 35} y={oy - 20} fontSize="12" fontWeight="bold" fill={colors.accent}>
                {measure}°
              </text>
            )}
          </svg>
        );
      }

      case 'basic-shapes-regular-polygons': {
        const shape = (data.shape as string) || 'triangle';
        const sideLength = (data.side as string) || '';
        const label = (data.label as string) || '';
        
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[200px] mx-auto">
            {shape === 'triangle' && (
              <g>
                {/* Equilateral triangle, vertices (160, 40), (70, 170), (250, 170) */}
                <polygon points="160,40 73,170 247,170" fill={colors.fill} stroke={colors.primary} strokeWidth="3" strokeLinejoin="round" />
                
                {/* Labels */}
                <text x="160" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">A</text>
                <text x="58" y="180" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">B</text>
                <text x="262" y="180" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">C</text>
                
                {/* Equality ticks on 3 sides */}
                {/* AB */}
                <line x1="112" y1="102" x2="122" y2="108" stroke={colors.accent} strokeWidth="2" />
                {/* AC */}
                <line x1="198" y1="108" x2="208" y2="102" stroke={colors.accent} strokeWidth="2" />
                {/* BC */}
                <line x1="160" y1="162" x2="160" y2="178" stroke={colors.accent} strokeWidth="2" />

                {sideLength && (
                  <text x="160" y="192" textAnchor="middle" fontSize="12" fill={colors.accent} fontWeight="semibold">
                    Cạnh = {sideLength}
                  </text>
                )}
              </g>
            )}

            {shape === 'square' && (
              <g>
                {/* Square, vertices (90, 40), (230, 40), (230, 180), (90, 180) */}
                <polygon points="90,40 230,40 230,180 90,180" fill={colors.fill} stroke={colors.primary} strokeWidth="3" strokeLinejoin="round" />
                
                {/* Labels */}
                <text x="80" y="38" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">A</text>
                <text x="240" y="38" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">B</text>
                <text x="240" y="194" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">C</text>
                <text x="80" y="194" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">D</text>

                {/* Right angle squares */}
                <rect x="90" y="40" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1" />
                <rect x="220" y="40" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1" />
                <rect x="220" y="170" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1" />
                <rect x="90" y="170" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1" />

                {/* Single hash ticks on 4 sides */}
                <line x1="82" y1="110" x2="98" y2="110" stroke={colors.accent} strokeWidth="2" />
                <line x1="222" y1="110" x2="238" y2="110" stroke={colors.accent} strokeWidth="2" />
                <line x1="160" y1="32" x2="160" y2="48" stroke={colors.accent} strokeWidth="2" />
                <line x1="160" y1="172" x2="160" y2="188" stroke={colors.accent} strokeWidth="2" />

                {sideLength && (
                  <text x="160" y="105" textAnchor="middle" fontSize="12" fill={colors.accent} fontWeight="semibold">
                    {sideLength}
                  </text>
                )}
              </g>
            )}

            {shape === 'hexagon' && (
              <g>
                {/* Regular Hexagon center (160, 110), radius 70 */}
                {/* Coordinates: i * 60 deg. 0: (230,110), 1: (195,170.6), 2: (125,170.6), 3: (90,110), 4: (125,49.4), 5: (195,49.4) */}
                <polygon points="230,110 195,170.6 125,170.6 90,110 125,49.4 195,49.4" fill={colors.fill} stroke={colors.primary} strokeWidth="3" strokeLinejoin="round" />
                
                {/* Vertex Labels */}
                <text x="195" y="38" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">A</text>
                <text x="242" y="112" fontSize="12" fontWeight="bold" fill="#f1f5f9">B</text>
                <text x="195" y="186" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">C</text>
                <text x="125" y="186" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">D</text>
                <text x="78" y="112" fontSize="12" fontWeight="bold" fill="#f1f5f9">E</text>
                <text x="125" y="38" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">F</text>

                {/* Hash marks on all 6 sides */}
                <line x1="160" y1="41.4" x2="160" y2="57.4" stroke={colors.accent} strokeWidth="1.5" />
                <line x1="160" y1="162.6" x2="160" y2="178.6" stroke={colors.accent} strokeWidth="1.5" />
                
                {sideLength && (
                  <text x="160" y="115" textAnchor="middle" fontSize="12" fill={colors.accent} fontWeight="semibold">
                    {sideLength}
                  </text>
                )}
              </g>
            )}
          </svg>
        );
      }

      case 'quadrilateral-types':
      case 'perimeter-area-quadrilateral': {
        const type = (data.type as string) || 'rectangle';
        const a = data.a !== undefined ? String(data.a) : '';
        const b = data.b !== undefined ? String(data.b) : '';
        const h = data.h !== undefined ? String(data.h) : '';

        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[200px] mx-auto">
            {type === 'rectangle' && (
              <g>
                {/* Rectangle: (70, 50) to (250, 150) */}
                <polygon points="70,50 250,50 250,150 70,150" fill={colors.fill} stroke={colors.primary} strokeWidth="3" strokeLinejoin="round" />
                
                {/* Labels */}
                <text x="60" y="48" fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>
                <text x="260" y="48" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>
                <text x="260" y="166" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>
                <text x="60" y="166" fontSize="13" fontWeight="bold" fill="#f1f5f9">D</text>

                {/* Right angles */}
                <rect x="70" y="50" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1" />
                <rect x="240" y="50" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1" />
                <rect x="240" y="140" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1" />
                <rect x="70" y="140" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1" />

                {/* Dimensions */}
                {a && (
                  <text x="160" y="42" textAnchor="middle" fontSize="12" fill={colors.accent} fontWeight="semibold">
                    {a}
                  </text>
                )}
                {b && (
                  <text x="265" y="105" fontSize="12" fill={colors.accent} fontWeight="semibold">
                    {b}
                  </text>
                )}
              </g>
            )}

            {type === 'rhombus' && (
              <g>
                {/* Rhombus: vertices (160, 40), (250, 100), (160, 160), (70, 100) */}
                <polygon points="160,40 250,100 160,160 70,100" fill={colors.fill} stroke={colors.primary} strokeWidth="3" strokeLinejoin="round" />
                
                {/* Diagonals (dashed) */}
                <line x1="160" y1="40" x2="160" y2="160" stroke={colors.neutral} strokeWidth="1" strokeDasharray="3 3" />
                <line x1="70" y1="100" x2="250" y2="100" stroke={colors.neutral} strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Central Right Angle */}
                <path d="M 160 90 L 170 90 L 170 100" fill="none" stroke={colors.accent} strokeWidth="1" />

                {/* Labels */}
                <text x="160" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>
                <text x="260" y="104" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>
                <text x="160" y="176" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>
                <text x="60" y="104" fontSize="13" fontWeight="bold" fill="#f1f5f9">D</text>
                <text x="148" y="98" fontSize="11" fill={colors.warning}>O</text>

                {a && (
                  <text x="215" y="65" fontSize="11" fill={colors.accent} fontWeight="semibold">
                    {a}
                  </text>
                )}
                {b && (
                  <text x="200" y="115" fontSize="11" fill={colors.warning}>
                    BD = {b}
                  </text>
                )}
                {h && (
                  <text x="120" y="130" fontSize="11" fill={colors.warning}>
                    AC = {h}
                  </text>
                )}
              </g>
            )}

            {type === 'parallelogram' && (
              <g>
                {/* Parallelogram: A(100,50), B(260,50), C(220,150), D(60,150) */}
                <polygon points="100,50 260,50 220,150 60,150" fill={colors.fill} stroke={colors.primary} strokeWidth="3" strokeLinejoin="round" />
                
                {/* Altitude (height) from A to CD: A(100,50) to (100, 150) */}
                <line x1="100" y1="50" x2="100" y2="150" stroke={colors.warning} strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 100 140 L 90 140 L 90 150" fill="none" stroke={colors.warning} strokeWidth="1" />
                <text x="92" y="145" fontSize="11" fill={colors.warning}>H</text>

                {/* Labels */}
                <text x="95" y="42" fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>
                <text x="265" y="42" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>
                <text x="225" y="166" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>
                <text x="50" y="166" fontSize="13" fontWeight="bold" fill="#f1f5f9">D</text>

                {a && (
                  <text x="140" y="164" textAnchor="middle" fontSize="12" fill={colors.accent} fontWeight="semibold">
                    a = {a}
                  </text>
                )}
                {h && (
                  <text x="112" y="105" fontSize="12" fill={colors.warning} fontWeight="semibold">
                    h = {h}
                  </text>
                )}
                {b && (
                  <text x="250" y="105" fontSize="12" fill={colors.neutral} fontWeight="semibold">
                    {b}
                  </text>
                )}
              </g>
            )}

            {type === 'trapezoid' && (
              <g>
                {/* Isosceles Trapezoid: A(90,50), B(230,50), C(270,150), D(50,150) */}
                <polygon points="90,50 230,50 270,150 50,150" fill={colors.fill} stroke={colors.primary} strokeWidth="3" strokeLinejoin="round" />
                
                {/* Altitude (height) from A to CD: A(90,50) to (90,150) */}
                <line x1="90" y1="50" x2="90" y2="150" stroke={colors.warning} strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 90 140 L 80 140 L 80 150" fill="none" stroke={colors.warning} strokeWidth="1" />
                <text x="82" y="145" fontSize="11" fill={colors.warning}>H</text>

                {/* Labels */}
                <text x="85" y="42" fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>
                <text x="235" y="42" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>
                <text x="275" y="166" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>
                <text x="40" y="166" fontSize="13" fontWeight="bold" fill="#f1f5f9">D</text>

                {a && (
                  <text x="160" y="42" textAnchor="middle" fontSize="12" fill={colors.accent} fontWeight="semibold">
                    đáy bé = {a}
                  </text>
                )}
                {b && (
                  <text x="160" y="168" textAnchor="middle" fontSize="12" fill={colors.accent} fontWeight="semibold">
                    đáy lớn = {b}
                  </text>
                )}
                {h && (
                  <text x="102" y="105" fontSize="12" fill={colors.warning} fontWeight="semibold">
                    h = {h}
                  </text>
                )}
              </g>
            )}
          </svg>
        );
      }

      case 'axis-symmetry': {
        const shape = (data.shape as string) || 'triangle';
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[200px] mx-auto">
            {shape === 'triangle' && (
              <g>
                {/* Isosceles triangle, symmetric axis in the middle */}
                <polygon points="160,40 80,160 240,160" fill={colors.fill} stroke={colors.primary} strokeWidth="3" />
                {/* Axis of symmetry */}
                <line x1="160" y1="20" x2="160" y2="180" stroke={colors.danger} strokeWidth="2.5" strokeDasharray="6 4" />
                
                <text x="160" y="32" textAnchor="middle" fontSize="12" fill="#f1f5f9">A</text>
                <text x="70" y="168" textAnchor="middle" fontSize="12" fill="#f1f5f9">B</text>
                <text x="250" y="168" textAnchor="middle" fontSize="12" fill="#f1f5f9">C</text>
                <text x="178" y="178" fontSize="12" fontWeight="bold" fill={colors.danger}>trục d</text>
              </g>
            )}

            {shape === 'square' && (
              <g>
                <rect x="90" y="40" width="140" height="140" fill={colors.fill} stroke={colors.primary} strokeWidth="3" />
                {/* Horizontal axis */}
                <line x1="70" y1="110" x2="250" y2="110" stroke={colors.danger} strokeWidth="2.5" strokeDasharray="6 4" />
                {/* Vertical axis */}
                <line x1="160" y1="20" x2="160" y2="200" stroke={colors.danger} strokeWidth="2.5" strokeDasharray="6 4" />
                {/* Diagonal 1 */}
                <line x1="80" y1="30" x2="240" y2="190" stroke={colors.danger} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.75" />
                {/* Diagonal 2 */}
                <line x1="240" y1="30" x2="80" y2="190" stroke={colors.danger} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.75" />
              </g>
            )}

            {shape === 'butterfly' || shape === 'circle' ? (
              <g>
                {/* Draw a symmetric circle shape */}
                <circle cx="160" cy="100" r="50" fill={colors.fill} stroke={colors.primary} strokeWidth="3" />
                {/* Axis of symmetry */}
                <line x1="160" y1="30" x2="160" y2="170" stroke={colors.danger} strokeWidth="2.5" strokeDasharray="6 4" />
                <line x1="90" y1="100" x2="230" y2="100" stroke={colors.danger} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
                <circle cx="160" cy="100" r="4" fill={colors.warning} />
                <text x="180" y="40" fontSize="12" fontWeight="bold" fill={colors.danger}>trục d</text>
              </g>
            ) : null}
          </svg>
        );
      }

      case 'central-symmetry': {
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[200px] mx-auto">
            {/* Draw central symmetry: point A (70, 70) and A' (250, 130) symmetric through O (160, 100) */}
            <line x1="70" y1="60" x2="250" y2="140" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
            
            <circle cx="160" cy="100" r="5" fill={colors.danger} />
            <text x="160" y="120" textAnchor="middle" fontSize="13" fontWeight="bold" fill={colors.danger}>Tâm O</text>
            
            <circle cx="70" cy="60" r="5" fill={colors.primary} />
            <text x="65" y="50" fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>
            
            <circle cx="250" cy="140" r="5" fill={colors.accent} />
            <text x="255" y="155" fontSize="13" fontWeight="bold" fill="#f1f5f9">A'</text>

            {/* Ticks showing AO = OA' */}
            <line x1="110" y1="75" x2="120" y2="85" stroke={colors.warning} strokeWidth="2" />
            <line x1="200" y1="115" x2="210" y2="125" stroke={colors.warning} strokeWidth="2" />
          </svg>
        );
      }
      
      case 'g7-special-angles': {
        const type = (data.type as string) || 'adjacent';
        const vertex = (data.vertex as string) || 'O';
        const label1 = (data.label1 as string) || 'x';
        const label2 = (data.label2 as string) || 'y';
        const label3 = (data.label3 as string) || 'z';
        const label4 = (data.label4 as string) || 't';

        if (type === 'adjacent') {
          // Three rays: O (160, 140), Ox at 0 deg, Oz at 40 deg, Oy at 85 deg
          return (
            <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
              <line x1="160" y1="140" x2="270" y2="140" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="160" y1="140" x2="244" y2="60" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="160" y1="140" x2="160" y2="30" stroke={colors.primary} strokeWidth="2.5" />
              
              <circle cx="160" cy="140" r="5" fill={colors.warning} />
              <text x="160" y="158" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{vertex}</text>
              
              <text x="275" y="144" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label1}</text>
              <text x="250" y="55" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label2}</text>
              <text x="160" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label3}</text>

              {/* Arcs for angles */}
              <path d="M 190 140 A 30 30 0 0 0 183 118" fill="none" stroke={colors.accent} strokeWidth="1.5" />
              <path d="M 197 122 A 40 40 0 0 0 160 100" fill="none" stroke={colors.danger} strokeWidth="1.5" />
            </svg>
          );
        }

        if (type === 'linear-pair') {
          // Straight line with O at (160, 130). Ox right, Oy left. Oz oblique at 60 deg (110, 43.4)
          return (
            <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
              {/* xOy line */}
              <line x1="40" y1="120" x2="280" y2="120" stroke={colors.primary} strokeWidth="2.5" />
              {/* Oz ray */}
              <line x1="160" y1="120" x2="100" y2="40" stroke={colors.primary} strokeWidth="2.5" />
              
              <circle cx="160" cy="120" r="5" fill={colors.warning} />
              <text x="160" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{vertex}</text>
              
              <text x="285" y="124" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label1}</text>
              <text x="30" y="124" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label2}</text>
              <text x="95" y="32" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label3}</text>

              {/* Linear pair arcs */}
              <path d="M 190 120 A 30 30 0 0 1 145 100" fill="none" stroke={colors.accent} strokeWidth="2" />
              <path d="M 130 120 A 30 30 0 0 0 145 100" fill="none" stroke={colors.danger} strokeWidth="2" />
            </svg>
          );
        }

        if (type === 'vertical') {
          // Intersecting lines xx' and yy' at O (160, 100)
          return (
            <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
              {/* xx' line */}
              <line x1="50" y1="50" x2="270" y2="150" stroke={colors.primary} strokeWidth="2.5" />
              {/* yy' line */}
              <line x1="50" y1="150" x2="270" y2="50" stroke={colors.primary} strokeWidth="2.5" />
              
              <circle cx="160" cy="100" r="5" fill={colors.warning} />
              <text x="160" y="122" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{vertex}</text>
              
              <text x="40" y="48" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label1}</text>
              <text x="275" y="158" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label2}</text>
              <text x="40" y="158" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label3}</text>
              <text x="275" y="48" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label4}</text>

              {/* Vertical angle arcs (opposite pair) */}
              <path d="M 187 112 A 30 30 0 0 0 187 88" fill="none" stroke={colors.accent} strokeWidth="2" />
              <path d="M 133 88 A 30 30 0 0 0 133 112" fill="none" stroke={colors.accent} strokeWidth="2" />
            </svg>
          );
        }

        if (type === 'bisector') {
          // Angle xOy (Ox horizontal at 0, Oy at 80 deg), Oz bisector at 40 deg
          return (
            <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
              <line x1="80" y1="140" x2="220" y2="140" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="80" y1="140" x2="187" y2="48" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="80" y1="140" x2="105" y2="35" stroke={colors.primary} strokeWidth="2.5" />
              
              <circle cx="80" cy="140" r="5" fill={colors.warning} />
              <text x="80" y="158" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{vertex}</text>
              
              <text x="225" y="144" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label1}</text>
              <text x="193" y="44" fontSize="13" fontWeight="bold" fill={colors.accent} fontStyle="italic">{label2}</text>
              <text x="105" y="27" textAnchor="middle" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{label3}</text>

              {/* Equal arcs with double tick lines */}
              <path d="M 120 140 A 40 40 0 0 0 110.6 114.3" fill="none" stroke={colors.accent} strokeWidth="2" />
              <path d="M 110.6 114.3 A 40 40 0 0 0 84.3 100.6" fill="none" stroke={colors.accent} strokeWidth="2" />

              {/* Equality tick 1 */}
              <line x1="112" y1="124" x2="118" y2="128" stroke={colors.warning} strokeWidth="1.5" />
              {/* Equality tick 2 */}
              <line x1="94" y1="104" x2="100" y2="108" stroke={colors.warning} strokeWidth="1.5" />
            </svg>
          );
        }

        return null;
      }

      case 'g7-parallel-transversal': {
        const lineA = (data.lineA as string) || 'a';
        const lineB = (data.lineB as string) || 'b';
        const transversal = (data.transversal as string) || 'c';
        
        // Parallel lines at y=60 and y=120
        // Transversal from (100, 20) to (220, 160)
        // Intersect A: y=60. x = 100 + (60-20)*(220-100)/(160-20) = 100 + 40 * 120 / 140 = 134.3
        // Intersect B: y=120. x = 100 + (120-20)*120/140 = 185.7
        const ax = 134.3;
        const ay = 60;
        const bx = 185.7;
        const by = 120;

        const highlighted = (data.highlighted as string[]) || []; // e.g. ['A1', 'B3']
        
        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            {/* Line a */}
            <line x1="30" y1={ay} x2="290" y2={ay} stroke={colors.primary} strokeWidth="2.5" />
            <text x="295" y={ay + 4} fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{lineA}</text>

            {/* Line b */}
            <line x1="30" y1={by} x2="290" y2={by} stroke={colors.primary} strokeWidth="2.5" />
            <text x="295" y={by + 4} fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{lineB}</text>

            {/* Transversal c */}
            <line x1="90" y1="10" x2="230" y2="170" stroke={colors.neutral} strokeWidth="2.5" />
            <text x="235" y="174" fontSize="13" fontWeight="bold" fill={colors.neutral} fontStyle="italic">{transversal}</text>

            {/* Intersection vertices */}
            <circle cx={ax} cy={ay} r="4.5" fill={colors.warning} />
            <text x={ax - 14} y={ay - 8} fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>

            <circle cx={bx} cy={by} r="4.5" fill={colors.warning} />
            <text x={bx - 14} y={by - 8} fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>

            {/* Label quadrants A1, A2, A3, A4 & B1, B2, B3, B4 */}
            {/* A1 (top-right), A2 (top-left), A3 (bottom-left), A4 (bottom-right) */}
            {/* Let's draw angle labels at appropriate distances */}
            <text x={ax + 14} y={ay - 10} fontSize="11" fill={highlighted.includes('A1') ? colors.accent : colors.neutral} fontWeight="bold">1</text>
            <text x={ax - 18} y={ay - 10} fontSize="11" fill={highlighted.includes('A2') ? colors.accent : colors.neutral} fontWeight="bold">2</text>
            <text x={ax - 14} y={ay + 18} fontSize="11" fill={highlighted.includes('A3') ? colors.accent : colors.neutral} fontWeight="bold">3</text>
            <text x={ax + 14} y={ay + 18} fontSize="11" fill={highlighted.includes('A4') ? colors.accent : colors.neutral} fontWeight="bold">4</text>

            <text x={bx + 14} y={by - 10} fontSize="11" fill={highlighted.includes('B1') ? colors.accent : colors.neutral} fontWeight="bold">1</text>
            <text x={bx - 18} y={by - 10} fontSize="11" fill={highlighted.includes('B2') ? colors.accent : colors.neutral} fontWeight="bold">2</text>
            <text x={bx - 14} y={by + 18} fontSize="11" fill={highlighted.includes('B3') ? colors.accent : colors.neutral} fontWeight="bold">3</text>
            <text x={bx + 14} y={by + 18} fontSize="11" fill={highlighted.includes('B4') ? colors.accent : colors.neutral} fontWeight="bold">4</text>

            {/* Draw arcs for highlighted angles */}
            {highlighted.includes('A1') && (
              <path d="M 154.3 60 A 20 20 0 0 0 148 44" fill="none" stroke={colors.accent} strokeWidth="2" />
            )}
            {highlighted.includes('A3') && (
              <path d="M 114.3 60 A 20 20 0 0 0 120.6 76" fill="none" stroke={colors.accent} strokeWidth="2" />
            )}
            {highlighted.includes('B1') && (
              <path d="M 205.7 120 A 20 20 0 0 0 199.4 104" fill="none" stroke={colors.accent} strokeWidth="2" />
            )}
            {highlighted.includes('B3') && (
              <path d="M 165.7 120 A 20 20 0 0 0 172 136" fill="none" stroke={colors.accent} strokeWidth="2" />
            )}
            {highlighted.includes('A4') && (
              <path d="M 148 76 A 20 20 0 0 0 154.3 60" fill="none" stroke={colors.accent} strokeWidth="2" />
            )}
            {highlighted.includes('B2') && (
              <path d="M 172 104 A 20 20 0 0 0 165.7 120" fill="none" stroke={colors.accent} strokeWidth="2" />
            )}
          </svg>
        );
      }

      case 'g7-euclid-axiom': {
        const lineA = (data.lineA as string) || 'a';
        const lineB = (data.lineB as string) || 'b';
        const pointLabel = (data.point as string) || 'M';
        
        return (
          <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
            {/* Line a */}
            <line x1="40" y1="110" x2="280" y2="110" stroke={colors.primary} strokeWidth="2.5" />
            <text x="285" y="114" fontSize="13" fontWeight="bold" fill={colors.primary} fontStyle="italic">{lineA}</text>

            {/* Line b through M */}
            <line x1="40" y1="50" x2="280" y2="50" stroke={colors.accent} strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="285" y="54" fontSize="13" fontWeight="bold" fill={colors.accent} fontStyle="italic">{lineB}</text>

            {/* Point M */}
            <circle cx="160" cy="50" r="5" fill={colors.warning} />
            <text x="160" y="38" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{pointLabel}</text>
          </svg>
        );
      }

      case 'g7-triangle-angles': {
        const labels = (data.labels as string[]) || ['A', 'B', 'C'];
        const showExterior = !!data.showExterior;
        const measures = data.measures || {}; // e.g. { A: 'A', B: 'B', C: 'C', ext: 'x' }

        // Coordinates: A(160, 40), B(70, 140), C(220, 140)
        // If exterior: ray Cx to (280, 140)
        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            {/* Draw triangle */}
            <polygon points="160,40 70,140 220,140" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            
            {showExterior && (
              <>
                <line x1="220" y1="140" x2="290" y2="140" stroke={colors.primary} strokeWidth="2.5" strokeDasharray="4 2" />
                <circle cx="290" cy="140" r="3" fill={colors.accent} />
                <text x="295" y="144" fontSize="12" fill={colors.accent} fontWeight="bold">x</text>
                
                {/* Exterior angle arc */}
                <path d="M 235 140 A 15 15 0 0 0 227 127" fill="none" stroke={colors.danger} strokeWidth="2" />
                {measures.ext && (
                  <text x="242" y="132" fontSize="11" fill={colors.danger} fontWeight="bold">{measures.ext}</text>
                )}
              </>
            )}

            {/* Labels */}
            <text x="160" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{labels[0]}</text>
            <text x="58" y="150" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f1f5f9">{labels[1]}</text>
            <text x="225" y="155" fontSize="14" fontWeight="bold" fill="#f1f5f9">{labels[2]}</text>

            {/* Angle measures */}
            {measures.A && <text x="160" y="62" textAnchor="middle" fontSize="11" fill={colors.warning}>{measures.A}</text>}
            {measures.B && <text x="90" y="132" fontSize="11" fill={colors.warning}>{measures.B}</text>}
            {measures.C && <text x="190" y="132" fontSize="11" fill={colors.warning}>{measures.C}</text>}
          </svg>
        );
      }

      case 'g7-triangle-congruence': {
        const type = (data.type as string) || 'sss'; // sss, sas, asa
        const label1 = (data.label1 as string[]) || ['A', 'B', 'C'];
        const label2 = (data.label2 as string[]) || ['A\'', 'B\'', 'C\''];

        // T1: (85, 40), (40, 140), (130, 140)
        // T2: (235, 40), (190, 140), (280, 140)
        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            {/* Triangle 1 */}
            <polygon points="85,40 40,140 130,140" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            <text x="85" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{label1[0]}</text>
            <text x="28" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{label1[1]}</text>
            <text x="142" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{label1[2]}</text>

            {/* Triangle 2 */}
            <polygon points="235,40 190,140 280,140" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            <text x="235" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{label2[0]}</text>
            <text x="178" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{label2[1]}</text>
            <text x="292" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{label2[2]}</text>

            {/* markings */}
            {type === 'sss' && (
              <>
                {/* 1 tick on AB / A'B' */}
                <line x1="60" y1="88" x2="68" y2="94" stroke={colors.accent} strokeWidth="2" />
                <line x1="210" y1="88" x2="218" y2="94" stroke={colors.accent} strokeWidth="2" />
                {/* 2 ticks on BC / B'C' */}
                <line x1="82" y1="135" x2="82" y2="145" stroke={colors.accent} strokeWidth="1.5" />
                <line x1="88" y1="135" x2="88" y2="145" stroke={colors.accent} strokeWidth="1.5" />
                <line x1="232" y1="135" x2="232" y2="145" stroke={colors.accent} strokeWidth="1.5" />
                <line x1="238" y1="135" x2="238" y2="145" stroke={colors.accent} strokeWidth="1.5" />
                {/* 3 ticks on AC / A'C' */}
                <g stroke={colors.accent} strokeWidth="1.5">
                  <line x1="104" y1="94" x2="112" y2="88" />
                  <line x1="107" y1="97" x2="115" y2="91" />
                  <line x1="110" y1="100" x2="118" y2="94" />
                  
                  <line x1="254" y1="94" x2="262" y2="88" />
                  <line x1="257" y1="97" x2="265" y2="91" />
                  <line x1="260" y1="100" x2="268" y2="94" />
                </g>
              </>
            )}

            {type === 'sas' && (
              <>
                {/* Ticks on AB / A'B' */}
                <line x1="60" y1="88" x2="68" y2="94" stroke={colors.accent} strokeWidth="2" />
                <line x1="210" y1="88" x2="218" y2="94" stroke={colors.accent} strokeWidth="2" />
                {/* Ticks on BC / B'C' */}
                <line x1="82" y1="135" x2="82" y2="145" stroke={colors.accent} strokeWidth="2" />
                <line x1="232" y1="135" x2="232" y2="145" stroke={colors.accent} strokeWidth="2" />
                {/* Angle B / B' arcs */}
                <path d="M 55 140 A 15 15 0 0 0 49 129" fill="none" stroke={colors.warning} strokeWidth="2" />
                <path d="M 205 140 A 15 15 0 0 0 199 129" fill="none" stroke={colors.warning} strokeWidth="2" />
              </>
            )}

            {type === 'asa' && (
              <>
                {/* Ticks on BC / B'C' */}
                <line x1="85" y1="135" x2="85" y2="145" stroke={colors.accent} strokeWidth="2" />
                <line x1="235" y1="135" x2="235" y2="145" stroke={colors.accent} strokeWidth="2" />
                {/* Angle B / B' arcs */}
                <path d="M 55 140 A 15 15 0 0 0 49 129" fill="none" stroke={colors.warning} strokeWidth="2" />
                <path d="M 205 140 A 15 15 0 0 0 199 129" fill="none" stroke={colors.warning} strokeWidth="2" />
                {/* Angle C / C' arcs */}
                <path d="M 115 140 A 15 15 0 0 1 121 129" fill="none" stroke={colors.warning} strokeWidth="2" />
                <path d="M 265 140 A 15 15 0 0 1 271 129" fill="none" stroke={colors.warning} strokeWidth="2" />
              </>
            )}
          </svg>
        );
      }

      case 'g7-right-triangle': {
        const symmetric = !!data.symmetric;
        const labels = (data.labels as string[]) || ['A', 'B', 'C', 'H'];

        if (symmetric) {
          // Symmetric right triangles: AH height. A(160, 40), H(160, 140), B(80, 140), C(240, 140)
          return (
            <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
              <polygon points="160,40 80,140 240,140" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" />
              <line x1="160" y1="40" x2="160" y2="140" stroke={colors.accent} strokeWidth="2" />
              
              {/* Right angle box at H */}
              <rect x="150" y="130" width="10" height="10" fill="none" stroke={colors.warning} strokeWidth="1.5" />
              <rect x="160" y="130" width="10" height="10" fill="none" stroke={colors.warning} strokeWidth="1.5" />

              {/* Labels */}
              <text x="160" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[0]}</text>
              <text x="68" y="148" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[1]}</text>
              <text x="252" y="148" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[2]}</text>
              <text x="160" y="156" textAnchor="middle" fontSize="13" fontWeight="bold" fill={colors.accent}>{labels[3]}</text>
            </svg>
          );
        }

        // Single right triangle: A(80, 40), B(80, 140), C(220, 140)
        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            <polygon points="80,40 80,140 220,140" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="80" y="130" width="10" height="10" fill="none" stroke={colors.warning} strokeWidth="1.5" />
            
            <text x="80" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[0]}</text>
            <text x="68" y="146" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[1]}</text>
            <text x="232" y="146" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[2]}</text>
          </svg>
        );
      }

      case 'g7-isosceles-bisector': {
        const type = (data.type as string) || 'isosceles';
        const labels = (data.labels as string[]) || ['A', 'B', 'C', 'd', 'M'];

        if (type === 'bisector') {
          // Segment AB from (60, 100) to (260, 100), M at (160,100). Line d from (160, 30) to (160, 170)
          return (
            <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
              <line x1="50" y1="100" x2="270" y2="100" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="160" y1="30" x2="160" y2="160" stroke={colors.accent} strokeWidth="2.5" strokeDasharray="4 2" />
              
              <circle cx="160" cy="100" r="4" fill={colors.warning} />
              <rect x="160" y="90" width="10" height="10" fill="none" stroke={colors.warning} strokeWidth="1.5" />

              {/* Ticks on AM / MB */}
              <line x1="105" y1="92" x2="105" y2="108" stroke={colors.accent} strokeWidth="2" />
              <line x1="215" y1="92" x2="215" y2="108" stroke={colors.accent} strokeWidth="2" />

              <text x="38" y="104" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[0]}</text>
              <text x="282" y="104" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[1]}</text>
              <text x="175" y="42" fontSize="13" fontWeight="bold" fill={colors.accent}>{labels[3]}</text>
              <text x="160" y="118" textAnchor="middle" fontSize="13" fontWeight="bold" fill={colors.warning}>{labels[4]}</text>
            </svg>
          );
        }

        // Isosceles triangle A(160, 40), B(80, 150), C(240, 150)
        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            <polygon points="160,40 80,150 240,150" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            
            {/* Equal ticks on AB / AC */}
            <line x1="116" y1="90" x2="124" y2="98" stroke={colors.accent} strokeWidth="2" />
            <line x1="196" y1="98" x2="204" y2="90" stroke={colors.accent} strokeWidth="2" />

            <text x="160" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[0]}</text>
            <text x="68" y="156" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[1]}</text>
            <text x="252" y="156" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labels[2]}</text>
          </svg>
        );
      }

      case 'g7-c9-angle-side': {
        const highlightAngle = (data.highlightAngle as string) || ''; // 'A', 'B', 'C'
        const highlightSide = (data.highlightSide as string) || ''; // 'BC', 'AC', 'AB'

        // Triangle A(160, 40), B(80, 140), C(240, 140)
        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            {/* Draw sides */}
            <line x1="160" y1="40" x2="80" y2="140" stroke={highlightSide === 'AB' ? colors.accent : colors.primary} strokeWidth={highlightSide === 'AB' ? 4 : 2} />
            <line x1="80" y1="140" x2="240" y2="140" stroke={highlightSide === 'BC' ? colors.accent : colors.primary} strokeWidth={highlightSide === 'BC' ? 4 : 2} />
            <line x1="240" y1="140" x2="160" y2="40" stroke={highlightSide === 'AC' ? colors.accent : colors.primary} strokeWidth={highlightSide === 'AC' ? 4 : 2} />

            {/* Draw angles */}
            {highlightAngle === 'A' && <path d="M 150 52 A 15 15 0 0 0 170 52" fill="none" stroke={colors.warning} strokeWidth="3" />}
            {highlightAngle === 'B' && <path d="M 95 140 A 15 15 0 0 0 89 129" fill="none" stroke={colors.warning} strokeWidth="3" />}
            {highlightAngle === 'C' && <path d="M 225 140 A 15 15 0 0 1 231 129" fill="none" stroke={colors.warning} strokeWidth="3" />}

            {/* Labels */}
            <text x="160" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>
            <text x="68" y="146" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>
            <text x="252" y="146" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>
          </svg>
        );
      }

      case 'g7-c9-perpendicular-oblique': {
        const highlight = (data.highlight as string) || ''; // 'perpendicular', 'oblique', 'projection'
        
        // A(160, 40), line d at y=130
        // H(160, 130) perpendicular
        // B(80, 130) oblique 1
        // C(245, 130) oblique 2
        return (
          <svg viewBox="0 0 320 170" className="w-full h-auto max-h-[170px] mx-auto">
            {/* Line d */}
            <line x1="30" y1="130" x2="290" y2="130" stroke={colors.neutral} strokeWidth="2" />
            <text x="295" y="134" fontSize="13" fill={colors.neutral} fontStyle="italic">d</text>

            {/* Perpendicular AH */}
            <line x1="160" y1="40" x2="160" y2="130" stroke={highlight === 'perpendicular' ? colors.danger : colors.primary} strokeWidth={highlight === 'perpendicular' ? 4 : 2} />
            <rect x="150" y="120" width="10" height="10" fill="none" stroke={colors.warning} strokeWidth="1" />

            {/* Oblique AB & AC */}
            <line x1="160" y1="40" x2="80" y2="130" stroke={highlight === 'oblique' ? colors.accent : colors.primary} strokeWidth={highlight === 'oblique' ? 3.5 : 2} />
            <line x1="160" y1="40" x2="245" y2="130" stroke={highlight === 'oblique' ? colors.accent : colors.primary} strokeWidth={highlight === 'oblique' ? 3.5 : 2} />

            {/* Projections HB & HC */}
            <line x1="160" y1="130" x2="80" y2="130" stroke={highlight === 'projection' ? colors.warning : 'transparent'} strokeWidth="4.5" />
            <line x1="160" y1="130" x2="245" y2="130" stroke={highlight === 'projection' ? colors.warning : 'transparent'} strokeWidth="4.5" />

            {/* Vertices */}
            <circle cx="160" cy="40" r="4.5" fill={colors.warning} />
            <text x="160" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>

            <circle cx="160" cy="130" r="4" fill={colors.accent} />
            <text x="160" y="148" textAnchor="middle" fontSize="13" fontWeight="bold" fill={colors.accent}>H</text>

            <circle cx="80" cy="130" r="4" fill={colors.warning} />
            <text x="68" y="134" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>

            <circle cx="245" cy="130" r="4" fill={colors.warning} />
            <text x="257" y="134" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>
          </svg>
        );
      }

      case 'g7-c9-triangle-concurrency': {
        const type = (data.type as string) || 'median'; // 'median', 'bisector', 'altitude', 'perpendicular-bisector'
        
        // Triangle A(160, 40), B(70, 150), C(250, 150)
        // Midpoint of BC is M(160, 150)
        // Midpoint of AC is N(205, 95)
        // Midpoint of AB is P(115, 95)
        // Intersection point: Centroid G(160, 113.3)
        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            <polygon points="160,40 70,150 250,150" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" />
            
            {type === 'median' && (
              <>
                <line x1="160" y1="40" x2="160" y2="150" stroke={colors.accent} strokeWidth="1.5" />
                <line x1="70" y1="150" x2="205" y2="95" stroke={colors.accent} strokeWidth="1.5" />
                <line x1="250" y1="150" x2="115" y2="95" stroke={colors.accent} strokeWidth="1.5" />
                <circle cx="160" cy="113.3" r="4" fill={colors.warning} />
                <text x="160" y="106" textAnchor="middle" fontSize="12" fontWeight="bold" fill={colors.warning}>G</text>
              </>
            )}

            {type === 'bisector' && (
              <>
                <line x1="160" y1="40" x2="160" y2="150" stroke={colors.accent} strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="70" y1="150" x2="185" y2="90" stroke={colors.accent} strokeWidth="1.5" />
                <circle cx="148" cy="108" r="4" fill={colors.warning} />
                <text x="148" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill={colors.warning}>I</text>
              </>
            )}

            {type === 'altitude' && (
              <>
                {/* Heights */}
                <line x1="160" y1="40" x2="160" y2="150" stroke={colors.danger} strokeWidth="1.5" />
                <line x1="70" y1="150" x2="208" y2="97" stroke={colors.danger} strokeWidth="1.5" />
                
                <rect x="150" y="140" width="10" height="10" fill="none" stroke={colors.warning} strokeWidth="1" />
                
                <circle cx="160" cy="120" r="4" fill={colors.warning} />
                <text x="160" y="112" textAnchor="middle" fontSize="12" fontWeight="bold" fill={colors.warning}>H</text>
              </>
            )}

            {type === 'perpendicular-bisector' && (
              <>
                <line x1="160" y1="60" x2="160" y2="165" stroke={colors.warning} strokeWidth="1.5" />
                <line x1="75" y1="65" x2="235" y2="145" stroke={colors.warning} strokeWidth="1.5" strokeDasharray="4 2" />
                
                <circle cx="160" cy="115" r="4" fill={colors.accent} />
                <text x="160" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill={colors.accent}>O</text>
              </>
            )}

            {/* Labels */}
            <text x="160" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">A</text>
            <text x="58" y="156" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>
            <text x="262" y="156" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>
          </svg>
        );
      }

      case 'g7-c10-prism-shapes': {
        const type = (data.type as string) || 'box'; // 'box', 'cube', 'tri-prism'
        const sideA = data.a !== undefined ? String(data.a) : '';
        const sideB = data.b !== undefined ? String(data.b) : '';
        const sideC = data.c !== undefined ? String(data.c) : '';

        if (type === 'tri-prism') {
          // 3D Triangular Prism
          // Top Base: A'(60,60), B'(140,60), C'(100,80)
          // Bottom Base: A(60,140), B(140,140), C(100,160)
          return (
            <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[200px] mx-auto">
              {/* Back vertical edge A'-A (dashed) */}
              <line x1="60" y1="60" x2="60" y2="140" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Back top-base edge A'-B' (dashed) */}
              <line x1="60" y1="60" x2="140" y2="60" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Other top base edges */}
              <line x1="60" y1="60" x2="100" y2="80" stroke={colors.primary} strokeWidth="2" />
              <line x1="100" y1="80" x2="140" y2="60" stroke={colors.primary} strokeWidth="2" />

              {/* Bottom base edges */}
              <line x1="60" y1="140" x2="140" y2="140" stroke={colors.primary} strokeWidth="2" />
              <line x1="60" y1="140" x2="100" y2="160" stroke={colors.primary} strokeWidth="2" />
              <line x1="100" y1="160" x2="140" y2="140" stroke={colors.primary} strokeWidth="2" />

              {/* Vertical edges */}
              <line x1="100" y1="80" x2="100" y2="160" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="140" y1="60" x2="140" y2="140" stroke={colors.primary} strokeWidth="2.5" />

              {/* Dimension labels */}
              {sideA && <text x="100" y="152" textAnchor="middle" fontSize="11" fill={colors.accent} fontWeight="bold">{sideA}</text>}
              {sideC && <text x="152" y="100" fontSize="11" fill={colors.warning} fontWeight="bold">{sideC}</text>}
            </svg>
          );
        }

        // Rectangular Prism (box) or Cube
        // Front face: (60, 80) to (160, 150)
        // Back face: offset by +40, -30 -> (100, 50) to (200, 120)
        return (
          <svg viewBox="0 0 320 190" className="w-full h-auto max-h-[190px] mx-auto">
            {/* Hidden edges (dashed) */}
            <line x1="100" y1="50" x2="100" y2="120" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="60" y1="150" x2="100" y2="120" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="100" y1="120" x2="200" y2="120" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Front Face */}
            <polygon points="60,80 160,80 160,150 60,150" fill={colors.fill} stroke={colors.primary} strokeWidth="2" />

            {/* Back Face (drawn partially) */}
            <line x1="100" y1="50" x2="200" y2="50" stroke={colors.primary} strokeWidth="2" />
            <line x1="200" y1="50" x2="200" y2="120" stroke={colors.primary} strokeWidth="2" />

            {/* Solid Joining Edges */}
            <line x1="60" y1="80" x2="100" y2="50" stroke={colors.primary} strokeWidth="2" />
            <line x1="160" y1="80" x2="200" y2="50" stroke={colors.primary} strokeWidth="2" />
            <line x1="160" y1="150" x2="200" y2="120" stroke={colors.primary} strokeWidth="2" />

            {/* Dimensions */}
            {sideA && <text x="110" y="162" textAnchor="middle" fontSize="11" fill={colors.accent} fontWeight="bold">{sideA}</text>}
            {sideB && <text x="185" y="142" fontSize="11" fill={colors.warning} fontWeight="bold">{sideB}</text>}
            {sideC && <text x="45" y="115" fontSize="11" fill={colors.danger} fontWeight="bold">{sideC}</text>}
          </svg>
        );
      }
      
      case 'g8-c4-thales': {
        const type = (data.type as string) || 'thales'; // 'thales', 'midsegment', 'bisector-ratio'
        const labelA = (data.labelA as string) || 'A';
        const labelB = (data.labelB as string) || 'B';
        const labelC = (data.labelC as string) || 'C';
        const labelM = (data.labelM as string) || 'M';
        const labelN = (data.labelN as string) || 'N';
        const labelD = (data.labelD as string) || 'D';

        // Triangle vertices: A(160, 30), B(70, 160), C(250, 160)
        // Parallel line MN at y = 100
        const ax = 160, ay = 30;
        const bx = 70, by = 160;
        const cx = 250, cy = 160;
        const mx = 112, my = 100;
        const nx = 208, ny = 100;
        const dx = 150, dy = 160; // For bisector D

        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            {/* Draw main triangle */}
            <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy}`} fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            
            {type === 'thales' && (
              <g>
                {/* Parallel line MN */}
                <line x1={mx} y1={my} x2={nx} y2={ny} stroke={colors.accent} strokeWidth="2.5" />
                <circle cx={mx} cy={my} r="4.5" fill={colors.warning} />
                <circle cx={nx} cy={ny} r="4.5" fill={colors.warning} />
                
                {/* Labels */}
                <text x={ax} y={ay - 8} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelA}</text>
                <text x={bx - 10} y={by + 4} textAnchor="end" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelB}</text>
                <text x={cx + 10} y={cy + 4} textAnchor="start" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelC}</text>
                <text x={mx - 12} y={my + 4} textAnchor="end" fontSize="13" fontWeight="bold" fill={colors.warning}>{labelM}</text>
                <text x={nx + 12} y={ny + 4} textAnchor="start" fontSize="13" fontWeight="bold" fill={colors.warning}>{labelN}</text>

                {/* Parallel indicators */}
                <text x="160" y="145" textAnchor="middle" fontSize="11" fill={colors.accent} fontStyle="italic">
                  {labelM}{labelN} // {labelB}{labelC}
                </text>
              </g>
            )}

            {type === 'midsegment' && (
              <g>
                {/* Midsegment MN */}
                <line x1={mx} y1={my} x2={nx} y2={ny} stroke={colors.accent} strokeWidth="2.5" />
                <circle cx={mx} cy={my} r="4" fill={colors.accent} />
                <circle cx={nx} cy={ny} r="4" fill={colors.accent} />
                
                {/* Midpoint ticks */}
                {/* Tick on AM (slope of AB is approx 1.44) */}
                <line x1="131.5" y1="60" x2="139.5" y2="70" stroke={colors.warning} strokeWidth="1.5" />
                {/* Tick on MB */}
                <line x1="86.5" y1="125" x2="94.5" y2="135" stroke={colors.warning} strokeWidth="1.5" />

                {/* Double Ticks on AN */}
                <line x1="179.5" y1="60" x2="187.5" y2="70" stroke={colors.warning} strokeWidth="1.5" />
                <line x1="183.5" y1="57" x2="191.5" y2="67" stroke={colors.warning} strokeWidth="1.5" />
                
                {/* Double Ticks on NC */}
                <line x1="224.5" y1="125" x2="232.5" y2="135" stroke={colors.warning} strokeWidth="1.5" />
                <line x1="228.5" y1="122" x2="236.5" y2="132" stroke={colors.warning} strokeWidth="1.5" />

                {/* Labels */}
                <text x={ax} y={ay - 8} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelA}</text>
                <text x={bx - 10} y={by + 4} textAnchor="end" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelB}</text>
                <text x={cx + 10} y={cy + 4} textAnchor="start" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelC}</text>
                <text x={mx - 12} y={my + 4} textAnchor="end" fontSize="13" fontWeight="bold" fill={colors.accent}>{labelM}</text>
                <text x={nx + 12} y={ny + 4} textAnchor="start" fontSize="13" fontWeight="bold" fill={colors.accent}>{labelN}</text>
              </g>
            )}

            {type === 'bisector-ratio' && (
              <g>
                {/* Bisector AD */}
                <line x1={ax} y1={ay} x2={dx} y2={dy} stroke={colors.danger} strokeWidth="2" />
                <circle cx={dx} cy={dy} r="4" fill={colors.danger} />

                {/* Angle bisector arcs at A */}
                <path d="M 152 45 A 15 15 0 0 1 160 45" fill="none" stroke={colors.warning} strokeWidth="1.5" />
                <path d="M 160 45 A 15 15 0 0 1 168 45" fill="none" stroke={colors.warning} strokeWidth="1.5" />

                {/* Labels */}
                <text x={ax} y={ay - 8} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelA}</text>
                <text x={bx - 10} y={by + 4} textAnchor="end" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelB}</text>
                <text x={cx + 10} y={cy + 4} textAnchor="start" fontSize="13" fontWeight="bold" fill="#f1f5f9">{labelC}</text>
                <text x={dx} y={dy + 14} textAnchor="middle" fontSize="13" fontWeight="bold" fill={colors.danger}>{labelD}</text>
              </g>
            )}
          </svg>
        );
      }

      case 'g8-c9-similarity': {
        const k = Number(data.k) || 0.7; // similarity scale factor
        const labelA = (data.labelA as string) || 'A';
        const labelB = (data.labelB as string) || 'B';
        const labelC = (data.labelC as string) || 'C';
        const labelA1 = (data.labelA1 as string) || "A'";
        const labelB1 = (data.labelB1 as string) || "B'";
        const labelC1 = (data.labelC1 as string) || "C'";

        // Triangle 1: (80, 40), (40, 140), (140, 140)
        // Triangle 2: offset x by 130, scaled down from (80, 40)
        // Triangle 2 vertices: A1(240, 50), B1(210, 120), C1(280, 120)
        return (
          <svg viewBox="0 0 320 170" className="w-full h-auto max-h-[170px] mx-auto">
            {/* Triangle 1 */}
            <polygon points="80,40 40,140 140,140" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            <text x="80" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">{labelA}</text>
            <text x="28" y="146" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">{labelB}</text>
            <text x="152" y="146" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">{labelC}</text>

            {/* Triangle 2 */}
            <polygon points="240,50 212,120 282,120" fill={colors.fill} stroke={colors.accent} strokeWidth="2" strokeLinejoin="round" />
            <text x="240" y="42" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#f1f5f9">{labelA1}</text>
            <text x="202" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#f1f5f9">{labelB1}</text>
            <text x="292" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#f1f5f9">{labelC1}</text>

            {/* Scale indicator */}
            <text x="160" y="156" textAnchor="middle" fontSize="11" fill={colors.neutral} fontStyle="italic">
              tỉ số đồng dạng k = {k}
            </text>
          </svg>
        );
      }

      case 'g8-c9-pythagore': {
        const sideA = (data.a as string) || ''; // base
        const sideB = (data.b as string) || ''; // height
        const sideC = (data.c as string) || ''; // hypotenuse
        // Right triangle A(80, 130), B(80, 40), C(220, 130)
        return (
          <svg viewBox="0 0 320 170" className="w-full h-auto max-h-[170px] mx-auto">
            <polygon points="80,40 80,130 220,130" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            
            {/* Right angle marker */}
            <rect x="80" y="120" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1.5" />
            
            {/* Labels */}
            <text x="70" y="38" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>
            <text x="68" y="144" fontSize="13" fontWeight="bold" fill={colors.accent}>A</text>
            <text x="230" y="138" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>

            {/* Side values */}
            {sideB && <text x="60" y="85" textAnchor="middle" fontSize="11" fill={colors.warning} fontWeight="semibold">{sideB}</text>}
            {sideA && <text x="150" y="145" textAnchor="middle" fontSize="11" fill={colors.warning} fontWeight="semibold">{sideA}</text>}
            {sideC && <text x="158" y="80" textAnchor="middle" fontSize="11" fill={colors.danger} fontWeight="semibold">{sideC}</text>}
          </svg>
        );
      }

      case 'g8-c10-pyramids': {
        const type = (data.type as string) || 'tri-pyramid';
        const sideA = (data.a as string) || ''; // base side
        const height = (data.h as string) || ''; // height SH
        const slant = (data.d as string) || '';  // slant height d

        if (type === 'quad-pyramid') {
          // Square pyramid: Apex S(160, 30)
          // Base: B(80, 130), C(140, 150), D(240, 140), E(180, 120)
          // Center: H(160, 135)
          // Slant height endpoint: F(190, 145) (midpoint of CD)
          return (
            <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
              {/* Back base edges (dashed) */}
              <line x1="80" y1="130" x2="180" y2="120" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="180" y1="120" x2="240" y2="140" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="160" y1="135" x2="180" y2="120" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
              
              {/* Height SH (dashed) */}
              <line x1="160" y1="30" x2="160" y2="135" stroke={colors.danger} strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Slant height SF (dashed) */}
              <line x1="160" y1="30" x2="190" y2="145" stroke={colors.warning} strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Front base edges */}
              <line x1="80" y1="130" x2="140" y2="150" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="140" y1="150" x2="240" y2="140" stroke={colors.primary} strokeWidth="2.5" />

              {/* Side edges */}
              <line x1="160" y1="30" x2="80" y2="130" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="160" y1="30" x2="140" y2="150" stroke={colors.primary} strokeWidth="2.5" />
              <line x1="160" y1="30" x2="240" y2="140" stroke={colors.primary} strokeWidth="2.5" />

              {/* Labels */}
              <text x="160" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">S</text>
              <text x="68" y="132" textAnchor="end" fontSize="12" fontWeight="semibold" fill="#f1f5f9">A</text>
              <text x="135" y="162" textAnchor="middle" fontSize="12" fontWeight="semibold" fill="#f1f5f9">B</text>
              <text x="248" y="144" textAnchor="start" fontSize="12" fontWeight="semibold" fill="#f1f5f9">C</text>
              <text x="188" y="116" textAnchor="start" fontSize="12" fontWeight="semibold" fill="#f1f5f9">D</text>

              {sideA && <text x="190" y="160" fontSize="11" fill={colors.accent} fontWeight="bold">{sideA}</text>}
              {height && <text x="150" y="90" fontSize="11" fill={colors.danger} fontWeight="bold">{height}</text>}
              {slant && <text x="185" y="85" fontSize="11" fill={colors.warning} fontWeight="bold">{slant}</text>}
            </svg>
          );
        }

        // Triangular pyramid: Apex S(160, 30)
        // Base B(90, 140), C(160, 155), D(230, 135)
        // Center H(160, 143)
        return (
          <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[180px] mx-auto">
            {/* Back base edge BD (dashed) */}
            <line x1="90" y1="140" x2="230" y2="135" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Height SH (dashed) */}
            <line x1="160" y1="30" x2="160" y2="143" stroke={colors.danger} strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Front base edges */}
            <line x1="90" y1="140" x2="160" y2="155" stroke={colors.primary} strokeWidth="2.5" />
            <line x1="160" y1="155" x2="230" y2="135" stroke={colors.primary} strokeWidth="2.5" />

            {/* Side edges */}
            <line x1="160" y1="30" x2="90" y2="140" stroke={colors.primary} strokeWidth="2.5" />
            <line x1="160" y1="30" x2="160" y2="155" stroke={colors.primary} strokeWidth="2.5" />
            <line x1="160" y1="30" x2="230" y2="135" stroke={colors.primary} strokeWidth="2.5" />

            {/* Labels */}
            <text x="160" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f1f5f9">S</text>
            <text x="78" y="144" textAnchor="end" fontSize="12" fontWeight="semibold" fill="#f1f5f9">A</text>
            <text x="160" y="168" textAnchor="middle" fontSize="12" fontWeight="semibold" fill="#f1f5f9">B</text>
            <text x="240" y="138" textAnchor="start" fontSize="12" fontWeight="semibold" fill="#f1f5f9">C</text>

            {sideA && <text x="200" y="154" fontSize="11" fill={colors.accent} fontWeight="bold">{sideA}</text>}
            {height && <text x="150" y="90" fontSize="11" fill={colors.danger} fontWeight="bold">{height}</text>}
          </svg>
        );
      }

      case 'g9-c4-trig': {
        const angleLabel = (data.angleLabel as string) || 'α';
        const oppLabel = (data.opp as string) || '';
        const adjLabel = (data.adj as string) || '';
        const hypLabel = (data.hyp as string) || '';
        
        // Right triangle A(80, 130), B(80, 40), C(220, 130)
        // angle alpha is at C (220, 130)
        return (
          <svg viewBox="0 0 320 170" className="w-full h-auto max-h-[170px] mx-auto">
            <polygon points="80,40 80,130 220,130" fill={colors.fill} stroke={colors.primary} strokeWidth="2.5" strokeLinejoin="round" />
            
            {/* Right angle marker at A */}
            <rect x="80" y="120" width="10" height="10" fill="none" stroke={colors.accent} strokeWidth="1.5" />
            
            {/* Angle marker at C */}
            <path d="M 200 130 A 20 20 0 0 0 206.5 116.5" fill="none" stroke={colors.warning} strokeWidth="1.5" />
            <text x="192" y="124" fontSize="12" fill={colors.warning} fontWeight="bold">{angleLabel}</text>

            {/* Vertices */}
            <text x="68" y="144" fontSize="13" fontWeight="bold" fill={colors.accent}>A</text>
            <text x="70" y="38" fontSize="13" fontWeight="bold" fill="#f1f5f9">B</text>
            <text x="230" y="138" fontSize="13" fontWeight="bold" fill="#f1f5f9">C</text>

            {/* Side labels */}
            {oppLabel && <text x="60" y="88" textAnchor="middle" fontSize="11" fill={colors.warning} fontWeight="semibold">{oppLabel}</text>}
            {adjLabel && <text x="150" y="146" textAnchor="middle" fontSize="11" fill={colors.warning} fontWeight="semibold">{adjLabel}</text>}
            {hypLabel && <text x="158" y="80" textAnchor="middle" fontSize="11" fill={colors.danger} fontWeight="semibold">{hypLabel}</text>}
          </svg>
        );
      }

      case 'g9-c5-circle': {
        const type = (data.type as string) || 'basic'; // 'basic', 'tangent', 'two-circles'
        
        if (type === 'two-circles') {
          const relation = (data.relation as string) || 'intersect'; // 'intersect', 'tangent-out', 'separate'
          
          if (relation === 'separate') {
            return (
              <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
                {/* Circle 1: (90, 80), r=45 */}
                <circle cx="90" cy="80" r="45" fill={colors.fill} stroke={colors.primary} strokeWidth="2" />
                <circle cx="90" cy="80" r="2.5" fill="#f1f5f9" />
                <text x="90" y="72" textAnchor="middle" fontSize="11" fill="#f1f5f9">O₁</text>
                
                {/* Circle 2: (220, 80), r=30 */}
                <circle cx="220" cy="80" r="30" fill={colors.fill} stroke={colors.accent} strokeWidth="2" />
                <circle cx="220" cy="80" r="2.5" fill="#f1f5f9" />
                <text x="220" y="72" textAnchor="middle" fontSize="11" fill="#f1f5f9">O₂</text>
                
                {/* Line O1O2 */}
                <line x1="90" y1="80" x2="220" y2="80" stroke={colors.neutral} strokeWidth="1" strokeDasharray="3 3" />
                <text x="155" y="94" textAnchor="middle" fontSize="11" fill={colors.warning}>d</text>
              </svg>
            );
          }
          
          if (relation === 'tangent-out') {
            return (
              <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
                {/* Circle 1: (110, 80), r=50 */}
                <circle cx="110" cy="80" r="50" fill={colors.fill} stroke={colors.primary} strokeWidth="2" />
                <circle cx="110" cy="80" r="2.5" fill="#f1f5f9" />
                <text x="110" y="72" textAnchor="middle" fontSize="11" fill="#f1f5f9">O₁</text>
                
                {/* Circle 2: (190, 80), r=30 */}
                <circle cx="190" cy="80" r="30" fill={colors.fill} stroke={colors.accent} strokeWidth="2" />
                <circle cx="190" cy="80" r="2.5" fill="#f1f5f9" />
                <text x="190" y="72" textAnchor="middle" fontSize="11" fill="#f1f5f9">O₂</text>
                
                {/* Tangent point A */}
                <circle cx="160" cy="80" r="3" fill={colors.danger} />
                <text x="160" y="94" textAnchor="middle" fontSize="11" fill={colors.danger} fontWeight="bold">A</text>
              </svg>
            );
          }

          // Intersecting circles (default)
          return (
            <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
              {/* Circle 1: (120, 80), r=45 */}
              <circle cx="120" cy="80" r="45" fill={colors.fill} stroke={colors.primary} strokeWidth="2" />
              <circle cx="120" cy="80" r="2.5" fill="#f1f5f9" />
              <text x="120" y="72" textAnchor="middle" fontSize="11" fill="#f1f5f9">O₁</text>
              
              {/* Circle 2: (180, 80), r=40 */}
              <circle cx="180" cy="80" r="40" fill={colors.fill} stroke={colors.accent} strokeWidth="2" />
              <circle cx="180" cy="80" r="2.5" fill="#f1f5f9" />
              <text x="180" y="72" textAnchor="middle" fontSize="11" fill="#f1f5f9">O₂</text>

              {/* Intersection points A, B */}
              {/* Intersection coordinates: x ≈ 151, y ≈ 80 +- 37 */}
              <circle cx="151" cy="46" r="3.5" fill={colors.danger} />
              <text x="151" y="38" textAnchor="middle" fontSize="11" fill="#f1f5f9" fontWeight="bold">A</text>
              <circle cx="151" cy="114" r="3.5" fill={colors.danger} />
              <text x="151" y="126" textAnchor="middle" fontSize="11" fill="#f1f5f9" fontWeight="bold">B</text>

              <line x1="151" y1="46" x2="151" y2="114" stroke={colors.warning} strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          );
        }

        if (type === 'tangent') {
          // Circle O(140, 80) r=50. Tangent line at A(190, 80) or P outside
          const mode = (data.mode as string) || 'single'; // 'single', 'pair'
          
          if (mode === 'pair') {
            // Tangent from external point M(260, 80) to circle O(130, 80) r=50
            // Tangent points: T1(160, 40), T2(160, 120)
            return (
              <svg viewBox="0 0 320 170" className="w-full h-auto max-h-[170px] mx-auto">
                <circle cx="130" cy="80" r="50" fill={colors.fill} stroke={colors.primary} strokeWidth="2.2" />
                <circle cx="130" cy="80" r="3" fill="#f1f5f9" />
                <text x="120" y="82" fontSize="12" fill="#f1f5f9">O</text>
                
                {/* Tangent lines from M */}
                <line x1="260" y1="80" x2="160" y2="40" stroke={colors.accent} strokeWidth="2" />
                <line x1="260" y1="80" x2="160" y2="120" stroke={colors.accent} strokeWidth="2" />
                
                {/* Radii to tangent points */}
                <line x1="130" y1="80" x2="160" y2="40" stroke={colors.neutral} strokeWidth="1" strokeDasharray="3 3" />
                <line x1="130" y1="80" x2="160" y2="120" stroke={colors.neutral} strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Point M */}
                <circle cx="260" cy="80" r="4" fill={colors.warning} />
                <text x="270" y="84" fontSize="12" fill={colors.warning} fontWeight="bold">M</text>

                {/* Points A, B */}
                <circle cx="160" cy="40" r="3.5" fill={colors.danger} />
                <text x="160" y="32" textAnchor="middle" fontSize="11" fill="#f1f5f9" fontWeight="bold">A</text>
                <circle cx="160" cy="120" r="3.5" fill={colors.danger} />
                <text x="160" y="132" textAnchor="middle" fontSize="11" fill="#f1f5f9" fontWeight="bold">B</text>
              </svg>
            );
          }

          // Single tangent at A(190, 80)
          return (
            <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
              <circle cx="130" cy="80" r="50" fill={colors.fill} stroke={colors.primary} strokeWidth="2.2" />
              <circle cx="130" cy="80" r="3" fill="#f1f5f9" />
              <text x="120" y="82" fontSize="12" fill="#f1f5f9">O</text>

              {/* Tangent line at (180, 80) */}
              <line x1="180" y1="20" x2="180" y2="140" stroke={colors.accent} strokeWidth="2.2" />
              
              {/* Radius OA */}
              <line x1="130" y1="80" x2="180" y2="80" stroke={colors.warning} strokeWidth="1.5" />
              
              {/* Point A */}
              <circle cx="180" cy="80" r="4" fill={colors.danger} />
              <text x="192" y="84" fontSize="12" fill={colors.danger} fontWeight="bold">A</text>
              
              {/* Right angle symbol */}
              <rect x="172" y="72" width="8" height="8" fill="none" stroke={colors.accent} strokeWidth="1" />
            </svg>
          );
        }

        // Basic Circle: O(160, 80), r=50
        const hasChord = (data.chord as boolean) || false;
        return (
          <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
            <circle cx="160" cy="80" r="50" fill={colors.fill} stroke={colors.primary} strokeWidth="2.2" />
            <circle cx="160" cy="80" r="3" fill="#f1f5f9" />
            <text x="156" y="70" fontSize="12" fill="#f1f5f9">O</text>

            {hasChord && (
              <g>
                {/* Chord AB: A(120, 110), B(200, 110) */}
                <line x1="120" y1="110" x2="200" y2="110" stroke={colors.accent} strokeWidth="2.5" />
                <circle cx="120" cy="110" r="3.5" fill={colors.danger} />
                <text x="110" y="114" fontSize="12" fill="#f1f5f9">A</text>
                <circle cx="200" cy="110" r="3.5" fill={colors.danger} />
                <text x="210" y="114" fontSize="12" fill="#f1f5f9">B</text>

                {/* Perpendicular OH from O(160, 80) to H(160, 110) */}
                <line x1="160" y1="80" x2="160" y2="110" stroke={colors.warning} strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="160" cy="110" r="3" fill={colors.warning} />
                <text x="160" y="124" textAnchor="middle" fontSize="11" fill={colors.warning} fontWeight="semibold">H</text>
              </g>
            )}

            {!hasChord && (
              <g>
                {/* Radius OA */}
                <line x1="160" y1="80" x2="205" y2="58" stroke={colors.accent} strokeWidth="2" />
                <circle cx="205" cy="58" r="3.5" fill={colors.danger} />
                <text x="214" y="56" fontSize="12" fill="#f1f5f9">A</text>
              </g>
            )}
          </svg>
        );
      }

      case 'g9-c9-circle-angles': {
        const type = (data.type as string) || 'inscribed-angle';
        
        if (type === 'circumcircle') {
          // Circumscribed circle of triangle ABC: Circle O(160, 85) r=55. Triangle vertices on circle.
          // A(160, 30), B(110, 110), C(210, 110)
          return (
            <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
              <circle cx="160" cy="85" r="55" fill="none" stroke={colors.accent} strokeWidth="1.5" strokeDasharray="3 3" />
              <polygon points="160,30 110,110 210,110" fill={colors.fill} stroke={colors.primary} strokeWidth="2.2" strokeLinejoin="round" />
              <circle cx="160" cy="85" r="3" fill="#f1f5f9" />
              <text x="156" y="81" fontSize="11" fill="#f1f5f9">O</text>
              
              <text x="160" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">A</text>
              <text x="100" y="114" fontSize="12" fontWeight="bold" fill="#f1f5f9">B</text>
              <text x="216" y="114" fontSize="12" fontWeight="bold" fill="#f1f5f9">C</text>
            </svg>
          );
        }

        if (type === 'incircle') {
          // Inscribed circle of triangle ABC: Incircle O(160, 95) r=30.
          // Triangle A(160, 30), B(100, 125), C(220, 125)
          return (
            <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
              <polygon points="160,30 100,125 220,125" fill={colors.fill} stroke={colors.primary} strokeWidth="2.2" strokeLinejoin="round" />
              <circle cx="160" cy="95" r="30" fill="none" stroke={colors.accent} strokeWidth="2" />
              <circle cx="160" cy="95" r="2.5" fill="#f1f5f9" />
              <text x="156" y="91" fontSize="11" fill="#f1f5f9">I</text>
              
              <text x="160" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f1f5f9">A</text>
              <text x="90" y="129" fontSize="12" fontWeight="bold" fill="#f1f5f9">B</text>
              <text x="226" y="129" fontSize="12" fontWeight="bold" fill="#f1f5f9">C</text>
            </svg>
          );
        }

        // Inscribed angle (default)
        // Circle O(160, 80) r=50.
        // A(120, 110), B(200, 110), C(160, 30) (on circle). Inscribed angle ACB
        return (
          <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
            <circle cx="160" cy="80" r="50" fill={colors.fill} stroke={colors.primary} strokeWidth="2" />
            <circle cx="160" cy="80" r="3" fill="#f1f5f9" />
            <text x="156" y="72" fontSize="11" fill="#f1f5f9">O</text>

            {/* Lines CA, CB */}
            <line x1="160" y1="30" x2="120" y2="110" stroke={colors.accent} strokeWidth="2" />
            <line x1="160" y1="30" x2="200" y2="110" stroke={colors.accent} strokeWidth="2" />
            
            {/* Central lines OA, OB (dashed) */}
            <line x1="160" y1="80" x2="120" y2="110" stroke={colors.neutral} strokeWidth="1" strokeDasharray="3 3" />
            <line x1="160" y1="80" x2="200" y2="110" stroke={colors.neutral} strokeWidth="1" strokeDasharray="3 3" />

            {/* Points */}
            <circle cx="120" cy="110" r="3.5" fill={colors.danger} />
            <text x="110" y="114" fontSize="12" fill="#f1f5f9">A</text>
            <circle cx="200" cy="110" r="3.5" fill={colors.danger} />
            <text x="210" y="114" fontSize="12" fill="#f1f5f9">B</text>
            <circle cx="160" cy="30" r="3.5" fill={colors.danger} />
            <text x="160" y="24" textAnchor="middle" fontSize="12" fill="#f1f5f9">C</text>
          </svg>
        );
      }

      case 'g9-c10-solids': {
        const type = (data.type as string) || 'cylinder';
        const radius = (data.r as string) || '';
        const height = (data.h as string) || '';
        const slant = (data.l as string) || '';

        if (type === 'cone') {
          // Cone representation: Apex S(160, 30)
          // Base ellipse: center H(160, 130), rx=50, ry=15
          // Left side: (110, 130), Right side: (210, 130)
          return (
            <svg viewBox="0 0 320 170" className="w-full h-auto max-h-[170px] mx-auto">
              {/* Ellipse base (back dashed, front solid) */}
              <path d="M 110 130 A 50 15 0 0 0 210 130" fill="none" stroke={colors.primary} strokeWidth="2.2" />
              <path d="M 110 130 A 50 15 0 0 1 210 130" fill="none" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
              
              {/* Slant heights */}
              <line x1="160" y1="30" x2="110" y2="130" stroke={colors.primary} strokeWidth="2.2" />
              <line x1="160" y1="30" x2="210" y2="130" stroke={colors.primary} strokeWidth="2.2" />

              {/* Height SH & Radius HB (dashed) */}
              <line x1="160" y1="30" x2="160" y2="130" stroke={colors.danger} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="160" y1="130" x2="210" y2="130" stroke={colors.accent} strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Center & Apex labels */}
              <circle cx="160" cy="130" r="2" fill="#f1f5f9" />
              <text x="160" y="24" textAnchor="middle" fontSize="12" fill="#f1f5f9">S</text>
              <text x="156" y="142" fontSize="11" fill="#f1f5f9">H</text>

              {/* Dimension labels */}
              {radius && <text x="185" y="125" fontSize="11" fill={colors.accent} fontWeight="bold">{radius}</text>}
              {height && <text x="152" y="80" fontSize="11" fill={colors.danger} fontWeight="bold">{height}</text>}
              {slant && <text x="125" y="80" fontSize="11" fill={colors.warning} fontWeight="bold">{slant}</text>}
            </svg>
          );
        }

        if (type === 'sphere') {
          // Sphere representation: Center O(160, 80) r=50
          // Equator ellipse: rx=50, ry=15
          return (
            <svg viewBox="0 0 320 160" className="w-full h-auto max-h-[160px] mx-auto">
              <circle cx="160" cy="80" r="50" fill={colors.fill} stroke={colors.primary} strokeWidth="2.2" />
              
              {/* Equator */}
              <path d="M 110 80 A 50 15 0 0 0 210 80" fill="none" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 110 80 A 50 15 0 0 1 210 80" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.6" />
              
              {/* Radius */}
              <line x1="160" y1="80" x2="210" y2="80" stroke={colors.accent} strokeWidth="1.8" />
              <circle cx="160" cy="80" r="3" fill="#f1f5f9" />
              <text x="156" y="74" fontSize="11" fill="#f1f5f9">O</text>

              {radius && <text x="185" y="74" fontSize="11" fill={colors.accent} fontWeight="bold">{radius}</text>}
            </svg>
          );
        }

        // Cylinder (default)
        // Top ellipse: center O1(160, 40), rx=40, ry=12
        // Bottom ellipse: center O2(160, 130), rx=40, ry=12
        // Left side: (120, 40) to (120, 130)
        // Right side: (200, 40) to (200, 130)
        return (
          <svg viewBox="0 0 320 170" className="w-full h-auto max-h-[170px] mx-auto">
            {/* Top ellipse */}
            <ellipse cx="160" cy="40" rx="40" ry="12" fill={colors.fill} stroke={colors.primary} strokeWidth="2.2" />
            
            {/* Bottom ellipse (back dashed, front solid) */}
            <path d="M 120 130 A 40 12 0 0 0 200 130" fill="none" stroke={colors.primary} strokeWidth="2.2" />
            <path d="M 120 130 A 40 12 0 0 1 200 130" fill="none" stroke={colors.neutral} strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Sides */}
            <line x1="120" y1="40" x2="120" y2="130" stroke={colors.primary} strokeWidth="2.2" />
            <line x1="200" y1="40" x2="200" y2="130" stroke={colors.primary} strokeWidth="2.2" />

            {/* Height O1O2 & Bottom Radius O2B (dashed) */}
            <line x1="160" y1="40" x2="160" y2="130" stroke={colors.danger} strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="160" y1="130" x2="200" y2="130" stroke={colors.accent} strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Centers */}
            <circle cx="160" cy="40" r="2" fill="#f1f5f9" />
            <circle cx="160" cy="130" r="2" fill="#f1f5f9" />
            <text x="156" y="32" fontSize="11" fill="#f1f5f9">O₁</text>
            <text x="156" y="142" fontSize="11" fill="#f1f5f9">O₂</text>

            {/* Labels */}
            {radius && <text x="180" y="125" fontSize="11" fill={colors.accent} fontWeight="bold">{radius}</text>}
            {height && <text x="152" y="85" fontSize="11" fill={colors.danger} fontWeight="bold">{height}</text>}
          </svg>
        );
      }

      default:
        return (
          <div className="flex items-center justify-center p-4 border border-dashed border-slate-800 rounded-xl text-xs text-slate-500 bg-slate-950/20">
            Chưa hỗ trợ vẽ tự động hình minh họa cho kiểu này ({diagram.variant})
          </div>
        );
    }
  };

  return (
    <div className={`p-4 rounded-2xl border border-slate-800/80 bg-slate-950/60 shadow-lg my-4 max-w-md mx-auto ${className}`}>
      {diagram.title && (
        <div className="text-xs font-bold text-slate-400 mb-2 pb-1.5 border-b border-slate-900 text-center uppercase tracking-wider">
          {diagram.title}
        </div>
      )}
      
      <div className="flex justify-center items-center py-2 bg-slate-900/10 rounded-xl">
        {renderContent()}
      </div>

      {diagram.notToScale && (
        <div className="text-[10px] text-slate-500 italic mt-2 text-center">
          * Hình minh họa có tính chất trực quan, không theo đúng tỉ lệ số đo thực tế.
        </div>
      )}
    </div>
  );
}
