import { Link } from 'react-router-dom';
import { PageHead } from '../components/Chrome';
import { useTitle } from '../lib/use-title';

export default function Analysis() {
  useTitle('Critical Budget Audit & Investigative Analysis · Rosario, Batangas');

  return (
    <main className="page main">
      <PageHead
        eyebrow="Civic Intelligence · Investigative Budget Audit"
        title="Critical Budget Analysis: Where Does the Money Go?"
      >
        <p>
          Transparency is not just about publishing numbers — it is about asking critical questions.
          Here is an evidence-based audit of national infrastructure spending in the Municipality of Rosario, Batangas:
          the 2025 election-year budget explosion, per-capita inequities, the "never-ending completion" syndrome,
          and how road maintenance was traded for local covered courts.
        </p>
      </PageHead>

      {/* Top Level Audit Highlights */}
      <div className="stats">
        <div>
          <span className="label">2025 Midterm Surge</span>
          <dd className="stat" style={{ color: 'var(--accent-warm)' }}>₱1.13B</dd>
          <dd className="stat-sub">+168% explosion vs 2024</dd>
        </div>
        <div>
          <span className="label">2025 MPB Spending Surge</span>
          <dd className="stat stat-accent">+1,233%</dd>
          <dd className="stat-sub">₱728.2M spent on halls & courts</dd>
        </div>
        <div>
          <span className="label">Post-Election Crash (2026)</span>
          <dd className="stat" style={{ color: 'var(--negative)' }}>-68%</dd>
          <dd className="stat-sub">Plunged back to ₱366.2M</dd>
        </div>
        <div>
          <span className="label">Per-Capita Disparity</span>
          <dd className="stat">₱22.8k vs ₱0</dd>
          <dd className="stat-sub">San Roque vs 33 zero-funded brgys</dd>
        </div>
      </div>

      {/* Dossier 01: The 2025 Election Cycle Boom & Bust */}
      <div className="section">
        <div className="card card-highlight">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <span className="label">Dossier 01 · Election Economics</span>
            <span className="tag tag-warn">Critical Finding</span>
          </div>
          <h2 className="section-h" style={{ marginTop: '8px' }}>
            The 2025 Midterm Election Boom & The 2026 Post-Election Crash
          </h2>
          <p className="lede" style={{ fontSize: '15px', color: 'var(--ink-2)' }}>
            Why does public infrastructure funding in Rosario spike right before voters cast their ballots,
            only to evaporate the moment the election is over?
          </p>

          <p className="fine" style={{ fontSize: '14px', lineHeight: '1.7', margin: '14px 0' }}>
            Between 2020 and 2024, enacted national budget appropriations (GAA) for Rosario averaged roughly <strong>₱410 Million</strong> per year.
            In <strong>FY 2025</strong> (the midterm congressional and local election year), funding violently exploded to <strong>₱1,133,700,000 (₱1.13 Billion)</strong> — a staggering <strong>+168% increase</strong> in a single year.
            More alarmingly, appropriations for <em>Multi-Purpose Buildings (MPBs) and covered courts</em> surged from <strong>₱54.6M in 2024</strong> to an unprecedented <strong>₱728.2 Million in 2025 (+1,233% increase)</strong>.
            Immediately after election season passed, FY 2026 funding collapsed by <strong>-68% down to ₱366.2M</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', gap: '12px', margin: '24px 0 16px' }}>
            {[
              { year: '2020', total: '₱247.5M', mpb: '₱107.5M (43%)', pct: 22 },
              { year: '2021', total: '₱398.3M', mpb: '₱174.7M (44%)', pct: 35 },
              { year: '2022', total: '₱343.0M', mpb: '₱109.0M (32%)', pct: 30, tag: 'National/Local Polls' },
              { year: '2023', total: '₱562.5M', mpb: '₱352.5M (63%)', pct: 50 },
              { year: '2024', total: '₱422.1M', mpb: '₱54.6M (13%)', pct: 37 },
              { year: '2025', total: '₱1.13B', mpb: '₱728.2M (64%)', pct: 100, highlight: true, tag: '⚡ 2025 Election Surge' },
              { year: '2026', total: '₱366.2M', mpb: '₱222.5M (61%)', pct: 32, tag: '📉 -68% Post-Election Drop' },
            ].map((y) => (
              <div
                key={y.year}
                style={{
                  border: y.highlight ? '2px solid var(--accent-warm)' : '1px solid var(--rule)',
                  background: y.highlight ? '#fffaf5' : 'var(--paper-2)',
                  borderRadius: 'var(--radius)',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="strong" style={{ fontSize: '16px', fontFamily: 'var(--font-hero)' }}>{y.year}</span>
                    {y.highlight && <span style={{ fontSize: '11px', color: 'var(--accent-warm)', fontWeight: 700 }}>PEAK</span>}
                  </div>
                  {y.tag && <span className="tag" style={{ display: 'inline-block', margin: '4px 0', fontSize: '9px', background: y.highlight ? '#fef3c7' : undefined }}>{y.tag}</span>}
                  <div className="num strong" style={{ fontSize: '17px', color: y.highlight ? 'var(--accent-warm)' : 'var(--ink)', marginTop: '8px' }}>
                    {y.total}
                  </div>
                  <span className="fine" style={{ fontSize: '11px', margin: '2px 0 0', display: 'block', color: 'var(--ink-3)' }}>
                    MPBs: {y.mpb}
                  </span>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <div className="progress-bar-bg" style={{ height: '6px' }}>
                    <div className="progress-bar-fill" style={{ width: `${y.pct}%`, background: y.highlight ? 'var(--accent-warm)' : 'var(--ink-3)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--paper-2)', borderLeft: '3px solid var(--accent-warm)', padding: '12px 16px', borderRadius: '0 var(--radius) var(--radius) 0' }}>
            <strong style={{ fontSize: '13.5px', color: 'var(--ink)' }}>🤔 Critical Question for Citizens:</strong>
            <p className="fine" style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--ink-2)' }}>
              Are local public works in Rosario designed to address long-term community needs (flooding, healthcare, agricultural roads),
              or are appropriations deliberately hoarded and unleashed in election years to influence voters with ribbon-cutting ceremonies?
            </p>
          </div>
        </div>
      </div>

      {/* Dossier 02: Per-Capita Equity Divide */}
      <div className="section">
        <h2 className="section-h">Dossier 02 · The Geographic Divide: ₱22,857/Person vs. ₱0.00</h2>
        <p className="lede" style={{ fontSize: '15px' }}>
          Rosario has a population of 128,352 residents across 48 barangays.
          While the municipal average is <strong>₱2,485 per resident</strong>, funding is concentrated into political strongholds.
        </p>

        <div className="two-col" style={{ marginTop: '20px' }}>
          <div className="card">
            <span className="label">The Outlier Barangay</span>
            <h3 style={{ fontSize: '20px', margin: '6px 0 10px' }}>Barangay San Roque: ₱80,000,000</h3>
            <p className="fine" style={{ fontSize: '13.5px', margin: '0 0 16px', lineHeight: '1.6' }}>
              With an estimated population of approximately 3,500 residents, San Roque’s FY2027 allocations equal <strong>₱22,857 per resident</strong> —
              over <strong>9 times higher</strong> than the municipal average.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'var(--paper-2)', padding: '14px', borderRadius: 'var(--radius)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="small">Purok 7 Multi-Purpose Facility:</span>
                <span className="strong num" style={{ color: 'var(--accent)' }}>₱50,000,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="small">Barangay San Roque Multi-Purpose Building:</span>
                <span className="strong num">₱30,000,000</span>
              </div>
              <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span className="strong">Total for 1 Barangay:</span>
                <span className="strong num" style={{ color: 'var(--accent)', fontSize: '16px' }}>₱80,000,000</span>
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <strong style={{ fontSize: '13px', color: 'var(--ink)' }}>🤔 Critical Question:</strong>
              <p className="fine" style={{ margin: '4px 0 0', fontSize: '12.5px' }}>
                Why does a single barangay need <strong>₱80 Million</strong> for two multi-purpose buildings in one fiscal year,
                when essential barangay health centers and flood control across the town are underfunded?
              </p>
            </div>
          </div>

          <div className="card">
            <span className="label">The Zero-Funding Majority</span>
            <h3 style={{ fontSize: '20px', margin: '6px 0 10px' }}>33 Barangays (69%) Receive ₱0.00</h3>
            <p className="fine" style={{ fontSize: '13.5px', margin: '0 0 16px', lineHeight: '1.6' }}>
              Over <strong>75,000 citizens</strong> living in rural, farming, and coastal barangays receive zero named projects
              in the FY2027 national public works ledger.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {[
                'Alupay', 'Antipolo', 'Bayawang', 'Bulihan', 'Calantas', 'Colongan',
                'Leviste', 'Lumbangan', 'Mabunga', 'Maligaya', 'Mavalor', 'Mayuro',
                'Namuco', 'Nasi', 'Natu', 'Palakpak', 'Pinagsibaan', 'Salao',
                'San Ignacio', 'Timbugan', 'Tiquiwan'
              ].map((name) => (
                <span key={name} className="tag tag-place" style={{ fontSize: '11px' }}>{name}: ₱0</span>
              ))}
              <span className="tag tag-place" style={{ fontSize: '11px' }}>+ 12 more barangays</span>
            </div>

            <div style={{ background: 'var(--paper-2)', padding: '12px', borderRadius: 'var(--radius)' }}>
              <strong style={{ fontSize: '13px', color: 'var(--ink)' }}>🤔 Critical Question:</strong>
              <p className="fine" style={{ margin: '4px 0 0', fontSize: '12.5px' }}>
                Are taxpayers in the 33 zero-allocation barangays receiving fair returns on their national and local taxes?
                Or does political alignment dictate which barangays get projects?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dossier 03: The Never-Ending Completion Syndrome */}
      <div className="section">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <span className="label">Dossier 03 · Contract Red Flags</span>
            <span className="tag tag-warn">Audit Observation</span>
          </div>
          <h2 className="section-h" style={{ marginTop: '8px' }}>
            The "Never-Ending Completion" Syndrome: 70 Phased Contracts
          </h2>
          <p className="lede" style={{ fontSize: '15px' }}>
            In Philippine public works accountability, repetitive project titles tagged as <em>"Construction (Completion)"</em> or <em>"Phase 1, Phase 2"</em>
            are well-documented red flags for contract splitting and perpetual re-funding.
          </p>

          <p className="fine" style={{ fontSize: '14px', lineHeight: '1.7', margin: '14px 0' }}>
            In Rosario's historical GAA records from 2020 to 2026, <strong>70 out of 262 projects (26.7%)</strong> are explicitly titled
            <em>"Construction (Completion)"</em> or <em>"Rehabilitation"</em>. Instead of bidding out a single comprehensive contract with a clear deadline and guarantee,
            buildings are routinely funded in ₱3M–₱5M installments year after year.
          </p>

          <div className="table" role="table" style={{ marginTop: '16px' }}>
            <div className="tr th" role="row" style={{ gridTemplateColumns: '1fr 200px 140px' }}>
              <span role="columnheader">Sample "Completion" Program</span>
              <span role="columnheader">Barangay</span>
              <span role="columnheader" className="r">Tagged Pattern</span>
            </div>

            {[
              { title: 'Construction (Completion) of Multi-Purpose Building at Purok 2', brgy: 'Brgy. Quilib', pattern: 'FY2027 House Bill Insertion' },
              { title: 'Construction (Completion) of Multi-Purpose Building (Covered Court)', brgy: 'Brgy. Sta. Cruz', pattern: 'FY2027 House Bill Insertion' },
              { title: 'Construction (Completion) of Multi-Purpose Building', brgy: 'Brgy. Putingkahoy', pattern: 'FY2027 House Bill Insertion' },
              { title: 'Rehabilitation of Multi-Purpose Building (Covered Court)', brgy: 'Brgy. Baybayin', pattern: 'Historical GAA Contract' },
              { title: 'Construction (Completion) of Multi-Purpose Building (Covered Court)', brgy: 'Brgy. Mabato', pattern: 'Historical GAA Contract' },
              { title: 'Construction (Completion) of Multi-Purpose Building', brgy: 'Brgy. Bulihan', pattern: 'Historical GAA Contract' },
              { title: 'Construction (Completion) of Multi-Purpose Building', brgy: 'Brgy. Malaya & Marilag', pattern: 'Historical GAA Contract' },
              { title: 'Construction (Completion) of Public Water Supply System', brgy: 'Brgy. Calantas', pattern: 'Historical GAA Contract' },
            ].map((row, idx) => (
              <div key={idx} className="tr" role="row" style={{ gridTemplateColumns: '1fr 200px 140px' }}>
                <div role="cell">
                  <strong>{row.title}</strong>
                </div>
                <div role="cell" className="fine" style={{ margin: 0 }}>
                  {row.brgy}
                </div>
                <div role="cell" className="r">
                  <span className="tag tag-warn" style={{ fontSize: '10px' }}>{row.pattern}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', background: 'var(--paper-2)', padding: '14px 18px', borderRadius: 'var(--radius)' }}>
            <strong style={{ fontSize: '13.5px', color: 'var(--ink)' }}>🤔 Critical Questions for Citizens & Watchdogs:</strong>
            <ul style={{ margin: '8px 0 0', paddingLeft: '20px', fontSize: '13px', color: 'var(--ink-2)', lineHeight: '1.6' }}>
              <li>When a covered court or barangay hall receives ₱5M for "Construction" in Year 1, and another ₱5M for "(Completion)" in Year 2, where did the first ₱5M go?</li>
              <li>Was the original contractor penalized for failing to deliver a complete, usable structure within the initial contract duration?</li>
              <li>Who were the contractors awarded these repeated "phase" contracts? Did the same contractor win both phases?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dossier 04: The ₱71.6M/km Diversion Road Price Tag */}
      <div className="section">
        <h2 className="section-h">Dossier 04 · The ₱71.6 Million/Kilometer Bypass Price Tag</h2>
        <div className="card card-highlight">
          <p className="lede" style={{ fontSize: '15px', color: 'var(--ink-2)' }}>
            The <strong>Padre Garcia–Rosario Diversion Road</strong> has a combined appropriation of <strong>₱400,000,000 (₱400 Million)</strong> across two line items:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '20px 0' }}>
            <div style={{ border: '1px solid var(--rule)', padding: '16px', borderRadius: 'var(--radius)', background: 'var(--paper-2)' }}>
              <span className="tag tag-office">Segment 1 (Sta. 113+000 - Sta. 116+388)</span>
              <h4 style={{ fontSize: '18px', margin: '8px 0 4px', color: 'var(--ink)' }}>₱200,000,000</h4>
              <p className="fine" style={{ margin: 0 }}>Length: 3,389 meters (3.39 km). NEP and House Bill agreed amount.</p>
            </div>
            <div style={{ border: '1px solid var(--rule)', padding: '16px', borderRadius: 'var(--radius)', background: 'var(--paper-2)' }}>
              <span className="tag tag-warn">Segment 2 (Sta. 116+388 - Sta. 118+580)</span>
              <h4 style={{ fontSize: '18px', margin: '8px 0 4px', color: 'var(--accent-warm)' }}>₱200,000,000</h4>
              <p className="fine" style={{ margin: 0 }}>Length: 2,192 meters (2.19 km). <strong>Inserted in the House Bill (HB 10858)</strong>.</p>
            </div>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '16px', borderRadius: 'var(--radius)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className="label">Combined Project Cost:</span>
                <strong style={{ fontSize: '20px', display: 'block', color: 'var(--accent-deep)' }}>₱400,000,000 for 5.58 Kilometers</strong>
              </div>
              <div className="r">
                <span className="label">Average Unit Cost:</span>
                <strong style={{ fontSize: '20px', display: 'block', color: 'var(--accent)' }}>₱71,684,000 / km</strong>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <strong style={{ fontSize: '13.5px', color: 'var(--ink)' }}>🤔 Critical Questions for Citizens:</strong>
            <p className="fine" style={{ margin: '4px 0 0', fontSize: '13px' }}>
              According to civil engineering benchmarks in Region IV-A, standard four-lane concrete highway construction typically ranges from ₱25M to ₱45M per kilometer.
              Does right-of-way acquisition (ROW) justify an average price tag exceeding <strong>₱71.6 Million per kilometer</strong>, and who are the beneficiaries of land acquisition payments along the bypass route?
            </p>
          </div>
        </div>
      </div>

      {/* Dossier 05: The NEP-to-House Pork Swap */}
      <div className="section">
        <div className="card">
          <span className="label">Dossier 05 · The Budget Substitution</span>
          <h2 className="section-h" style={{ marginTop: '8px' }}>
            The "Pork Swap": How Road Maintenance Was Traded for Covered Courts
          </h2>
          <p className="lede" style={{ fontSize: '15px' }}>
            When the budget traveled from the President's desk (NEP) through the House of Representatives,
            routine preventive maintenance for major public thoroughfares was deprioritized in favor of discretionary multi-purpose buildings.
          </p>

          <div className="two-col" style={{ margin: '20px 0' }}>
            <div style={{ border: '1px solid #fecaca', background: '#fff5f5', padding: '18px', borderRadius: 'var(--radius)' }}>
              <span className="tag" style={{ background: '#fee2e2', color: '#991b1b', borderColor: '#fca5a5' }}>
                Dropped or Cut in the House Bill
              </span>
              <h4 style={{ fontSize: '16px', margin: '10px 0 8px', color: '#991b1b' }}>
                National Road Preventive Maintenance
              </h4>
              <p className="fine" style={{ color: '#7f1d1d', margin: 0, fontSize: '13px', lineHeight: '1.6' }}>
                The President's NEP originally proposed multiple critical road surface rehabilitations along the <strong>Rosario–San Juan National Road</strong> (including asphalt overlays and off-carriageway paving along K0127 to K0144).
                These routine maintenance programs were <strong>dropped or deferred</strong> in the House bill.
              </p>
            </div>

            <div style={{ border: '1px solid #fed7aa', background: '#fffaf5', padding: '18px', borderRadius: 'var(--radius)' }}>
              <span className="tag" style={{ background: '#ffedd5', color: '#9a3412', borderColor: '#fdba74' }}>
                Inserted in the House Bill (+₱148M)
              </span>
              <h4 style={{ fontSize: '16px', margin: '10px 0 8px', color: '#9a3412' }}>
                Multi-Purpose Buildings & Covered Courts
              </h4>
              <p className="fine" style={{ color: '#7c2d12', margin: 0, fontSize: '13px', lineHeight: '1.6' }}>
                In their place, lawmakers added <strong>₱148 Million</strong> in local insertions — dominated by individual covered courts and multi-purpose buildings
                in Brgy. San Roque (₱50M), Baybayin (₱8M), Quilib (₱10M), Putingkahoy (₱5M), Masaya (₱5M), and Sta. Cruz (₱5M).
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--paper-2)', padding: '14px 18px', borderRadius: 'var(--radius)' }}>
            <strong style={{ fontSize: '13.5px', color: 'var(--ink)' }}>🤔 Critical Question:</strong>
            <p className="fine" style={{ margin: '4px 0 0', fontSize: '13px' }}>
              Why do legislators repeatedly prioritize structures that bear the politician's name and likeness (covered courts and multi-purpose halls)
              over routine national road safety, asphalt overlay, and flood mitigation?
            </p>
          </div>
        </div>
      </div>

      {/* Citizen Call to Action */}
      <div className="section" style={{ borderTop: '2px solid var(--ink)', paddingTop: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h3 style={{ fontSize: '20px', margin: '0 0 6px' }}>Take Action: Scrutinize Your Barangay's Projects</h3>
            <p className="fine" style={{ margin: 0, fontSize: '14px' }}>
              Check every single line item, source PDF page number, and procurement status for Rosario.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/projects" className="button button-primary">
              View All 2027 Projects →
            </Link>
            <Link to="/barangays" className="button button-quiet">
              Browse 48 Barangays →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
