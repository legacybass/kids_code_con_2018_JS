import Phaser from 'phaser';
import Preloader from './scenes/preloader';
import Level1 from './scenes/level1';

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {}
	},
	scene: [
		Preloader,
		Level1
	],
	create
};

const game = new Phaser.Game(config);

function create() {
	this.data.set('lives', 3);
	this.data.set('level', 1);
	this.data.set('score', 0);

	const text = this.add.text(5, 5, '', { font: '64px Courier', fill: '#0000FF' });
	text.setText([
		`Level: ${this.data.get('level')}`,
		`Lives: ${this.data.get('lives')}`,
		`Score: ${this.data.get('score')}`
	]);

	this.scene.start('preloader');
}