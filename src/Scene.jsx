import {useGLTF, useTexture } from "@react-three/drei"

export default function Scene(){

  const { nodes } = useGLTF("/assets/models/scene.glb")

  const [
    ground,
  ] = useTexture(["/assets/textures/ground.png"])

  return (
    <>
    <mesh geometry={nodes.ground.geometry}>
      <meshBasicMaterial map={ground} />
    </mesh>
    </>
  )
}