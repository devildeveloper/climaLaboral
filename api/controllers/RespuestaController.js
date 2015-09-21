/**
 * RespuestasController
 *
 * @description :: Server-side logic for managing respuestas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
		var data = {
			body:req.param('body'),
			evaluacion:req.param('evaluacion'),
			user:req.session.user.id
		}
		Respuesta.create(data)
				.exec(function(error,created){
					if(error){
						res.json({error:error,success:false})
					}else{
						res.json({error:error,success:true});
					}
				})
	},
	viewResults:function(req,res){
		res.view('admin/resultSet')
	}
};

