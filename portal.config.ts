/**
 * This portal's configuration: the only file a fork needs to edit.
 * What each field means: src/config.ts. Check it against the live API: `npm run check`.
 */
import { defineConfig } from './src/config.ts';

export default defineConfig({
  id: 'rosario-batangas',
  kind: 'municipality',
  name: 'Municipality of Rosario, Batangas',
  shortName: 'Rosario',
  operator: {
    name: 'BetterWatchMen',
    url: 'https://github.com/BetterWatchMen/better-rosario',
  },
  siteUrl: 'https://better-rosario.vercel.app',
  scope: {
    // Every line in the four programs whose title names Rosario, Batangas
    places: [
      { label: 'Rosario', q: 'Rosario, Batangas', region: 'IV-A' },
    ],
    // 4th Legislative District of Batangas (Rep. Amado Carlos IV A. Bolilia)
    districts: ['leg:batangas:4th'],
    exclude: [],
  },
  reporting: { enabled: false },
  buildYourOwnStrip: false,
});
