import axios from 'axios';
import { BASE_PATH } from 'Constants/apiConstants';
import { Datum } from '@nivo/line';

export type ParsedFitFile = {
  dataPoints: Datum[];
};

export const parseFitFile = (file: File): Promise<ParsedFitFile> => {
  const formData = new FormData();
  formData.append('file', file, file.name);

  return axios
    .post(BASE_PATH + '/fit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
};

export default {
  parseFitFile,
};
