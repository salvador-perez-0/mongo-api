const sensorRepository = require("../repository/sensors.repository");

class sensorService {
  constructor() {
    this.repository = new sensorRepository();
  }

  postServiceData() {
    const repository = this.repository;
    return repository.postSensorData();
  }
}

module.exports = sensorService;
