'use strict';

var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';



function setDetails(imageUrl, titleText){    
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumb){
return thumb.getAttribute('data-image-url');
}

function titleFromThumb(thumb){
    return thumb.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumb){
    setDetails(imageFromThumb(thumb), titleFromThumb(thumb));
}

function addThumbClickHandler(thumb){
thumb.addEventListener('click', function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
    });
}

function getThumbsArray(){
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents(){
    var thumbnails = getThumbsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();