import axios from 'axios';

type ParsedFitFile = {
  name: string;
};

export const parseFitFile = (file: ArrayBuffer): Promise<ParsedFitFile> => {
  return axios.post('test', { fitFile: file });
};

export default {
  parseFitFile
};
