import { Link } from 'react-router-dom';
import { PageHead } from '../components/Chrome';
import { useTitle } from '../lib/use-title';

export default function Analysis() {
  useTitle('Budget Overview & Statistical Breakdown · Rosario, Batangas');

  return (
    <main className="page main">
      <PageHead
        eyebrow="Official Budget Data · Comparative Summary"
        title="Budget Overview & Statistical Breakdown"
      >
        <p>
          A statistical summary of national budget allocations for the Municipality of Rosario, Batangas,
          derived from official budget documents: the President's National Expenditure Program (NEP) FY 2027,
          House Bill 10858 (Third Reading), and the enacted General Appropriations Acts (GAA) from 2020 to 2026.
        </p>
      </PageHead>

      {/* Summary KPI Cards */}
      <div className="stats">
        <div>
          <span className="label">FY 2027 House Bill Total</span>
          <dd className="stat stat-accent">₱319.0M</dd>
          <dd className="stat-sub">Across 26 project lines</dd>
        </div>
        <div>
          <span className="label">House Bill Amendments</span>
          <dd className="stat">₱148.0M</dd>
          <dd className="stat-sub">9 lines not listed in NEP</dd>
        </div>
        <div>
          <span className="label">Multi-Purpose Facilities</span>
          <dd className="stat">56.1%</dd>
          <dd className="stat-sub">₱179.0M of DPWH total</dd>
        </div>
        <div>
          <span className="label">Barangays with Named Lines</span>
          <dd className="stat">15 of 48</dd>
          <dd className="stat-sub">33 have no direct line items</dd>
        </div>
      </div>

      {/* Section 1: Sectoral Breakdown */}
      <div className="section">
        <div className="card">
          <span className="label">Summary 01 · Sectoral Distribution</span>
          <h2 className="section-h" style={{ marginTop: '8px' }}>
            Infrastructure Breakdown by Category (FY 2027 House Bill)
          </h2>
          <p className="fine" style={{ fontSize: '14px', lineHeight: '1.6', margin: '10px 0 20px' }}>
            National public works allocations under DPWH for the municipality are distributed across three primary categories:
            multi-purpose community structures, road network projects, and bridges.
          </p>

          <div style={{ margin: '20px 0' }}>
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
              <span className="strong">Bridges & Crossings</span>
              <span className="num strong">₱45.0M (14.1%)</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '14.1%', background: 'var(--neutral)' }} />
            </div>
          </div>

          <p className="fine" style={{ marginTop: '16px' }}>
            Data source: House Bill 10858 (Third Reading), DPWH ledger. Farm-to-Market Road (FMR) projects funded under the Department of Agriculture are listed separately in the projects table.
          </p>
        </div>
      </div>

      {/* Section 2: Geographic Distribution */}
      <div className="section">
        <h2 className="section-h">Summary 02 · Geographic Distribution Across the 48 Barangays</h2>
        <p className="fine" style={{ fontSize: '14px', margin: '0 0 16px' }}>
          National budget line items typically specify the barangay or road section where public works are sited.
          In FY 2027, 15 barangays have direct named line items, while 33 barangays have no named infrastructure projects.
        </p>

        <div className="two-col">
          <div className="card">
            <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Barangays with Named Allocations</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <strong>Brgy. San Roque</strong>
                  <span className="num strong" style={{ color: 'var(--accent)' }}>₱80,000,000</span>
                </div>
                <span className="fine" style={{ margin: 0, fontSize: '12px' }}>
                  Purok 7 Multi-Purpose Facility (₱50M) + San Roque MPB (₱30M)
                </span>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <strong>Brgy. Mabato</strong>
                  <span className="num strong">₱30,000,000</span>
                </div>
                <span className="fine" style={{ margin: 0, fontSize: '12px' }}>
                  Road with Bridge construction
                </span>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <strong>Brgys. Matamis, Balibago, Marilag, San Jose, San Carlos</strong>
                  <span className="num strong">₱10,000,000 each</span>
                </div>
                <span className="fine" style={{ margin: 0, fontSize: '12px' }}>
                  Individual multi-purpose facilities and covered courts
                </span>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <strong>Brgys. Baybayin (₱8M), Namunga (₱6M), Tulos (₱6M)</strong>
                  <span className="num strong">₱20,000,000 combined</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <strong>Brgys. Quilib, Putingkahoy, Masaya, Sta. Cruz, Malaya, Cahigam</strong>
                  <span className="num strong">₱5,000,000 each</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Barangays with No Named Line Items</h3>
              <p className="fine" style={{ fontSize: '13px', margin: '0 0 14px', lineHeight: '1.6' }}>
                The following 33 barangays do not have specific project allocations named in the FY 2027 DPWH ledger:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  'Alupay', 'Antipolo', 'Bagong Pook', 'Bayawang', 'Bulihan', 'Calantas',
                  'Colongan', 'Leviste', 'Lumbangan', 'Maalas-as', 'Mabunga', 'Macalamcam A',
                  'Maligaya', 'Mavalor', 'Mayuro', 'Namuco', 'Nasi', 'Natu',
                  'Palakpak', 'Pinagsibaan', 'Poblacion A', 'Poblacion B', 'Poblacion C',
                  'Poblacion D', 'Poblacion E', 'Salao', 'San Ignacio', 'San Isidro',
                  'Timbugan', 'Tiquiwan'
                ].map((name) => (
                  <span key={name} className="tag tag-place">{name}</span>
                ))}
                <span className="tag tag-place">+ 3 more</span>
              </div>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--rule-soft)' }}>
              <Link to="/barangays" className="button button-quiet small" style={{ width: '100%' }}>
                View Full 48 Barangays Directory →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: House Bill Amendments */}
      <div className="section">
        <h2 className="section-h">Summary 03 · Amendments in House Bill 10858 (vs. Proposed NEP)</h2>
        <p className="fine" style={{ fontSize: '14px', margin: '0 0 16px' }}>
          A comparison between the National Expenditure Program (NEP) submitted by the President and House Bill 10858
          passed on Third Reading indicates 9 projects totaling ₱148.0 Million that appear in the House bill only:
        </p>

        <div className="table" role="table">
          <div className="tr th" role="row" style={{ gridTemplateColumns: '1fr 220px 140px' }}>
            <span role="columnheader">Project Description</span>
            <span role="columnheader">Location</span>
            <span role="columnheader" className="r">House Bill Amount</span>
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
                <span className="tag tag-office" style={{ marginRight: '8px', fontSize: '9.5px' }}>House Bill 10858</span>
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

      {/* Section 4: Historical 2020-2026 GAA */}
      <div className="section">
        <div className="card">
          <span className="label">Summary 04 · Historical Enacted Budgets</span>
          <h2 className="section-h" style={{ marginTop: '8px' }}>
            Historical Enacted Appropriations (FY 2020–2026 GAA)
          </h2>
          <p className="fine" style={{ fontSize: '14px', lineHeight: '1.6', margin: '8px 0 20px' }}>
            Enacted budget data from the General Appropriations Acts (GAA) records all DPWH projects specifically naming
            Rosario, Batangas from 2020 to 2026:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', margin: '20px 0' }}>
            {[
              { year: '2020', total: '₱247.5M', mpb: '₱107.5M (43%)', pct: 22 },
              { year: '2021', total: '₱398.3M', mpb: '₱174.7M (44%)', pct: 35 },
              { year: '2022', total: '₱343.0M', mpb: '₱109.0M (32%)', pct: 30 },
              { year: '2023', total: '₱562.5M', mpb: '₱352.5M (63%)', pct: 50 },
              { year: '2024', total: '₱422.1M', mpb: '₱54.6M (13%)', pct: 37 },
              { year: '2025', total: '₱1.13B', mpb: '₱728.2M (64%)', pct: 100, highlight: true },
              { year: '2026', total: '₱366.2M', mpb: '₱222.5M (61%)', pct: 32 },
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
                  <div className="num strong" style={{ fontSize: '17px', color: y.highlight ? 'var(--accent-deep)' : 'var(--ink)', marginTop: '6px' }}>
                    {y.total}
                  </div>
                  <span className="fine" style={{ fontSize: '11px', margin: '4px 0 0', display: 'block', color: 'var(--ink-3)' }}>
                    MPBs: {y.mpb}
                  </span>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <div className="progress-bar-bg" style={{ height: '6px' }}>
                    <div className="progress-bar-fill" style={{ width: `${y.pct}%`, background: y.highlight ? 'var(--accent)' : 'var(--ink-3)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="fine" style={{ marginTop: '14px' }}>
            Figures reflect enacted appropriations (authority to spend) as published in the official General Appropriations Acts (GAA) FY 2020–2026.
          </p>
        </div>
      </div>

      {/* Section 5: Phased Project Classification */}
      <div className="section">
        <div className="card">
          <span className="label">Summary 05 · Project Descriptions</span>
          <h2 className="section-h" style={{ marginTop: '8px' }}>
            Frequency of Phased Programs ('Completion' & 'Rehabilitation')
          </h2>
          <p className="fine" style={{ fontSize: '14px', lineHeight: '1.6', margin: '8px 0 16px' }}>
            In the historical GAA records from 2020 to 2026, <strong>70 out of 262 total DPWH projects (26.7%)</strong> carry titles
            specifying <em>"Construction (Completion)"</em> or <em>"Rehabilitation"</em>. These represent multi-year phased works for community facilities.
          </p>

          <div className="table" role="table">
            <div className="tr th" role="row" style={{ gridTemplateColumns: '1fr 200px 140px' }}>
              <span role="columnheader">Sample Phased Project</span>
              <span role="columnheader">Barangay</span>
              <span role="columnheader" className="r">Document Source</span>
            </div>

            {[
              { title: 'Construction (Completion) of Multi-Purpose Building at Purok 2', brgy: 'Brgy. Quilib', src: 'HB 10858 (2027)' },
              { title: 'Construction (Completion) of Multi-Purpose Building (Covered Court)', brgy: 'Brgy. Sta. Cruz', src: 'HB 10858 (2027)' },
              { title: 'Construction (Completion) of Multi-Purpose Building', brgy: 'Brgy. Putingkahoy', src: 'HB 10858 (2027)' },
              { title: 'Rehabilitation of Multi-Purpose Building (Covered Court)', brgy: 'Brgy. Baybayin', src: 'GAA 2025' },
              { title: 'Construction (Completion) of Multi-Purpose Building (Covered Court)', brgy: 'Brgy. Mabato', src: 'GAA 2025' },
              { title: 'Construction (Completion) of Multi-Purpose Building', brgy: 'Brgy. Bulihan', src: 'GAA 2024' },
            ].map((row, idx) => (
              <div key={idx} className="tr" role="row" style={{ gridTemplateColumns: '1fr 200px 140px' }}>
                <div role="cell">
                  <strong>{row.title}</strong>
                </div>
                <div role="cell" className="fine" style={{ margin: 0 }}>
                  {row.brgy}
                </div>
                <div role="cell" className="r">
                  <span className="tag" style={{ fontSize: '10px' }}>{row.src}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
