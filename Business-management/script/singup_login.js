// start signup coding
function signup()
{
	var name = btoa(document.getElementById("name").value);
	var email = btoa(document.getElementById("email").value);
	var mobile = btoa(document.getElementById("mobile").value);
	var pass = btoa(document.getElementById("password").value);
	if(name !="" && email != "" && mobile != "" && pass != "")
	{
		var user_input = {name:name,email:email,mobile:mobile,pass:pass};
		var user_data = JSON.stringify(user_input);
		localStorage.setItem(email,user_data);
		document.getElementById("signup_success").innerHTML ="signup success";
		document.getElementById("name").value="";
		document.getElementById("email").value="";
		mobile = document.getElementById("mobile").value="";
		var pass = document.getElementById("password").value="";
		setTimeout(function(){document.getElementById("signup_success").innerHTML=""},2000);
		return false;
	}
}

function user_existed()
{
	var email = btoa(document.getElementById("email").value);
	if(localStorage.getItem(email) != null)
	{
		document.getElementById("user_found").innerHTML = "user already existed";
		document.getElementById("mobile").disabled=true;
		document.getElementById("password").disabled=true;
		document.getElementById("signup_submit").disabled=true;
		document.getElementById("email").style.background="black";
		document.getElementById("email").style.color="white";
		document.getElementById("email").classList.add("pulse");
		document.getElementById("email").onclick = function()
		{
			this.value="";
			this.style.background="";
			this.style.color="";
			document.getElementById("user_found").innerHTML = "";
			document.getElementById("mobile").disabled=false;
		document.getElementById("password").disabled=false;
		document.getElementById("signup_submit").disabled=false;
		}
		
		
	}
}
// start login coding

function login()
{
	var username = btoa(document.getElementById("login_user").value);
	var pass = btoa(document.getElementById("login_password").value);
	var login_input = {username:username,pass:pass};
	var login_data = JSON.stringify(login_input);
	sessionStorage.setItem(username,login_data);
	var session_data = sessionStorage.getItem(username);
	var user_detail = JSON.parse(session_data);
	if(localStorage.getItem(user_detail.username) == null)
	{
		alert("user not found");
	}
	else{
		if(localStorage.getItem(user_detail.username).match(user_detail.pass))
		{
			location.replace("profile/profile.html");
			sessionStorage.setItem('user_mail',username);
			return false;
			
		}
		else{ alert('password not match');}
	}
}