import type { CowWithProduction } from '../types/common';

/**
 * The types are very explicitly defined, just to be careful. Production is separate from the Cow
 * type itself because it is expected to come from another source based on the cow's id.
 */
export const cowsWithProduction: CowWithProduction[] = [
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
