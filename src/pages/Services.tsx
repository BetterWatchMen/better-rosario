import { PageHead } from '../components/Chrome';
import { EMERGENCY_HOTLINES, LOCAL_HOSPITALS } from '../data/rosario-data';
import { useTitle } from '../lib/use-title';

export default function Services() {
  useTitle('Emergency Hotlines & Essential Services · Rosario, Batangas');

  return (
    <main className="page main">
      <PageHead
        eyebrow="Public Directory · Citizen Assistance"
        title="Emergency Hotlines & Essential Services"
      >
        <p>
          Verified contact directory for emergency rescue, disaster management, law enforcement, healthcare, and fire protection
          in the Municipality of Rosario, Batangas. Tap or click any telephone number to initiate an immediate call.
        </p>
      </PageHead>

      {/* Emergency Quick Action Strip */}
      <div style={{ background: '#fdf2f2', border: '1px solid #f8b4b4', padding: '16px 20px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <strong style={{ color: '#9b1c1c', fontSize: '15px' }}>🚨 Life-Threatening Emergency?</strong>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#771d1d' }}>
            National Emergency Hotline: <strong>911</strong> | Rosario MDRRMC OpCen: <strong>(043) 311-2935</strong> / <strong>0917-133-9605</strong>
          </p>
        </div>
        <a href="tel:09171339605" className="button" style={{ background: '#c81e1e', borderColor: '#c81e1e', color: '#fff' }}>
          Call MDRRMO Now
        </a>
      </div>

      {/* Primary Emergency Hotlines */}
      <div className="section">
        <h2 className="section-h">Municipal Emergency & Rescue Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {EMERGENCY_HOTLINES.map((h) => (
            <div key={h.service} style={{ border: '1px solid var(--rule)', padding: '20px', background: 'var(--paper)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="tag tag-office" style={{ marginBottom: '8px' }}>{h.department}</span>
                <h3 style={{ fontSize: '18px', margin: '8px 0 6px', fontFamily: 'var(--font-hero)' }}>{h.service}</h3>
                <p className="fine" style={{ margin: '0 0 16px', lineHeight: '1.5' }}>{h.description}</p>
              </div>

              <div style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {h.landline && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                    <span className="label">Landline:</span>
                    <strong style={{ fontFamily: 'var(--font-mono)' }}>{h.landline}</strong>
                  </div>
                )}
                {h.mobile.map((num) => {
                  const rawNum = num.replace(/[^0-9+]/g, '');
                  return (
                    <div key={num} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                      <span className="label">Mobile:</span>
                      <a
                        href={`tel:${rawNum}`}
                        style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}
                      >
                        {num} 📞
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hospitals and Medical Facilities */}
      <div className="section" style={{ borderTop: '1px solid var(--rule)', paddingTop: '32px' }}>
        <div className="list-head">
          <h2 className="section-h">Hospitals & Medical Facilities</h2>
          <span className="label">4 Primary Care & District Centers</span>
        </div>

        <div className="table" role="table">
          <div className="tr th" role="row" style={{ gridTemplateColumns: '260px 160px 1fr 180px' }}>
            <span role="columnheader">Hospital / Center</span>
            <span role="columnheader">Type</span>
            <span role="columnheader">Location</span>
            <span role="columnheader" className="r">Contact</span>
          </div>

          {LOCAL_HOSPITALS.map((h) => (
            <div key={h.name} className="tr" role="row" style={{ gridTemplateColumns: '260px 160px 1fr 180px' }}>
              <div role="cell">
                <strong style={{ fontSize: '15px' }}>{h.name}</strong>
              </div>
              <div role="cell">
                <span className={`tag ${h.type.includes('Public') ? 'tag-warn' : 'tag-place'}`}>
                  {h.type}
                </span>
              </div>
              <div role="cell" className="fine" style={{ margin: 0 }}>
                {h.address}
              </div>
              <div role="cell" className="r">
                {h.landline && (
                  <div style={{ fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
                    <a href={`tel:${h.landline.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--ink)' }}>
                      {h.landline}
                    </a>
                  </div>
                )}
                {h.mobile && (
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
                    <a href={`tel:${h.mobile.split('/')[0].replace(/[^0-9+]/g, '')}`}>
                      {h.mobile}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
