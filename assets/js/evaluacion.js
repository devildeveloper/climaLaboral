$(document).on('ready',init);

function init(){
	$("form[name='evaluacion']").on('submit',function(e){
		e.preventDefault();
		var data = {
			evaluacion:window.location.pathname.split('/')[2],
			body: $(this).serializeArray()
		}
		$.ajax({
			'type':'POST',
			'url' :'/respuesta/create',
			'data':data,
			error:function(data){
				console.log(data)
			},
			success:function(data){
				console.log(data)
			}
		})
	})
}