var AFRAME = require("aframe");
var drawComponent = require("../index.js").component;
AFRAME.registerComponent("draw", drawComponent);
AFRAME.registerComponent("square", {
	dependencies: ["draw"],
	init: function() {
		this.draw = this.el.components.draw;
		this.draw.register(this.render.bind(this));
	},
	update: function () {
		this.draw.render();
	},
	render: function () {
		var ctx = this.draw.ctx;
		ctx.fillStyle = this.data.color;
		ctx.fillRect(68, 68, 120, 120);
	}
});

AFRAME.registerComponent("greeting", {
	dependencies: ["draw"],
	init: function() {
		this.draw = this.el.components.draw;
		this.draw.register(this.render.bind(this));
	},
	update: function () {
		this.draw.render();
	},
	render: function () {
		var ctx = this.draw.ctx;
		ctx.fillStyle = "white";
		ctx.font = "36px Georgia";
		ctx.fillText(this.data.text, 80, 140);
	}
});



AFRAME.registerComponent("opentype", {
	dependencies: ["draw"],
	schema: {
	    color: { default: 'black' }
	},

	init: function() {
		this.draw = this.el.components.draw;
		this.draw.register(this.render.bind(this));
	},
	update: function () {
		this.draw.render();
	},
	render: function () {
		var ctx = this.draw.ctx;
		ctx.fillStyle = this.data.color;
		ctx.font = "54px Georgia";
		ctx.fillText(this.data.text, 0, 110);
	}
});

