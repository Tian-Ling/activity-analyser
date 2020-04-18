const FitParser = require('fit-file-parser').default;

const parseIntoNivoFormat = (parsedFitFile) => {
  const { records } = parsedFitFile;
  const result = { dataPoints: [] };

  for (const record of records) {
    // eslint-disable-next-line camelcase
    const { timer_time, power } = record;
    result.dataPoints.push({ x: timer_time, y: power });
  }

  return result;
};

const fitFileParser = (fitFile) => {
  const fitParser = new FitParser({
    elapsedRecordField: true,
  });
  let result = {};

  fitParser.parse(fitFile, (_, data) => {
    result = parseIntoNivoFormat(data);
  });

  return result;
};

module.exports = {
  fitFileParser,
};
