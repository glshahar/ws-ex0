'use strict'
var eventEmitter = require('events');

var log = "";

module.exports = class Likes extends eventEmitter {
	constructor() {
		super();
		this.balance = 0;
	}

	increase(amount) {
		this.balance += amount;
		this.emit('likesBalanceChanged');
	}

	decrease(amount) {
		this.balance -= amount;
		this.emit('likesBalanceChanged');
	}

	checkMinimum() {
		if (this.balance < 0) {
			this.balance = 0;
			console.log("Likes is : Zero !"  + this.balance);
		}
	}

	displayBalance() {
		var msg = "Likes Balance is : " + this.balance;
		log += msg + "\n";
		console.log(msg);
	}

	getLog() {
		return log;
	}

}