import { ImageResponse } from 'next/og';

export const alt = 'Alfred Tackie-Quaye — Design and data';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: '#14233a', color: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '74px', fontFamily: 'serif' }}>
      <div style={{ display: 'flex', color: '#d8ff5d', fontFamily: 'sans-serif', fontSize: 22, letterSpacing: 4, textTransform: 'uppercase' }}>Independent creative + analyst</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ fontSize: 90, lineHeight: 1, letterSpacing: -4 }}>Ideas with</div><div style={{ display: 'flex', color: '#78a4ff', fontSize: 92, fontStyle: 'italic', lineHeight: 1 }}>direction.</div></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #5e7192', paddingTop: 24, fontFamily: 'sans-serif', fontSize: 22 }}><span>alfred.tq</span><span>Design · Experience · Insight</span></div>
    </div>,
  );
}
