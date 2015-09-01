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
	}	
};

