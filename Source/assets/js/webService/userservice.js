function UserService(){this.service="UserService"}UserService.prototype=new WebService,UserService.prototype.IsEmailExists=function(e,t,r){var s=new RequestHeader("IsEmailExists",e,t);return this.PostRequest(s,r)},UserService.prototype.AuthenticateUser=function(e,t,r){var s=new RequestHeader("AuthenticateUser",e,t);return this.PostRequest(s,r)},UserService.prototype.CreateProfile=function(e,t,r){var s=new RequestHeader("CreateProfile",e,t);return this.PostRequest(s,r)},UserService.prototype.InviteCollabrator=function(e,t,r){var s=new RequestHeader("InviteCollabrator",e,t);return this.PostRequest(s,r)},UserService.prototype.ApproveUser=function(e,t,r){var s=new RequestHeader("ApproveUser",e,t);return this.PostRequest(s,r)},UserService.prototype.DeleteUser=function(e,t,r){var s=new RequestHeader("DeleteUser",e,t);return this.PostRequest(s,r)},UserService.prototype.ForgotPassword=function(e,t,r){var s=new RequestHeader("ForgotPassword",e,t);return this.PostRequest(s,r)},UserService.prototype.ChangePassword=function(e,t,r){var s=new RequestHeader("ChangePassword",e,t);return this.PostRequest(s,r)},UserService.prototype.GetProjectList=function(e,t,r){var s=new RequestHeader("GetProjectList",e,t);return this.PostRequest(s,r)},UserService.prototype.CreateProject=function(e,t,r){var s=new RequestHeader("createProject",e,t);return this.PostRequest(s,r)},UserService.prototype.GetProjectDetails=function(e,t,r){var s=new RequestHeader("GetProjectDetails",e,t);return this.PostRequest(s,r)},UserService.prototype.GetProjectTemplates=function(e,t,r){var s=new RequestHeader("GetProjectTemplates",e,t);return this.PostRequest(s,r)},UserService.prototype.GetNotificationCount=function(e,t,r){var s=new RequestHeader("GetNotificationCount",e,t);return this.PostRequest(s,r)},UserService.prototype.GetNotification=function(e,t,r){var s=new RequestHeader("GetNotification",e,t);return this.PostRequest(s,r)},UserService.prototype.GetLatestVersion=function(e,t,r){var s=new RequestHeader("GetLatestVersion",e,t);return this.PostRequest(s,r)},UserService.prototype.GetPreviousVersion=function(e,t,r){var s=new RequestHeader("GetPreviousVersion",e,t);return this.PostRequest(s,r)},UserService.prototype.UpdateComment=function(e,t,r){var s=new RequestHeader("UpdateComment",e,t);return this.PostRequest(s,r)},UserService.prototype.CreateNewVersion=function(e,t,r){var s=new RequestHeader("CreateNewVersion",e,t);return this.PostRequest(s,r)},UserService.prototype.CreateProjectStage=function(e,t,r){var s=new RequestHeader("CreateProjectStage",e,t);return this.PostRequest(s,r)},UserService.prototype.ChangeProjectStage=function(e,t,r){var s=new RequestHeader("ChangeProjectStage",e,t);return this.PostRequest(s,r)},UserService.prototype.ApproveProject=function(e,t,r){var s=new RequestHeader("ApproveProject",e,t);return this.PostRequest(s,r)},UserService.prototype.SetProjectDate=function(e,t,r){var s=new RequestHeader("SetProjectDate",e,t);return this.PostRequest(s,r)},UserService.prototype.IsEmailExists=function(e,t,r){var s=new RequestHeader("IsEmailExists",e,t);return this.PostRequest(s,r)},UserService.prototype.IsOrgExists=function(e,t,r){var s=new RequestHeader("IsOrgExists",e,t);return this.PostRequest(s,r)},UserService.prototype.DeleteFile=function(e,t,r){var s=new RequestHeader("DeleteFile",e,t);return this.PostRequest(s,r)};var _gUserService=new UserService;