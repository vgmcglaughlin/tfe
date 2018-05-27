'use strict';

const datasets = require('./sample-data/datasets');

module.exports = function createSampleData(server) {

  datasets.forEach(dataset => {
    server.models.Dataset.upsertWithWhere({
      code: dataset.code,
    }, dataset);
  });
};
