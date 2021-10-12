
const config = {
	user: 'dbo',
	password: 'dbo',
	server: '127.0.0.1',
	database: 'TEST',
	options: {
		trustedconnection: true,
		enableArithAbort: true,
		instancename: 'MSSQLSERVER'
	},
	port: 1433
}

module.exports = config;