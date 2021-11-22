export type Cow = {
  name: string;
  birthdate: string;
  registerNumber: string;
  breed: string;
  color: string;
  information: string;
};

export type Production = {
  litersPerWeek: number;
  litersPerDay: number;
};

export type CowWithProduction = Cow & Production;

export const cowsWithProduction: (Cow & Production)[] = [
  {
    name: 'Mansikki',
    birthdate: '2015-01-01',
    registerNumber: '0d192as83d201y2',
    breed: 'Angus',
    color: 'Brown',
    information: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
  {
    name: 'Mustikki',
    birthdate: '2015-01-01',
    registerNumber: '0d192as83d201ys',
    breed: 'Angus',
    color: 'Brown',
    information: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
  {
    name: 'Heluna',
    birthdate: '2015-01-01',
    registerNumber: '0d192as83d201y1',
    breed: 'Angus',
    color: 'Brown',
    information: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
  {
    name: 'Kolina',
    birthdate: '2015-01-01',
    registerNumber: '0d192as83d201yd',
    breed: 'Angus',
    color: 'Brown',
    information: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
  {
    name: 'Valio',
    birthdate: '2015-01-01',
    registerNumber: '0d192as83d201ya',
    breed: 'Angus',
    color: 'Brown',
    information: '',
    litersPerWeek: 130,
    litersPerDay: 20,
  },
];
