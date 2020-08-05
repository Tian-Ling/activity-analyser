import { Datum } from '@nivo/line';

export type ActivityInformation = {
  averages: Averages;
  maxPower: number;
};

export type Averages = {
  [key: string]: number;
  cadence: number;
  heart_rate: number;
  power: number;
  speed: number;
};

export type DataPoints = {
  cadence: Datum[];
  heart_rate: Datum[];
  power: Datum[];
  speed: Datum[];
};
