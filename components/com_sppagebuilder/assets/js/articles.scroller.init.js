jQuery(window).on("load",function(){"use strict";new MutationObserver(function(e){e.forEach(function(e){var t=e.addedNodes;null!==t&&jQuery(t).each(function(){jQuery(this).find(".sppb-article-scroller-wrap").each(function(){jQuery(".sppb-article-scroller-wrap").bxSlider({minSlides:3,mode:"vertical",speed:500,pager:!1,controls:!1,auto:!0,moveSlides:1,adaptiveHeight:!0,touchEnabled:!1})})})})}).observe(document.body,{childList:!0,subtree:!0});new MutationObserver(function(e){e.forEach(function(e){var t=e.addedNodes;null!==t&&jQuery(t).each(function(){jQuery(this).find(".sppb-addon-articles-ticker").each(function(){var e=jQuery(this).parent("div").attr("id");jQuery("#"+e+" .sppb-articles-ticker-content").bxSlider({minSlides:1,maxSlides:1,mode:"vertical",speed:800,pager:!1,controls:!1,auto:!0,adaptiveHeight:!0,autoHover:!0,touchEnabled:!1})})})})}).observe(document.body,{childList:!0,subtree:!0})});