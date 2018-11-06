function tabs() {
	let tabs = document.getElementsByClassName('glazing_block'),
		 tab_block = document.getElementsByClassName('glazing_slider')[0],
		 tabs_link = tab_block.getElementsByTagName('a'),
		 tabs_content_block = document.getElementsByClassName('tabs_conent_block')[0],
		 tabs_content = tabs_content_block.getElementsByClassName("row");

	function hideConent(a) {
		for(i = a; i < tabs_link.length; i++){
			tabs_link[i].classList.remove('active');
			tabs_content[i].style.display = "none";
		}
	}
	hideConent(1);

	function showContent(b) {  
		if (tabs_link[b].classList.contains != "active") {
			hideConent(0);
			tabs_link[b].classList.add('active');
			tabs_content[b].style.display = "block";
		}
	}
	
	tab_block.addEventListener('click', function (event) {
		if (event.target.classList.contains('link_slider_link')) {
			for(let i = 0; i < tabs_link.length; i++) {
				if (event.target == tabs_link[i]) {
					showContent(i);
					break;
				}
			}
		}

	})

	}
module.exports = tabs;