import {ImageResponse} from 'next/og';

export const alt = 'Michel Many: software engineering for agencies and product teams';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

// Typographic social card; no external assets.
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '72px 80px',
                    background: '#f5f4f0',
                    color: '#14161a',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{display: 'flex', fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em'}}>
                    Michel Many
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.035em', maxWidth: 960}}>
                        Software engineering for agencies and product teams.
                    </div>
                    <div style={{display: 'flex', marginTop: 40, fontSize: 28, color: '#5f6570'}}>
                        michelmany.com
                    </div>
                </div>
                <div style={{display: 'flex', height: 8, width: 120, background: '#1d5b4f'}}/>
            </div>
        ),
        size
    );
}
