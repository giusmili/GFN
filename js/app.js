document.addEventListener("DOMContentLoaded",()=>{

				//ancre de pour l'élément
				let el = document.querySelector('.gelery-head-presentation')
				

				 el.addEventListener("click",(e)=>{
				 	e.stopPropagation()
				 		document.location.href="#falls"
				 })
			
	})