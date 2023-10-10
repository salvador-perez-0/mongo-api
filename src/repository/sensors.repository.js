class SensorRepository {
  constructor() {}

  postSensorData() {
    const { ReadlineParser } = require("serialport");
    const { SerialPort } = require("serialport");
    const parsers = SerialPort.parsers;
    const parser = new ReadlineParser({
      delimiter: "\r\n",
    });

    let port = new SerialPort({
      path: "COM3",
      baudRate: 9600,
      dataBits: 8,
      parity: false,
      stopBits: 1,
      flowControl: false,
    });

    port.pipe(parser);

    return parser.on("data", function (data) {
      console.log(data);
    });
  }
}

module.exports = SensorRepository;
