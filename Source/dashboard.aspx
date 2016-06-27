<%@ page language="C#" autoeventwireup="true" inherits="dashboard, App_Web_rgsmsy4n" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>visualinsights</title>

    <meta name="Resource-type" content="Document" />
    <!--<meta http-equiv="X-UA-Compatible" content="IE=9">-->

    <link rel="stylesheet" type="text/css" href="assets/css/jquery.fullPage.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrapAdmin.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/examplesAdmin.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/common.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/customAdmin.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/mediaqueries.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/fonts.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/pages.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/imageNotes.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/startproject.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/jquery.bxslider.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap-checkbox.css" />

    <link rel="stylesheet" type="text/css" href="assets/css/basic.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/dropzone.css" />
    <!--[if IE]>
        <script type="text/javascript">
             var console = { log: function() {} };
        </script>
    <![endif]-->
    <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>-->
    <script type="text/javascript" src="assets/js/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="assets/js/custom/circleChart.js"></script>
    <script type="text/javascript" src="assets/js/jquery.bxslider.min.js"></script>

    <script type="text/javascript" src="assets/js/jquery.mixitup.js"></script>
    <script type="text/javascript" src="assets/js/imageNote/jquery.fs.zoetrope.min.js"></script>
    <script type="text/javascript" src="assets/js/imageNote/toe.min.js"></script>
    <script type="text/javascript" src="assets/js/imageNote/jquery.mousewheel.min.js"></script>
    <script type="text/javascript" src="assets/js/imageNote/imgViewer.min.js"></script>
    <script type="text/javascript" src="assets/js/imageNote/printThis.js"></script>
    <script type="text/javascript" src="assets/js/imageNote/imgNotes.js"></script>
    <script type="text/javascript" src="assets/js/dropzone.js"></script>

    <script type="text/javascript" src="assets/js/jquery.fullPage.js"></script>
    <script type="text/javascript" src="assets/js/webService/webservice.js"></script>
    <script type="text/javascript" src="assets/js/webService/webobjects.js"></script>
    <script type="text/javascript" src="assets/js/webService/userservice.js"></script>



    <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="assets/js/inti.js"></script>


    <script type="text/javascript" src="assets/js/examples.js"></script>
    <script type="text/javascript" src="assets/js/commonAdmin.js"></script>
    <script type="text/javascript" src="assets/js/datatable.js"></script>
    <script type="text/javascript" src="assets/js/bootstrapdatatable.min.js"></script>
    <script type="text/javascript" src="assets/js/custom/common.js"></script>
    <script type="text/javascript" src="assets/js/custom/collbDash.js"></script>


    <style>
    </style>
</head>
<body>

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
                <form runat="server">
                    <asp:HiddenField ID="hdnUsers" runat="server" />
                    <asp:HiddenField ID="hdnOrgName" runat="server" />
                    <asp:HiddenField ID="hdnProjects" runat="server" Value="0" />
                    <asp:HiddenField ID="hdnStageID" runat="server" Value="0" />
                     <asp:HiddenField ID="hdnUserID" runat="server" />
                     <asp:HiddenField ID="hdnUName" runat="server" />
                    <input type="hidden" id="hdnProjectID" />
                </form>
                <div class="col-md-12" style="text-align: center; font-family: 'Lato_Regular';">
                    <div class="col-md-3">
                       <a href="Index.html">   <img src="assets/imgs/visualinsight_logo.png" class="img-logo pull-left" /></a>
                    </div>
                    <div class="col-md-2" style="top: 8px">
                        <a onclick="onClickDashboard(this)" class="nav-a active">Dashboard</a>
                    </div>
                    <div class="col-md-2" style="top: 8px">
                        <a onclick="onClickProject(this)" id="proA" class="nav-a">Project</a>
                    </div>
                    <div class="col-md-2" style="top: 8px">
                        <input onclick="onClickStartProject(this)" type="button" value="Start Project" class="stProject" id="startProject" />
                    </div>
                    <div class="col-md-3" style="top: 8px">
                        <div style="position: relative; display: inline-block; padding-right: 5px;">
                            <div>
                                <div id="notification-badge"></div>
                            </div>
                        </div>
                        <div style="position: relative; display: inline-block; padding-right: 5px;">
                            <div class="dropdown">
                                <a id="nLabel" data-toggle="dropdown" role="button" aria-haspopup="true" onclick="GetNotifications();" aria-expanded="false">
                                    <img src="assets/imgs/bell.png" style="width: 20px; margin: 0;" />
                                </a>
                                <ul class="dropdown-menu pull-right" aria-labelledby="nLabel" id="new-notifications">
                                </ul>
                            </div>
                        </div>
                        <div style="position: relative; display: inline-block; padding-right: 5px;">
                            <div class="dropdown">
                                <a id="dLabel" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <img src="assets/imgs/settings.png" style="width: 20px; margin: 0;" />
                                </a>
                                <ul class="dropdown-menu pull-right" aria-labelledby="dLabel">
                                    <li><a href="login.aspx?type=logout">Logout</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="fullpage">

        <!--first page slide1-->
        <div class="section" id="section0">
            <div class="section-1 wrap" style="display: block; height: auto; position: relative;">
                <div class="slide" id="slide1" data-anchor="slide1" style="margin-bottom: 40px;">
                    <div style="padding-top: 90px;">
                        <div class="col-md-12">
                            <div class="col-md-8" style="border-right: 2px solid #B7BABC">
                                <div style="padding-bottom: 30px;">
                                    <div class="row">
                                        <div class="col-md-12 ll24">
                                            Overall Status
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <table class="fullT">
                                                <tr>
                                                    <td>
                                                        <div class="circle pull-right" id="totalProCirc">
                                                        </div>
                                                    </td>
                                                    <td style="height: 200px;    width: 110px;">
                                                        <table style="float: left; height: 195px;width: 100%;">
                                                            <tr>
                                                                <td style="vertical-align: top;"> <div  class="stCount"  id="faCount">0</div>
                                                                    <span class="a">Final Artwork</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="vertical-align: bottom;">
                                                                   <div  class="stCount"  id="sCount">0</div>
                                                                    <span class="c">Story Board</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="width: 200px;">
                                                        <div class="" style="margin: 0 auto; width: 200px; height: 200px;" id="centerProCirc">
                                                        </div>
                                                        <%--   <img style="margin: 10px;" src="assets/imgs/graph.png" /></td>--%>
                                                    </td>
                                                    <td style="height: 200px;    width: 110px;">
                                                        <table style="float: left; height: 195px;width: 100%;">
                                                            <tr>
                                                                <td style="vertical-align: top;">
                                                                    <div class="stCount" id="igCount">0</div>
                                                                    <span class="cg">Information <br /> Gathering</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="vertical-align: bottom;">
                                                                     <div class="stCount" id="iaCount">0</div>
                                                                    <span class="im">Information <br /> Architecture</span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td>
                                                        <div class="circle pull-left" id="runningProCirc">
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12" style="text-align: left;">
                                            <div class="row">
                                                <div class="col-md-12 ll24">
                                                    List of Projects
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <span id="das-run-pro">14</span>/<span id="das-tot-pro">20</span> On-going Projects
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="clearfix"></div>
                                <div class="row">

                                    <div class="col-md-12" style="height:630px;">
                                        <table id="example" class="dataTable table noborder" style="text-align: left;" cellspacing="0" width="100%">
                                            <thead>
                                                <tr>
                                                    <th>Project Name</th>
                                                    <th>Project Types</th>
                                                    <th>Project Owner</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>

                                            <tbody id="proListTable">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!--display the colabrators list in right side-->
                            <div class="col-md-4">
                                <div style="padding-left: 50px; padding-top: 5px">
                                    <div class="row">
                                        <div class="col-md-12" style="text-align: left;">
                                            <span class="ll24">List of Collaborators</span><br />
                                            <span class="ll14"><span id="noAssigned"></span>/5 slots assigned</span>
                                        </div>
                                    </div>
                                    <div class="row" id="CollabListDiv">
                                    </div>
                                    <div class="row">
                                        <div id="collAlert" class="col-md-12">
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="slide" id="slide2" data-anchor="slide2" style="margin-bottom: 40px;">
                    <div class="container" style="padding-top: 90px;">
                        <div class="col-md-12" style="text-align: left;">
                            <i onclick=" $.fn.fullpage.silentMoveTo('firstPage', 0);" class="backArrow glyphicon glyphicon-menu-left"></i>
                            <h3>Projects </h3>
                            <p><span id="pro-run">12</span>/<span id="pro-tot">20</span> On-going Projects</p>
                        </div>
                        <div class="col-md-12" style="margin-top: 10px; margin-bottom: 10px;">
                            <div class="col-md-4">
                                <div class="input-group">
                                    <input type="text" id="txtProName" class="form-control" placeholder="Search by name" />
                                    <span onclick="onClickSearchByName()" class="input-group-addon" style="cursor: pointer;"><i class="glyphicon glyphicon-search"></i></span>
                                </div>
                            </div>

                            <%--                                <div class="col-md-3">
                                    <select id="ddStatus" onchange="onChangedFilter()" class="form-control">
                                        <option value=".running,.completed">Select Status</option>
                                        <option value=".running">Running</option>
                                        <option value=".completed">Completed</option>
                                    </select>
                                </div>--%>
                            <div class="col-md-4">
                                <select id="ddStage" onchange="onChangedFilter()" class="form-control" style="cursor:pointer;">
                                    <option value=".informationgathering,.informationarchitecture,.storyboard,.finalartwork,.completed" class="option_pointer">All Stage</option>
                                    <option value=".informationgathering" class="option_pointer">Information Gathering</option>
                                    <option value=".informationarchitecture" class="option_pointer">Information Architecture</option>
                                    <option value=".storyboard" class="option_pointer">Storyboard</option>
                                    <option value=".finalartwork" class="option_pointer">Final Artwork</option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <select id="ddType" onchange="onChangedFilter()" class="form-control" style="cursor:pointer;">
                                    <option value=".running,.completed" class="option_pointer">All Status</option>
                                    <option value=".running" class="option_pointer">Running</option>
                                    <option value=".completed" class="option_pointer">Completed</option>
                                </select>
                            </div>

                        </div>
                        <div class="clearfix">
                        </div>
                        <hr />
                        <div class="row" id="ProContainer">
                            <%--<div class="col-md-4 mix infographic consulting">
                                    <div onclick="onClickStartProject(this)" class="cg pholder">
                                        <div class="pImgHolder">
                                            <div class="shHov">
                                                <img src="assets/imgs/eye.png" />

                                            </div>
                                            <img src="assets/imgs/ig1.png" />
                                        </div>
                                        <div class="line">
                                        </div>
                                        <div>
                                            <table class="fullT projT">
                                                <tr>
                                                    <td class="txt-lt vTop">
                                                        <p class="lr14b">Lorem Ipsum</p>
                                                        <span class="ll12i">Started on 10/01/2016</span></td>
                                                    <td></td>
                                                    <td class="lr14b vTop">Infographic
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <ul class="indicator">
                                                            <li class="active">Cg</li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <p>Jayasudhan</p>

                                                        <span class="ll12i">Omnificence</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mix interactive infomodel">
                                    <div onclick="onClickStartProject(this)" class="im pholder">
                                        <div class="pImgHolder">
                                            <div class="shHov">
                                                <img src="assets/imgs/eye.png" />
                                            </div>
                                            <img src="assets/imgs/ig1.png" />
                                        </div>
                                        <div class="line">
                                        </div>
                                        <div>
                                            <table class="fullT projT">
                                                <tr>
                                                    <td class="txt-lt vTop">
                                                        <p class="lr14b">Lorem Ipsum</p>
                                                        <span class="ll12i">Started on 10/01/2016</span></td>
                                                    <td></td>
                                                    <td class="lr14b vTop">Interactive Infographic
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <ul class="indicator">
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li class="active">IM</li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <p>Jayasudhan</p>

                                                        <span class="ll12i">Omnificence</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mix infographic concept">
                                    <div onclick="onClickStartProject(this)" class="c pholder">
                                        <div class="pImgHolder">
                                            <div class="shHov">
                                                <img src="assets/imgs/eye.png" />
                                            </div>
                                            <img src="assets/imgs/ig1.png" />
                                        </div>
                                        <div class="line">
                                        </div>
                                        <div>
                                            <table class="fullT projT">
                                                <tr>
                                                    <td class="txt-lt vTop">
                                                        <p class="lr14b">Lorem Ipsum</p>
                                                        <span class="ll12i">Started on 10/01/2016</span></td>
                                                    <td></td>
                                                    <td class="lr14b vTop">Infographic
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <ul class="indicator">
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li class="active">C</li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <p>Jayasudhan</p>

                                                        <span class="ll12i">Omnificence</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mix interactive artwork">
                                    <div onclick="onClickStartProject(this)" class="a pholder">
                                        <div class="pImgHolder">
                                            <div class="shHov">
                                                <img src="assets/imgs/eye.png" />
                                            </div>
                                            <img src="assets/imgs/ig1.png" />
                                        </div>
                                        <div class="line">
                                        </div>
                                        <div>
                                            <table class="fullT projT">
                                                <tr>
                                                    <td class="txt-lt vTop">
                                                        <p class="lr14b">Lorem Ipsum</p>
                                                        <span class="ll12i">Started on 10/01/2016</span></td>
                                                    <td></td>
                                                    <td class="lr14b vTop">Interactive Infographic
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <ul class="indicator">
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li class="active">A</li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <p>Jayasudhan</p>

                                                        <span class="ll12i">Omnificence</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mix infographic completed">
                                    <div onclick="onClickStartProject(this)" class="cg pholder">
                                        <div class="pImgHolder">
                                            <div class="shHov">
                                                <img src="assets/imgs/eye.png" />
                                            </div>
                                            <img src="assets/imgs/ig1.png" />
                                        </div>
                                        <div class="line">
                                        </div>
                                        <div>
                                            <table class="fullT projT">
                                                <tr>
                                                    <td class="txt-lt vTop">
                                                        <p class="lr14b">Lorem Ipsum</p>
                                                        <span class="ll12i">Started on 10/01/2016</span></td>
                                                    <td></td>
                                                    <td class="lr14b vTop">Infographic
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <ul class="indicator">
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li><i class="glyphicon glyphicon-ok"></i></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <p>Jayasudhan</p>

                                                        <span class="ll12i">Omnificence</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mix infographic consulting">
                                    <div onclick="onClickStartProject(this)" class="cg pholder">
                                        <div class="pImgHolder">
                                            <div class="shHov">
                                                <img src="assets/imgs/eye.png" />
                                            </div>
                                            <img src="assets/imgs/ig1.png" />
                                        </div>
                                        <div class="line">
                                        </div>
                                        <div>
                                            <table class="fullT projT">
                                                <tr>
                                                    <td class="txt-lt vTop">
                                                        <p class="lr14b">Lorem Ipsum</p>
                                                        <span class="ll12i">Started on 10/01/2016</span></td>
                                                    <td></td>
                                                    <td class="lr14b vTop">Infographic
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <ul class="indicator">
                                                            <li class="active">Cg</li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                            <li class="empty"><i class="glyphicon glyphicon-ok"></i></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <p>Jayasudhan</p>

                                                        <span class="ll12i">Omnificence</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>--%>
                        </div>
                    </div>
                </div>

                <div class="slide" id="slide3" data-anchor="slide3" style="background: rgb(252, 252, 252);">
                    <div class="" style="padding-top: 60px; height: 100%;    background: #FFFFFF;">
                        <div style="height: 100%;">

                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs container" role="tablist">
                                <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">
                                    <img class="gathImg" src="assets/imgs/gath.png" /><br />
                                    InformationGathering</a></li>

                                <li role="presentation">
                                    <div style="position: relative; padding: 10px 15px;" aria-controls="home" role="tab">
                                        <img class="arr" src="assets/imgs/arrow3.png" />
                                    </div>
                                </li>

                                <li role="presentation"><a style="cursor: not-allowed;" href="#profile" aria-controls="profile" role="tab">
                                    <img class="arcImg" src="assets/imgs/arch2.png" /><br />
                                    Information Architecture</a></li>

                                <li role="presentation">
                                    <div style="position: relative; padding: 10px 15px;" aria-controls="home" role="tab">
                                        <img class="arr" src="assets/imgs/arrow3.png" />
                                    </div>
                                </li>

                                <li role="presentation"><a style="cursor: not-allowed;" href="#messages" aria-controls="messages" role="tab">
                                    <img class="storyImg" src="assets/imgs/story2.png" /><br />
                                    Storyboard</a></li>

                                <li role="presentation">
                                    <div style="position: relative; padding: 10px 15px;" aria-controls="home" role="tab">
                                        <img class="arr" src="assets/imgs/arrow3.png" />
                                    </div>
                                </li>

                                <li role="presentation"><a style="cursor: not-allowed;" href="#settings" aria-controls="settings" role="tab">
                                    <img class="finalImg" src="assets/imgs/final2.png" /><br />
                                    Final Artwork</a></li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="" style="height: 100%; background: rgb(252, 252, 252); -webkit-box-shadow: inset 0 20px 20px -28px rgba(0,0,0,0.8); -moz-box-shadow: inset 0 20px 20px -28px rgba(0,0,0,0.8); box-shadow: inset 0 20px 20px -28px rgba(0,0,0,0.8); padding-top: 8px;">
                                <div class="container tab-content" style="height: 100%;">
                                    <div role="tabpanel" class="tab-pane active" id="home">
                                        <div class="slider1" style="height: 100px;">
                                            <div class="reqDiv">
                                                <div class="spname clr-blue">Project Name</div>
                                                <div class="sptitle">CONTENT/PURPOSE</div>
                                                <div class="row" style="margin-top: 30px;">
                                                    <div class="col-md-6 ">
                                                        <div id="qid1" data-type="textarea" class="qBox">
                                                            <p>What is the over all purpose of this visualisation?</p>
                                                            <textarea rows="6" placeholder="Please mention the purpose of this visualisation"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div id="qid2" data-type="textarea" class="qBox">


                                                            <p>In what way do you intend to present this information ?</p>
                                                            <span>( i.e: as part of a collaborative workshop, as a communication requiring no interaction, as
a presentation, as a sales pitch or as a point of discussion in a meeting etc. )</span>
                                                            <textarea rows="4" placeholder="Describe briefly how this visualisation would be presented"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6" style="margin-top: 30px;">
                                                        <div id="qid3" data-type="textarea" class="qBox">
                                                            <p>Who is the intended audience for this visualisation ?</p>
                                                            <textarea rows="6" placeholder="Please list the intended audience for this visualisation"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6" style="margin-top: 30px;">
                                                        <div>UPLOADS</div>
                                                        <div class="qBox">
                                                            <%--<textarea rows="6" placeholder="Files Drag & Drop here from your computer"></textarea>--%>
                                                            <form action="service\uploadfiles.aspx" id="drop-purpose" style="overflow: auto; height: 160px; padding: 0px; background-color: white; border: 1px solid rgb(169, 169, 169)" class="dropzone">
                                                                <input type="hidden" class="pCount" name="hdnProjectCount" id="hdnProjectCount" value="" />
                                                                <input type="hidden" class="" name="hdnFolderName" id="hdnFolderName" value="purpose" />

                                                                <div class="fallback">
                                                                    <input name="file" type="file" multiple />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="reqDiv">
                                                <div class="spname clr-blue">Project Name</div>
                                                <div class="sptitle">CONTENT/INTENT</div>
                                                <div class="row" style="margin-top: 30px;">
                                                    <div class="col-md-6 ">
                                                        <div id="qid4" data-type="textarea" class="qBox">
                                                            <p>What is the one main message you want to put across through this infographic?</p>
                                                            <textarea style="height: 115px;" placeholder="Please mention the key message of this visualisation"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div id="qid5" data-type="textarea" class="qBox">
                                                            <p>What title would you give to this infographic ?*</p>
                                                            <textarea rows="6" placeholder="Suggest a title that would describe the purpose of the visualisation"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6" style="margin-top: 30px;">
                                                        <div id="qid6" data-type="textarea" class="qBox">
                                                            <p>Who will be presenting this visualisation and why ?</p>
                                                            <textarea rows="6" placeholder="Please mention who would be presenting this visualisation"></textarea>
                                                        </div>
                                                    </div>
                                                    <%--<div class="col-md-6" style="margin-top: 30px;">
                                                        <div>UPLOADS</div>
                                                        <div class="qBox">
                                                            <form action="service\uploadfiles.aspx" id="drop-intent" style="overflow: auto; height: 160px; padding: 0px; background-color: white; border: 1px solid rgb(169, 169, 169)" class="dropzone">
                                                                <input type="hidden" class="pCount" name="hdnProjectCount" id="hdnProjectCount" value="" />
                                                                <input type="hidden" class="" name="hdnFolderName" id="hdnFolderName" value="indent" />

                                                                <div class="fallback">
                                                                    <input name="file" type="file" multiple />
                                                                </div>
                                                            </form>

                                                        </div>
                                                    </div>--%>
                                                </div>
                                            </div>
                                            <div class="reqDiv">
                                                <div class="spname clr-blue">Project Name</div>
                                                <div class="sptitle">REQUIREMENTS</div>
                                                <div class="row" style="margin-top: 30px;">
                                                    <div class="col-md-6 ">
                                                        <div class="qBox" style="padding: 40px;">
                                                            <div id="qid7" data-type="ratio">
                                                                <p>How will you be presenting this information? </p>
                                                                <span>Check whichever options are applicable:</span><br />
                                                                <div class="radio radio-info radio-inline">
                                                                    <input type="radio" id="inlineRadio1" value="On Screen" name="qid7" />
                                                                    <label for="inlineRadio1">On Screen </label>
                                                                </div>
                                                                <div class="radio  radio-info  radio-inline">
                                                                    <input type="radio" id="inlineRadio2" value="As a handout (on paper)" name="qid7" />
                                                                    <label for="inlineRadio2">As a handout (on paper) </label>
                                                                </div>
                                                                <div class="radio  radio-info  radio-inline">
                                                                    <input type="radio" id="inlineRadio3" value="As an interactive visualisation" name="qid7" />
                                                                    <label for="inlineRadio3">As an interactive visualisation </label>
                                                                </div>
                                                                <div class="radio  radio-info  radio-inline">
                                                                    <input type="radio" id="inlineRadio4" value="Other" name="qid7" />
                                                                    <label for="inlineRadio4">Other </label>
                                                                </div>
                                                                <input type="text" id="txtOthers" style="font-size: 12px; padding: 5px; width: 200px;" placeholder="please specify" />
                                                            </div>
                                                            <div id="qid8" data-type="ratio" style="margin-top: 20px;">
                                                                <p>
                                                                    Are you going to use this visualisation as:
                                                                </p><span> Check whichever options are applicable:</span><br />
                                                                <div class="radio radio-info radio-inline">
                                                                    <input type="radio" id="inlineRadio11" value="One time communication" name="qid8" />
                                                                    <label for="inlineRadio11">One time communication </label>
                                                                </div>
                                                                <div class="radio  radio-info  radio-inline">
                                                                    <input type="radio" id="inlineRadio12" value="Future reference / guide" name="qid8" />
                                                                    <label for="inlineRadio12">Future reference / guide </label>
                                                                </div>
                                                                <div class="radio  radio-info  radio-inline">
                                                                    <input type="radio" id="inlineRadio13" value="A document that is going to be updated / changed over time" name="qid8" />
                                                                    <label for="inlineRadio13">A document that is going to be updated / changed over time </label>
                                                                </div>
                                                            </div>
                                                            <div id="qid9" data-type="ratio" style="margin-top: 20px;">
                                                                <p style="margin-bottom: 15px;">Would you like to receive editable/source files as a deliverable ?</p>
                                                                <div class="radio radio-info radio-inline">
                                                                    <input type="radio" id="inlineRadio21" value="Yes" name="qid9" />
                                                                    <label for="inlineRadio21">Yes </label>
                                                                </div>
                                                                <div class="radio  radio-info  radio-inline">
                                                                    <input type="radio" id="inlineRadio22" value="No" name="qid9" />
                                                                    <label for="inlineRadio22">No </label>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div class="col-md-6" style="">
                                                        <div class="qBox">
                                                            <div id="qid10" data-type="textarea">
                                                                <p>
                                                                    Are there any specific elements that you would like to be included necessarily in the visualisation ?
                                                                </p>
                                                                <span>(Such as brand/organisation colours, mascots, characters, names and any other features that you would like to appear in the infographic )</span>
                                                                <textarea style="height: 60px; margin-top: 5px;" placeholder=""></textarea>

                                                            </div>

                                                            <div id="qid11" data-type="ratio" style="margin-top: 10px;">
                                                                <p style="margin-bottom: 0px;">Please make sure you (the client) have provided us with the following items:</p>
                                                                <div class="radio  radio-info  radio-inline">
                                                                    <input type="radio" id="inlineRadio32" value="Logos in editable format" name="qid11" />
                                                                    <label for="inlineRadio32">Logos in editable format </label>
                                                                </div>
                                                                <div class="radio radio-info radio-inline">
                                                                    <input type="radio" id="inlineRadio31" value="Brand guidelines or Brand manual"
                                                                        name="qid11" />
                                                                    <label for="inlineRadio31">
                                                                        Brand guidelines or Brand manual</label>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-6" style="margin-top: 30px;">
                                                        <%--<div>UPLOADS</div>
                                                        <div class="qBox">
                                                            <form action="service\uploadfiles.aspx" id="drop-req" style="overflow: auto; height: 75px; min-height: 75px; padding: 0px; background-color: white; border: 1px solid rgb(169, 169, 169)" class="dropzone">
                                                                <input type="hidden" class="pCount" name="hdnProjectCount" id="hdnProjectCount" value="" />
                                                                <input type="hidden" class="" name="hdnFolderName" id="hdnFolderName" value="requirement" />


                                                                <div class="fallback">
                                                                    <input name="file" type="file" multiple />
                                                                </div>
                                                            </form>

                                                        </div>--%>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="reqDiv">
                                                <div class="spname clr-blue">Project Name</div>
                                                <div class="sptitle">INFOGRAPHIC TYPE</div>
                                                <div class="row" style="margin-top: 30px;">
                                                    <div class="col-md-12" style="font-size: 16px;">
                                                        <div class="col-md-2 cent">
                                                            Select Infographic Type
                                                        </div>
                                                        <div class="col-md-10 cent">
                                                            Select Infographic Layout
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12" id="layout-templates">
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                    </div>
                                                    <div class="col-md-10">
                                                        <div class="cent">
                                                            <a id="fDown" href="template/Roadmap Template.vsd" class="btn btn-blue">Download</a>
                                                            <div>Please download the template. You can fill in the data required for the visualisation and upload the document in the next screen.</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="reqDiv">
                                                <div class="spname clr-blue">Project Name</div>
                                                <div class="sptitle">FINALIZE</div>
                                                <div style="text-align: center;">
                                                    <p>UPLOAD FILLED TEMPLATE</p>
                                                    <form action="service\uploadfiles.aspx" id="drop-final" style="overflow: auto; height: 150px; width: 300px; margin: 0 auto; min-height: 75px; padding: 0px; background-color: white; border: 1px solid rgb(169, 169, 169)"
                                                        class="dropzone">
                                                        <input type="hidden" class="pCount" name="hdnProjectCount" id="hdnProjectCount" value="0" />
                                                        <input type="hidden" class="" name="hdnFolderName" id="hdnFolderName" value="" />

                                                        <div class="fallback">
                                                            <input name="file" type="file" />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div>
                                                    <br />
                                                Upload the filled-in templates here. Please note that the completed templates will greatly enable the implementation of the project. <br />
If you have not downloaded the templates, please Go Back to the previous screen and download the same. 
You can also upload other documents that are relevant for this project.           </div>
                                            </div>
                                        </div>
                                        <div id="stMsg"></div>
                                        <div style="text-align: center;    margin-bottom: 50px;">
                                            <a class="clr-blue" id="btnback" onclick="onClickGoBack()" style="padding: 15px; cursor: pointer;">Go Back</a>
                                            <input type="button" id="btncontinue" onclick="onClickContinue()" value="Continue" class="btn btn-lg btn-blue" />
                                            <input type="button" id="btnsubmit" disabled onclick="onClickSubmitProject()" value="Submit" class="btn btn-lg btn-blue" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide" id="slide4" data-anchor="slide3" style="background: rgb(252, 252, 252);">
                    <div class="" style="padding-top: 60px; height: 100%; overflow-y: auto;     background: rgb(255, 255, 255);" id="project-details">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        window.location.hash = "firstPage";
        var _sliders = null;
        var mainSlider = null;
        $(document).ready(function () {
            $("#btnback").hide();
            $("#btnsubmit").hide();
            onLoadCollabDashboard();
            mainSlider = $('.slider1').bxSlider({
                adaptiveHeight: true,
                onSlideBefore: function ($slideElement, oldIndex, newIndex) {

                    if (newIndex == 0) {
                        $("#btnback").hide();
                        $("#btnsubmit").hide();

                    }
                    else if (newIndex == 1) {
                        $("#btnback").show();
                    }
                    else if (newIndex == 3) {
                        if (_sliders != null)
                            _sliders.destroySlider();
                        _sliders = $(".lay1").bxSlider({ adaptiveHeight: true, pagerTransition: true });

                        $("#btncontinue").show();
                        $("#btnsubmit").hide();
                    }

                    else if (newIndex == 4) {
                        $("#btncontinue").hide();
                        $("#btnsubmit").show();
                    }
                }
            });
        });
    </script>
</body>
</html>
