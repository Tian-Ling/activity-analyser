const FitParser = require('fit-file-parser').default;

const parseIntoNivoFormat = (parsedFitFile) => {
  const { records } = parsedFitFile;
  const sessionInformation = parsedFitFile.sessions[0];
  const result = {
    dataPoints: {
      cadence: [],
      heartRate: [],
      power: [],
      speed: [],
    },
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
    const { timer_time, cadence, heart_rate, power, speed } = record;
    result.dataPoints.cadence.push({ x: timer_time, y: cadence });
    result.dataPoints.heartRate.push({ x: timer_time, y: heart_rate });
    result.dataPoints.power.push({ x: timer_time, y: power });
    result.dataPoints.speed.push({ x: timer_time, y: speed });
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
