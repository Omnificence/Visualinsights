!function(t){t.widget("wgm.imgNotes",{options:{zoom:1,zoomStep:.1,zoomable:!0,canEdit:!1,isAdd:!1,vAll:"middle",hAll:"middle",onClick:function(t,e){alert()},onAdd:function(){return this.options.vAll="bottom",this.options.hAll="middle",t(document.createElement("span")).addClass("marker black").html(this.noteCount)},onEdit:function(e,o){var i=t(o);InitPop(),i.popover("show"),t("#_"+i.attr("id")).parent().find(".saveImg").show(),t("#_"+i.attr("id")).parent().find(".editImg").hide()},onShow:function(e,o){var i=t(o);i.popover("show")},onUpdateMarker:function(e){var o=t(e),i=t(this.img),a=i.imgViewer("imgToView",o.data("relx"),o.data("rely"));a&&o.css({left:a.x-o.data("xOffset"),top:a.y-o.data("yOffset"),position:"absolute"})},onUpdate:function(){t(".ppOver").popover("hide");var e=this;t.each(this.notes,function(){e.options.onUpdateMarker.call(e,this)})}},_create:function(){var e=this;this.element.is("img")||t.error("imgNotes plugin can only be applied to img elements"),e.notes=[],e.noteCount=0,e.img=e.element[0];var o=t(e.img);o.imgViewer({appendto:".imgdiv",zoom:e.options.zoom,zoomStep:e.options.zoomStep,zoomable:e.options.zoomable,extra:"<img class='zIn' src='assets/imgs/zoom_in.png' onclick='zoomIn()' /><img class='zOut' src='assets/imgs/zoom_out.png' onclick='zoomOut()' />"}),o.imgViewer("option","onClick",function(o,i){if(e.options.isAdd){o.preventDefault();var a=(t(window).width(),t(window).height(),t("#imgPort").find(".viewport").find("img")),n=a[0],s=t(n).offset(),r=(s.top*e.options.zoom-s.top,s.left*e.options.zoom-s.left,i.cursorToImg(o.pageX,o.pageY));if(r){var d=e.addNote(r.x,r.y);e._trigger("onEdit",o,d)}e.options.isAdd=!1}}),o.imgViewer("option","onUpdate",function(t,o){e.options.zoom=o.options.zoom,e.options.onUpdate.call(e)}),o.imgViewer("update")},destroy:function(){this.clear(),t(this.img).imgViewer("destroy"),t.Widget.prototype.destroy.call(this)},_setOption:function(e,o){switch(e){case"vAll":switch(o){case"top":break;case"bottom":break;default:o="middle"}break;case"hAll":switch(o){case"left":break;case"right":break;default:o="middle"}}var i=t.ui.version.split(".");switch(i[0]>1||i[1]>8?this._super(e,o):t.Widget.prototype._setOption.apply(this,arguments),e){case"zoom":t(this.img).imgViewer("option","zoom",o);break;case"zoomStep":t(this.img).imgViewer("option","zoomStep",o);break;case"zoomable":t(this.img).imgViewer("option","zoomable",o)}},panTo:function(e,o){return t(this.img).imgViewer("panTo",e,o)},addNote:function(e,o,i,a,n,s){var r=this;this.noteCount++;var d=this.options.onAdd.call(this),p=t(d);switch(p.attr("class","ppOver"),p.attr("id","pop"+this.noteCount),void 0==i&&(i=""),p.attr("data-placement","auto"),t(this.img).imgViewer("addElem",d),p.data("relx",e).data("rely",o).data("note",i),p.attr("data-relx",e),p.attr("data-rely",o),p.attr("data-id",a),p.attr("data-uid",n),p.attr("data-uname",s),(""==a||void 0==a)&&(a=0),p.append("<input type='hidden' class='nID' value='"+a+"' /><div class='pCont'> "+i+" </div>"),this.options.vAll){case"top":p.data("yOffset",0);break;case"bottom":p.data("yOffset",p.height());break;default:p.data("yOffset",Math.round(p.height()/2))}switch(this.options.hAll){case"left":p.data("xOffset",0);break;case"right":p.data("xOffset",p.width());break;default:p.data("xOffset",Math.round(p.width()/2))}return p.click(function(t){t.preventDefault(),r.options.canEdit?r._trigger("onEdit",t,d):r._trigger("onShow",t,d)}),p.on("remove",function(){r._delete(d)}),this.notes.push(d),t(this.img).imgViewer("update"),d},count:function(){return this.noteCount},_delete:function(e){this.notes=this.notes.filter(function(t){return t!==e}),t(e).off(),t(e).remove(),t(this.img).imgViewer("update")},clear:function(){for(var t=this,e=t.notes.length,o=0;e>o;o++){var i=t.notes[o];i.off(),i.remove()}t.notes=[],t.noteCount=0},"import":function(e){var o=this;t.each(e,function(){o.addNote(this.x,this.y,this.note,this.id,this.userid,this.username)}),t(this.img).imgViewer("update")},"export":function(){var e=[];return t.each(this.notes,function(){var o=t(this);e.push({x:o.data("relx"),y:o.data("rely"),note:o.data("note")})}),e}})}(jQuery);