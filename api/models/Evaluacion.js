/**
* Evaluacion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	title:'string',
	body:'array',
	owner:{
		model:'user'
	},
	respuestas:{
		collection:'respuesta',
		via:'evaluacion'
	}
  }
};

