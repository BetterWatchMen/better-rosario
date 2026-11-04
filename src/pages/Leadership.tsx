import { PageHead } from '../components/Chrome';
import { MUNICIPAL_LEADERSHIP } from '../data/rosario-data';
import { useTitle } from '../lib/use-title';

export default function Leadership() {
  useTitle('Local Leadership & Municipal Accountability · Rosario, Batangas');

  return (
    <main className="page main">
      <PageHead
        eyebrow="Local Governance · Citizen Oversight"
        title="Municipal Leadership & Accountability"
      >
        <p>
          Transparency requires knowing who holds the mandate to propose, approve, and execute public funds.
          Here is the official roster of executive and legislative leadership for the Municipality of Rosario, Batangas,
          along with legal mechanisms citizens can use to scrutinize local spending.
        </p>
      </PageHead>

      {/* Executive Leadership */}
      <div className="section">
        <h2 className="section-h">Executive Branch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {MUNICIPAL_LEADERSHIP.executive.map((m) => (
            <div key={m.name} style={{ border: '1px solid var(--rule)', padding: '24px', background: 'var(--paper)' }}>
              <span className="tag tag-office" style={{ marginBottom: '8px' }}>Executive Office</span>
              <h3 style={{ fontSize: '22px', margin: '8px 0 4px', fontFamily: 'var(--font-hero)' }}>{m.name}</h3>
              <p className="strong" style={{ color: 'var(--ink-2)', marginBottom: '12px' }}>{m.position}</p>
              <p className="fine" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>{m.focus}</p>
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--rule-soft)' }}>
                <span className="label">Key Statutory Powers:</span>
                <p className="fine" style={{ margin: '4px 0 0' }}>
                  Chairs the Local Development Council (LDC), submits the Executive Budget, executes municipal ordinances, and oversees municipal procurement and infrastructure implementation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legislative Leadership */}
      <div className="section">
        <div className="list-head">
          <h2 className="section-h">Sangguniang Bayan (Municipal Council)</h2>
          <span className="label">Presiding Officer & 8 Regular Councilors</span>
        </div>

        {/* Vice Mayor Card */}
        <div style={{ border: '1px solid var(--rule)', padding: '24px', background: 'var(--paper)', marginBottom: '20px' }}>
          <span className="tag tag-warn" style={{ marginBottom: '8px' }}>Legislative Head</span>
          <h3 style={{ fontSize: '20px', margin: '8px 0 4px', fontFamily: 'var(--font-hero)' }}>
            {MUNICIPAL_LEADERSHIP.legislativeLeader.name}
          </h3>
          <p className="strong" style={{ color: 'var(--ink-2)', marginBottom: '8px' }}>
            {MUNICIPAL_LEADERSHIP.legislativeLeader.position}
          </p>
          <p className="fine" style={{ fontSize: '13.5px', margin: 0, lineHeight: '1.6' }}>
            {MUNICIPAL_LEADERSHIP.legislativeLeader.focus} Holds the deciding vote in ties and signs all warrants drawn on the municipal treasury for council appropriations.
          </p>
        </div>

        {/* Councilors Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          {MUNICIPAL_LEADERSHIP.councilors.map((c, i) => (
            <div key={c.name} style={{ border: '1px solid var(--rule-soft)', padding: '16px', background: 'var(--paper)' }}>
              <span className="tag" style={{ marginBottom: '6px' }}>Councilor #{i + 1}</span>
              <h4 style={{ fontSize: '16px', margin: '6px 0 2px', fontFamily: 'var(--font-hero)' }}>{c.name}</h4>
              <p className="small muted" style={{ margin: '0 0 8px' }}>{c.position}</p>
              <p className="fine" style={{ margin: 0 }}>
                Participates in enacting annual budgets, reviewing local taxes, and approving municipal contracts.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Citizen Oversight Toolkit */}
      <div className="section" style={{ borderTop: '2px solid var(--ink)', paddingTop: '32px' }}>
        <h2 className="section-h">Citizen Accountability Toolkit</h2>
        <p className="lede" style={{ marginBottom: '24px' }}>
          Under Philippine law, citizens have the constitutional and statutory right to access official local government records:
        </p>

        <div className="two-col">
          <div style={{ border: '1px solid var(--rule)', padding: '20px', background: 'var(--paper)' }}>
            <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-hero)', margin: '0 0 8px' }}>
              1. DILG Full Disclosure Portal (FDP)
            </h3>
            <p className="fine" style={{ margin: '0 0 14px' }}>
              DILG MC 2019-149 mandates the municipal government of Rosario to publish its <strong>20% Development Fund</strong> utilization,
              Annual Budget, Statement of Debt Service, and Quarterly Statements of Receipts and Expenditures.
            </p>
            <a
              href="https://fdpp.dilg.gov.ph/"
              target="_blank"
              rel="noopener"
              className="button button-quiet small"
            >
              Access DILG Full Disclosure Portal ↗
            </a>
          </div>

          <div style={{ border: '1px solid var(--rule)', padding: '20px', background: 'var(--paper)' }}>
            <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-hero)', margin: '0 0 8px' }}>
              2. Commission on Audit (COA) Reports
            </h3>
            <p className="fine" style={{ margin: '0 0 14px' }}>
              COA releases annual audit reports for the Municipality of Rosario. These reveal audit suspensions, disallowances,
              unliquidated cash advances, and delayed infrastructure projects.
            </p>
            <a
              href="https://www.coa.gov.ph/reports/annual-audit-reports/aar-local-government-units/"
              target="_blank"
              rel="noopener"
              className="button button-quiet small"
            >
              Browse COA Audit Reports ↗
            </a>
          </div>

          <div style={{ border: '1px solid var(--rule)', padding: '20px', background: 'var(--paper)' }}>
            <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-hero)', margin: '0 0 8px' }}>
              3. PhilGEPS Bidding Notices (RA 9184)
            </h3>
            <p className="fine" style={{ margin: '0 0 14px' }}>
              The Government Procurement Reform Act requires all municipal tenders and notices of award to be published on the
              Philippine Government Electronic Procurement System (PhilGEPS).
            </p>
            <a
              href="https://notices.philgeps.gov.ph/"
              target="_blank"
              rel="noopener"
              className="button button-quiet small"
            >
              Search Rosario on PhilGEPS ↗
            </a>
          </div>

          <div style={{ border: '1px solid var(--rule)', padding: '20px', background: 'var(--paper)' }}>
            <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-hero)', margin: '0 0 8px' }}>
              4. Freedom of Information (EO No. 2, s. 2016)
            </h3>
            <p className="fine" style={{ margin: '0 0 14px' }}>
              Any Filipino citizen can formally request copies of municipal ordinances, resolutions, and council committee reports
              directly from the Office of the Sangguniang Bayan Secretary at the Rosario Municipal Hall.
            </p>
            <a
              href="https://www.foi.gov.ph/"
              target="_blank"
              rel="noopener"
              className="button button-quiet small"
            >
              Visit eFOI Portal ↗
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

