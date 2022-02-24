
function insertNewPost(description, photoURL, price, city, condition) {


  var context =
  {
    description: description,
    photoURL: photoURL,
    price: price,
    city: city,
    condition: condition
  }

  var post = Handlebars.templates.post(context)
  var postsSection = document.getElementById('posts');
  postsSection.insertAdjacentHTML('beforeend', post)
  console.log("==posts:",post)
  //return post;

}


var allPosts = [];
var allCities = [];


function handleModalAcceptClick() {

  var description = document.getElementById('post-text-input').value.trim();
  var photoURL = document.getElementById('post-photo-input').value.trim();
  var price = document.getElementById('post-price-input').value.trim();
  var city = document.getElementById('post-city-input').value.trim();
  var condition = document.querySelector('#post-condition-fieldset input:checked').value;

  if (!description || !photoURL || !price || !city || !condition) {
    alert("You must fill in all of the fields!");
  } else {

    allPosts.push({
      description: description,
      photoURL: photoURL,
      price: price,
      city: city,
      condition: condition
    });

    clearFiltersAndReinsertPosts();

    addCityToAllCities(city);

    hideSellSomethingModal();

  }

}



function clearFiltersAndReinsertPosts() {

  document.getElementById('filter-text').value = "";
  document.getElementById('filter-min-price').value = "";
  document.getElementById('filter-max-price').value = "";
  document.getElementById('filter-city').value = "";

  var filterConditionCheckedInputs = document.querySelectorAll("#filter-condition input");
  for (var i = 0; i < filterConditionCheckedInputs.length; i++) {
    filterConditionCheckedInputs[i].checked = false;
  }

  doFilterUpdate();

}



function addCityToAllCities(city) {


  if (allCities.indexOf(city.toLowerCase()) === -1) {
    allCities.push(city.toLowerCase());
    var newCityOption = createCityOption(city);
    var filterCitySelect = document.getElementById('filter-city');
    filterCitySelect.appendChild(newCityOption);
  }

}



function showSellSomethingModal() {

  var showSomethingModal = document.getElementById('sell-something-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  showSomethingModal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}



function clearSellSomethingModalInputs() {

  var postTextInputElements = [
    document.getElementById('post-text-input'),
    document.getElementById('post-photo-input'),
    document.getElementById('post-price-input'),
    document.getElementById('post-city-input')
  ];


  postTextInputElements.forEach(function (inputElem) {
    inputElem.value = '';
  });


  var checkedPostConditionButton = document.querySelector('#post-condition-fieldset input[checked]');
  checkedPostConditionButton.checked = true;

}



function hideSellSomethingModal() {

  var showSomethingModal = document.getElementById('sell-something-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  showSomethingModal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');

  clearSellSomethingModalInputs();

}



function createCityOption(city) {
  var newCityOption = document.createElement('option');
  newCityOption.textContent = city;
  return newCityOption;
}



function postPassesFilters(post, filters) {

  if (filters.text) {
    var postDescription = post.description.toLowerCase();
    var filterText = filters.text.toLowerCase();
    if (postDescription.indexOf(filterText) === -1) {
      return false;
    }
  }

  if (filters.minPrice) {
    var filterMinPrice = Number(filters.minPrice);
    if (Number(post.price) < filterMinPrice) {
      return false;
    }
  }

  if (filters.maxPrice) {
    var filterMaxPrice = Number(filters.maxPrice);
    if (Number(post.price) > filterMaxPrice) {
      return false;
    }
  }

  if (filters.city) {
    if (post.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }
  }

  if (filters.conditions && filters.conditions.length > 0) {
    if (filters.conditions.indexOf(post.condition) === -1) {
      return false;
    }
  }

  return true;

}



function doFilterUpdate() {


  var filters = {
    text: document.getElementById('filter-text').value.trim(),
    minPrice: document.getElementById('filter-min-price').value,
    maxPrice: document.getElementById('filter-max-price').value,
    city: document.getElementById('filter-city').value.trim(),
    conditions: []
  }

  var filterConditionCheckedInputs = document.querySelectorAll("#filter-condition input:checked");
  for (var i = 0; i < filterConditionCheckedInputs.length; i++) {
    filters.conditions.push(filterConditionCheckedInputs[i].value);
  }

 
  var postContainer = document.getElementById('posts');
  while(postContainer.lastChild) {
    postContainer.removeChild(postContainer.lastChild);
  }


  allPosts.forEach(function (post) {
    if (postPassesFilters(post, filters)) {
      insertNewPost(post.description, post.photoURL, post.price, post.city, post.condition);
    }
  });

}



function parsePostElem(postElem) {

  var post = {
    price: postElem.getAttribute('data-price'),
    city: postElem.getAttribute('data-city'),
    condition: postElem.getAttribute('data-condition')
  };

  var postImageElem = postElem.querySelector('.post-image-container img');
  post.photoURL = postImageElem.src;
  post.description = postImageElem.alt;

  return post;

}



window.addEventListener('DOMContentLoaded', function () {


  var postElems = document.getElementsByClassName('post');
  for (var i = 0; i < postElems.length; i++) {
    allPosts.push(parsePostElem(postElems[i]));
  }


  var filterCitySelect = document.getElementById('filter-city');
  if (filterCitySelect) {
    var filterCityOptions = filterCitySelect.querySelectorAll('option:not([selected])');
    for (var i = 0; i < filterCityOptions.length; i++) {
      allCities.push(filterCityOptions[i].value.trim().toLowerCase());
    }
  }

  var sellSomethingButton = document.getElementById('sell-something-button');
  if (sellSomethingButton) {
    sellSomethingButton.addEventListener('click', showSellSomethingModal);
  }

  var modalAcceptButton = document.getElementById('modal-accept');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }

  var modalHideButtons = document.getElementsByClassName('modal-hide-button');
  for (var i = 0; i < modalHideButtons.length; i++) {
    modalHideButtons[i].addEventListener('click', hideSellSomethingModal);
  }

  var filterUpdateButton = document.getElementById('filter-update-button');
  if (filterUpdateButton) {
    filterUpdateButton.addEventListener('click', doFilterUpdate)
  }

});
