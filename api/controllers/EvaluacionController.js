/**
 * EvaluacionController
 *
 * @description :: Server-side logic for managing evaluacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var YAML = require('yamljs');
module.exports = {
	create:function(req,res){
		Evaluacion.create(
						{
							title:req.param('title'),
							gerencia:req.param('gerencia'),
							body:req.param('body'),
							owner:req.session.user.id
						})
					.exec(function(error,created){
						if(error){
							res.negotiate(error);
						}else{
							res.json({created:created})
							//res.ok({created:true,message:null},'admin/home')
						}
					})
	},
	find:function(req,res){
		Evaluacion.findOne({id:req.param('id')})
					.exec(function(error,eval){
						if(error){
							res.json({error:error,evals:null,message:null,status:500});
						}else if(eval){
							//console.log(eval)
							res.json({error:error,evals:eval,message:null,status:200});
						}else{
							res.json({error:error,evals:null,message:'no found',status:404});
						}
					})
	},
	render:function(req,res){
		Evaluacion.findOne({id:req.param('id')})
					.exec(function(error,eval){
						if(error){
							res.negotiate(error);
						}else if(eval){
							//console.log(eval)
							res.ok({evals:eval},'evaluacion/home');
						}else{
							res.notFound();
						}
					})		
	},
	getResponses:function(req,res){
		Evaluacion.findOne({id:req.param('evaluacionId')})
				.populate('respuestas')
				.exec(function(error,result){
					if(error){
						res.negotiate(error)
					}else if(result){
						res.ok({response:result});
					}else{
						res.ok({response:null});
					}
				});
	}
};

