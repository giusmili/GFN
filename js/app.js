document.addEventListener("DOMContentLoaded",()=>{

				//ancre de pour l'élément
				let el = document.querySelector('.gelery-head-presentation')
				let manu_burger = document.getElementsByClassName("burger")[0]
				let manu_appear = document.querySelector("nav")
				

				 el.addEventListener("click",(e)=>{
				 	e.stopPropagation()
				 		document.location.href="#falls"
				 })

				 //event menu

				 manu_burger.addEventListener("click",()=>{
				 		manu_appear.classList.toggle("main-menu-appear")

				 })
			
	})