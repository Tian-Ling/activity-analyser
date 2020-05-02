const FitParser = require('fit-file-parser').default;

const parseIntoNivoFormat = (parsedFitFile) => {
  const { records } = parsedFitFile;
  const sessionInformation = parsedFitFile.sessions[0];
  const result = {
    dataPoints: [],
    sessionInformation: {
      averageCadence: sessionInformation.avg_cadence,
      averageHeartRate: sessionInformation.avg_heart_rate,
      averagePower: sessionInformation.avg_power,
      averageSpeed: sessionInformation.avg_speed,
      intensityFactor: sessionInformation.intensity_factor,
      maxCadence: sessionInformation.max_cadence,
      maxHeartRate: sessionInformation.max_heart_rate,
      maxPower: sessionInformation.max_power,
      startTime: sessionInformation.start_time,
      totalDistance: sessionInformation.total_distance,
      trainingStressScore: sessionInformation.training_stress_score,
    },
  };

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
