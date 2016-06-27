<%@ page language="C#" autoeventwireup="true" inherits="login, App_Web_rgsmsy4n" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>visualinsights</title>

    <meta name="Resource-type" content="Document" />


    <link rel="stylesheet" type="text/css" href="assets/css/jquery.fullPage.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/examples.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/common.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/custom.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/mediaqueries.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/fonts.css" />



    <!--[if IE]>
        <script type="text/javascript">
             var console = { log: function() {} };
        </script>
    <![endif]-->
    <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>-->
    <script type="text/javascript" src="assets/js/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery.fullPage.js"></script>

    <script type="text/javascript" src="assets/js/webService/webservice.js"></script>
    <script type="text/javascript" src="assets/js/webService/webobjects.js"></script>
    <script type="text/javascript" src="assets/js/webService/userservice.js"></script>

    <script type="text/javascript" src="assets/js/inti.js"></script>
    <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="assets/js/examples.js"></script>
    <script type="text/javascript" src="assets/js/custom.js"></script>
    <script type="text/javascript" src="assets/js/common.js"></script>
    <script type="text/javascript" src="assets/js/custom/login.js"></script>

    <style>
    </style>

</head>
<body>
    <form runat="server">

    <asp:HiddenField ID="hdnRefUser" runat="server" />
        <asp:HiddenField ID="hdnrefcode" runat="server" />
             <asp:HiddenField ID="hdnUserID" runat="server" Value="0" />
    <div class="top-nav-fixed">
        <div class="nav-relative">
            <!--<div class="nav-logo">
                <img src="assets/imgs/visualinsight_logo.png" class="img-logo" />

            </div>
            <div class="nav-ul">
                <ul>
                    <li class="im"><a>About us</a></li>
                    <li><a>How it works</a></li>
                    <li><a>Our work</a></li>
                    <li class="ls"><input type="button" value="login" class="login-btn" /></li>
                </ul>
            </div>-->
            <div class="row">
                <div class="col-md-12" style="text-align:center">
                    <div class="col-md-3">
                        <a href="Index.html"><img src="assets/imgs/visualinsight_logo.png" class="img-logo pull-left" /></a>
                    </div>
                    <div class="col-md-2" style="top:8px">
                        <a class="nav-a" href="aboutus.html">About us</a>
                    </div>
                    <div class="col-md-2" style="top:8px">
                        <a class="nav-a">How it works</a>
                    </div>
                    <div class="col-md-2" style="top:8px">
                        <a class="nav-a" href="ourwork.html">Our work</a><!--id="ourworkmovedown"-->
                    </div>
                    <div class="col-md-3" style="top:8px">
                        <a href="login.aspx"><input type="button" value="Login" class="login-btn pull-right" id="loginmovedown"  /></a><!--id="loginmovedown"-->

                    </div>
                </div>
            </div>

        </div>

    </div>

    <div id="fullpage">

       
        <!--login-->
        <div class="section moveDown" id="section6">
            <div class="wrap login-wrap">


                <div class="slide" id="slide1" data-anchor="slide1">
                    <div class="row enter_visual_insights" style="display:block;text-align:center;">
                        <div class="col-md-12" style="top:70px;">
                            <div class="col-md-2"></div>
                            <div class="col-md-8" style="text-align:center;display:block;">
                                <div class="col-md-12" style="font-family: 'Lato_Light';font-size:50px;color:#0E191F;top:70px;">
                                    <span>Enter </span><span style="font-family: 'Lato_Bold';">Visual</span><span>insights</span>
                                    <div class="col-md-12" style="top:-40px">
                                        <img src="assets/imgs/blue_line.png" style="height:1px;" />
                                    </div>
                                </div>

                                <div class="col-md-12" style="top:50px">
                                    <form>
                                        <div class="col-md-12">
                                            <input type="email" placeholder="E-mail Address" class="frm-ac-fields" id="l_email" required style="width:35%" />
                                        </div>

                                        <div class="col-md-12" style="margin-top:20px;">
                                            <input type="password" placeholder="Password" class="frm-ac-fields" id="l_pass" required style="width:35%" />
                                        </div>
                                        <div class="col-md-12" style="margin-top:20px;text-align:center; font-size:12px;color:#B7BABC;font-family: 'Lato_Regular';">
                                            <span>Forgot username or password?</span><span onclick="onClickForgotPass()" style="color:black;cursor:pointer;"> Click Here</span>
                                        </div>
                                        <div class="col-md-12" style="margin-top:20px; text-align:center;">
                                            <input type="button" onclick="onClickLogin()" value="Enter" class="enter-btn" id="login_btn" style="width:35%" />
                                        </div>

                                        <div class="col-md-12" style="color:#0E191F!important;text-align:center;font-family: 'Lato_Regular';font-size:12px;margin-top:20px;">
                                            <p style="    font-size: 14px; color: #B5B3B3; margin-bottom:10px;">Or</p>
                                            <span>
                                                <a id="moveRight"  style="font-size: 14px; color:#0E191F!important;text-decoration:none!important;cursor:pointer!important;">Create an account</a>
                                            </span>

                                        </div>
                                        <div class="col-md-12" style="margin-top:10px;">
                                            <div style="width:35%; margin:0 auto" id="loginAlert">

                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                </div>

                <div class="slide" id="slide2" data-anchor="slide2">

                    <div class="row create_account" style="display:block;text-align:center;">
                        <div class="col-md-12" style="top:70px;">
                            <div class="col-md-2"></div>
                            <div class="col-md-8" style="text-align:center;display:block;">
                                <div class="col-md-12" style="font-family: 'Lato_Light';font-size:50px;color:#0E191F;top:70px;">
                                    <span>Create your </span><span style="font-family: 'Lato_Bold';">Account!</span>
                                    <div class="col-md-12" style="top:-40px">
                                        <img src="assets/imgs/blue_line.png" style="height:1px;" />
                                    </div>
                                </div>

                                <div class="col-md-12" style="top:50px">
                                    <form>
                                        <div class="col-md-12">
                                            <div class="col-md-3" style="text-align:center">
                                            </div>
                                            <div class="col-md-3" style="text-align:center">
                                                <input type="text" style="width:100%;" placeholder="First Name" class="frm-ac-fields" id="fname" required />
                                            </div>
                                            <div class="col-md-3" style="text-align:center">
                                                <input type="text" style="width:100%;" placeholder="Surname" class="frm-ac-fields" id="sname" required />
                                            </div>
                                            <div class="col-md-3" style="text-align:center">
                                            </div>
                                        </div>

                                        <div class="col-md-12" style="margin-top:20px;">
                                            <input type="email" style="width:47%;" placeholder="E-mail Address" class="frm-ac-fields" id="c_email" required  />
                                        </div>
                                        <div class="col-md-12" style="margin-top:20px;">
                                            <div class="col-md-3" style="text-align:center">
                                            </div>
                                            <div class="col-md-3" style="text-align:center">
                                                <input type="password" style="width:100%;" placeholder="Password" class="frm-ac-fields" id="cpass1" required />
                                            </div>
                                            <div class="col-md-3" style="text-align:center">
                                                <input type="password" style="width:100%;" placeholder="Retype Password" class="frm-ac-fields" id="cpass2" required />
                                            </div>
                                            <div class="col-md-3" style="text-align:center">
                                            </div>
                                        </div>
                                        <div class="col-md-12" style="margin-top:20px;">
                                            <input type="text" placeholder="Organisation" class="frm-ac-fields" id="org_name" required style="width:47%" />
                                        </div>
                                        <div class="col-md-12" style="margin-top:20px;">
                                            <input type="text" placeholder="Phone Number" class="frm-ac-fields" id="pno" required style="width:47%" />
                                        </div>
                                        <div class="col-md-12" style="margin-top:20px;text-align:center; font-size:12px;color:#B7BABC;font-family: 'Lato_Regular';">
                                            <span>By clicking Submit, you agree to our</span> <span data-toggle="modal" data-target="#termsModal" style="color:black; cursor:pointer;">Terms of Service</span><br /><span style="position:relative;left:-30px;">and that you have read our</span><span data-toggle="modal" data-target="#privacyModal" style="color:black; cursor:pointer;position:relative;left:-27px;">Privacy Policy.</span>
                                        </div>
                                        <div class="col-md-12" style="margin-top:20px;text-align:center;">
                                            <input type="button" value="Submit" onclick="onClickRegister()" class="enter-btn" id="submit_btn" required style="width:47%" />
                                        </div>
                                        <div class="col-md-12" style="margin-top:10px;" >
                                            <div style="width:47%; margin:0 auto;" id="regAlert">

                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    </div>
    <div id="aboutusModal" class="modal fade" role="dialog" style="padding:0 !important ">
        <div class="modal-dialog modal-lg" style="width:100%;height:100%;margin:0">


            <!-- Modal content-->
            <div class="modal-content" style="width:100%;height:100%;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" style="font-size: 30px;">&times;</button>
                    <h2 class="modal-title">About Us</h2>
                </div>
                <div class="modal-body" style="height:75%">
                    <p>About Visual Insights</p><br />
                    <p style="    font-size: 18px;">
 Gravity Consulting has been using its expertise in Information Design and Visual Communication to empower organisations and accelerate business transformations through simple, vibrant infographics. We have a solid track record of delivering Visualisation services for federal, state government and private organisations in Australia.
</p> <br /><p style ="    font-size: 18px;">
    Visual Insights is Gravity’s endeavour to take this service to the next level through an online platform. Now you can remotely request for infographics by answering a simple questionnaire and get started.
</p>
                </div>
                <!--<div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>-->
            </div>



        </div>
    </div>
        

          <div id="termsModal" class="modal fade" role="dialog" style="padding:0 !important ">
        <div class="modal-dialog modal-lg" style="width:100%;height:100%;margin:0">


            <!-- Modal content-->
            <div class="modal-content" style="width:100%;height:100%;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" style="font-size: 30px;">&times;</button>
                    <h2 class="modal-title">Terms of Service</h2>
                </div>
                <div class="modal-body" style="height:75%">
                    <p>Terms of Service Content goes here!!</p>
                </div>
                <!--<div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>-->
            </div>



        </div>
    </div>



          <div id="privacyModal" class="modal fade" role="dialog" style="padding:0 !important ">
        <div class="modal-dialog modal-lg" style="width:100%;height:100%;margin:0">


            <!-- Modal content-->
            <div class="modal-content" style="width:100%;height:100%;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" style="font-size: 30px;">&times;</button>
                    <h2 class="modal-title">Privacy Policy</h2>
                </div>
                <div class="modal-body" style="height:75%">
                    <p>Privacy Policy Content goes here!!</p>
                </div>
                <!--<div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>-->
            </div>



        </div>
    </div>
    </form>

    <script>
        $(document).ready(function () {

            onLoadLoginPage();
        });
    </script>
</body>
</html>