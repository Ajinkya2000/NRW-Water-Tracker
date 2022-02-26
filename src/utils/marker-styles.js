// import { graphConfig } from './map-data';

const abstractPulsatingDot = function (
	map,
	outerColor,
	innerColor,
	graphConfig
) {
	return {
		onAdd: function () {
			const canvas = document.createElement('canvas');
			canvas.width = this.width;
			canvas.height = this.height;
			this.context = canvas.getContext('2d');
		},
		render: function () {
			const duration = 1000;
			const t = (performance.now() % duration) / duration;

			const radius = (graphConfig.size.distributer / 2) * 0.3;
			const outerRadius = (graphConfig.size.distributer / 2) * 0.7 * t + radius;
			const context = this.context;

			// Draw the outer circle.
			context.clearRect(0, 0, this.width, this.height);
			context.beginPath();
			context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
			context.fillStyle = `rgba(${outerColor.r}, ${outerColor.g}, ${
				outerColor.b
			}, ${1 - t})`;
			context.fill();

			// Draw the inner circle.
			context.beginPath();
			context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
			context.fillStyle = `rgba(${innerColor.r}, ${innerColor.g}, ${innerColor.b}, 1)`;
			context.strokeStyle = 'white';
			context.lineWidth = 2 + 4 * (1 - t);
			context.fill();
			context.stroke();

			// Update this image's data with data from the canvas.
			this.data = context.getImageData(0, 0, this.width, this.height).data;

			// Continuously repaint the map, resulting
			// in the smooth animation of the dot.
			map.triggerRepaint();

			// Return `true` to let the map know that the image was updated.
			return true;
		},
	};
};

export const pulsingDotDistributor = function (map, graphConfig) {
	return {
		width: graphConfig.size.distributer,
		height: graphConfig.size.distributer,
		data: new Uint8Array(
			graphConfig.size.distributer * graphConfig.size.distributer * 4
		),
		...abstractPulsatingDot(
			map,
			{ r: 255, g: 200, b: 200 },
			{ r: 255, g: 100, b: 100 },
			graphConfig
		),
	};
};

export const pulsingDotConsumer = function (map, graphConfig) {
	return {
		width: graphConfig.size.consumer,
		height: graphConfig.size.consumer,
		data: new Uint8Array(
			graphConfig.size.consumer * graphConfig.size.consumer * 4
		),
		...abstractPulsatingDot(
			map,
			{ r: 67, g: 156, b: 239 },
			{ r: 67, g: 156, b: 239 },
			graphConfig
		),
	};
};
