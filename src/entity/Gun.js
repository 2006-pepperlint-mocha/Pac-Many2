import 'phaser';

export default class Gun extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    // Store reference of scene passed to constructor
    this.scene = scene;
    // Keep track of when the gun was last fired
    this.lastFired = 0;
    // Add gun to scene and enable physics
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
  }

  // Check if the shoot button is pushed and how long its been
  update(time, player, cursors, callback, laserSound) {
    if (cursors.space.isDown && time > this.lastFired) {
      if (player.armed) {
        laserSound.play();
        callback(player.x, player.y, player.left);
        this.lastFired = time + 100;
      }
    }
  }
}
