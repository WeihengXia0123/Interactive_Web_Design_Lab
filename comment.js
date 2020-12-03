const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');

var reverseGeocoder=new BDCReverseGeocode();

function appendComment (event) {
  navigator.geolocation.getCurrentPosition(store_location);
  event.preventDefault();
}

submit.addEventListener('click', appendComment, false)

// Check for saved wishlist items
const saved = localStorage.getItem('commentListing');

// If there are any saved items, update our list
if (saved) {
	commentList.innerHTML = saved;
}

// get current date
function get_comment_date(){
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  h = n.getHours();
  min = n.getMinutes();
  min = min > 9 ? min : '0' + min;
  html_date =  m + "/" + d + "/" + y + ", "+ h + ":" + min;

  return html_date;
}

/*Use geolocation to get address */
function store_location(position){
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  var loc;
  loc = {lat: lat, long: long};

  /*get city, country*/
  reverseGeocoder.getClientLocation({
    latitude: lat,
    longitude: long,
  },function(result) {
    var comment_date = get_comment_date();
    
    const data = {
      avatar: "https://res.cloudinary.com/dr5l034cf/image/upload/v1604962695/profile-2_copy_ctkt5d.jpg",
      comment: commentInput.value,
      author: "Weiheng Xia",
      date: comment_date,
      city: result.city,
      country: result.countryName
    };

    
    // If the value is nothing just return
    if (commentInput.value.length < 1) return;

    // Insert new template into DOM
    template(data);

    // Reset textrea value
    commentInput.value = "";

    // Save the list to localStorage
    localStorage.setItem('commentListing', commentList.innerHTML);
    });
}


/*append Comments*/
function template(data) {
  commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
      <img class="comment-avatar" src="${data.avatar}" />
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <label class="comment_date">${data.date}, </label><label class="comment_city">${data.city}, </label><label class="comment_country">${data.country}</label>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}
