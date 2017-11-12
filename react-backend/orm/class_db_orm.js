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
	// Remove this later
	this.getUsersTest = function() {
		return db.query('SELECT * FROM users');
	};
};

module.exports = ClassDbOrm;
