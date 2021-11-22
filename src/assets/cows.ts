export type Cow = {
  name: string;
  birthDate: string;
  registerNumber: string;
  breed: string;
  color: string;
  info: string;
};

export type Production = {
  litersPerWeek: number;
  litersPerDay: number;
};

export const cowsWithProduction: (Cow & Production)[] = [
  {
    name: 'Mansikki',
    birthDate: '2015-01-01',
    registerNumber: '0d192as83d201y2',
    breed: 'Angus',
    color: 'Brown',
    info: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
  {
    name: 'Mustikki',
    birthDate: '2015-01-01',
    registerNumber: '0d192as83d201ys',
    breed: 'Angus',
    color: 'Brown',
    info: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
  {
    name: 'Heluna',
    birthDate: '2015-01-01',
    registerNumber: '0d192as83d201y1',
    breed: 'Angus',
    color: 'Brown',
    info: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
  {
    name: 'Kolina',
    birthDate: '2015-01-01',
    registerNumber: '0d192as83d201yd',
    breed: 'Angus',
    color: 'Brown',
    info: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
  {
    name: 'Valio',
    birthDate: '2015-01-01',
    registerNumber: '0d192as83d201ya',
    breed: 'Angus',
    color: 'Brown',
    info: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
];
