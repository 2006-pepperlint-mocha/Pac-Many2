import React, { Component, useState, useEffect } from "react";
import Phaser from "phaser";
import { config } from "../config/config";
import { IonPhaser, GameInstance } from "@ion-phaser/react";

class GamePage extends Component {
  componentDidMount() {
    const game = new Phaser.Game(config); // how is game rendered? looks like it isn't loading here
  }
  render() {
    return <div style={{ color: "white" }}></div>;
  }
}

// export default function GamePage() {
//   const [game, setGame] = useState("");
//   const [initialize, setInitialize] = useState(false);

//   useEffect(() => {
//     if (initialize) {
//       setGame(new Phaser.Game(config));
//     }
//   }, [initialize]);
//   return (
// <div>
//   <div style={{ border: "2px solid black" }}>high scores</div>
//   <div
//     style={{
//       width: "1000px",
//       height: "1000px",
//       border: "2px solid black",
//     }}
//   >
//     <IonPhaser game={game} initialize={true} />
//   </div>
//   <div style={{ border: "2px solid black" }}>chat room</div>
//   <div className=" ">
//     <a href="#1" className="bttn">
//       Destroy
//     </a>
//   </div>
// </div>

//     <div
//       style={{
//         width: "200px",
//         height: "200px",
//         border: "2px solid black",
//         display: "flex",
//         flexDirection: "row",
//       }}
//     >
//       <div className="flex">
//         <a href="#1" className="bttn" onClick={() => setInitialize(true)}>
//           Initialize
//         </a>
//       </div>
//       <button>hi</button>
//       <IonPhaser game={game} initialize={initialize} />
//       <div>button</div>
//     </div>
//   );
// }

export default GamePage;
