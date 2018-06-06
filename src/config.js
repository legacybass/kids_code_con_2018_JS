import Phaser from 'phaser';
import background from './assets/images/background.png';

export default {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {}
	},
	scene: {
		preload,
		create,
		update,
		extend: {
			player: null
		}
	}
};

function preload() {
	// Load in images and sprites
	this.load.image('background', background);
}

function create() {
	// Create world bounds
	const backgroundImage = this.add.tileSprite(0, 0, 800, 600, 'background');
	this.physics.setBoundsToWorld();

	player = this.add.sprite(400, 300, 'player');
}

function update() {
	// update the objects
}
