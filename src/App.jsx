import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import { div } from "three/webgpu";

export default function App() {
  return (
    <div className="App w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
  {["iphone", "ipad", "services", "ios", "products", "iphone", "ipad", "services", "ios", "products"].map((e) => (
    <a key={e} href="" className="text-white font-[400] text-md capitalize">
      {e}
    </a>
  ))}
</div>

      <div className="absolute flex flex-col items-center text-white top-36 left-1/2 -translate-x-1/2">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>Oh so pro!</h5>
        <p className="text-center w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consectetur quam cum doloremque.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
