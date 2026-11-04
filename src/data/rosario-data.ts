/**
 * Public civic data for the Municipality of Rosario, Batangas.
 * Compiled from Philippine Statistics Authority (PSA), Department of the Interior
 * and Local Government (DILG), and official disaster risk management records.
 */

export interface Barangay {
  name: string;
  classification: 'Urban' | 'Rural';
  notes?: string;
}

export interface Official {
  name: string;
  position: string;
  role: string;
  focus: string;
}

export interface Hotline {
  service: string;
  department: string;
  landline?: string;
  mobile: string[];
  description: string;
}

export const ROSARIO_BARANGAYS: Barangay[] = [
  { name: 'Alupay', classification: 'Rural' },
  { name: 'Antipolo', classification: 'Rural' },
  { name: 'Bagong Pook', classification: 'Urban', notes: 'Commercial and residential hub' },
  { name: 'Balibago', classification: 'Rural', notes: 'Site of multi-purpose building projects' },
  { name: 'Bayawang', classification: 'Rural' },
  { name: 'Baybayin', classification: 'Rural', notes: 'Site of multi-purpose building projects' },
  { name: 'Bulihan', classification: 'Rural' },
  { name: 'Cahigam', classification: 'Rural', notes: 'Road improvement projects' },
  { name: 'Calantas', classification: 'Rural' },
  { name: 'Colongan', classification: 'Rural' },
  { name: 'Itlugan', classification: 'Rural', notes: 'Farm-to-Market Road (FMR) project recipient' },
  { name: 'Leviste (Tubahan)', classification: 'Rural' },
  { name: 'Lumbangan', classification: 'Rural' },
  { name: 'Maalas-as', classification: 'Rural', notes: 'Maalas-as - Bulihan road rehabilitation' },
  { name: 'Mabato', classification: 'Rural', notes: 'Road with Bridge infrastructure project' },
  { name: 'Mabunga', classification: 'Rural' },
  { name: 'Macalamcam A', classification: 'Rural' },
  { name: 'Macalamcam B', classification: 'Rural', notes: 'Road rehabilitation projects' },
  { name: 'Malaya', classification: 'Rural', notes: 'Road construction allocations' },
  { name: 'Maligaya', classification: 'Rural' },
  { name: 'Marilag', classification: 'Rural', notes: 'Multi-purpose building & covered court projects' },
  { name: 'Masaya', classification: 'Rural', notes: 'School multi-purpose building project' },
  { name: 'Matamis', classification: 'Rural', notes: 'Farm-to-Market Road & Multi-Purpose Building' },
  { name: 'Mavalor', classification: 'Rural' },
  { name: 'Mayuro', classification: 'Rural' },
  { name: 'Namuco', classification: 'Urban' },
  { name: 'Namunga', classification: 'Urban', notes: 'Commercial center; covered court projects' },
  { name: 'Nasi', classification: 'Rural' },
  { name: 'Natu', classification: 'Rural' },
  { name: 'Palakpak', classification: 'Rural' },
  { name: 'Pinagsibaan', classification: 'Rural' },
  { name: 'Barangay A (Poblacion)', classification: 'Urban', notes: 'Town center / Municipal Hall vicinity' },
  { name: 'Barangay B (Poblacion)', classification: 'Urban', notes: 'Town center' },
  { name: 'Barangay C (Poblacion)', classification: 'Urban', notes: 'Town center' },
  { name: 'Barangay D (Poblacion)', classification: 'Urban', notes: 'Town center' },
  { name: 'Barangay E (Poblacion)', classification: 'Urban', notes: 'Town center' },
  { name: 'Putingkahoy', classification: 'Rural', notes: 'Road construction at Sitio Lasuerte' },
  { name: 'Quilib', classification: 'Rural', notes: 'Multi-purpose building construction projects' },
  { name: 'Salao', classification: 'Rural' },
  { name: 'San Carlos', classification: 'Rural', notes: 'Multi-purpose building allocations' },
  { name: 'San Ignacio', classification: 'Rural' },
  { name: 'San Isidro', classification: 'Rural', notes: 'Purok 6 Farm-to-Market Road (FMR)' },
  { name: 'San Jose', classification: 'Rural', notes: 'Barangay Hall construction projects' },
  { name: 'San Roque', classification: 'Urban', notes: 'Major allocations: ₱50M + ₱30M multi-purpose facilities' },
  { name: 'Santa Cruz', classification: 'Rural', notes: 'Road & covered court construction' },
  { name: 'Timbugan', classification: 'Rural' },
  { name: 'Tiquiwan', classification: 'Rural' },
  { name: 'Tulos', classification: 'Rural', notes: 'Covered court projects' },
];

export const MUNICIPAL_LEADERSHIP: {
  executive: Official[];
  legislativeLeader: Official;
  councilors: Official[];
} = {
  executive: [
    {
      name: 'Leovigildo K. Morpe',
      position: 'Municipal Mayor',
      role: 'Chief Executive of the Municipality',
      focus: 'Directs executive policies, municipal procurement, 20% Development Fund allocation, and local budget implementation.',
    },
  ],
  legislativeLeader: {
    name: 'Atanacio G. "Tany" Zara',
    position: 'Municipal Vice Mayor',
    role: 'Presiding Officer, Sangguniang Bayan',
    focus: 'Presides over regular sessions of the municipal council, signs ordinances and resolutions, and ensures legislative checks and balances.',
  },
  councilors: [
    { name: 'Jose M. "Joey" Galicha', position: 'Sangguniang Bayan Member', role: 'Municipal Councilor', focus: 'Legislation, committee deliberations, and public hearings.' },
    { name: 'Edward B. Aguilar', position: 'Sangguniang Bayan Member', role: 'Municipal Councilor', focus: 'Legislation, committee deliberations, and public hearings.' },
    { name: 'Darius M. Aguado', position: 'Sangguniang Bayan Member', role: 'Municipal Councilor', focus: 'Legislation, committee deliberations, and public hearings.' },
    { name: 'Joaz Martin I. De Veyra', position: 'Sangguniang Bayan Member', role: 'Municipal Councilor', focus: 'Legislation, committee deliberations, and public hearings.' },
    { name: 'Marciano S. Aquino', position: 'Sangguniang Bayan Member', role: 'Municipal Councilor', focus: 'Legislation, committee deliberations, and public hearings.' },
    { name: 'Dennis M. Hernandez', position: 'Sangguniang Bayan Member', role: 'Municipal Councilor', focus: 'Legislation, committee deliberations, and public hearings.' },
    { name: 'Teodoro Karr D. Luansing', position: 'Sangguniang Bayan Member', role: 'Municipal Councilor', focus: 'Legislation, committee deliberations, and public hearings.' },
    { name: 'Albino M. Altura', position: 'Sangguniang Bayan Member', role: 'Municipal Councilor', focus: 'Legislation, committee deliberations, and public hearings.' },
  ],
};

export const EMERGENCY_HOTLINES: Hotline[] = [
  {
    service: 'MDRRMC Operations Center (OpCen)',
    department: 'Municipal Disaster Risk Reduction & Management',
    landline: '(043) 311-2935 / (043) 703-2646',
    mobile: ['0917-133-9605', '0917-891-2881'],
    description: '24/7 disaster response, emergency medical dispatch, rescue operations, and typhoon monitoring.',
  },
  {
    service: 'Rosario Municipal Police Station (PNP)',
    department: 'Philippine National Police',
    landline: '(043) 724-7026',
    mobile: ['0915-254-2577', '0927-237-0519', '0998-598-5699'],
    description: 'Law enforcement, peace and order, emergency crime reporting, and community security.',
  },
  {
    service: 'Rosario Fire Station (BFP)',
    department: 'Bureau of Fire Protection',
    landline: '(043) 312-1102',
    mobile: ['0915-602-4435'],
    description: 'Fire suppression, search and rescue, hazmat incident handling, and fire safety inspections.',
  },
  {
    service: 'Mayor’s Office Ambulance Service',
    department: 'Office of the Municipal Mayor',
    mobile: ['0969-643-2583'],
    description: 'Emergency patient transport and medical transit assistance for Rosario residents.',
  },
  {
    service: 'Rural Health Unit I (RHU-I)',
    department: 'Municipal Health Office',
    mobile: ['0962-491-8452'],
    description: 'Primary public healthcare, maternal health, vaccinations, and basic medical consultations.',
  },
  {
    service: 'Traffic Management & Public Safety Office',
    department: 'TMPSO Rosario',
    mobile: ['0981-222-5047'],
    description: 'Road traffic coordination, vehicular accident reporting, and municipal transport management.',
  },
  {
    service: 'Municipal Social Welfare & Development (MSWDO)',
    department: 'MSWDO Rosario',
    landline: '(043) 312-1367',
    mobile: ['0947-340-4927'],
    description: 'Crisis assistance, indigent support, child and women protection, and senior citizen concerns.',
  },
];

export const LOCAL_HOSPITALS = [
  { name: 'MVM Memorial District Hospital', type: 'Public / Government', landline: '(043) 312-0411', address: 'Rosario, Batangas' },
  { name: 'Sto. Rosario Hospital (Maderazo)', type: 'Private Hospital', landline: '(043) 321-3988', mobile: '0932-843-6537', address: 'V. Escano St., Rosario, Batangas' },
  { name: 'Christ the Savior Medical Center', type: 'Private Hospital', landline: '(043) 740-1412', mobile: '0994-584-1895', address: 'Rosario, Batangas' },
  { name: 'Metro Rosario Medical Center', type: 'Private Hospital', landline: '(043) 403-7338', mobile: '0954-225-9218 / 0919-765-9421', address: 'Gualberto Ave., Rosario, Batangas' },
];
