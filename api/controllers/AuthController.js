/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login:function(req,res){
		User.findOne({name:req.param('name'),password:req.param('password')})
			.exec(function(error,user){
				if(error){
					res.ok({error:error},'homepage')
				}else if(user){
					req.session.authenticate=true;
					req.session.user=user;
					if(user.type === 'admin'){
						res.redirect('/admin/home');
					}else{
						res.redirect('/user/home');
					}
				}else{
					res.ok({error:'no user found'},'homepage')
				}
			})
	},
	logout:function(req,res){
		req.session.authenticate = false;
		req.session.user = null ;
		res.redirect('/')
	}
};

