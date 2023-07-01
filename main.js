let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// صفحة الشاشه المتنقله sec3

// Show tab click event
const showTab = (event) => {
	event.preventDefault();
	
	// Get tabs and content
	const tabs = document.querySelectorAll('.tabs .active');
	
	// Remove active class from items
	tabs.forEach(tab => {
		tab.classList.remove('active');
	});
	
	// Add active class to clicked item
	event.target.parentElement.classList.add('active');
	document.getElementById(event.target.href.split('#')[1]).classList.add('active');
}

// Add event listener to all tab links
const tabLinks = document.querySelectorAll('.tab-list a');
tabLinks.forEach(link => {
	link.addEventListener('click', showTab);
});














var splide = new Splide( '.splide', {
	type   : 'loop',
	perPage: 3,
	perMove: 1,
  } );
  
  splide.mount();