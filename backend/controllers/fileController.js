const FitParser = require('fit-file-parser').default;

const fitFileParser = (fitFile) => {
  const fitParser = new FitParser();
  let result = {};

  fitParser.parse(fitFile, (_, data) => {
    result = data;
  });

  return result;
};

module.exports = {
  fitFileParser,
};
