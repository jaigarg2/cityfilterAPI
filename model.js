
class Model {
	constructor(sensor_sysid, temperature, humidity, pm1_in, pm25_in, pm10_in, pm1_out, pm25_out, pm10_out, latitude, longitude){

		this.sensor_sysid = sensor_sysid;
		this.temperature = temperature;
		this.humidity = humidity;
		this.pm1_in = pm1_in;
		this.pm25_in = pm25_in;
		this.pm10_in = pm10_in;
		this.pm1_out = pm1_out;
		this.pm25_out = pm25_out;
		this.pm10_out = pm10_out;
		this.latitude = latitude;
		this.longitude = longitude; 
	}
}

module.exports = Model;

