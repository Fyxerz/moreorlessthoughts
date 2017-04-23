function getElement(elem) {
	let elementArr = document.querySelectorAll(elem) 

	if (elementArr.length < 2) {
		return elementArr[0]
	}
	else {
		return elementArr
	}
}

function changeImage(target, image) {
	let targetElem = getElement(target)

	console.log(targetElem)

	targetElem.setAttribute('src', image)
}

function checkScroll(target, callback) {
	var targetElem = getElement(target)

	targetElem.addEventListener('scroll', function(e) {
		callback()
	})
}

checkScroll('.article_showcase', function() {
	changeImage('.thumb_img', './assets/home2.jpg')
})