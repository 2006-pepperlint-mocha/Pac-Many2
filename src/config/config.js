import MainScene from "../scenes/MainScene";
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin/src";

export default {
  width: 448, // Game width in pixels
  height: 500, // Game height in pixels // it was 800 from Emre
  type: Phaser.AUTO,
  parent: "Canvas",
  //scene: [MainScene],
  scale: {
    zoom: 1.5,
  },
  physics: {
    // Optional: specify physics engine and configuration
    //default: "arcade", // A simple and performant physics engine
    // arcade: {
    //   gravity: { y: 0 }, // Game objects will by default be affected by gravity
    //   debug: true,
    // },dss
    default: "matter",
    matter: {
      debug: true,
      gravity: { y: 0 },
    },
  },
  // render: {
  //   pixelArt: true,
  // },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: "matterCollision",
        mapping: "matterCollision",
      },
    ],
  },
};
