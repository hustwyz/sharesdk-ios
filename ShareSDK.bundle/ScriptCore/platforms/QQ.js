var $pluginID="com.mob.sharesdk.QQ";eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([3-79a-hk-mo-zA-Z]|[1-3]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 21="auth://tauth.qq.1f/";7 F={"1g":"app_id","1h":"app_key","1G":"auth_type","1H":"covert_url"};7 22={"1S":0,"1t":1};7 17={};b h(H){9.2t=H;9.w={"P":4,"Q":4};9.1i=4;9.1u=4;9.1I=4}h.k.H=b(){u 9.2t};h.k.K=b(){u"h"};h.k.A=b(){6(9.w["Q"]!=4&&9.w["Q"][F.1g]!=4){u 9.w["Q"][F.1g]}m 6(9.w["P"]!=4&&9.w["P"][F.1g]!=4){u 9.w["P"][F.1g]}u 4};h.k.1T=b(){6(9.w["Q"]!=4&&9.w["Q"][F.1h]!=4){u 9.w["Q"][F.1h]}m 6(9.w["P"]!=4&&9.w["P"][F.1h]!=4){u 9.w["P"][F.1h]}u 4};h.k.M=b(){6(9.w["Q"]!=4&&9.w["Q"][F.1G]!=4){u 9.w["Q"][F.1G]}m 6(9.w["P"]!=4&&9.w["P"][F.1G]!=4){u 9.w["P"][F.1G]}u $3.5.M()};h.k.23=b(){u"2u-2v-"+$3.5.l.h+"-"+9.A()};h.k.24=b(){6(9.w["Q"]!=4&&9.w["Q"][F.1H]!=4){u 9.w["Q"][F.1H]}m 6(9.w["P"]!=4&&9.w["P"][F.1H]!=4){u 9.w["P"][F.1H]}u $3.5.24()};h.k.2w=b(1b){6(2x.1j==0){u 9.w["P"]}m{9.w["P"]=9.25(1b);9.26();9.27(9.A())}};h.k.2y=b(1b){6(2x.1j==0){u 9.w["Q"]}m{9.w["Q"]=9.25(1b);9.26();9.27(9.A())}};h.k.saveConfig=b(){7 e=9;7 1k="2u-2v";$3.G.2z("2A",18,1k,b(a){6(a!=4){7 1J=a.1b;6(1J==4){1J={}}1J["plat_"+e.H()]=e.A();$3.G.2B("2A",1J,18,1k,4)}})};h.k.isSupportAuth=b(){u 1v};h.k.authorize=b(f,J){7 d=4;6(9.2C()){6(J==4){J={}}6(J["1w"]==4){J["1w"]=["2D","get_user_info","add_topic","upload_pic","add_share"]}7 e=9;7 M=9.M();6(M=="1K"||M=="sso"){$3.G.2E(b(a){6(a.R){e.2F(b(N,12){6(N){e.2G(f,12,J)}m 6(M=="1K"){e.1x(f,J)}m{7 d={"q":$3.5.x.1l,"E":"分享平台［"+e.K()+"］不支持["+M+"]授权方式!"};$3.C.S(f,$3.5.g.r,d)}})}m 6(M=="1K"){e.1x(f,J)}m{7 d={"q":$3.5.x.1l,"E":"分享平台［"+e.K()+"］不支持["+M+"]授权方式!"};$3.C.S(f,$3.5.g.r,d)}})}m 6(M=="web"){e.1x(f,J)}m{d={"q":$3.5.x.1l,"E":"分享平台［"+9.K()+"］不支持["+M+"]授权方式!"};$3.C.S(f,$3.5.g.r,d)}}m{d={"q":$3.5.x.28,"E":"分享平台［"+9.K()+"］应用信息无效!"};$3.C.S(f,$3.5.g.r,d)}};h.k.2H=b(29,c){7 e=9;9.1L(b(o){6(29!=4){7 d={"q":$3.5.x.1l,"E":"分享平台［"+e.K()+"］不支持获取其他用户资料!"};6(c!=4){c($3.5.g.r,d)}u}e.2I("2a://openmobile.qq.1f/o/2D","2J",4,b(1m,a){7 V=a;6(1m==$3.5.g.1n){V={"2b":$3.5.l.1t,"1y":o.T.1y};e.2c(V,a);6(V["1y"]==o["1y"]){V["T"]=o["T"]}}6(c!=4){c(1m,V)}})})};h.k.2I=b(s,2K,W,c){7 d=4;7 e=9;9.1L(b(o){6(o!=4){6(W==4){W={}}W["oauth_consumer_key"]=e.A();6(o.T!=4){W["1M"]=o.T.1U;W["1N"]=o.T.1y}$3.G.2L($3.5.l.1t,4,s,2K,W,4,b(a){6(a!=4){6(a["q"]!=4){6(c){c($3.5.g.r,a)}}m{7 1c=$3.X.jsonStringToObject($3.X.2M(a["2N"]));6(a["2d"]==2O){6(c){c($3.5.g.1n,1c)}}m{7 2e=$3.5.x.Y;1O(1c["q"]){L 100006:L 100007:L 100013:L 100014:L 100015:L 100016:L 100030:2e=$3.5.x.2P;I}d={"q":2e,"13":1c};6(c){c($3.5.g.r,d)}}}}m{d={"q":$3.5.x.Y};6(c){c($3.5.g.r,d)}}})}m{d={"q":$3.5.x.2P,"E":"尚未授权["+e.K()+"]用户"};6(c){c($3.5.g.r,d)}}})};h.k.handleAuthCallback=b(f,Z){7 d=4;7 e=9;7 1V=$3.X.parseUrl(Z);6(1V!=4&&1V.29!=4){7 W=$3.X.parseUrlParameters(1V.fragment);6(W!=4&&W.1M!=4){7 2Q={"1M":W.1M};$3.G.2L($3.5.l.1t,4,"2a://2R.qq.1f/2S.0/me","2J",2Q,4,b(a){6(a!=4){6(a["q"]!=4){$3.C.S(f,$3.5.g.r,a)}m 6(a["2d"]!=4&&a["2d"]==2O){7 c=b(2T){u 2T};7 2U=$3.X.2M(a["2N"]);7 1c=eval(2U);6(1c.1N!=4){W["1N"]=1c.1N;e.2f(f,W)}m{d={"q":$3.5.x.Y,"13":1c};$3.C.S(f,$3.5.g.r,d)}}m{d={"q":$3.5.x.Y,"13":a};$3.C.S(f,$3.5.g.r,d)}}m{d={"q":$3.5.x.Y};$3.C.S(f,$3.5.g.r,d)}})}m{d={"q":$3.5.x.2V,"E":"无效的授权回调:["+Z+"]"};$3.C.S(f,$3.5.g.r,d)}}m{d={"q":$3.5.x.2V,"E":"无效的授权回调:["+Z+"]"};$3.C.S(f,$3.5.g.r,d)}};h.k.handleSSOCallback=b(f,Z,2W,2X){7 e=9;6(Z.2g(9.1u+"://")==0){$3.G.ssdk_qqHandlerSSOCallback(9.A(),Z,b(a){1O(a.1m){L $3.5.g.1n:{e.2f(f,a.R);I}L $3.5.g.r:{7 d={"q":$3.5.x.Y};$3.C.S(f,$3.5.g.r,d);I}1W:$3.C.S(f,$3.5.g.2Y,4);I}});u 1v}u 18};h.k.handleShareCallback=b(f,Z,2W,2X){7 e=9;6(Z.2g(9.1u+"://")==0||Z.2g(9.1I+"://")==0){$3.G.ssdk_qqHandlerShareCallback(9.A(),Z,b(a){e.1L(b(o){7 U=17[f];7 O=4;7 y=4;6(U!=4){O=U["O"];y=U["13"]}1O(a.1m){L $3.5.g.1n:{7 V={};V["2h"]=O;V["p"]=O["p"];7 1X=[];6(O["s"]){1X.push(O["s"])}V["1X"]=1X;6(O["10"]!=4){V["D"]=[O["10"]]}m 6(O["19"]!=4){V["D"]=[O["19"]]}$3.C.2i(f,$3.5.g.1n,V,o,y);I}L $3.5.g.r:7 d={"q":$3.5.x.Y,"13":{"q":a.q,"E":a.E}};$3.C.2i(f,$3.5.g.r,d,o,y);I;1W:$3.C.2i(f,$3.5.g.2Y,4,o,y);I}delete 17[f];17[f]=4})});u 1v}u 18};h.k.cancelAuthorize=b(){9.1Y(4,4)};h.k.addFriend=b(f,o,c){7 d={"q":$3.5.x.1l,"E":"平台["+9.K()+"]不支持添加好友方法!"};6(c!=4){c($3.5.g.r,d)}};h.k.getFriends=b(cursor,size,c){7 d={"q":$3.5.x.1l,"E":"平台["+9.K()+"]不支持获取好友列表方法!"};6(c!=4){c($3.5.g.r,d)}};h.k.share=b(f,t,c){7 e=9;7 1Z=t["@1Z"];7 y={"@1Z":1Z};$3.G.2j("1f.3.2k.2l.qq",b(a){6(a.R){$3.G.2E(b(a){6(a.R){e.2Z(b(N,12){6(N){e.30(f,t,y,c)}m{7 d={"q":$3.5.x.UnsetURLScheme,"E":"尚未配置["+e.K()+"]2m 2n:"+e.1I+", 无法进行分享。"};6(c!=4){c($3.5.g.r,d,4,y)}}})}m{7 d={"q":$3.5.x.1l,"E":"应用已禁用后台模式，分享平台［"+e.K()+"］无法进行分享! 请在项目设置中开启后台模式后再试!"};6(c!=4){c($3.5.g.r,d,4,y)}}})}m{7 d={"q":$3.5.x.28,"E":"分享平台［"+e.K()+"］尚未导入31.32!无法进行分享!"};6(c!=4){c($3.5.g.r,d,4,y)}}})};h.k.createUserByRawData=b(11){7 o={"2b":9.H()};9.2c(o,11);u $3.X.2o(o)};h.k.1z=b(2p,c){6(9.24()){7 e=9;9.1L(b(o){$3.5.convertUrl(e.H(),o,2p,c)})}m{6(c){c({"R":2p})}}};h.k._isUserAvaliable=b(o){u o.T!=4&&o.T.1U!=4&&o.T.33>34 35().36()};h.k.26=b(){9.1u=4;7 A=9.A();6(A!=4){9.1u="tencent"+A;7 1b=parseInt(9.A());7 1P=1b.1d(16).toUpperCase();while(1P.1j<8){1P="0"+1P}9.1I="h"+1P}};h.k.2C=b(){6(9.A()!=4&&9.1T()!=4){u 1v}$3.C.2q("#2r:["+9.K()+"]应用信息有误，不能进行相关操作。请检查本地代码中和服务端的["+9.K()+"]平台应用配置是否有误! \\n本地配置:"+$3.X.2o(9.2w())+"\\n服务器配置:"+$3.X.2o(9.2y()));u 18};h.k.25=b(1A){7 A=$3.X.37(1A[F.1g]);7 1T=$3.X.37(1A[F.1h]);1A[F.1g]=A;1A[F.1h]=1T;u 1A};h.k.2F=b(c){7 e=9;$3.G.38(b(a){7 12=4;7 1B="";7 N=18;7 1C=e.1u;6(a!=4&&a.1D!=4){20(7 i=0;i<a.1D.1j;i++){7 14=a.1D[i];6(14!=4&&14.1E!=4){20(7 j=0;j<14.1E.1j;j++){7 1F=14.1E[j];6(1F==1C){N=1v;12=1F;I}}}6(N){I}}}6(!N){1B=1C}6(!N){$3.C.2q("#2r:尚未配置["+e.K()+"]2m 2n:"+1B+", 无法使用SSO授权, 将以Web方式进行授权。")}6(c!=4){c(N,12)}})};h.k.2Z=b(c){7 e=9;$3.G.38(b(a){7 12=4;7 1B="";7 N=18;7 1C=e.1I;6(a!=4&&a.1D!=4){20(7 i=0;i<a.1D.1j;i++){7 14=a.1D[i];6(14!=4&&14.1E!=4){20(7 j=0;j<14.1E.1j;j++){7 1F=14.1E[j];6(1F==1C){N=1v;12=1F;I}}}6(N){I}}}6(!N){1B=1C}6(!N){$3.C.2q("#2r:尚未配置["+e.K()+"]2m 2n:"+1B+", 无法进行分享。")}6(c!=4){c(N,12)}})};h.k.1x=b(f,J){7 2s="2a://2R.qq.1f/2S.0/m_authorize?client_id="+9.A()+"&response_type=1U&redirect_uri="+$3.X.39(21)+"&display=mobile";6(J!=4&&J["1w"]!=4&&1o.k.1d.1p(J["1w"])===\'[1q 1r]\'){2s+="&scope="+$3.X.39(J["1w"].join(","))}$3.C.ssdk_openAuthUrl(f,2s,21)};h.k.2G=b(f,12,J){7 e=9;7 M=e.M();$3.G.2j("1f.3.2k.2l.qq",b(a){6(a.R){$3.G.ssdk_qqAuth(e.A(),J["1w"],b(a){6(a["q"]!=4){6(a["q"]==$3.5.x.NotYetInstallClient&&M=="1K"){e.1x(f,J)}m{$3.C.S(f,$3.5.g.r,a)}}})}m{6(M=="1K"){e.1x(f,J)}m{7 d={"q":$3.5.x.28,"E":"分享平台［"+e.K()+"］尚未导入31.32!无法进行授权!"};$3.C.S(f,$3.5.g.r,d)}}})};h.k.2f=b(f,1Q){7 e=9;7 T={"1y":1Q["1N"],"1U":1Q["1M"],"33":(34 35().36()+1Q["expires_in"]*1000),"2h":1Q,"H":$3.5.credentialType.OAuth2};7 o={"2b":$3.5.l.h,"T":T};9.1Y(o,b(){e.2H(4,b(1m,a){6(1m==$3.5.g.1n){a["T"]=o["T"];o=a;e.1Y(o,4)}$3.C.S(f,$3.5.g.1n,o)})})};h.k.1Y=b(o,c){9.1i=o;7 1k=9.23();$3.G.2B("3a",9.1i,18,1k,b(a){6(c!=4){c()}})};h.k.1L=b(c){6(9.1i!=4){6(c){c(9.1i)}}m{7 e=9;7 1k=9.23();$3.G.2z("3a",18,1k,b(a){e.1i=a!=4?a.1b:4;6(c){c(e.1i)}})}};h.k.2c=b(o,11){6(o!=4&&11!=4){o["2h"]=11;o["3b"]=11["3b"];o["icon"]=11["figureurl_2"];7 1s=2;6(11["1s"]=="男"){1s=0}m 6(11["1s"]=="女"){1s=1}o["1s"]=1s;o["verify_type"]=11["vip"]?1:0;o["3c"]=11["3c"]}};h.k.30=b(f,t,y,c){7 p=4;7 v=4;7 z=4;7 D=4;7 s=4;7 e=9;7 l=4;7 d=4;7 1a=t["qq_scene"];6(1a==4){1a=22.1S}1O(1a){L 22.1t:l=$3.5.l.1t;I;1W:l=$3.5.l.1S;I}7 H=$3.5.B(l,t,"H");6(H==4){H=$3.5.15.3d}6(H==$3.5.15.3d){H=9.3e(t,l)}1O(H){L $3.5.15.3f:{p=$3.5.B(l,t,"p");6(p!=4){9.1z([p],b(a){p=a.R[0];$3.G.ssdk_qqShareText(e.A(),1a,p,b(a){6(a.q!=4){6(c!=4){c($3.5.g.r,a,4,y)}}m{7 U={"1R":l,"p":p};17[f]={"O":U,"13":y}}})})}m{d={"q":$3.5.x.Y,"E":"分享参数p不能为空!"};6(c!=4){c($3.5.g.r,d,4,y)}}I}L $3.5.15.3g:{p=$3.5.B(l,t,"p");v=$3.5.B(l,t,"v");z=$3.5.B(l,t,"10");7 19=4;D=$3.5.B(l,t,"D");6(1o.k.1d.1p(D)===\'[1q 1r]\'){19=D[0]}6(19!=4){9.1z([p],b(a){p=a.R[0];$3.G.ssdk_qqShareImage(e.A(),1a,v,p,z,19,b(a){6(a.q!=4){6(c!=4){c($3.5.g.r,a,4,y)}}m{7 U={"1R":l,"p":p,"v":v,"10":z,"19":19};17[f]={"O":U,"13":y}}})})}m{d={"q":$3.5.x.Y,"E":"分享参数19不能为空!"};6(c!=4){c($3.5.g.r,d,4,y)}}I}L $3.5.15.3h:{p=$3.5.B(l,t,"p");v=$3.5.B(l,t,"v");z=$3.5.B(l,t,"10");6(z==4){D=$3.5.B(l,t,"D");6(1o.k.1d.1p(D)===\'[1q 1r]\'){z=D[0]}}s=$3.5.B(l,t,"s");6(v!=4&&z!=4&&s!=4){9.1z([p,s],b(a){p=a.R[0];s=a.R[1];$3.G.ssdk_qqShareWebpage(e.A(),1a,v,p,z,s,b(a){6(a.q!=4){6(c!=4){c($3.5.g.r,a,4,y)}}m{7 U={"1R":l,"p":p,"v":v,"10":z,"s":s};17[f]={"O":U,"13":y}}})})}m{d={"q":$3.5.x.Y,"E":"分享参数v、z、s不能为空!"};6(c!=4){c($3.5.g.r,d,4,y)}}I}L $3.5.15.Audio:{p=$3.5.B(l,t,"p");v=$3.5.B(l,t,"v");z=$3.5.B(l,t,"10");6(z==4){D=$3.5.B(l,t,"D");6(1o.k.1d.1p(D)===\'[1q 1r]\'){z=D[0]}}s=$3.5.B(l,t,"s");6(v!=4&&z!=4&&s!=4){9.1z([p,s],b(a){p=a.R[0];s=a.R[1];$3.G.ssdk_qqShareAudio(e.A(),1a,v,p,z,s,b(a){6(a.q!=4){6(c!=4){c($3.5.g.r,a,4,y)}}m{7 U={"1R":l,"p":p,"v":v,"10":z,"s":s};17[f]={"O":U,"13":y}}})})}m{d={"q":$3.5.x.Y,"E":"分享参数v、z、s不能为空!"};6(c!=4){c($3.5.g.r,d,4,y)}}I}L $3.5.15.Video:{p=$3.5.B(l,t,"p");v=$3.5.B(l,t,"v");z=$3.5.B(l,t,"10");6(z==4){D=$3.5.B(l,t,"D");6(1o.k.1d.1p(D)===\'[1q 1r]\'){z=D[0]}}s=$3.5.B(l,t,"s");6(v!=4&&z!=4&&s!=4){9.1z([p,s],b(a){p=a.R[0];s=a.R[1];$3.G.ssdk_qqShareVideo(e.A(),1a,v,p,z,s,b(a){6(a.q!=4){6(c!=4){c($3.5.g.r,a,4,y)}}m{7 U={"1R":l,"p":p,"v":v,"10":z,"s":s};17[f]={"O":U,"13":y}}})})}m{d={"q":$3.5.x.Y,"E":"分享参数v、z、s不能为空!"};6(c!=4){c($3.5.g.r,d,4,y)}}I}1W:{d={"q":$3.5.x.UnsupportContentType,"E":"不支持的分享类型["+H+"]"};6(c!=4){c($3.5.g.r,d,4,y)}I}}};h.k.27=b(A){$3.G.2j("1f.3.2k.2l.qq",b(a){6(a.R){$3.C.ssdk_plugin_qq_setup(A)}})};h.k.3e=b(t,l){7 H=$3.5.15.3f;7 v=$3.5.B(l,t,"v");7 z=$3.5.B(l,t,"10");7 s=$3.5.B(l,t,"s");7 D=$3.5.B(l,t,"D");6(v!=4&&(z!=4||1o.k.1d.1p(D)===\'[1q 1r]\')&&s!=4){H=$3.5.15.3h}m 6(1o.k.1d.1p(D)===\'[1q 1r]\'&&l==$3.5.l.1S){H=$3.5.15.3g}u H};$3.5.registerPlatformClass($3.5.l.h,h);',[],204,'|||mob|null|shareSDK|if|var||this|data|function|callback|error|self|sessionId|responseState|QQ|||prototype|platformType|else||user|text|error_code|Fail|url|parameters|return|title|_appInfo|errorCode|userData|thumbImage|appId|getShareParam|native|images|error_message|QQAppInfoKeys|ext|type|break|settings|name|case|authType|hasReady|content|local|server|result|ssdk_authStateChanged|credential|shareParams|resultData|params|utils|APIRequestFail|callbackUrl|thumb_image|rawData|urlScheme|user_data|typeObj|contentType||QQShareContentSet|false|image|scene|value|response|toString||com|AppID|AppKey|_currentUser|length|domain|UnsupportFeature|state|Success|Object|apply|object|Array|gender|QZone|_authUrlScheme|true|scopes|_webAuthorize|uid|_convertUrl|appInfo|warningLog|callbackScheme|CFBundleURLTypes|CFBundleURLSchemes|schema|AuthType|ConvertUrl|_shareUrlScheme|curApps|both|_getCurrentUser|access_token|openid|switch|str|credentialRawData|platform|QQFriend|appKey|token|urlInfo|default|urls|_setCurrentUser|flags|for|QQRedirectUri|QQScene|cacheDomain|convertUrlEnabled|_checkAppInfoAvailable|_updateCallbackURLSchemes|_setupApp|InvaildPlatform|query|https|platform_type|_updateUserInfo|status_code|code|_succeedAuthorize|indexOf|raw_data|ssdk_shareStateChanged|isPluginRegisted|sharesdk|connector|URL|Scheme|objectToJsonString|contents|log|warning|authUrl|_type|SSDK|Platform|localAppInfo|arguments|serverAppInfo|getCacheData|currentApp|setCacheData|_isAvailable|get_simple_userinfo|isMultitaskingSupported|_checkUrlScheme|_ssoAuthorize|getUserInfo|callApi|GET|method|ssdk_callHTTPApi|base64Decode|response_data|200|UserUnauth|getOpenIDParams|graph|oauth2|obj|responseString|InvalidAuthCallback|sourceApplication|annotation|Cancel|_checkShareUrlScheme|_share|TencentOpenApi|framework|expired|new|Date|getTime|trim|getAppConfig|urlEncode|currentUser|nickname|level|Auto|_getShareType|Text|Image|WebPage'.split('|'),0,{}))