import axios from 'axios';
import { BASE_PATH } from 'Constants/apiConstants';

type ParsedFitFile = {
  name: string;
};

export const parseFitFile = (file: File): Promise<ParsedFitFile> => {
  const formData = new FormData();
  formData.append('file', file, file.name);

  return axios.post(BASE_PATH + '/fit', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default {
  parseFitFile,
};
