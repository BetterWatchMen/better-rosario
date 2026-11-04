import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageHead } from '../components/Chrome';
import { ROSARIO_BARANGAYS } from '../data/rosario-data';
import { useTitle } from '../lib/use-title';

export default function Barangays() {
  useTitle('48 Barangays · Municipality of Rosario, Batangas');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'Urban' | 'Rural'>('all');

  const filtered = useMemo(() => {
    return ROSARIO_BARANGAYS.filter((b) => {
      const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase());
      const matchesClass = filter === 'all' || b.classification === filter;
      return matchesSearch && matchesClass;
    });
  }, [search, filter]);

  return (
    <main className="page main">
      <PageHead
        eyebrow="Local Governance · Community Directory"
        title="The 48 Barangays of Rosario, Batangas"
      >
        <p>
          Rosario is subdivided into 48 barangays across urban town centers (Poblacion) and rural agricultural communities.
          Click any barangay to cross-reference with FY2027 and historical national budget allocations (DPWH infrastructure,
          Farm-to-Market roads, barangay halls, and multi-purpose buildings).
        </p>
      </PageHead>

      <div className="stats">
        <div>
          <span className="label">Total Barangays</span>
          <dd className="stat">48</dd>
          <dd className="stat-sub">Official PSA Classification</dd>
        </div>
        <div>
          <span className="label">Urban / Poblacion</span>
          <dd className="stat">7</dd>
          <dd className="stat-sub">Commercial & Administrative Centers</dd>
        </div>
        <div>
          <span className="label">Rural Communities</span>
          <dd className="stat">41</dd>
          <dd className="stat-sub">Agricultural & Residential</dd>
        </div>
        <div>
          <span className="label">Legislative District</span>
          <dd className="stat stat-accent">4th</dd>
          <dd className="stat-sub">Batangas 4th Congressional District</dd>
        </div>
      </div>

      <div className="section">
        <div className="list-head">
          <h2 className="section-h">Barangay Directory & Project Cross-Reference</h2>
          <span className="label">Showing {filtered.length} of 48</span>
        </div>

        <div className="toolbar">
          <div className="field field-grow">
            <label htmlFor="b-search" className="label">Search by Barangay Name</label>
            <input
              id="b-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. San Roque, Itlugan, Matamis, Bagong Pook..."
            />
          </div>
          <div className="field">
            <label htmlFor="b-filter" className="label">Classification</label>
            <select
              id="b-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'all' | 'Urban' | 'Rural')}
            >
              <option value="all">All Classifications</option>
              <option value="Urban">Urban Only</option>
              <option value="Rural">Rural Only</option>
            </select>
          </div>
          {search && (
            <button
              type="button"
              className="button button-quiet"
              onClick={() => setSearch('')}
            >
              Clear Search
            </button>
          )}
        </div>

        <div className="table" role="table">
          <div className="tr th" role="row">
            <span role="columnheader">Barangay</span>
            <span role="columnheader">Classification</span>
            <span role="columnheader">Known Projects / Notes</span>
            <span role="columnheader" className="r">Action</span>
          </div>

          {filtered.map((b) => {
            const cleanName = b.name.replace(/\s*\(Poblacion\)/, '').replace(/\s*\(Tubahan\)/, '');
            return (
              <div key={b.name} className="tr" role="row" style={{ gridTemplateColumns: '220px 140px 1fr 180px' }}>
                <div role="cell">
                  <strong style={{ fontSize: '15px' }}>{b.name}</strong>
                </div>
                <div role="cell">
                  <span className={`tag ${b.classification === 'Urban' ? 'tag-office' : 'tag-place'}`}>
                    {b.classification}
                  </span>
                </div>
                <div role="cell" className="fine" style={{ margin: 0 }}>
                  {b.notes ? b.notes : 'General rural municipal barangay'}
                </div>
                <div role="cell" className="r">
                  <Link
                    to={`/?q=${encodeURIComponent(cleanName)}`}
                    className="button button-quiet small"
                    title={`View projects mentioning ${b.name}`}
                  >
                    View Projects →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
