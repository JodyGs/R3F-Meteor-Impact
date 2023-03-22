import React, { Suspense } from "react";
import {
	OrbitControls,
	PerspectiveCamera,
	Environment,
} from "@react-three/drei";
import Scene from "./Scene";



function App() {
	return (
		<>
			<Environment
				background={"only"}
				files={"/assets/textures/envmap_blur.hdr"}
				ground={{ height: 100, radius: 300 }}
			/>
			<Environment background={false} files={"/assets/textures/envmap.hdr"} />

			<PerspectiveCamera
				makeDefault
				fov={33}
				position={[-0.09, 16.01, -27.9]}
			/>
			<OrbitControls
				target={[0.304, 0.806, 0.427]}
				maxPolarAngle={Math.PI * 0.45}
			/>

      <Suspense fallBack={null}>
        <Scene />
      </Suspense>
		</>
	);
}

export default App;
