function onGetProjectList(e,i){if(e.length>0){$("#hdnProjects").val(e.length),$(".pCount").attr("value",e.length),_totalProject=e.length,_projectData=e;for(var t="",a="",o=0,l=0,s=0,n=0,r=0;r<e.length;r++){var d=e[r].projectstagename.toLowerCase().replace(" ","");"informationgathering"==d&&parseInt(e[r].status)<=0?o++:"informationarchitecture"==d&&parseInt(e[r].status)<=0?l++:"storyboard"==d&&parseInt(e[r].status)<=0?s++:"finalartwork"==d&&parseInt(e[r].status)<=0&&n++;var c="Running <br /><span class='"+pStag[e[r].projectstage]+"'>"+e[r].projectstagename+"</span>",p="Running";parseInt(e[r].status)>0?(c="Completed",p="Completed",_completedProject+=1,d=""):_runningProject+=1,t+="<tr><td id='"+e[r].projectid+"' stage='"+e[r].projectstage+"' onclick='onClickOpenProject(this)'>"+e[r].projectname+"<br /><span>Started on "+new Date(e[r].startdate).toLocaleDateString()+"</span></td><td>"+e[r].projecttypename+"</td><td>"+e[r].firstname+" "+e[r].lastname+"<br /><span>"+e[r].orgname+"</span></td><td>"+c+"</td></tr>";var v="";0==parseInt(e[r].projectstage)?v="<li class='active'>IG</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":1==parseInt(e[r].projectstage)?v=" <li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>IA</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":2==parseInt(e[r].projectstage)?v=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>S</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":3==parseInt(e[r].projectstage)&&(v=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>FA</li>"),parseInt(e[r].status)>0&&(v=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li>  <li><i class='glyphicon glyphicon-ok'></i></li>"),a+="<div class='col-md-4 mix "+p.toLowerCase()+" "+d+"'><div id='"+e[r].projectid+"' stage='"+e[r].projectstage+"' onclick='onClickOpenProject(this)' class='"+pStag[e[r].projectstage]+" pholder'><div class='pImgHolder'><div class='shHov'><img src='assets/imgs/eye.png' /></div><img src='service/getfile.aspx?type=timage&id="+e[r].templateid+"' /></div><div class='line'></div><div><table class='fullT projT'><tr><td class='txt-lt vTop'><p class='lr14b pnams'>"+e[r].projectname+"</p><span class='ll12i'>Started on "+new Date(e[r].startdate).toLocaleDateString()+"</span></td><td></td><td class='lr14b vTop'>"+e[r].projecttypename+"</td></tr><tr><td colspan='2'><ul class='indicator'>"+v+"</ul></td><td><p class='pro-ow-name'>"+e[r].firstname+" "+e[r].lastname+"</p><p class='ll12i pro-ow-name'>"+e[r].orgname+"</span></td></tr></table></div></div></div>"}$("#proListTable").html(t),$("#ProContainer").html(a),$("#example").DataTable({bPaginate:!1,bLengthChange:!1,scrollY:"530px",scrollCollapse:!1,paging:!1,bFilter:!0,bInfo:!1,bAutoWidth:!1,oLanguage:{sSearch:"<i class='icon-cls glyphicon glyphicon-search'></i>"},dom:' <"search"f><"top"l>rt<"bottom"ip><"clear">',aaSorting:[]})}$("#das-run-pro").html(_runningProject),$("#das-tot-pro").html(_totalProject),$("#totalProCirc").circleChart({percentage:100,data:_totalProject,msg:["Total","Projects"]}),$("#runningProCirc").circleChart({percentage:_completedProject/_totalProject*100,data:_completedProject,msg:["Closed","Projects"]}),$("#centerProCirc").pieChart({series:[{percentage:o/(_totalProject-_completedProject)*100,label:"Information Gathering",color:"#ea4e4e",value:o},{percentage:l/(_totalProject-_completedProject)*100,label:"Information Architecture",color:"#ffcb05",value:l},{percentage:s/(_totalProject-_completedProject)*100,label:"Storyboard",color:"#052a44",value:s},{percentage:n/(_totalProject-_completedProject)*100,label:"Final Artwork",color:"#00C3FF",value:n}],msg:["Running","Projects"],data:_totalProject-_completedProject}),$("#igCount").html(o),$("#faCount").html(n),$("#iaCount").html(l),$("#sCount").html(s),unblockUI("body")}function onLoadCollabDashboard(){var e=JSON.parse($("#hdnUsers").val()),i="";$("#noAssigned").html(e.length);for(var t=0;t<e.length;t++)i+='<div class="col-md-12">',i+=e[t].isverified?generateApprovedRequest(!1,e[t]):generatePendingRequest(!1,e[t]),i+="</div>";for(var a=0;a<5-e.length;a++)i+=generateAddCollab();$("#CollabListDiv").html(i)}function generateAddCollab(){var e='<div class="col-md-12 cbr-box"><div class="add-coll-box"><div class="add-new-colb" style="display: block"  onclick="add_new_collob($(this).find(&apos;img&apos;))"><span class="addc-btn"><img src="assets/imgs/add-coll.png" class="img-w25" onclick="add_new_collob(this)" /></span><div class="addcbc1"> <span class="lr14b clr-blue" onclick="add_new_collob(this)">Add Collaborator</span></div> </div><div class="close-colb" style="display: none"><span  class="addc-btn"><img src="assets/imgs/close-coll.png"class="img-w25" onclick="close_new_collob(this)" /></span><div class="addcbc1" ><input type="text" id="colb-name" placeholder="Name" style="padding-left: 15px" /><input type="email" id="colb-email" placeholder="E-mail address" style="padding-left: 15px;     margin-top: 10px;" /></div><div  class="addcbc2"><input type="button" style="width: 180px;"  class="btn btn-blue" onclick="onClickAddCollab(this)" value="Add Collaborator" /></div></div></div></div>';return e}function onClickAddCollab(e){var i=new alertbox;i.id="#collAlert";var t=$(e).parents(".cbr-box"),a=new User;if(a.organization=$("#hdnOrgName").val(),a.firstname=$(t).find("#colb-name").val(),a.email=$(t).find("#colb-email").val(),a.regdate=(new Date).toLocaleString(),""==a.firstname)return void i.showError("Please enter collaborator name.");if(""==a.email)return void i.showError("Please enter collaborator email.");if(!validateEmail(a.email))return void i.showError("Please enter valid email.");i.showError("");var o=(generatePendingRequest(!1,a),new CallBack);o.func="onInvitedUser",o.data=i,_gUserService.InviteCollabrator(a,o,!0),blockUI("body")}function onInvitedUser(e,i){unblockUI("body"),e?window.location.reload():i.showError("Something went wrong.")}function Note(e,i){this.projectid=e,this.versionid=i,this.id=1,this.notes=[]}function onUpdateNotes(e,i){e||alert("comment update error."),unblockUI("body")}function CollaboratorProjectDetail(e){var i=parseInt(e.getAttribute("id"));pData=_gUserService.GetProjectDetails(i,null,!1),$("#hdnProjectID").val(i),null!=pData&&pData.length>0&&(0==pData[0].projectstage?(isStoryDisabled=!0,isArtDisabled=!0):1==pData[0].projectstage?(isStoryDisabled=!0,isArtDisabled=!0):2==pData[0].projectstage?(isStoryDisabled=!1,isArtDisabled=!0):3==pData[0].projectstage&&(isStoryDisabled=!1,isArtDisabled=!1),GetColProjectDetails(i,pData[0].projectstage,e,!0),window.setTimeout(function(){$.fn.fullpage.silentMoveTo("firstPage",3)},1e3))}function GetColProjectDetails(e,i,t,a){if(!$(t).hasClass("not-clickable")){blockUI("body");var o='<div style="height: 100%;"><ul class="nav nav-tabs container" role="tablist"><li role="presentation" id="liinfoGather" class="active" onclick="GetColProjectDetails('+e+', 0, this, false)"><a data-toggle="tab" data-target="#infoGather"><img class="gathImg" src="assets/imgs/gath.png" /><br />InformationGathering</a></li><li role="presentation"><div style="position: relative; padding: 10px 15px;"><img class="arr" src="assets/imgs/arrow3.png" /></div></li><li role="presentation" id="liinfoArch" class="active" onclick="GetColProjectDetails('+e+', 1, this, false)"><a data-toggle="tab" data-target="#infoArch"><img class="arcImg" src="assets/imgs/arch2.png" /><br />Information Architecture</a></li><li role="presentation"><div style="position: relative; padding: 10px 15px;"><img class="arr" src="assets/imgs/arrow3.png" /></div></li><li role="presentation" id="listoryBoard" class="active" onclick="GetColProjectDetails('+e+', 2, this, false)"><a data-toggle="tab" data-target="#storyBoard"><img class="storyImg" src="assets/imgs/story2.png" /><br />Storyboard</a></li><li role="presentation"><div style="position: relative; padding: 10px 15px;"><img class="arr" src="assets/imgs/arrow3.png" /></div></li><li role="presentation" id="lifinalArt" class="active" onclick="GetColProjectDetails('+e+', 3, this, false)"><a data-toggle="tab" data-target="#finalArt"><img class="storyImg" src="assets/imgs/final2.png" /><br />Final Artwork</a></li></ul><div class="tab-content-container"><div class="container tab-content" style="height: 100%;"><div class="tab-pane active" id="infoGather"><div id="e_slider1"><div class="reqDiv"><div class="spname clr-blue">'+pData[0].projectname+'</div><div class="sptitle">CONTENT/PURPOSE</div><div class="row" style="margin-top: 30px;"><div class="col-md-6 "><div data-type="textarea" class="qBox"><p>What is the over all purpose of this visualisation?</p><textarea rows="6" placeholder="Please mention the purpose of this visualisation">'+pData[0].answer+'</textarea></div></div><div class="col-md-6"><div data-type="textarea" class="qBox"><p>In what way do you intend to present this information ?</p><span>(i.e: as part of a collaborative workshop, as a communication requiring no interaction, as a presentation, as a sales pitch or as a point of discussion in a meeting etc.)</span><textarea rows="4" placeholder="Describe briefly how this visualisation would be presented">'+pData[1].answer+'</textarea></div></div><div class="col-md-6" style="margin-top: 30px;"><div data-type="textarea" class="qBox"><p>Who is the intended audience for this visualisation ?</p><textarea rows="6" placeholder="Please list the intended audience for this visualisation">'+pData[2].answer+'</textarea></div></div><div class="col-md-6" style="margin-top: 30px;"><div>UPLOADS</div><div class="cent"><a href="service/GetFile.aspx?type=fileZip&id='+e+'" class="btn btn-blue">Download</a></div></div></div></div><div class="reqDiv"><div class="spname clr-blue">'+pData[0].projectname+'</div><div class="sptitle">CONTENT/INTENT</div><div class="row" style="margin-top: 30px;"><div class="col-md-6 "><div data-type="textarea" class="qBox"><p>What is the one main message you want to put across through this infographic?</p><textarea style="height: 115px;" placeholder="Please mention the key message of this visualisation">'+pData[3].answer+'</textarea></div></div><div class="col-md-6"><div data-type="textarea" class="qBox"><p>What title would you give to this infographic ?*</p><textarea rows="6" placeholder="Suggest a title that would describe the purpose of the visualisation">'+pData[4].answer+'</textarea></div></div><div class="col-md-6" style="margin-top: 30px;"><div data-type="textarea" class="qBox"><p>Who will be presenting this visualisation and why ?</p><textarea rows="6" placeholder="Please mention who would be presenting this visualisation">'+pData[5].answer+'</textarea></div></div></div></div><div class="reqDiv"><div class="spname clr-blue">'+pData[0].projectname+'</div><div class="sptitle">REQUIREMENTS</div><div class="row" style="margin-top: 30px;"><div class="col-md-6 "><div class="qBox" style="padding: 40px;"><div data-type="ratio"><p>How will you be presenting this information? </p><span>Check whichever options are applicable:</span><br />   <div class="radio radio-info radio-inline"><input type="radio" id="e_inlineRadio1" value="On Screen" name="e_qid7" /><label for="e_inlineRadio1">On Screen </label></div><div class="radio  radio-info  radio-inline"><input type="radio" id="e_inlineRadio2" value="As a handout (on paper)" name="e_qid7" /><label for="e_inlineRadio2">As a handout (on paper) </label></div><div class="radio  radio-info  radio-inline"><input type="radio" id="e_inlineRadio3" value="As an interactive visualisation" name="e_qid7" /><label for="e_inlineRadio3">As an interactive visualisation </label></div><div class="radio  radio-info  radio-inline"><input type="radio" id="e_inlineRadio4" value="Other" name="e_qid7" /><label for="e_inlineRadio4">Other </label></div><input type="text" id="e_txtOthers" style="font-size: 12px; padding: 5px; width: 200px;" placeholder="please specify" /></div><div data-type="ratio" style="margin-top: 20px;"><p>Are you going to use this visualisation as:</p><span>Check whichever options are applicable:</span><br /><div class="radio radio-info radio-inline"><input type="radio" id="e_inlineRadio11" value="One time communication" name="e_qid8" /><label for="e_inlineRadio11">One time communication </label></div><div class="radio  radio-info  radio-inline"><input type="radio" id="e_inlineRadio12" value="Future reference / guide" name="e_qid8" /><label for="e_inlineRadio12">Future reference / guide </label></div><div class="radio  radio-info  radio-inline"><input type="radio" id="e_inlineRadio13" value="A document that is going to be updated / changed over time" name="e_qid8" /><label for="e_inlineRadio13">A document that is going to be updated / changed over time </label></div></div><div data-type="ratio" style="margin-top: 20px;"><p style="margin-bottom: 15px;">Would you like to receive editable/source files as a deliverable ?</p><div class="radio radio-info radio-inline"><input type="radio" id="e_inlineRadio21" value="Yes" name="e_qid9" /><label for="e_inlineRadio21">Yes </label></div><div class="radio  radio-info  radio-inline"><input type="radio" id="e_inlineRadio22" value="No" name="e_qid9" /><label for="e_inlineRadio22">No </label></div></div></div></div><div class="col-md-6" style=""><div class="qBox"><div data-type="textarea"><p>Are there any specific elements that you would like to be included necessarily in the visualisation ?</p><span>(Such as brand/organisation colours, mascots, characters, names and any other features that you would like to appear in the infographic )</span><textarea style="height: 60px; margin-top: 5px;" placeholder="">'+pData[9].answer+'</textarea></div><div data-type="ratio" style="margin-top: 10px;"><p style="margin-bottom: 0px;">Please make sure you (the client) have provided us with the following items:</p><div class="radio  radio-info  radio-inline"><input type="radio" id="e_inlineRadio32" value="Logos in editable format" name="e_qid11" /><label for="e_inlineRadio32">Logos in editable format </label></div><div class="radio radio-info radio-inline"><input type="radio" id="e_inlineRadio31" value="Brand guidelines or Brand manual" name="e_qid11" /><label for="e_inlineRadio31">Brand guidelines or Brand manual</label></div></div></div></div></div></div><div class="reqDiv"><div class="spname clr-blue">'+pData[0].projectname+'</div><div class="sptitle">INFOGRAPHIC TYPE</div><div class="row" style="margin-top: 30px;"><div class="col-md-12" style="font-size: 16px;"><div class="col-md-2 cent">Selected Infographic Type</div><div class="col-md-10 cent">Selected Infographic Layout</div></div><div class="col-md-12"><div class="col-md-2" style="height: 420px; overflow: auto;"><div class="infoTypeThum active"><img class="infoTypeImg" data-id="e_lay'+pData[11].templateid+'" src="service/getfile.aspx?type=timage&id='+pData[11].templateid+'" /><div>'+pData[11].templatename+'</div></div></div><div class="col-md-10" style="height: 420px; overflow: auto;"><div class="layouts" id="e_lay'+pData[11].templateid+'" style="display: block;"><div style="width: 420px; margin: 0 auto;"><div class="e_lay'+pData[11].templateid+'"><img src="service/getfile.aspx?type=timage&id='+pData[11].templateid+'" /><br /></div></div><div class="laydesc">'+pData[11].layoutdesc+'</div></div></div></div></div><div class="row" style="display: none;"><div class="col-md-2"></div></div></div><div class="reqDiv"><div class="spname clr-blue">'+pData[0].projectname+'</div><div class="sptitle">FINALIZE</div><div style="text-align: center;"><div class="cent"><a href="service/GetFile.aspx?type=file&id='+e+'" class="btn btn-blue">Download</a></div></div><div><br />Upload the filled-in templates here. Please note that the completed templates will greatly enable the implementation of the project. <br />If you have not downloaded the templates, please Go Back to the previous screen and download the same. You can also upload other documents that are relevant for this project. </div></div></div><div style="text-align: center;"><a class="clr-blue" id="e_btnprev" onclick="showPrevSlide();" style="padding: 15px; cursor: pointer;">Prev</a><a class="clr-blue" id="e_btnnext" onclick="showNextSlide();" style="padding: 15px; cursor: pointer;">Next</a></div></div><div class="tab-pane active" id="infoArch"></div><div class="tab-pane active" id="storyBoard"></div><div class="tab-pane active" id="finalArt"></div></div></div></div>';$("#project-details").html(""),$("#project-details").html(o),$("#project-details").find('input[name="e_qid7"]').each(function(){$(this).val()==pData[6].answer&&$("#project-details").find("input[name='e_qid7'][value='"+pData[6].answer+"']").prop("checked",!0)}),$("#project-details").find('input[name="e_qid8"]').each(function(){$(this).val()==pData[7].answer&&$("#project-details").find("input[name='e_qid8'][value='"+pData[7].answer+"']").prop("checked",!0)}),$("#project-details").find('input[name="e_qid9"]').each(function(){$(this).val()==pData[8].answer&&$("#project-details").find("input[name='e_qid9'][value='"+pData[8].answer+"']").prop("checked",!0)}),$("#project-details").find('input[name="e_qid11"]').each(function(){$(this).val()==pData[10].answer&&$("#project-details").find("input[name='e_qid11'][value='"+pData[10].answer+"']").prop("checked",!0)}),$("#project-details").find('input[name="e_qid7"]').attr("disabled","disabled"),$("#project-details").find('input[name="e_qid8"]').attr("disabled","disabled"),$("#project-details").find('input[name="e_qid9"]').attr("disabled","disabled"),$("#project-details").find('input[name="e_qid11"]').attr("disabled","disabled"),generateProjectStage(e,i),0==parseInt(i)?currentTab="#infoArch":1==parseInt(i)?currentTab="#infoArch":2==parseInt(i)?currentTab="#storyBoard":3==parseInt(i)&&(currentTab="#finalArt"),$img=$(currentTab).find("#image").imgNotes({onAdd:function(){return this.options.vAll="bottom",this.options.hAll="middle",elem=$(document.createElement("div")).css({width:"27px",height:"40px","text-align":"center",color:"#fff","font-weight":"bold","font-size":"14px"}).prepend("<img src='assets/imgs/msg.png' style='width:30px; height:30px; position:absolute; top:6px; left:6px;' />"),elem}});window.setTimeout(function(){$("#e_btnprev").hide();mslider=$("#e_slider1").bxSlider({mode:"horizontal",adaptiveHeight:!0,onSlideBefore:function(e,i,t){0==t?($("#e_btnprev").hide(),$("#e_btnnext").show()):4==t?($("#e_btnprev").show(),$("#e_btnnext").hide()):($("#e_btnprev").show(),$("#e_btnnext").show())}}),mslider.reloadSlider(),$("#liinfoGather,#liinfoArch,#listoryBoard,#lifinalArt").removeClass("active"),$("#infoGather,#infoArch,#storyBoard,#finalArt").removeClass("active"),isStoryDisabled&&isArtDisabled?($("#listoryBoard").find("a").addClass("not-allowed"),$("#lifinalArt").find("a").addClass("not-allowed"),$("#listoryBoard").find("a").removeAttr("data-toggle"),$("#lifinalArt").find("a").removeAttr("data-toggle"),$("#listoryBoard").addClass("not-clickable"),$("#lifinalArt").addClass("not-clickable")):isArtDisabled&&($("#lifinalArt").find("a").addClass("not-allowed"),$("#lifinalArt").find("a").removeAttr("data-toggle"),$("#lifinalArt").addClass("not-clickable")),a?isStoryDisabled&&isArtDisabled?($("#infoArch").addClass("active"),$("#liinfoArch").addClass("active")):isArtDisabled?($("#storyBoard").addClass("active"),$("#listoryBoard").addClass("active")):isStoryDisabled||isArtDisabled||($("#finalArt").addClass("active"),$("#lifinalArt").addClass("active")):($("#"+t.id).addClass("active"),$("#"+t.id.replace("li","")).addClass("active")),unblockUI("body")},1e3)}}function onClickPrevVersion(e,i,t){var a=new ProjectDetail;a.projectid=e,a.projectstage=i,a.versionid=t;var o=new CallBack;o.func="onGetVersionData",o.data=a,_gUserService.GetPreviousVersion(a,o,!0),blockUI("body")}function onGetVersionData(e,i){generateVersion(e,i.projectid,i.projectstage)}function generateProjectStage(e,i){var t=new ProjectDetail;t.projectid=e,t.projectstage=i;var a=new CallBack;a.func="onGetVersionData",a.data=t,_gUserService.GetLatestVersion(t,a,!0),blockUI("body")}function generateVersion(e,i,t){var a="";0==pData[0].projectstage?a="<li class='active'>IG</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":1==pData[0].projectstage?a=" <li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>IA</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":2==pData[0].projectstage?a=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>S</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":3==pData[0].projectstage&&(a=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>FA</li>");var o="Running";if(parseInt(pData[0].status)>0&&(a=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li>  <li><i class='glyphicon glyphicon-ok'></i></li>",o="completed"),null==e||void 0==e.versiondata[0])return 0==t?$("#infoArch").html('<div class="nVersion"> No version has been uploaded yet </div>'):1==t?$("#infoArch").html('<div class="nVersion"> No version has been uploaded yet </div>'):2==t?$("#storyBoard").html('<div class="nVersion"> No version has been uploaded yet </div>'):3==t&&$("#finalArt").html('<div class="nVersion"> No version has been uploaded yet </div>'),void unblockUI("body");var l="";(!e.islatestversion||e.versiondata[0].isapproved)&&(l="disabled");var s="",n="Approve",r="",d=new ProjectDetail;d.projectid=i,d.projectstage=t;var c=e.versiondata[0];null!=c&&(latestVersionImg=c.image,d.versionid=c.versionid,n=1==c.isapproved?"Approved":"Approve",r=1==c.isapproved?"disabled":"",s=c.releasenote);var p="";e.islatestversion||(p+='<table class="btn-latest"  onclick="generateProjectStage('+i+","+t+')"><tr><td><img style="height: 14px; margin: 0;" src="assets/imgs/eye.png" /></td><td>Latest Version</td></tr></table>'),p+=e.haspreviousversion?'<table class="btn-prev" onclick="onClickPrevVersion('+i+","+t+","+d.versionid+')" ><tr><td><img style="height: 14px; margin: 0;" src="assets/imgs/eye.png" /></td><td>Previous Version</td></tr></table>':'<table class="btn-prev" style="opacity: 0.6;cursor: not-allowed;"  ><tr><td><img style="height: 14px; margin: 0;" src="assets/imgs/eye.png" /></td><td>Previous Version</td></tr></table>';var v='<div class="container" style="padding-top: 40px;"><div class="col-md-12" style="text-align: left;"><i onclick="window.history.back();" class="backArrow glyphicon glyphicon-menu-left"></i><h3>'+pData[0].projectname+"</h3><p>Started on "+new Date(pData[0].startdate).toLocaleDateString()+'</p></div><div class="col-md-12"><button '+r+' type="button" style="width: 120px;" onclick="approveVersion('+i+", "+pData[0].projectstage+", "+d.versionid+')" class="btn-blue btn pull-right">'+n+"</button>"+p+'</div><div class="col-md-12 imgtool_cont" style=""><div class="imgTool_content"><p> Please use <span style="color:#00C3FF;"> Add comments</span> button to add your feedback by clicking on the image. Please click<span style="color:#00C3FF;"> Send Feedback </span> to submit your comments to visualinsights team.</p></div><div id="imgPort"  class="imgdiv"><img id="image" src="service/getfile.aspx?type=vimage&id='+d.versionid+'" style="display: none; width: auto; height: 100%;" /><div class="imgTool"><table class="fullT"><tr><td><div class="switch" style="width: 50px; margin: 0 auto;"><input id="cmn-toggle-41" onchange="onChangeAnnot(this)" class="cmn-toggle cmn-toggle-round-flat" type="checkbox" /><label for="cmn-toggle-41"></label></div><p>Comments</p><p>On/Off</p></td><td><img src="assets/imgs/fillscreen.png" /><p>Full screen</p></td><td><img onclick="fitToScreen()" src="assets/imgs/fit_to_page.png" /><p>Fit to Page</p></td><td></td><td><a  onclick="if(!$(this).hasClass(&apos;disabled&apos;)){addComment();}" class="'+l+'"><img src="assets/imgs/add_comment.png" /><p>Add Comments</p></td></a><td><img src="assets/imgs/pan.png" /><p>Pan</p></td><td></td><td></td><td><a href="service/getfile.aspx?type=vimage&id='+d.versionid+'" target="_blank" ><img src="assets/imgs/save.png" /><p>Save</p></a></td><td onclick="onClickSendFeedback()"><img src="assets/imgs/send_feedback.png" /><p> Send Feedback </p></td></tr></table></div><div class="vNotes" id="verNote"><div class="notesDiv"><div class="shDiv" id="shbtnDiv" onclick="openNotePanel(this)"><img style="margin-top: 40px !important;" src="assets/imgs/bleft_arrow.png" class="leftA" /><img style="margin-top: 40px !important;" src="assets/imgs/bright_arrow.png" class="rightA" /></div><h2 class="flt m0 txtlt">Release Notes<img onclick="$(&#39;#shbtnDiv&#39;).click();" style="height: 30px; cursor: pointer; float: right;" src="assets/imgs/close2.png" /></h2><div class="verNotedata"><div class="vCount">Version '+e.version+'<span class="vDate">('+new Date(c.releasedate).toLocaleDateString()+")</span></div><p>"+s+'</p></div><div class="txtlt pgOwn"><p class="lr14b pb5">Project Owner:</p><p class="lr14b cbfb">'+pData[0].firstname+" "+pData[0].lastname+'</p><p class="ll12i">'+pData[0].orgname+'</p></div><div class="txtlt pgDat"><p class="lr14b pb5">Estimated Delivery Date:</p><p class="lr14b cbfb">';v+=null==pData[0].estimateddelivery?"Not Set":new Date(pData[0].estimateddelivery).toLocaleDateString(),v+='</p><div class="'+pStag[pData[0].projectstage]+" pind\"><ul class='indicator'>"+a+'</ul><span class="txtSmBl">'+o+"</span></div></div></div></div></div></div></div>",0==t?($("#infoArch").html(""),$("#infoArch").html(v),currentTab="#infoArch"):1==t?($("#infoArch").html(""),$("#infoArch").html(v),currentTab="#infoArch"):2==t?($("#storyBoard").html(""),$("#storyBoard").html(v),currentTab="#storyBoard"):3==t&&($("#finalArt").html(""),$("#finalArt").html(v),currentTab="#finalArt"),$img=$(currentTab).find("#image").imgNotes({onAdd:function(){return this.options.vAll="bottom",this.options.hAll="middle",elem=$(document.createElement("div")).css({width:"27px",height:"40px","text-align":"center",color:"#fff","font-weight":"bold","font-size":"14px"}).prepend("<img src='assets/imgs/msg.png' style='width:30px; height:30px; position:absolute; top:6px; left:6px;' />"),elem}}),null!=c&&(_proNotes=new Note(d.projectid,c.versionid),null!=c.comments&&_proNotes.load(c.comments)),unblockUI("body")}function showPrevSlide(){mslider.goToPrevSlide()}function showNextSlide(){mslider.goToNextSlide()}function onClickProject(e){$(e).parent().parent().find(".active").removeClass("active"),$("#pro-run").html(_runningProject),$("#pro-tot").html(_totalProject),$(e).addClass("active"),$.fn.fullpage.silentMoveTo("firstPage",1),window.setTimeout(function(){$("#ProContainer").mixItUp()},1e3)}function onClickDashboard(e){$(e).parent().parent().find(".active").removeClass("active"),$(e).addClass("active"),$.fn.fullpage.silentMoveTo("firstPage",0)}function onClickSendFeedback(){_proNotes.updateServer()}function onClickStartProject(e){$(e).parent().parent().find(".active").removeClass("active"),$(e).addClass("active");var i=new CallBack;i.func="onClickedStartProject",_gUserService.GetProjectTemplates(new ProjectDetail,i,!0),blockUI("body")}function onClickedStartProject(e,i){var t=e;if(null!=t&&t.length>0){for(var a="",o='<div class="col-md-2" style="height: 420px; overflow: auto;">',l=0;l<t.length;l++)o+='<div class="infoTypeThum" id="template'+t[l].templateid+'"><img class="infoTypeImg" data-file="'+t[l].file+'" data-id="lay'+t[l].templateid+'" src="service/getfile.aspx?type=timage&id='+t[l].templateid+'" /><div>'+t[l].templatename+"</div></div>",a+='<div class="layouts" id="lay'+t[l].templateid+'"><div style="width: 420px; margin: 0 auto;"><div class="lay'+t[l].templateid+'"><img src="'+t[l].templateimage+'" /></div></div><div class="laydesc">'+t[l].layoutdesc+"</div></div>";o+='</div><div class="col-md-10" style="height: 420px; overflow: auto;">'+a+"</div>",$("#layout-templates").html(""),$("#layout-templates").html(o),$("#template1").addClass("active"),setInfoImgClick(),$.fn.fullpage.silentMoveTo("firstPage",2),_isFileUploaded=!1}unblockUI("body")}function containsObject(e,i){var t;for(t=0;t<i.length;t++)if(i[t]===e)return!0;return!1}function addComment(){$img.imgNotes("option","isAdd",!0)}function InitPop(){$(".ppOver").each(function(){$(this).popover({html:!0,placement:function(e,i){var t=$(i).position();return t.left>250&&t.top>125?"left":t.left<250&&t.top>125?"right":t.top<250?"bottom":"top"},content:function(){var e="disabled";$img.imgNotes("option","isAdd")&&(e="");var i=$(this).attr("data-uname");void 0==i&&(i=$("#hdnUName").val());var t="<div data-popid='#"+$(this).attr("id")+"' id='_"+$(this).attr("id")+"' class='popCont'><textarea "+e+">"+$(this).find(".pCont").html()+"</textarea> </div><img src='assets/imgs/close.png' data-popid='#"+$(this).attr("id")+"' onclick='onClickClosePP(this)'  class='closePop' /><div class='poNameDiv'><img src='assets/imgs/profile_img.png' class='proImg' /> &nbsp;"+i+"</div><div style='height: 40px;'> ";return(parseInt($("#hdnUserID").val())==parseInt($(this).attr("data-uid"))||void 0==$(this).attr("data-uid"))&&(t+="<img src='assets/imgs/delete.png' data-popid='#"+$(this).attr("id")+"' onclick='onClickDeletePP(this)' class='pdelImg' /> <img class='saveImg' onclick='onClickSavePP(this)' src='assets/imgs/tick.png' /><img class='editImg' onclick='onClickEditPP(this)' src='assets/imgs/edit.png' />"),t+="</div> </div>"},trigger:"disabled",animation:!0}).on("shown.bs.popover",function(){var e=$(this);$(this).parent().find("div.popover .close").click(function(){e.click()})})})}function onChangeAnnot(e){$(e).is(":checked")?Import():($(".ppOver").popover("hide"),$img.imgNotes("clear"))}function Import(){$img.imgNotes("import",_proNotes.notes),InitPop()}function onClickClosePP(e){var i=$(e).attr("data-popid");$(i).popover("hide")}function onClickSavePP(e){$parent=$(e).parent().parent(),$parent.find("textarea").attr("disabled","disabled"),$parent.find(".editImg").show(),$(e).hide(),$mainelem=$($parent.find(".popCont").attr("data-popid"));var i=parseInt($mainelem.find(".nID").val()),t={x:$mainelem.attr("data-relx"),y:$mainelem.attr("data-rely"),note:$parent.find("textarea").val().trim(),id:i};0==i?_proNotes.add(t.x,t.y,t.note):_proNotes.setText(i,t.note),$img.imgNotes("import",[t]),InitPop()}function onClickEditPP(e){$parent=$(e).parent().parent(),$parent.find("textarea").removeAttr("disabled"),$parent.find(".editImg").hide(),$parent.find(".saveImg").show()}function onClickDeletePP(e){$parent=$(e).parent().parent(),$mainelem=$($parent.find(".popCont").attr("data-popid"));var i={x:$mainelem.attr("data-relx"),y:$mainelem.attr("data-rely"),note:$parent.find("textarea").val().trim(),id:parseInt($mainelem.attr("data-id"))};_proNotes.removeNote(i.id),$mainelem.popover("hide"),$mainelem.remove()}function fitToScreen(){$(currentTab).find("#image").imgViewer("option","zoom",1)}function zoomIn(){var e=parseFloat($(currentTab).find("#image").imgViewer("option","zoom"))+.4;1>e&&(e=1),$(currentTab).find("#image").imgViewer("option","zoom",e)}function zoomOut(){var e=parseFloat($(currentTab).find("#image").imgViewer("option","zoom"))-.4;1>e&&(e=1),$(currentTab).find("#image").imgViewer("option","zoom",e)}function openNotePanel(e){$(e).toggleClass("active"),$(e).parents(".vNotes").toggleClass("active");
}function onChangedFilter(){for(var e="",i=$("#ddType").val(),t=$("#ddStage").val(),a=i.split(","),o=t.split(","),l=0;l<a.length;l++){1==a.length&&o.length>1&&(e+=a[l],e+=",");for(var s=0;s<o.length;s++)e+=a[l]+o[s],e+=","}e=e.substring(0,e.length-1);e.split(",");$("#ProContainer").mixItUp("filter",e)}function onClickSearchByName(){$("#ProContainer").mixItUp("destroy",!0);var e=$("#txtProName").val().toLowerCase();blockUI("body");for(var i=_projectData,t="",a=0;a<i.length;a++)if(i[a].projectname.toLowerCase().indexOf(e)>-1){var o=i[a].projectstagename.toLowerCase().replace(" ",""),l="Running";parseInt(i[a].status)>0&&(l="Completed",o="");var s="";0==parseInt(i[a].projectstage)?s="<li class='active'>IG</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":1==parseInt(i[a].projectstage)?s=" <li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>IA</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":2==parseInt(i[a].projectstage)?s=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>S</li><li class='empty'><i class='glyphicon glyphicon-ok'></i></li>":3==parseInt(i[a].projectstage)&&(s=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li class='active'>FA</li>"),parseInt(i[a].status)>0&&(s=" <li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li><li><i class='glyphicon glyphicon-ok'></i></li>  <li><i class='glyphicon glyphicon-ok'></i></li>"),t+="<div class='col-md-4 mix "+l.toLowerCase()+" "+o+"'><div id='"+i[a].projectid+"' stage='"+i[a].projectstage+"' onclick='onClickOpenProject(this)' class='"+pStag[i[a].projectstage]+" pholder'><div class='pImgHolder'><div class='shHov'><img src='assets/imgs/eye.png' /></div><img src='"+i[a].templateimage+"' /></div><div class='line'></div><div><table class='fullT projT'><tr><td class='txt-lt vTop'><p class='lr14b pnams'>"+i[a].projectname+"</p><span class='ll12i'>Started on "+new Date(i[a].startdate).toLocaleDateString()+"</span></td><td></td><td class='lr14b vTop'>"+i[a].projecttypename+"</td></tr><tr><td colspan='2'><ul class='indicator'>"+s+"</ul></td><td><p class='pro-ow-name'>"+i[a].firstname+" "+i[a].lastname+"</p><p class='ll12i pro-ow-name'>"+i[a].orgname+"</span></td></tr></table></div></div></div>"}$("#ProContainer").html(t),window.setTimeout(function(){$("#ProContainer").mixItUp(),unblockUI("body"),onChangedFilter()},1e3)}function onEmptySearch(){""==$("#txtProName").val()&&onClickSearchByName()}function onClickContinue(){var e=new alertbox;e.id="#stMsg",e.showError(""),1==mainSlider.getCurrentSlide()&&""==$("#qid5").find("textarea").val()?e.showError("The title of the infographic should not be empty."):mainSlider.goToNextSlide()}function onClickGoBack(){var e=new alertbox;e.id="#stMsg",e.showError(""),mainSlider.goToPrevSlide()}function onClickSubmitProject(){var e=new StartProject;e.foldercount=parseInt($("#hdnProjects").val()),e.projectname=$("#qid5").find("textarea").val(),e.isfileuploaded=!0;for(var i=1;_NoOfQuestions>=i;i++){var t=new ProjectQuestions,a=$("#qid"+i).data("type");t.id=i,"textarea"==a?t.answer=$("#qid"+i).find("textarea").val():"ratio"==a&&(t.answer=$("#qid"+i).find("input[type=radio]:checked").val(),"Other"==t.answer&&(t.answer=$("#txtOthers").val()),void 0==t.answer&&(t.answer="")),e.questions.push(t)}var o=$("#layout-templates").find(".active").attr("id");o=parseInt(o.replace("template",""));var t=new ProjectQuestions;t.id=i,t.answer=o,e.questions.push(t);var l=new CallBack;l.func="onCreatedProject",_gUserService.CreateProject(e,l,!0),blockUI("body")}function onCreatedProject(e,i){var t=new alertbox;t.id="#stMsg",unblockUI("body"),e&&(t.showSuccess("Project created successfully."),window.setTimeout(function(){window.location.reload()},1e3))}function setInfoImgClick(){$(".infoTypeImg").on("click",function(){$(this).parent().parent().find(".active").removeClass("active"),$(this).parent().addClass("active"),$(".layouts").hide();var e=this;$("#fDown").attr("href",$(this).data("file")),$(this).parents().parents().parents().find("#"+$(this).data("id")).fadeIn("slow",function(){});var i=$("."+$(e).data("id")).bxSlider({adaptiveHeight:!0,pagerTransition:!0});i.reloadSlider()})}function approveVersion(e,i,t){var a=new ProjectDetail;a.projectid=e,a.userid=parseInt(localStorage.getItem("userid")),3==i?(a.stage=i,a.versionid=t,_gUserService.ApproveProject(a,null,!1)):(a.stage=i+1,_gUserService.ChangeProjectStage(a,null,!1)),window.location.reload()}var _totalProject=0,_runningProject=0,_completedProject=0,_projectData=null,_isFileUploaded=!1;$(document).ready(function(){$("#fullpage").fullpage({anchors:["firstPage"],css3:!0,scrollingSpeed:1e3,scrollOverflow:!0}),GetNotificationCount();var e=new CallBack;e.func="onGetProjectList",blockUI("body"),_gUserService.GetProjectList($("#hdnOrgName").val(),e,!0),$("#txtProName").donetyping(function(){onClickSearchByName()}),setInfoImgClick();var i=new Dropzone("#drop-purpose",{addRemoveLinks:!0});i.on("removedfile",function(e){var i=new FileDetail;i.pCount=parseInt($("#drop-purpose").find("#hdnProjectCount").val()),i.FolderName="purpose",i.FileName=e.name,_gUserService.DeleteFile(i,null,!0)});var t=new Dropzone("#drop-final",{maxFiles:1,maxFilesize:10,addRemoveLinks:!0});t.on("removedfile",function(e){var i=new FileDetail;i.pCount=parseInt($("#drop-final").find("#hdnProjectCount").val()),i.FolderName="",i.FileName=e.name,_gUserService.DeleteFile(i,null,!0),$("#btnsubmit").attr("disabled","disabled")}),t.on("complete",function(e){if("success"==e.status){_isFileUploaded=!1;$("#btnsubmit").removeAttr("disabled");var i=new alertbox;i.id="#stMsg",i.showError("")}}),t.on("error",function(e,i){var t=new alertbox;t.id="#stMsg",t.showError("Invalid file type, please upload the template downloaded on previous step."),this.removeFile(e)})});var pStag=new Array;pStag[0]="cg",pStag[3]="a",pStag[1]="im",pStag[2]="c",Note.prototype.load=function(e){null!=e&&""!=e&&(this.notes=JSON.parse(e),this.notes.length>0&&(this.id=this.notes[this.notes.length-1].id))},Note.prototype.add=function(e,i,t){var a={x:e,y:i,note:t,id:this.id++,userid:0,username:""};this.notes.push(a)},Note.prototype.setText=function(e,i){for(var t=0;t<this.notes.length;t++)this.notes[t].id==e&&(this.notes[t].note=i)},Note.prototype.removeNote=function(e){for(var i=0;i<this.notes.length;i++)if(this.notes[i].id==e){this.notes.splice(i,1);break}},Note.prototype.updateServer=function(){var e=new CallBack;e.func="onUpdateNotes";var i=new ProjectDetail;i.projectid=this.projectid,i.versionid=this.versionid,i.comments=JSON.stringify(this.notes),i.userid=parseInt(localStorage.getItem("userid")),_gUserService.UpdateComment(i,e,!0),blockUI("body")};var _proNotes=null,mslider=null,pData=null,isStoryDisabled=!1,isArtDisabled=!1,$img=null,_NoOfQuestions=11;