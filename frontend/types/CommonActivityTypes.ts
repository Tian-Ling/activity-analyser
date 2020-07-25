import { Datum } from '@nivo/line';

export type ActivityInformation = {
  averageCadence: number;
  averageHeartRate: number;
  averagePower: number;
  averageSpeed: number;
  maxPower: number;
};

export type DataPoints = {
  cadence: Datum[];
  heartRate: Datum[];
  power: Datum[];
  speed: Datum[];
};
