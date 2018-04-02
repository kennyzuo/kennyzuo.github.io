(function(){
	var btns = document.querySelectorAll('.btn-invert');

	var wrapper = document.querySelector('.wrapper');
	var cardGroup = document.querySelector('.card-group');


	function igniteBtnAction(btn){
		var attr = btn.dataset.action;
		if(attr === "login"){
			cardGroup.setAttribute('data-active-card', 'login');
			return;
		}

		if(attr === "register"){
			cardGroup.setAttribute('data-active-card', 'register'); 
			return;
		}
	}

	function handleEvents(){
		for(var i = 0; i < btns.length; i++){
			btns[i].addEventListener('click', function(elem){
				igniteBtnAction(this);
			})
		}
	}

	function init(){
		handleEvents();
	}
	init();
})();