function zipdata(a){AjaxZip3.callback(a)}AjaxZip3=function(){},AjaxZip3.VERSION="0.4",AjaxZip3.JSONDATA="http://ajaxzip3.googlecode.com/svn/trunk/ajaxzip3/zipdata",AjaxZip3.CACHE=[],AjaxZip3.prev="",AjaxZip3.nzip="",AjaxZip3.fzip1="",AjaxZip3.fzip2="",AjaxZip3.fpref="",AjaxZip3.addr="",AjaxZip3.fstrt="",AjaxZip3.farea="",AjaxZip3.PREFMAP=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],AjaxZip3.zip2addr=function(a,b,c,d,e,f){if(AjaxZip3.fzip1=AjaxZip3.getElementByName(a),AjaxZip3.fzip2=AjaxZip3.getElementByName(b,AjaxZip3.fzip1),AjaxZip3.fpref=AjaxZip3.getElementByName(c,AjaxZip3.fzip1),AjaxZip3.faddr=AjaxZip3.getElementByName(d,AjaxZip3.fzip1),AjaxZip3.fstrt=AjaxZip3.getElementByName(e,AjaxZip3.fzip1),AjaxZip3.farea=AjaxZip3.getElementByName(f,AjaxZip3.fzip1),AjaxZip3.fzip1&&AjaxZip3.fpref&&AjaxZip3.faddr){var g=AjaxZip3.fzip1.value;if(AjaxZip3.fzip2&&AjaxZip3.fzip2.value&&(g+=AjaxZip3.fzip2.value),g){AjaxZip3.nzip="";for(var h=0;h<g.length;h++){var i=g.charCodeAt(h);48>i||i>57||(AjaxZip3.nzip+=g.charAt(h))}if(!(AjaxZip3.nzip.length<7)){var j=AjaxZip3.nzip.substr(0,3),k=AjaxZip3.CACHE[j];return k?AjaxZip3.callback(k):void AjaxZip3.zipjsonpquery()}}}},AjaxZip3.callback=function(a){var b=a[AjaxZip3.nzip],c=AjaxZip3.nzip-0+4278190080+"";if(!b&&a[c]&&(b=a[c]),b){var d=b[0];if(d){var e=AjaxZip3.PREFMAP[d];if(e){var f=b[1];f||(f="");var g=b[2];g||(g="");var h=b[3];h||(h="");var i=AjaxZip3.faddr,j=f;if("select-one"==AjaxZip3.fpref.type||"select-multiple"==AjaxZip3.fpref.type)for(var k=AjaxZip3.fpref.options,l=0;l<k.length;l++){var m=k[l].value,n=k[l].text;k[l].selected=m==d||m==e||n==e}else AjaxZip3.fpref.name==AjaxZip3.faddr.name?j=e+j:AjaxZip3.fpref.value=e;if(AjaxZip3.farea?(i=AjaxZip3.farea,AjaxZip3.farea.value=g):j+=g,AjaxZip3.fstrt&&(i=AjaxZip3.fstrt,AjaxZip3.faddr.name==AjaxZip3.fstrt.name?j+=h:h&&(AjaxZip3.fstrt.value=h)),AjaxZip3.faddr.value=j,i&&i.value){var o=i.value.length;if(i.focus(),i.createTextRange){var p=i.createTextRange();p.move("character",o),p.select()}else i.setSelectionRange&&i.setSelectionRange(o,o)}}}}},AjaxZip3.getResponseText=function(a){var b=a.responseText;if(navigator.appVersion.indexOf("KHTML")>-1){var c=escape(b);c.indexOf("%u")<0&&c.indexOf("%")>-1&&(b=decodeURIComponent(c))}return b},AjaxZip3.getElementByName=function(a,b){if("string"==typeof a){var c=document.getElementsByName(a);if(!c)return null;if(!(c.length>1&&b&&b.form))return c[0];for(var d=b.form.elements,e=0;e<d.length;e++)if(d[e].name==a)return d[e]}return a},AjaxZip3.zipjsonpquery=function(){var a=AjaxZip3.JSONDATA+"/zip-"+AjaxZip3.nzip.substr(0,3)+".js",b=document.createElement("script");b.setAttribute("type","text/javascript"),b.setAttribute("src",a),b.setAttribute("charset","UTF-8"),document.getElementsByTagName("head").item(0).appendChild(b)};