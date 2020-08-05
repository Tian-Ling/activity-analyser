const FitParser = require('fit-file-parser').default;
const { CONVERSION_FACTORS, FIELD_ROUNDING } = require('../constants/fileConstants');

const parseIntoNivoFormat = (parsedFitFile) => {
  const { records } = parsedFitFile;
  const sessionInformation = parsedFitFile.sessions[0];

  const numberOfDataPoints = records.length;
  const averages = {
    cadence: 0,
    heart_rate: 0,
    power: 0,
    speed: 0,
  };
  const dataPoints = {
    cadence: [],
    heart_rate: [],
    power: [],
    speed: [],
  };
  const result = {
    dataPoints,
    sessionInformation: {
      averages,
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
    Object.keys(record).forEach((recordName) => {
      if (recordName in dataPoints) {
        let recordValue = record[recordName];

        if (recordName === 'speed') {
          recordValue *= CONVERSION_FACTORS.KMH;
        }

        dataPoints[recordName].push({ x: record.timer_time, y: recordValue });
      }

      if (recordName in averages) {
        averages[recordName] += record[recordName];
      }
    });
  }

  Object.keys(averages).forEach((average) => {
    averages[average] = averages[average] / numberOfDataPoints;

    if (average === 'speed') {
      averages[average] *= CONVERSION_FACTORS.KMH;
    }

    if (FIELD_ROUNDING[average] === 0) {
      averages[average] = Math.round(averages[average]);
    } else {
      averages[average] = parseFloat(averages[average].toFixed(2));
    }
  });

  return result;
};

const fitFileParser = (fitFile) => {
  const fitParser = new FitParser({
    elapsedRecordField: true,
    speedUnit: 'km/h',
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
