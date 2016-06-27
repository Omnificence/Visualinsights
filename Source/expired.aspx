<%@ page language="C#" autoeventwireup="true" inherits="expired, App_Web_rgsmsy4n" %>

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
   
                    </div>
                    <div class="col-md-2" style="top:8px">
            
                    </div>
                    <div class="col-md-2" style="top:8px">
                       
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
                                    <span>Invalid </span><span style="font-family: 'Lato_Bold';">Link</span>
                                    <div class="col-md-12" style="top:-40px">
                                        <img src="assets/imgs/blue_line.png" style="height:1px;" />
                                    </div>
                                </div>

                                <div class="col-md-12" style="top:50px">
                                   <h2>Oops! the link has been expired or invalid</h2>
                                </div>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </div>

    </form>

   
</body>
</html>