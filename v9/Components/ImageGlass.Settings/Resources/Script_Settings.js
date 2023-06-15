﻿!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("ig-ui",[],n):"object"==typeof exports?exports["ig-ui"]=n():e["ig-ui"]=n()}(this,(()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n);var t=function(){function e(){this.eventHandlers={}}return e.prototype.addEvent=function(e,n){this.eventHandlers[e]=n},e.prototype.removeEvent=function(e){delete this.eventHandlers[e]},e.prototype.startListening=function(){var e,n=this;null===(e=window.chrome.webview)||void 0===e||e.addEventListener("message",(function(e){var t,o,r=e.data,a=null!==(t=null==r?void 0:r.Name)&&void 0!==t?t:"",i=null!==(o=null==r?void 0:r.Data)&&void 0!==o?o:"",l=n.eventHandlers[a],u=!!l;console.info("Received event '".concat(a,"' (handler=").concat(u,") with data:"),i),u&&l(a,i)}))},e}(),o=function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}u((o=o.apply(e,n||[])).next())}))},r=function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(u){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],o=0}finally{t=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},a=function(e,n){return new Promise((function(t){setTimeout((function(){return t(n)}),e)}))},i=function(e,n){_webview.addEvent(e,n)},l=function(e,n,t){if(t||2===arguments.length)for(var o,r=0,a=n.length;r<a;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))},u=function(e){for(var n={},t=queryAll('[tab="'.concat(e,'"] input[name]')),o=queryAll('[tab="'.concat(e,'"] select[name]')),r=0,a=l(l([],t,!0),o,!0);r<a.length;r++){var i=a[r],u=i.name,s="";i.name.startsWith("_")||i.checkValidity()&&(s="checkbox"===i.type?i.checked:"number"===i.type?+i.value:i.value)!==_pageSettings.config[u]&&(n[u]=s)}return n};const s=function(){function e(){}return e.load=function(){var e=function(e){if(!Object.prototype.hasOwnProperty.call(_pageSettings.lang,e))return"continue";var n=_pageSettings.lang[e];queryAll('[lang-text="'.concat(e,'"]')).forEach((function(e){e.innerText=n})),queryAll('[lang-title="'.concat(e,'"]')).forEach((function(e){e.title=n}))};for(var n in _pageSettings.lang)e(n)},e}();var c=function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}u((o=o.apply(e,n||[])).next())}))},d=function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(u){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],o=0}finally{t=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};const g=function(){function e(){}return e.loadSettings=function(){e.loadThemeList(),e.loadThemeListStatus(),e.handleBackgroundColorChanged(),e.handleSlideshowBackgroundColorChanged()},e.loadThemeListStatus=function(){var e=query('[name="DarkTheme"]').value,n=query('[name="LightTheme"]').value,t=query('[name="_DarkThemeOptions"][value="'.concat(e,'"]')),o=query('[name="_LightThemeOptions"][value="'.concat(n,'"]'));t&&(t.checked=!0),o&&(o.checked=!0)},e.addEvents=function(){var n=this;query("#Lnk_ResetBackgroundColor").addEventListener("click",e.resetBackgroundColor,!1),query("#Lnk_ResetSlideshowBackgroundColor").addEventListener("click",e.resetSlideshowBackgroundColor,!1),query("#Btn_BackgroundColor").addEventListener("click",(function(){return c(n,void 0,void 0,(function(){var n,t;return d(this,(function(o){switch(o.label){case 0:return n=query('[name="BackgroundColor"]'),[4,postAsync("Btn_BackgroundColor",n.value)];case 1:return(t=o.sent())&&(n.value=t,e.handleBackgroundColorChanged()),[2]}}))}))}),!1),query("#Btn_SlideshowBackgroundColor").addEventListener("click",(function(){return c(n,void 0,void 0,(function(){var n,t;return d(this,(function(o){switch(o.label){case 0:return n=query('[name="SlideshowBackgroundColor"]'),[4,postAsync("Btn_SlideshowBackgroundColor",n.value)];case 1:return(t=o.sent())&&(n.value=t,e.handleSlideshowBackgroundColorChanged()),[2]}}))}))}),!1),query("#Btn_InstallTheme").addEventListener("click",(function(){return c(n,void 0,void 0,(function(){var n;return d(this,(function(t){switch(t.label){case 0:return[4,postAsync("Btn_InstallTheme")];case 1:return n=t.sent(),e.loadThemeList(n),[2]}}))}))}),!1),query("#Btn_RefreshThemeList").addEventListener("click",(function(){return c(n,void 0,void 0,(function(){var n;return d(this,(function(t){switch(t.label){case 0:return[4,postAsync("Btn_RefreshThemeList")];case 1:return n=t.sent(),e.loadThemeList(n),[2]}}))}))}),!1),query("#Btn_OpenThemeFolder").addEventListener("click",(function(){return post("Btn_OpenThemeFolder")}),!1)},e.exportSettings=function(){var e=u("appearance");return e.DarkTheme=query('[name="DarkTheme"]').value,e.DarkTheme===_pageSettings.config.DarkTheme&&delete e.DarkTheme,e.LightTheme=query('[name="LightTheme"]').value,e.LightTheme===_pageSettings.config.LightTheme&&delete e.LightTheme,e},e.loadThemeList=function(n){var t=this;Array.isArray(n)&&n.length>0&&(_pageSettings.themeList=n);for(var o=_pageSettings.themeList||[],r=query("#List_ThemeList"),a="",i=0,l=o;i<l.length;i++){var u=l[i];a+='\n        <li>\n          <div class="theme-item">\n            <div class="theme-preview">\n              <div class="theme-preview-img" title="'.concat(u.FolderPath,'">\n                <img src="').concat(u.PreviewImage,'" alt="').concat(u.Info.Name,'" onerror="this.hidden = true;" />\n                <span class="theme-mode ').concat(u.IsDarkMode?"theme-dark":"theme-light",'"\n                  lang-title="FrmSettings.Tab.Appearance.').concat(u.IsDarkMode?"_DarkTheme":"_LightTheme",'">\n                  ').concat(u.IsDarkMode?"🌙":"☀️",'\n                </span>\n              </div>\n            </div>\n            <div class="theme-info">\n              <div class="theme-heading" title="').concat(u.Info.Name," - v").concat(u.Info.Version,'">\n                <span class="theme-name">').concat(u.Info.Name,'</span>\n                <span class="theme-version">').concat(u.Info.Version,'</span>\n              </div>\n              <div class="theme-description" title="').concat(u.Info.Description,'">').concat(u.Info.Description,'</div>\n              <div class="theme-author">\n                <span class="me-4" title="').concat(u.Info.Author,'">\n                  <span lang-text="FrmSettings.Tab.Appearance._Author">[Author]</span>:\n                  ').concat(u.Info.Author||"?",'\n                </span>\n                <span class="me-4" title="').concat(u.Info.Website,'">\n                  <span lang-text="_._Website">[Website]</span>:\n                  ').concat(u.Info.Website||"?",'\n                </span>\n                <span title="').concat(u.Info.Email,'">\n                  <span lang-text="_._Email">[Email]</span>:\n                  ').concat(u.Info.Email||"?",'\n                </span>\n              </div>\n              <div class="theme-actions">\n                <label lang-title="FrmSettings.Tab.Appearance._UseThemeForDarkMode">\n                  <input type="radio" name="_DarkThemeOptions" value="').concat(u.FolderName,'" />\n                  <span>\n                    <span>🌙</span>\n                    <span lang-text="FrmSettings.Tab.Appearance._DarkTheme">[Dark]</span> \n                  </span>\n                </label>\n                <label lang-title="FrmSettings.Tab.Appearance._UseThemeForLightMode">\n                  <input type="radio" name="_LightThemeOptions" value="').concat(u.FolderName,'" />\n                  <span>\n                    <span>☀️</span>\n                    <span lang-text="FrmSettings.Tab.Appearance._LightTheme">[Light]</span>\n                  </span>\n                </label>\n\n                <button type="button" class="ms-3 px-1"\n                  lang-title="_._Delete"\n                  ').concat(_pageSettings.defaultThemeDir===u.FolderPath?'style="visibility: hidden !important;"':"",'\n                  data-delete-theme="').concat(u.FolderPath,'">\n                  ❌\n                </button>\n              </div>\n            </div>\n          </div>\n        </li>')}r.innerHTML=a,s.load(),e.loadThemeListStatus(),queryAll('[name="_DarkThemeOptions"]').forEach((function(e){e.addEventListener("change",(function(e){var n=e.target.value;query('[name="DarkTheme"]').value=n}),!1)})),queryAll('[name="_LightThemeOptions"]').forEach((function(e){e.addEventListener("change",(function(e){var n=e.target.value;query('[name="LightTheme"]').value=n}),!1)})),queryAll("[data-delete-theme]").forEach((function(n){n.addEventListener("click",(function(n){return c(t,void 0,void 0,(function(){var t,o;return d(this,(function(r){switch(r.label){case 0:return t=n.target.getAttribute("data-delete-theme"),[4,postAsync("Delete_Theme_Pack",t)];case 1:return o=r.sent(),e.loadThemeList(o),[2]}}))}))}),!1)}))},e.resetBackgroundColor=function(){var n="light"!==document.documentElement.getAttribute("color-mode")?_pageSettings.config.DarkTheme:_pageSettings.config.LightTheme,t=_pageSettings.themeList.find((function(e){return e.FolderName===n}));if(t){var o=t.BgColor||"#00000000";query('[name="BackgroundColor"]').value=o,e.handleBackgroundColorChanged()}},e.resetSlideshowBackgroundColor=function(){query('[name="SlideshowBackgroundColor"]').value="#000000",e.handleSlideshowBackgroundColorChanged()},e.handleBackgroundColorChanged=function(){var e=query('[name="BackgroundColor"]').value;e&&(query("#Btn_BackgroundColor > .color-display").style.setProperty("--color-picker-value",e),query("#Lbl_BackgroundColorValue").innerText=e)},e.handleSlideshowBackgroundColorChanged=function(){var e=query('[name="SlideshowBackgroundColor"]').value;e&&(query("#Btn_SlideshowBackgroundColor > .color-display").style.setProperty("--color-picker-value",e),query("#Lbl_SlideshowBackgroundColorValue").innerText=e)},e}();const f=function(){function e(){}return e.addEvents=function(){for(var n=Array.from(document.querySelectorAll('input[name="nav"]')),t=0;t<n.length;t++){n[t].addEventListener("change",(function(n){var t=n.target.value;e.setActiveMenu(t)}),!1)}},e.setActiveMenu=function(e){e||(e="general");var n=query('.tab-page[tab="'.concat(e,'"]'));if(n){queryAll(".tab-page").forEach((function(e){return e.classList.remove("active")})),n.classList.add("active"),queryAll('input[type="radio"]').forEach((function(e){return e.checked=!1}));var t=query('input[type="radio"][value="'.concat(e,'"]'));t&&(t.checked=!0),"appearance"===e&&g.loadThemeListStatus(),post("Sidebar_Changed",e)}},e}();const h=function(){function e(){}return Object.defineProperty(e,"isOriginalAutoUpdateEnabled",{get:function(){return"0"!==_pageSettings.config.AutoUpdate},enumerable:!1,configurable:!0}),e.loadSettings=function(){query("#Lnk_StartupDir").title=_pageSettings.startUpDir||"(unknown)",query("#Lnk_ConfigDir").title=_pageSettings.configDir||"(unknown)",query("#Lnk_UserConfigFile").title=_pageSettings.userConfigFilePath||"(unknown)",query('[name="AutoUpdate"]').checked=e.isOriginalAutoUpdateEnabled},e.addEvents=function(){query("#Lnk_StartupDir").addEventListener("click",(function(){return post("Lnk_StartupDir",_pageSettings.startUpDir)}),!1),query("#Lnk_ConfigDir").addEventListener("click",(function(){return post("Lnk_ConfigDir",_pageSettings.configDir)}),!1),query("#Lnk_UserConfigFile").addEventListener("click",(function(){return post("Lnk_UserConfigFile",_pageSettings.userConfigFilePath)}),!1)},e.exportSettings=function(){var n=u("general");return!0===n.AutoUpdate!==e.isOriginalAutoUpdateEnabled?n.AutoUpdate=n.AutoUpdate?(new Date).toISOString():"0":delete n.AutoUpdate,n},e}();var v=function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}u((o=o.apply(e,n||[])).next())}))},p=function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(u){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],o=0}finally{t=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};const m=function(){function e(){}return e.loadSettings=function(){var n=_pageSettings.config.ColorProfile||"";n.includes(".")&&(query('[name="ColorProfile"]').value="Custom",query("#Lnk_CustomColorProfile").innerText=n),e.handleColorProfileChanged(),e.handleUseEmbeddedThumbnailOptionsChanged()},e.addEvents=function(){var n=this;query("#Btn_BrowseColorProfile").addEventListener("click",(function(){return v(n,void 0,void 0,(function(){var e;return p(this,(function(n){switch(n.label){case 0:return[4,postAsync("Btn_BrowseColorProfile")];case 1:return e=n.sent(),query("#Lnk_CustomColorProfile").innerText=e,[2]}}))}))}),!1),query("#Lnk_CustomColorProfile").addEventListener("click",(function(){var e=query("#Lnk_CustomColorProfile").innerText.trim();post("Lnk_CustomColorProfile",e)}),!1),query('[name="ColorProfile"]').addEventListener("change",e.handleColorProfileChanged,!1),query('[name="UseEmbeddedThumbnailRawFormats"]').addEventListener("input",e.handleUseEmbeddedThumbnailOptionsChanged,!1),query('[name="UseEmbeddedThumbnailOtherFormats"]').addEventListener("input",e.handleUseEmbeddedThumbnailOptionsChanged,!1)},e.exportSettings=function(){var e=u("image");e.ImageBoosterCacheCount=+(e.ImageBoosterCacheCount||0),e.ImageBoosterCacheCount===_pageSettings.config.ImageBoosterCacheCount&&delete e.ImageBoosterCacheCount;var n=_pageSettings.config.ColorProfile;return"Custom"===e.ColorProfile&&(e.ColorProfile=query("#Lnk_CustomColorProfile").innerText.trim()),e.ColorProfile&&e.ColorProfile!==n||delete e.ColorProfile,e},e.handleColorProfileChanged=function(){var e="Custom"===query('[name="ColorProfile"]').value;query("#Btn_BrowseColorProfile").hidden=!e,query("#Section_CustomColorProfile").hidden=!e},e.handleUseEmbeddedThumbnailOptionsChanged=function(){var e=query('[name="UseEmbeddedThumbnailRawFormats"]').checked,n=query('[name="UseEmbeddedThumbnailOtherFormats"]').checked,t=e||n;query("#Section_EmbeddedThumbnailSize").hidden=!t},e}();const y=function(){function e(){}return e.loadSettings=function(){e.handleUseRandomIntervalForSlideshowChanged(),e.handleSlideshowIntervalsChanged()},e.addEvents=function(){query('[name="UseRandomIntervalForSlideshow"]').addEventListener("input",e.handleUseRandomIntervalForSlideshowChanged,!1),query('[name="SlideshowInterval"]').addEventListener("input",e.handleSlideshowIntervalsChanged,!1),query('[name="SlideshowIntervalTo"]').addEventListener("input",e.handleSlideshowIntervalsChanged,!1)},e.exportSettings=function(){return u("slideshow")},e.handleSlideshowIntervalsChanged=function(){var n=query('[name="SlideshowInterval"]'),t=query('[name="SlideshowIntervalTo"]');n.max=t.value,t.min=n.value;var o=+n.value||5,r=+t.value||5,a=e.toTimeString(o),i=e.toTimeString(r),l=query('[name="UseRandomIntervalForSlideshow"]').checked;query("#Lbl_SlideshowInterval").innerText=l?"".concat(a," - ").concat(i):a},e.handleUseRandomIntervalForSlideshowChanged=function(){var e=query('[name="UseRandomIntervalForSlideshow"]').checked;query("#Lbl_SlideshowIntervalFrom").hidden=!e,query("#Section_SlideshowIntervalTo").hidden=!e},e.toTimeString=function(e){var n=new Date(1e3*e),t=n.getUTCMinutes().toString(),o=n.getUTCSeconds().toString(),r=n.getUTCMilliseconds().toString();return t.length<2&&(t="0".concat(t)),o.length<2&&(o="0".concat(o)),"".concat(t,":").concat(o,".").concat(r)},e}();const S=function(){function e(){}return e.loadSettings=function(){var e,n,t,o;query("#Cmb_MouseWheel_Scroll").value=(null===(e=_pageSettings.config.MouseWheelActions)||void 0===e?void 0:e.Scroll)||"DoNothing",query("#Cmb_MouseWheel_CtrlAndScroll").value=(null===(n=_pageSettings.config.MouseWheelActions)||void 0===n?void 0:n.CtrlAndScroll)||"DoNothing",query("#Cmb_MouseWheel_ShiftAndScroll").value=(null===(t=_pageSettings.config.MouseWheelActions)||void 0===t?void 0:t.ShiftAndScroll)||"DoNothing",query("#Cmb_MouseWheel_AltAndScroll").value=(null===(o=_pageSettings.config.MouseWheelActions)||void 0===o?void 0:o.AltAndScroll)||"DoNothing"},e.addEvents=function(){query("#Btn_ResetMouseWheelAction").addEventListener("click",e.resetDefaultMouseWheelActions,!1)},e.exportSettings=function(){var e,n,t,o,r=u("mouse_keyboard"),a=query("#Cmb_MouseWheel_Scroll").value,i=query("#Cmb_MouseWheel_CtrlAndScroll").value,l=query("#Cmb_MouseWheel_ShiftAndScroll").value,s=query("#Cmb_MouseWheel_AltAndScroll").value,c={};return a!==(null===(e=_pageSettings.config.MouseWheelActions)||void 0===e?void 0:e.Scroll)&&(c.Scroll=a),i!==(null===(n=_pageSettings.config.MouseWheelActions)||void 0===n?void 0:n.CtrlAndScroll)&&(c.CtrlAndScroll=i),l!==(null===(t=_pageSettings.config.MouseWheelActions)||void 0===t?void 0:t.ShiftAndScroll)&&(c.ShiftAndScroll=l),s!==(null===(o=_pageSettings.config.MouseWheelActions)||void 0===o?void 0:o.AltAndScroll)&&(c.AltAndScroll=s),Object.keys(c).length>0?r.MouseWheelActions=c:delete r.MouseWheelActions,r},e.resetDefaultMouseWheelActions=function(){query("#Cmb_MouseWheel_Scroll").value="Zoom",query("#Cmb_MouseWheel_CtrlAndScroll").value="PanVertically",query("#Cmb_MouseWheel_ShiftAndScroll").value="PanHorizontally",query("#Cmb_MouseWheel_AltAndScroll").value="BrowseImages"},e}();var b=function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function l(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}u((o=o.apply(e,n||[])).next())}))},L=function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(u){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],o=0}finally{t=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};const _=function(){function e(){}return e.loadSettings=function(){e.handleLanguageChanged()},e.addEvents=function(){query("#Cmb_LanguageList").removeEventListener("change",e.handleLanguageChanged,!1),query("#Btn_RefreshLanguageList").removeEventListener("click",e.onBtn_RefreshLanguageList,!1),query("#Lnk_InstallLanguage").removeEventListener("click",e.onLnk_InstallLanguage,!1),query("#Cmb_LanguageList").addEventListener("change",e.handleLanguageChanged,!1),query("#Btn_RefreshLanguageList").addEventListener("click",e.onBtn_RefreshLanguageList,!1),query("#Lnk_InstallLanguage").addEventListener("click",e.onLnk_InstallLanguage,!1)},e.onBtn_RefreshLanguageList=function(){return b(this,void 0,void 0,(function(){var n;return L(this,(function(t){switch(t.label){case 0:return[4,postAsync("Btn_RefreshLanguageList")];case 1:return n=t.sent(),e.loadLanguageList(n),[2]}}))}))},e.onLnk_InstallLanguage=function(){return b(this,void 0,void 0,(function(){var n;return L(this,(function(t){switch(t.label){case 0:return[4,postAsync("Lnk_InstallLanguage")];case 1:return n=t.sent(),e.loadLanguageList(n),[2]}}))}))},e.exportSettings=function(){return u("language")},e.handleLanguageChanged=function(){var e=query("#Cmb_LanguageList").value,n=_pageSettings.langList.find((function(n){return n.FileName===e}));n&&(query("#Section_LanguageContributors").innerText=n.Metadata.Author)},e.loadLanguageList=function(n){for(var t=query("#Cmb_LanguageList");t.options.length;)t.remove(0);Array.isArray(n)&&n.length>0&&(_pageSettings.langList=n),_pageSettings.langList.forEach((function(e){var n="".concat(e.Metadata.LocalName," (").concat(e.Metadata.EnglishName,")");e.FileName&&0!==e.FileName.length||(n=e.Metadata.EnglishName);var o=new Option(n,e.FileName);t.add(o)})),t.value=_pageSettings.config.Language,e.handleLanguageChanged()},e}();const w=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return u("edit")},e}();const C=function(){function e(){}return e.loadSettings=function(){var e=_pageSettings.config.ZoomLevels||[];query('[name="ZoomLevels"]').value=e.join("; ")},e.addEvents=function(){query('[name="ZoomLevels"]').addEventListener("input",e.handleZoomLevelsChanged,!1),query('[name="ZoomLevels"]').addEventListener("blur",e.handleZoomLevelsBlur,!1)},e.exportSettings=function(){var n,t,o=u("viewer");if(o.ZoomLevels=e.getZoomLevels(),query('[name="ZoomLevels"]').checkValidity()){var r=null===(n=_pageSettings.config.ZoomLevels)||void 0===n?void 0:n.toString();(null===(t=o.ZoomLevels)||void 0===t?void 0:t.toString())===r&&delete o.ZoomLevels}else delete o.ZoomLevels;return o},e.handleZoomLevelsChanged=function(){var n=query('[name="ZoomLevels"]');e.getZoomLevels().some((function(e){return!Number.isFinite(e)}))?n.setCustomValidity("Value contains invalid characters. Only number, semi-colon are allowed."):n.setCustomValidity("")},e.handleZoomLevelsBlur=function(){var n=query('[name="ZoomLevels"]');n.checkValidity()&&(n.value=e.getZoomLevels().join("; "))},e.getZoomLevels=function(){return query('[name="ZoomLevels"]').value.split(";").map((function(e){return e.trim()})).filter(Boolean).map((function(e){return parseFloat(e)}))},e}();const k=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return u("toolbar")},e}();const q=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return u("gallery")},e}();const E=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return u("file_assocs")},e}();const A=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return u("tools")},e}();const T=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return u("layout")},e}();var B=function(){return B=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},B.apply(this,arguments)};const x=function(){function e(){}return e.load=function(){for(var n in e.loadSelectBoxEnums(),_.loadLanguageList(),_pageSettings.config)if(Object.prototype.hasOwnProperty.call(_pageSettings.config,n)){var t=_pageSettings.config[n];if("string"==typeof t||"number"==typeof t||"boolean"==typeof t){var o=query('[name="'.concat(n,'"]'));if(o){var r=o.tagName.toLowerCase();if("select"===r)o.value=t.toString();else if("input"===r){var a=o.getAttribute("type").toLowerCase(),i=o;if("radio"===a||"checkbox"===a)i.checked=Boolean(t);else if("color"===a){var l=t.toString()||"#00000000";i.value=l.substring(0,l.length-2)}else i.value=t.toString()}}}}h.loadSettings(),m.loadSettings(),y.loadSettings(),w.loadSettings(),C.loadSettings(),k.loadSettings(),q.loadSettings(),_.loadSettings(),S.loadSettings(),E.loadSettings(),A.loadSettings(),_.loadSettings(),g.loadSettings()},e.addEventsForFooter=function(){query("#BtnCancel").addEventListener("click",(function(){return post("BtnCancel")}),!1),query("#BtnOK").addEventListener("click",(function(){var n=e.getAllSettings(),t=JSON.stringify(n);e.updateInitSettings(n),post("BtnOK",t)}),!1),query("#BtnApply").addEventListener("click",(function(){var n=e.getAllSettings(),t=JSON.stringify(n);e.updateInitSettings(n),post("BtnApply",t)}),!1)},e.getAllSettings=function(){return B(B(B(B(B(B(B(B(B(B(B(B(B({},h.exportSettings()),m.exportSettings()),y.exportSettings()),w.exportSettings()),C.exportSettings()),k.exportSettings()),q.exportSettings()),T.exportSettings()),S.exportSettings()),E.exportSettings()),A.exportSettings()),_.exportSettings()),g.exportSettings())},e.updateInitSettings=function(e){Object.keys(e).forEach((function(n){_pageSettings.config.hasOwnProperty(n)&&(_pageSettings.config[n]=e[n])}))},e.loadSelectBoxEnums=function(){var e=function(e){if(!Object.prototype.hasOwnProperty.call(_pageSettings.enums,e))return"continue";for(var n=_pageSettings.enums[e],t=function(t){n.forEach((function(n){var o=new Option("".concat(n),n);o.setAttribute("lang-text","_.".concat(e,"._").concat(n)),t.add(o)}))},o=0,r=queryAll('select[data-enum="'.concat(e,'"]'));o<r.length;o++){t(r[o])}};for(var n in _pageSettings.enums)e(n)},e}();return window._webview=new t,_webview.startListening(),window.query=function(e){try{return document.querySelector(e)}catch(e){}return null},window.queryAll=function(e){try{return Array.from(document.querySelectorAll(e))}catch(e){}return[]},window.on=i,window.post=function(e,n){var t;null===(t=window.chrome.webview)||void 0===t||t.postMessage({name:e,data:n})},window.postAsync=function(e,n){return o(void 0,void 0,void 0,(function(){var t,o,l;return r(this,(function(r){switch(r.label){case 0:t=!1,o=null,i(e,(function(n,r){n===e&&(t=!0,o=r,_webview.removeEvent(e))})),null===(l=window.chrome.webview)||void 0===l||l.postMessage({name:e,data:n}),r.label=1;case 1:return t?[3,3]:[4,a(100)];case 2:return r.sent(),[3,1];case 3:return[2,o]}}))}))},window._pageSettings||(window._pageSettings={initTab:"tools",config:{},lang:{},langList:[],themeList:[],enums:{ImageOrderBy:[],ImageOrderType:[],ColorProfileOption:[],AfterEditAppAction:[],ImageInterpolation:[],MouseWheelAction:[],MouseWheelEvent:[],MouseClickEvent:[],BackdropStyle:[],ToolbarItemModelType:[]},startUpDir:"",configDir:"",userConfigFilePath:"",defaultThemeDir:""}),_pageSettings.setSidebarActiveMenu=f.setActiveMenu,_pageSettings.loadLanguage=s.load,_pageSettings.loadSettings=x.load,_pageSettings.loadLanguageList=_.loadLanguageList,f.addEvents(),x.load(),s.load(),x.addEventsForFooter(),h.addEvents(),m.addEvents(),y.addEvents(),w.addEvents(),C.addEvents(),k.addEvents(),q.addEvents(),_.addEvents(),S.addEvents(),E.addEvents(),A.addEvents(),_.addEvents(),g.addEvents(),f.setActiveMenu(_pageSettings.initTab),n})()));