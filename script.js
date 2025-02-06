function toggleMenu() {
	const navbar = document.getElementById("navbar");
	const button = document.getElementById("menu-button");

	navbar.classList.toggle("open");

	button.textContent = navbar.classList.contains("open") ? "×" : "+";
		if (navbar.classList.contains("open")){
			button.style.fontSize = "140px";
		}
		else {
			button.style.fontSize = "160px";
		}





document.querySelectorAll(".menu a").forEach(link => {
	const originalText = link.textContent;

	link.addEventListener("mouseenter", () => {
		link.textContent = link.getAttribute("data-text");
	});

	link.addEventListener("mouseleave", () => {
		link.textContent = originalText;
	});
	});	
}
	
	
	
	
	
	let currentIndex = 0;
	const slides = document.querySelectorAll(".slide");


	function showNextSlide() {
		slides[currentIndex].classList.remove("active");
		currentIndex = (currentIndex + 1) % slides.length;
		slides[currentIndex].classList.add("active");
	}


	setInterval (showNextSlide, 5000);
	slides[currentIndex].classList.add("active");


	function openProject(projectId) {
	const projectOverlay = document.getElementById(projectId);
	    projectOverlay.classList.add("open");
	}

	function closeProject() {
	document.querySelectorAll(".project-overlay").forEach((overlay) => {
	overlay.classList.remove("open");
	});
	}
