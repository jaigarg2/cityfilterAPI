const config = require('./dbconfig');
const sql = require('mssql');

async function getInstances(){
	try {
		let pool = await sql.connect(config);
		let instance = await pool.request()
			.query("SELECT * from MODEL");
		return instance.recordsets;
	}catch (error){
		console.log(error);
	}
}

async function getInstance(InstanceId){
	try {
		let pool = await sql.connect(config);
		let instance = await pool.request()
			.input('sensor_sysid', sql.Int, InstanceId)
			.query("SELECT * from MODEL where sensor_sysid = @sensor_sysid");
		return instance.recordsets;
	}catch (error){
		console.log(error);
	}
}

async function addInstance(data){
	try {
		let pool = await sql.connect(config);
		let instance = await pool.request()
			.input('sensor_sysid', sql.Int, data.sensor_sysid)
			.input('temperature', sql.Int, data.temperature)
			.input('humidity', sql.Int, data.humidity)
			.input('pm1_in', sql.Int, data.pm1_in)
			.input('pm25_in', sql.Int, data.pm25_in)
			.input('pm10_in', sql.Int, data.pm10_in)
			.input('pm1_out', sql.Int, data.pm1_out)
			.input('pm25_out', sql.Int, data.pm25_out)
			.input('pm10_out', sql.Int, data.pm10_out)
			.input('latitude', sql.Int, data.latitude)
			.input('longitude', sql.Int, data.longitude)
			.query("INSERT INTO MODEL (sensor_sysid, temperature, humidity, pm1_in, pm25_in, pm10_in, pm1_out, pm25_out, pm10_out, latitude, longitude ) VALUES (@sensor_sysid, @temperature, @humidity, @pm1_in, @pm25_in, @pm10_in, @pm1_out, @pm25_out, @pm10_out, @latitude, @longitude)");
		return instance.recordsets;
	}catch (error){
		console.log(error);
	}
}

module.exports = {
	getInstances: getInstances,
	getInstance: getInstance,
	addInstance: addInstance
}