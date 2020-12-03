/*getURL()*/
function getURL()
{
    var videoURL = document.getElementById("myURL").value;
    console.log(videoURL);
    if (isValidURL(videoURL)){
        alert("The URL is valid, and the video is going to be played");
        var vid = document.getElementById("myVideo_original");
        vid.src = videoURL;
    }
    else{
        alert("Error: The URL is NOT valid");
    }
}

function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null);
}

function getTime(){
    var num = document.getElementById("myNumber").value;
    var vid = document.getElementById("myVideo_original");

    console.log({"video duration": vid.duration});
    console.log({"entered number": num});

    if (num>vid.duration){
        alert("Error: entered number is larger than video time!")
    }
    else{
        vid.currentTime = num;
    }
}

function previewVideo(){
    var canvas = document.getElementById('myCanvas');
    var video = document.getElementById('myVideo_original');
    
    canvas.width = 0.5*video.videoWidth;
    canvas.height = 0.5*video.videoHeight;

    canvas.getContext('2d').drawImage(video, 0, 0, 0.5*video.videoWidth, 0.5*video.videoHeight);
}

function rotateVideo(){
    var vid = document.getElementById("myVideo_original");
    vid.style.transform = 'rotate(15deg)';
}

function check_hide_control() {
    check_status = document.getElementById("check_controls").checked;
    var video = document.getElementById("myVideo_original");
    if (check_status == true){
        video.removeAttribute("controls");
    }
    else{
        video.controls = true;
    }
}

function mirrorVideo(){
    var canvas = document.getElementById('mirrorCanvas');
    var video = document.getElementById("myVideo_original");
    
    video.addEventListener('timeupdate', function(){
        var ctx = canvas.getContext('2d');
        canvas.width = 0.5*video.videoWidth;
        canvas.height = 0.5*video.videoHeight;
        const canvasInterval = null;
    
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.scale(-1, 1);
        ctx.translate(-canvas.width/2, -canvas.height/2);
        ctx.drawImage(video, 0, 0,canvas.width,canvas.height);
    }, false);
}

function ValidateRegistration()
{

    var emailInput = document.getElementById('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailInput.value.match(mailformat)){
        alert("You have entered an invalid email address!");
        return false;
    }

    var phone_number = document.getElementById('phone');
    var phoneno = /^\d{10}$/;
    if(!phone_number.value.match(phoneno)){
        alert("You have entered an invalid phone number, it must have 10 digits");
        return false;
    }

    var firstname = document.getElementById('FirstName');
    var lastname = document.getElementById('LastName');
    var letters = /^[A-Za-z]+$/;
    if(!firstname.value.match(letters) || !lastname.value.match(letters)){
        alert('Your names are incorrect!');
        return false;
    }

    if(email.value == sessionStorage.getItem("email")){
        alert("User Info is already in Session Storage");
        var form = document.getElementById('submission_form');
        form.style.display = 'none';

        var login_form = document.getElementById('login_form');
        login_form.style.display = 'block';
    }
    else{
        alert("New registration complete!");
        var form = document.getElementById('submission_form');
        form.style.display = 'none';

        var comment_area = document.getElementById('comment-container');
        comment_area.style.display = 'block';

        
    }
    console.log(email.value);
    console.log("saving user info to Session Storage!");
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("phone", phone.value);
    sessionStorage.setItem("FirstName", FirstName.value);
    sessionStorage.setItem("LastName", LastName.value);
    
    return true;
}


function validateLogIn(){
    var form = document.getElementById('login_form');
    form.style.display = 'none';

    var comment_area = document.getElementById('flex');
    comment_area.style.display='flex';
}