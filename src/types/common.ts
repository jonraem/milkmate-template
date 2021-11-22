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
