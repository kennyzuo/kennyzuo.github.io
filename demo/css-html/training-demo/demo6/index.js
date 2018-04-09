(function(){ 

	let forms = document.querySelectorAll(".form-step"); 

	let btns = document.querySelectorAll("input[type='button']");

	let lilist = document.querySelectorAll(".progressbar li")

	console.log(btns);

	Array.from(btns).forEach( btn => {
		console.log(btn);
		btn.addEventListener('click', function(){
			let num = +btn.dataset.linum; 
			console.log(num);
			let classlist = btn.classList; 
			if(classlist.contains("next")){
				lilist[num+1].classList.toggle('active');
				forms[num].classList.remove('show');
				forms[num+1].classList.add('show');

			}else if(classlist.contains('previous')){
				lilist[num].classList.toggle('active');
				forms[num].classList.remove('show');
				forms[num-1].classList.add('show');
			}
		});
	} ) 

})();