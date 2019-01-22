(function (a) { function c(a, b, c) { var d = a.find(".dd-selected"); if (b.showSelectedHTML) { d.html((c.imageSrc ? '<img class="dd-selected-image' + (b.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + c.imageSrc + '" />' : "") + (c.text ? '<label class="dd-selected-text">' + c.text + "</label>" : "") + (c.description ? '<small class="dd-selected-description dd-desc' + (b.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + c.description + "</small>" : "")) } else { d.html(c.text) } } a.fn.ddslick = function (c) { if (b[c]) { return b[c].apply(this, Array.prototype.slice.call(arguments, 1)) } else if (typeof c === "object" || !c) { return b.init.apply(this, arguments) } else { a.error("Method " + c + " does not exists.") } }; var b = { init: function (b) { var d = { data: [], width: 260, height: null, background: "#eee", selectText: "", defaultSelectedIndex: null, truncateDescription: true, imagePosition: "left", showSelectedHTML: true, clickOffToClose: true, onSelected: function () { } }; var b = a.extend(d, b); if (a("#css-ddslick").length <= 0) { var e = '<style id="css-ddslick" type="text/css">' + ".dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}" + ".dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }" + ".dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}" + ".dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}" + ".dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }" + ".dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}" + ".dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}" + ".dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }" + ".dd-options > li:last-child > .dd-option{ border-bottom:none;}" + ".dd-option:hover{ background:#f3f3f3; color:#000;}" + ".dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }" + ".dd-option-selected { background:#f6f6f6; }" + ".dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}" + ".dd-image-right { float:right; margin-right:15px; margin-left:5px;}" + ".dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>"; a(e).appendTo("head") } return this.each(function () { function l() { d.find(".dd-option").each(function () { var b = a(this); var c = b.css("height"); var e = b.find(".dd-option-description"); var f = d.find(".dd-option-image"); if (e.length <= 0 && f.length > 0) { b.find(".dd-option-text").css("lineHeight", c) } }) } function m() { var a = d.find(".dd-select").css("height"); var b = d.find(".dd-selected-description"); var c = d.find(".dd-selected-image"); if (b.length <= 0 && c.length > 0) { d.find(".dd-selected-text").css("lineHeight", a) } } var d = a(this); var e = d.data("ddslick"); if (!e) { var f = '<div class="dd-select">' + '<input class="dd-selected-value" type="hidden" value="" />' + '<a class="dd-selected"></a>' + '<span class="dd-pointer dd-pointer-down"></span>' + "</div>"; d.addClass("dd-container").append(f).append('<ul class="dd-options"></ul>'); var g = d.find(".dd-select"); var h = d.find(".dd-options"); h.css({ width: b.width }); g.css({ width: b.width, background: b.background }); d.css({ width: b.width }); if (b.height != null) { h.css({ height: b.height, overflow: "auto" }) } a.each(b.data, function (a, c) { var d = "<li>" + '<a class="dd-option">' + (c.value ? ' <input class="dd-option-value" type="hidden" value="' + c.value + '" />' : "") + (c.imageSrc ? ' <img class="dd-option-image' + (b.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + c.imageSrc + '" />' : "") + (c.text ? ' <label class="dd-option-text">' + c.text + "</label>" : "") + (c.description ? ' <small class="dd-option-description dd-desc">' + c.description + "</small>" : "") + "</a>" + "</li>"; h.append(d) }); var i = false; if (b.selectText.length > 0 && b.defaultSelectedIndex == null) { d.find(".dd-selected").html(b.selectText) } else { i = true } if (i) { var j = b.defaultSelectedIndex != null && b.defaultSelectedIndex >= 0 && b.defaultSelectedIndex < b.data.length ? b.defaultSelectedIndex : 0; var k = {}; k.selectedIndex = j; k.selectedItem = d.find(".dd-option").eq(j).closest("li"); k.selectedData = b.data[j]; c(d, b, k.selectedData) } else { var k = {}; k.selectedIndex = -1; k.selectedItem = null; k.selectedData = null } k.settings = b; d.data("ddslick", k); d.find(".dd-select").on("click", function () { var b = a(this); var c = b.siblings(".dd-options"); var d = c.is(":visible"); a(".dd-click-off-close").not(c).slideUp(50); a(".dd-pointer").removeClass("dd-pointer-up"); if (d) { c.slideUp("fast"); b.find(".dd-pointer").removeClass("dd-pointer-up") } else { c.slideDown("fast"); b.find(".dd-pointer").addClass("dd-pointer-up") } l() }); d.find(".dd-option").on("click", function () { var e = a(this); a(".dd-option").removeClass("dd-option-selected"); e.addClass("dd-option-selected"); var f = d.find(".dd-selected"); var g = e.closest("li"); var h = g.index(); var i = {}; i.selectedIndex = h; i.selectedItem = g; i.selectedData = b.data[h]; i.settings = b; d.data("ddslick", i); c(d, b, i.selectedData); f.siblings(".dd-selected-value").val(i.selectedData.value); var j = f.siblings(".dd-pointer").toggleClass("dd-pointer-up"); e.closest(".dd-options").slideToggle(50); m(); if (typeof b.onSelected == "function") { b.onSelected.call(this, i) } }); if (b.clickOffToClose) { h.addClass("dd-click-off-close"); d.on("click", function (a) { a.stopPropagation() }); a("body").on("click", function () { a(".dd-click-off-close").slideUp(50) }) } } }) }, select: function (b) { return this.each(function () { var d = a(this); if (b.index) { var e = d.data("ddslick"); e.selectedIndex = b.index; e.selectedItem = d.find(".dd-option").eq(b.index).closest("li"); e.selectedData = e.settings.data[b.index]; e.settings = e.settings; d.data("ddslick", e); c(d, e.settings, e.selectedData) } }) } } })(jQuery)
