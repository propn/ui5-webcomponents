sap.ui.define(["jquery.sap.global","sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,t,n){"use strict";function i(){var e=document.baseURI;e=e.split("?")[0];var t=/\/components\/\w+\//.test(e);if(t){return e.split("playground/components")[0]}else{return e.split("playground/")[0]}}return{createUIModel:function(){var e={home:"home",apiReference:"api-reference",samples:"samples",api:"api"};var n=new t;var a={ui5Image:i()+"images/ui5.png",showSettingsMenu:false,showNavigationLinks:false,selectedView:"",selectedHTMLContent:"",selectedKey:"",sideNavigationKeys:e,navigation:[{key:e.home,section:e.home,title:"Getting Started"},{title:"Components",key:e.samples,items:[]}],fixedNavigation:[{title:"Source Code",icon:"sap-icon://SAP-icons-TNT/code1",url:"https://github.com/SAP/ui5-webcomponents",target:"_blank"},{title:"Read more...",icon:"sap-icon://sys-help",url:"https://sap.github.io/ui5-webcomponents",target:"_blank"}]};n.setData(a);return n},createDeviceModel:function(){var e=new t(n);e.setDefaultBindingMode("OneWay");return e},createAPIModel:function(){var e=new t;e.setDefaultBindingMode("OneWay");return e},createComponentsModel:function(){var e=new t;e.setDefaultBindingMode("OneWay");return e},discoverSamples:function(t){var n=["Badge","BusyIndicator"];return e.ajax({url:i()+"/resources/sap/ui/webcomponents/main/playground.json"}).then(function(e){var i=e.map(function(e,t){return{key:/(.*)\.sample\.html$/.exec(e)[1],title:/(.*)\.sample\.html$/.exec(e)[1],url:"test-resources/sap/ui/webcomponents/main/api/"+e,new:n.indexOf(/(.*)\.sample\.html$/.exec(e)[1])>-1}}).sort(function(e,t){return e.title.localeCompare(t.title)});t.setProperty("/navigation/1/items",i)})}}});