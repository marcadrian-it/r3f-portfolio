import {
  Text,
  useGLTF,
  PresentationControls,
  Float,
  ContactShadows,
  Html,
  Environment,
} from '@react-three/drei';
import Icons from './Icons';

export default function Experience() {
  const macboook = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );

  return (
    <>
      <color args={['#241a1a']} attach="background" />
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 100 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.33}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
            color={'#ADD8E6'}
          />
          <primitive
            scale={1.05}
            object={macboook.scene}
            position-x={-0.5}
            position-y={-1.2}
            position-z={-0.25}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://marcadrian.me/"></iframe>
            </Html>
          </primitive>

          <Text
            font="./LuckiestGuy-Regular.woff"
            fontSize={0.8}
            color="lightblue"
            position={[1.75, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            <meshStandardMaterial attach="material" color="white" />
            ADRIAN SOŁTYSIK
          </Text>
        </Float>
      </PresentationControls>
      <Html color="lightblue" position={[2.75, -1.75, 0.75]}>
        <Icons />
      </Html>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
