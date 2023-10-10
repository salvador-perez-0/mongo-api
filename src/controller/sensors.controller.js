const sensorService = require("../service/sensors.service");

function getSensorsData() {
  const service = new sensorService();
  console.log(service.postServiceData());
  return service.postServiceData;
}
getSensorsData();
