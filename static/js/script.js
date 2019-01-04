jQuery(function(i){var o=i("html"),n=i("body");n.on("click",'[data-action="menu"], [data-action="toc"], [data-action="subscription"]',function(){i(this).data("action");a(i('[data-target="'+i(this).data("target")+'"]').not("[data-action]"))});var t=!1;function a(a){t=t?(a.removeClass("active"),o.removeClass("menu-active"),setTimeout(function(){a.removeClass("initial"),o.removeClass("menu-initial")},300),!1):(o.addClass("menu-initial"),a.addClass("initial"),setTimeout(function(){o.addClass("menu-active"),a.addClass("active")},1),!0)}function d(){i(".menu-list-item a").each(function(){var a=i(this);a.removeClass("current"),a.attr("href")==window.location.href&&a.addClass("current")})}function r(){i(".post-list .post .post-image img").each(function(){var a=i(this);a.load(function(){a.parents(".post-image").css({height:"0","padding-bottom":100/a.width()*a.height()+"%"})})});var a=i(".post-list").masonry({itemSelector:".post",isAnimated:!1,gutter:0,columnWidth:1,transitionDuration:0}).imagesLoaded().always(function(){a.masonry("layout")})}function c(){i("#wrapper").fitVids()}function l(){if("localhost"!=window.location.hostname)if("undefined"!=typeof disqus_shortname&&document.getElementById("disqus_thread")){if(window.DISQUS){i(".post-comments").show();var a=location.href;return"/"!==a.slice(-1)&&(a+="/"),DISQUS.reset({reload:!0,config:function(){this.page.identifier=a,this.page.url=a}})}i.ajax({type:"GET",url:"//"+disqus_shortname+".disqus.com/embed.js",dataType:"script",cache:!0}).done(function(){l()})}else i(".post-comments").hide()}function u(){i("[data-gist-id]").gist()}function h(){i('a[href^="'+window.location.origin+'"], .post-image a, .post-title a, .post-more a, .post-meta a, .post-tags a, #pagination a').each(function(){var a=i(this);a.hasClass("rss")||(a.addClass("js-ajax-link"),-1<a.attr("href").indexOf("page")&&a.addClass("js-archive-index"),a.attr("href")==window.location.origin&&a.addClass("js-show-index"),-1<a.attr("href").indexOf("tag")&&a.addClass("js-tag-index"),-1<a.attr("href").indexOf("author")&&a.addClass("js-author-index"))})}function m(){i(".blured-image").each(function(){var a=i(this),t=new Image;t.onload=function(){a.css("background-image","url("+t.src+")").addClass("blurUp").removeClass("filter-blur-15")},t.src=a.data("src")})}n.on("click","#menu a",function(){o.hasClass("menu-active")&&a(i('[data-target="menu"]').not("[data-action]"))}),n.on("click","#tocMenu a",function(){o.hasClass("menu-active")&&a(i('[data-target="toc"]').not("[data-action]"))}),n.on("click","#subscription",function(){o.hasClass("menu-active")&&a(i('[data-target="subscription"]').not("[data-action]"))}),n.on("click",".overlay",function(){o.hasClass("menu-active")&&a(i('[data-target="menu"].active,[data-target="toc"].active').not("[data-action]"))}),d(),r(),c(),l(),u(),h(),m();var p=window.History,f=!1,v=i("#ajax-container");if(i(document).ready(function(){var a=document.createElement("link");a.href=config.baseUrl+"/css/main.css",a.rel="stylesheet",a.type="text/css",a.media="bogus",a.onload=function(){a.media="all"},document.getElementsByTagName("head")[0].appendChild(a),i("#loader-wrapper").fadeOut(300),i("#wrapper").fadeIn(800)}),!p.enabled)return!1;p.Adapter.bind(window,"statechange",function(){o.addClass("loading");var a=p.getState();i.get(a.url,function(a){var t=i(a),e=i("#ajax-container",t).contents(),s=a.match(/<title>(.*?)<\/title>/)[1];v.fadeOut(500,function(){o.hasClass("push-next")&&(o.removeClass("push-next"),o.addClass("pushed-next")),o.hasClass("push-prev")&&(o.removeClass("push-prev"),o.addClass("pushed-prev")),document.title=i("<textarea/>").html(s).text(),v.html(e),n.removeClass(),n.addClass(i("#body-class").attr("class")),NProgress.done(),v.fadeIn(500),i(document).scrollTop(0),setTimeout(function(){o.removeClass("loading")},50),r(),h(),c(),l(),u(),d(),m(),f=!1})})}),i("body").on("click",".js-ajax-link",function(a){a.preventDefault();var t=i(this);if(t.hasClass("post-nav-item")||t.hasClass("pagination-item")?((t.hasClass("post-nav-next")||t.hasClass("pagination-next"))&&(o.removeClass("pushed-prev"),o.addClass("push-next")),(t.hasClass("post-nav-prev")||t.hasClass("pagination-prev"))&&(o.removeClass("pushed-next"),o.addClass("push-prev"))):(o.removeClass("pushed-next"),o.removeClass("pushed-prev")),!1===f){var e=p.getState(),s=i(this).prop("href"),n=i(this).attr("title")||null;s.replace(/\/$/,"")!==e.url.replace(/\/$/,"")&&(f=!0,o.addClass("loading"),NProgress.start(),p.pushState({},n,s))}}),i("body").on("click","#post-index .post .js-ajax-link",function(){var a=i(this).parents(".post");a.addClass("initial"),setTimeout(function(){a.addClass("active")},1)})});