import { Link } from 'react-router-dom';
import { PageHead } from '../components/Chrome';
import { useTitle } from '../lib/use-title';

export default function Analysis() {
  useTitle('Budget Analysis & Data Audit · Rosario, Batangas');

  return (
    <main className="page main">
      <PageHead
        eyebrow="Civic Intelligence · Public Spending Audit"
        title="Budget Analysis & Insights"
      >
        <p>
          Data-driven investigations into national budget allocations for the Municipality of Rosario, Batangas.
          We analyze spending patterns, discretionary congressional insertions, geographic disparities among the 48 barangays,
          and historical election-cycle spikes.
        </p>
      </PageHead>

      {/* Top Level Audit Highlights */}
      <div className="stats">
        <div>
          <span className="label">Total FY2027 House Budget</span>
          <dd className="stat stat-accent">₱319.0M</dd>
          <dd className="stat-sub">Across 26 project lines</dd>
        </div>
        <div>
          <span className="label">House-Inserted Funds</span>
          <dd className="stat" style={{ color: 'var(--accent-warm)' }}>₱148.0M</dd>
          <dd className="stat-sub">9 projects added in Congress</dd>
        </div>
        <div>
          <span className="label">Multi-Purpose Buildings</span>
          <dd className="stat">56.1%</dd>
          <dd className="stat-sub">₱179.0M of total budget</dd>
        </div>
        <div>
          <span className="label">Barangays with ₱0 Funding</span>
          <dd className="stat" style={{ color: 'var(--negative)' }}>33 of 48</dd>
          <dd className="stat-sub">69% received zero projects</dd>
        </div>
      </div>

      {/* Insight 1: Multi-Purpose Buildings */}
      <div className="section">
        <div className="card card-highlight">
          <span className="label">Insight 01 · Sectoral Allocation</span>
          <h2 className="section-h" style={{ marginTop: '8px' }}>
            The Multi-Purpose Building Phenomenon (56% of Total Budget)
          </h2>
          <p className="lede" style={{ fontSize: '15px', color: 'var(--ink-2)' }}>
            Historically, civil society watchdogs flag "Multi-Purpose Buildings" (MPBs) and covered courts because they can serve
            as discretionary political patronage rather than essential public infrastructure (such as drainage, arterial bypasses, or health clinics).
          </p>

          <div style={{ margin: '24px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span className="strong">Multi-Purpose Buildings & Covered Courts</span>
              <span className="num strong">₱179.0M (56.1%)</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '56.1%', background: 'var(--accent)' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', marginBottom: '4px' }}>
              <span className="strong">Roads & Municipal Diversions</span>
              <span className="num strong">₱95.0M (29.8%)</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '29.8%', background: 'var(--positive)' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', marginBottom: '4px' }}>
              <span className="strong">Bridges & Crossing Infrastructure</span>
              <span className="num strong">₱45.0M (14.1%)</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '14.1%', background: 'var(--neutral)' }} />
            </div>
          </div>

          <p className="fine">
            Note: Farm-to-Market Roads (FMR) under the Department of Agriculture are categorized under national agricultural appropriations
            and are in addition to the DPWH figures above.
          </p>
        </div>
      </div>

      {/* Insight 2: Geographic Disparity */}
      <div className="section">
        <h2 className="section-h">Insight 02 · Geographic Disparity: The ₱80M San Roque Outlier</h2>
        <p className="lede" style={{ fontSize: '15px' }}>
          Distribution of public works funding across Rosario’s 48 barangays is heavily concentrated.
          A single barangay received more than a quarter of all municipal allocations, while 33 barangays received nothing.
        </p>

        <div className="two-col" style={{ marginTop: '20px' }}>
          <div className="card">
            <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Concentration of Funds</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <strong>Brgy. San Roque</strong>
                  <span className="num strong" style={{ color: 'var(--accent)' }}>₱80,000,000 (25.1%)</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '100%', background: 'var(--accent)' }} />
                </div>
                <span className="fine" style={{ margin: 0, fontSize: '11.5px' }}>
                  Includes ₱50M Multi-Purpose Facility (Purok 7) + ₱30M Multi-Purpose Building
                </span>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <strong>Brgy. Mabato</strong>
                  <span className="num strong">₱30,000,000 (9.4%)</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '37.5%', background: 'var(--ink-2)' }} />
                </div>
                <span className="fine" style={{ margin: 0, fontSize: '11.5px' }}>
                  Road with Bridge construction
                </span>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <strong>Brgys. Matamis, Balibago, Marilag, San Jose, San Carlos</strong>
                  <span className="num strong">₱10,000,000 each</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '12.5%', background: 'var(--ink-3)' }} />
                </div>
                <span className="fine" style={{ margin: 0, fontSize: '11.5px' }}>
                  Individual multi-purpose buildings and covered courts
                </span>
              </div>
            </div>
          </div>

          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>The 33 Zero-Allocation Barangays</h3>
              <p className="fine" style={{ fontSize: '13.5px', margin: '0 0 16px' }}>
                69% of all barangays in Rosario have no named infrastructure items in the FY2027 House budget.
                These include agricultural and coastal communities such as:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Alupay', 'Antipolo', 'Bayawang', 'Bulihan', 'Calantas', 'Colongan', 'Leviste', 'Lumbangan', 'Mabunga', 'Maligaya', 'Mavalor', 'Mayuro', 'Namuco', 'Nasi', 'Natu', 'Palakpak', 'Pinagsibaan', 'Salao', 'San Ignacio', 'Timbugan', 'Tiquiwan'].map((name) => (
                  <span key={name} className="tag tag-place">{name}</span>
                ))}
                <span className="tag tag-place">+ 12 more</span>
              </div>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--rule-soft)' }}>
              <Link to="/barangays" className="button button-quiet small" style={{ width: '100%' }}>
                Browse All 48 Barangays Directory →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Insight 3: The 9 House Insertions */}
      <div className="section">
        <h2 className="section-h">Insight 03 · The 9 Congressional Insertions (+₱148.0M Added in House)</h2>
        <p className="lede" style={{ fontSize: '15px' }}>
          When comparing the President's National Expenditure Program (NEP) with House Bill 10858, nine projects totaling
          ₱148 Million were inserted by lawmakers during committee and plenary readings.
        </p>

        <div className="table" role="table" style={{ marginTop: '16px' }}>
          <div className="tr th" role="row" style={{ gridTemplateColumns: '1fr 220px 140px' }}>
            <span role="columnheader">Project Description</span>
            <span role="columnheader">Barangay / Location</span>
            <span role="columnheader" className="r">House Allocation</span>
          </div>

          {[
            { title: 'Construction of Multi-Purpose Building, Purok 7', place: 'Barangay San Roque', amount: '₱50,000,000' },
            { title: 'Construction of Bridge along Rosario-Taysan Road', place: 'Rosario - Taysan border', amount: '₱45,000,000' },
            { title: 'Construction of Multi-Purpose Building', place: 'Barangay Baybayin', amount: '₱8,000,000' },
            { title: 'Construction (Completion) of Multi-Purpose Building, Purok 2', place: 'Barangay Quilib', amount: '₱5,000,000' },
            { title: 'Construction (Completion) of Multi-Purpose Building', place: 'Barangay Putingkahoy', amount: '₱5,000,000' },
            { title: 'Construction of Multi-Purpose Building, Masaya Elementary School', place: 'Barangay Masaya', amount: '₱5,000,000' },
            { title: 'Construction of Multi-Purpose Building', place: 'Barangay Quilib', amount: '₱5,000,000' },
            { title: 'Construction (Completion) of Multi-Purpose Building (Covered Court)', place: 'Barangay Sta. Cruz', amount: '₱5,000,000' },
            { title: 'Rehabilitation of Road at Barangay Macalamcam B', place: 'Barangay Macalamcam B', amount: '₱5,000,000' },
          ].map((item, idx) => (
            <div key={idx} className="tr" role="row" style={{ gridTemplateColumns: '1fr 220px 140px' }}>
              <div role="cell">
                <span className="tag tag-warn" style={{ marginRight: '8px', fontSize: '9.5px' }}>House Bill Only</span>
                <strong>{item.title}</strong>
              </div>
              <div role="cell" className="fine" style={{ margin: 0 }}>
                {item.place}
              </div>
              <div role="cell" className="r num strong" style={{ color: 'var(--accent)' }}>
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insight 4: Historical 2020-2026 GAA Election Cycle */}
      <div className="section">
        <div className="card">
          <span className="label">Insight 04 · Historical Enacted Budgets</span>
          <h2 className="section-h" style={{ marginTop: '8px' }}>
            The 2025 Midterm Election Surge (₱1.19 Billion)
          </h2>
          <p className="lede" style={{ fontSize: '15px', color: 'var(--ink-2)' }}>
            Examining the enacted General Appropriations Acts (GAA) from 2020 to 2026 reveals a dramatic pattern:
            funding averages ₱300M–₱500M in standard years, but skyrocketed to <strong>₱1.19 Billion in FY 2025</strong> ahead of the midterm elections.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', margin: '28px 0 12px' }}>
            {[
              { year: '2020', php: '₱271.5M', programs: 37, pct: 23 },
              { year: '2021', php: '₱398.3M', programs: 62, pct: 33 },
              { year: '2022', php: '₱387.0M', programs: 46, pct: 32, note: 'Election Year' },
              { year: '2023', php: '₱591.8M', programs: 36, pct: 50 },
              { year: '2024', php: '₱457.1M', programs: 34, pct: 38 },
              { year: '2025', php: '₱1.19B', programs: 46, pct: 100, highlight: true, note: 'Election Budget Surge' },
              { year: '2026', php: '₱366.2M', programs: 38, pct: 31 },
            ].map((y) => (
              <div
                key={y.year}
                style={{
                  border: y.highlight ? '2px solid var(--accent)' : '1px solid var(--rule)',
                  background: y.highlight ? 'var(--accent-soft)' : 'var(--paper-2)',
                  borderRadius: 'var(--radius)',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span className="strong" style={{ fontSize: '16px', fontFamily: 'var(--font-hero)' }}>{y.year}</span>
                  {y.note && <span className="tag tag-warn" style={{ display: 'block', margin: '4px 0', fontSize: '9px' }}>{y.note}</span>}
                  <div className="num strong" style={{ fontSize: '17px', color: y.highlight ? 'var(--accent-deep)' : 'var(--ink)', marginTop: '8px' }}>
                    {y.php}
                  </div>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <div className="progress-bar-bg" style={{ height: '6px' }}>
                    <div className="progress-bar-fill" style={{ width: `${y.pct}%`, background: y.highlight ? 'var(--accent)' : 'var(--ink-3)' }} />
                  </div>
                  <span className="fine" style={{ fontSize: '11px', margin: '4px 0 0', display: 'block' }}>
                    {y.programs} programs
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="fine" style={{ marginTop: '16px' }}>
            Data source: Official General Appropriations Acts (GAA) FY 2020–2026 via the BetterGov.ph Budget API.
            Appropriations represent legal spending authority passed by Congress and signed into law.
          </p>
        </div>
      </div>
    </main>
  );
}

