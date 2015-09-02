/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	userHome:function(req,res){
		res.view('user/home')
	},
	adminHome:function(req,res){
		res.view('admin/home')
	},
	myEvals:function(req,res){
		Evaluacion.find({owner:req.session.user.id})
					.exec(function(error,results){
						if(error){
							res.json({error:error,result:null});
						}else{
							res.json({error:null,result:results});
						}
					})
	}
};

