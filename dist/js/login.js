
// var EmailCheck;
// var PasswordCheck;

function callbacklogin(data)
{
  
  if (data.Error)
  {
    $('#Checkerror').text('check your information');
  }
  else
  { 
    console.log("SignIn");
    console.log(data);
  }
}
function callbackSignUp(data)
{
  
  if (data.Error)
  {
    $('#Checkerror').text('check your information');
  }
  else
  { 
    console.log("SignUp");
    console.log(data);
  }
}


function Main(){
    $('#password').keydown(function(e){
      if (e.keyCode == 13 )
      {
        $('#SignIn').trigger('click');
      }
    })
    $("#SignIn").on('click',function(e){
        e.preventDefault(); 
        var name= $("#username").val();
        var email= $("#email").val();
        var password =$("#password").val();        
        if(name == "")
          $('#usernameerror').text('enter your username ');
        // EmailCheck=email;
        else if(email == "")
            $('#emailerror').text('enter your email or username');
        // PasswordCheck=password;
        else if(password =="")
          $('#passworderror').text('enter your password');
        else{
            var param={
              "name" : name,
              "email": email,
              "password":  password  
            };
            console.log(param);
            $.JUICE.PostRequest('api/login',param,callbacklogin);
        }
        
    });

    $("#SignUp").on('click',function(e){
      e.preventDefault(); 
      var name= $("#usernameReg").val(),
          email= $("#emailReg").val(),
          password =$("#passwordReg").val(),   
          c_password =$("#passwordCon").val();
      if(name == "")
        $('#usernameerror').text('enter your username ');
      // EmailCheck=email;
      else if(email == "")
          $('#emailerror').text('enter your email or username');
      // PasswordCheck=password;
      else if(password =="")
        $('#passworderror').text('enter your password');
      else{
          var param={
            "name" : name,
            "email": email,
            "password":  password,
            "c_password": c_password,
          };
          console.log(param);
          $.JUICE.PostRequest('api/registration',param,callbackSignUp);
      }
      
  });


}
