function onClickRegister(){var A=new alertbox;if(A.id="#regAlert",""==$("#fname").val())return void A.showError("Please enter your first name.");if(""==$("#sname").val())return void A.showError("Please enter your surname.");if(""==$("#c_email").val())return void A.showError("Please enter your email.");if(""==$("#pno").val())return void A.showError("Please enter your contact number.");if(!validateEmail($("#c_email").val()))return void A.showError("Please enter valid email.");if(""==$("#cpass1").val())return void A.showError("Please enter password.");if(""==$("#cpass2").val())return void A.showError("Please enter confirm password.");if(!validatePass($("#cpass1").val())||!validatePass($("#cpass2").val()))return void A.showError("Password should have minimum 8 character.");if($("#cpass1").val()!=$("#cpass2").val())return void A.showError("Password does not match with each other.");if(""==$("#org_name").val())return void A.showError("Please enter organisation.");var e=new User;if(e.email=$("#c_email").val(),e.password=$("#cpass1").val(),e.firstname=$("#fname").val(),e.lastname=$("#sname").val(),e.organization=$("#org_name").val(),e.image="data:image/jpeg;base64,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",e.phone=$("#pno").val(),e.refcode=$("#hdnrefcode").val(),e.userid=parseInt($("#hdnUserID").val()),""==$("#hdnRefUser").val()||null==$("#hdnRefUser").val()){var r=_gUserService.IsEmailExists(e,null,!1);if(r)return void A.showError("Email already registered.");var a=_gUserService.IsOrgExists(e,null,!1);if(a)return void A.showError("Organisation already registered.")}var s=new CallBack;s.func="onCreatedUser",s.data=A,blockUI("body"),_gUserService.CreateProfile(e,s,!0)}function onCreatedUser(A,e){unblockUI("body"),null!=A?A.userid>0&&(""==$("#hdnRefUser").val()?e.showSuccess("Registered successfully. your account will get activated once its verified."):e.showSuccess("Registered successfully. click login button to login."),$("#c_email").val(""),$("#cpass1").val(""),$("#cpass2").val(""),$("#fname").val(""),$("#sname").val(""),$("#org_name").val(""),$("#pno").val("")):e.showError("Something went wrong."),window.setTimeout(function(){$(e.id).html("")},5e3)}function onClickLogin(){var A=new alertbox;if(A.id="#loginAlert",""==$("#l_email").val())return void A.showError("Please enter your email.");if(!validateEmail($("#l_email").val()))return void A.showError("Please enter valid email.");if(""==$("#l_pass").val())return void A.showError("Please enter password.");var e=new User;e.email=$("#l_email").val(),e.password=$("#l_pass").val();var r=new CallBack;r.func="onLoggedIn",r.data=A,blockUI("body"),_gUserService.AuthenticateUser(e,r,!0)}function onLoggedIn(A,e){unblockUI("body"),null!=A?A.userid>0&&(localStorage.setItem("userid",A.userid),localStorage.setItem("type",A.usertype),2==A.usertype&&(window.location.href="dashboard.aspx"),8==A.usertype&&(window.location.href="admin.aspx")):e.showError("Invalid credentials/user not verified/deactivated."),window.setTimeout(function(){$(e.id).html("")},5e3)}function onLoadLoginPage(){if(""!=$("#hdnRefUser").val()&&null!=$("#hdnRefUser").val()){$("#slide1").hide();var A=JSON.parse($("#hdnRefUser").val());$("#c_email").val(A[0].email),$("#c_email").attr("disabled","disabled"),$("#org_name").val(A[0].orgname),$("#org_name").attr("disabled","disabled"),$("#hdnUserID").val(A[0].userid),$("#hdnrefcode").val(A.refcode)}}function onClickForgotPass(){var A=new alertbox;if(A.id="#loginAlert",""==$("#l_email").val())return void A.showError("Please enter your email.");if(!validateEmail($("#l_email").val()))return void A.showError("Please enter valid email.");A.showError("");var e=new User;e.email=$("#l_email").val();var r=new CallBack;r.func="onForgotPass",r.data=A,blockUI("body"),_gUserService.ForgotPassword(e,r,!0)}function onForgotPass(A,e){unblockUI("body"),A?e.showSuccess("Reset password link has been send to your registered email."):e.showError("Email not registered/verified."),window.setTimeout(function(){$(e.id).html("")},5e3)}function onClickSavePassowrd(){var A=new alertbox;if(A.id="#passAlert",""==$("#pass1").val())return void A.showError("Please enter password.");if(""==$("#pass2").val())return void A.showError("Please enter confirm password.");if(!validatePass($("#pass1").val())||!validatePass($("#pass2").val()))return void A.showError("Password should have minimum 8 character.");if($("#pass1").val()!=$("#pass2").val())return void A.showError("Password does not match with each other.");var e=new User;e.userid=parseInt($("#hdnUserID").val()),e.password=$("#pass1").val();var r=new CallBack;r.func="onPassChanged",r.data=A,blockUI("body"),_gUserService.ChangePassword(e,r,!0)}function onPassChanged(A,e){unblockUI("body"),A?(e.showSuccess("Password changed successfully."),$("#passBtn").attr("disabled","disabled"),$("#pass1").val(""),$("#pass2").val("")):e.showError("something went wrong."),window.setTimeout(function(){$(e.id).html("")},5e3)}