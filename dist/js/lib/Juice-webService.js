/*
	webservice.js

	Datum: 12.02.2021
	Autor: ALO
*/

( function ( $, undefined )
{
	'use strict';

	var this_ = $.JUICE;
	


	this_.WebServiceAjaxRequest = function (api, params, calbackfunction, type)
	{

		var sreq = JSON.stringify( params );
		var res = $.ajax(
		{
			type: type,
			crossDomain: true,
			url: this_.API_Url + api,
			data: sreq,
			dataType: 'json',
			timeout: 1 * 60 * 1000,
			cashe: false,
			global: true,
			contentType: 'application/json; charset=utf-8',
			headers: {"Authorization": 'Bearer ' + this_.UserData.token},
			success: function (data) 
			{
				calbackfunction( data );
				res.abort();
				res = null;
			},
			error: function ( data )
			{
				if (data.responseJSON.success){
					calbackfunction( data );
					res.abort();
					res = null
				}
				else
				{
					var rdata = {
						data: data,
						Error : true,
						ErrMsg : res.responseJSON.message//'Error in server connection'
					};
					console.log(rdata);
					calbackfunction( rdata );
				}
			}
		})

	}

	this_.GetRequest = function ( api, param, cbf )
	{
		return this_.WebServiceAjaxRequest( api, param, cbf, 'GET' );
	}

	this_.PostRequest = function ( api, param, cbf )
	{
		return this_.WebServiceAjaxRequest( api, param, cbf, 'POST' );
	}

	this_.DeleteRequest = function ( api, param, cbf )
	{
		return this_.WebServiceAjaxRequest( api, param, cbf, 'DELETE' );
	}
	this_.PutRequest = function ( api, param, cbf )
	{
		return this_.WebServiceAjaxRequest( api, param, cbf, 'PUT' );
	}

} )( jQuery );
