'use strict';
const mysql = require('mysql2-promise');

var ClassDbOrm = function() {
	var db = mysql();
	//LOCALMYSQL_USER
	//LOCALMYSQL_PASSWORD
	db.configure({
		"host": "localhost",
		"user": process.env.LOCALMYSQL_USER,
		"password": process.env.LOCALMYSQL_PASSWORD,
		"database": "class_group_db"
	});
	db.pool.on('connection', function (poolConnection) {
		poolConnection.config.namedPlaceholders = true;
	});
	// Remove this later
	this.getUsersTest = function() {
		return db.query('SELECT * FROM users');
	};

	this.getUser = function(username, password){
		return db.query(
			'SELECT * FROM users WHERE `username` = :username AND `password` = :password LIMIT :limit1;'
			, {
				username: username
				, password: password
				, limit1: 1
			}
		);
		// var v1 = username;
		// return db.execute(
		// 	'SELECT ? , ?'
		// 	, [
		// 		v1
		// 		, password
		// 	]
		// );
	}
};

module.exports = ClassDbOrm;
