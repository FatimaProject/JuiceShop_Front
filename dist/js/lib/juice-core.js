/*
	easy-core.js

	Datum: 10.02.2021
	Autor: Alo
*/

(function ($, undefined) {
	
	'use strict';

	function JUICE()
	{
		// this.API_Url = 'https://transporter.sedihisham.de/BE/public/';
		this.API_Url = 'http://127.0.0.1:8000/';
		this.Web_Url = 'JuiceShop/';
		this.W_Location = window.location;
		this.UserData = {
			id : 0,
			FirstName :'',
			LastName: '',
			UserName: '',
			Email: '',
			Type: '',
			Status: '',
			token: '',
		}

	}
	$.JUICE = new JUICE();
	
}) ( jQuery )

