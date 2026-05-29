import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const domains = [
  {
    name: "DevOps",
    img: "https://images.unsplash.com/photo-1667984390527-850f1f6c6c9f?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Web Dev",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Networking",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Cybersecurity",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=60",
  },
];

const OrbitCard = ({ img, angle, speed, radius }) => {
  const ref = React.useRef();

  // load texture once (important fix)
  const texture = React.useMemo(() => {
    return new THREE.TextureLoader().load(img);
  }, [img]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;

    if (ref.current) {
      ref.current.position.x = Math.cos(t + angle) * radius;
      ref.current.position.y = Math.sin(t + angle) * radius;
      ref.current.position.z = Math.sin(t + angle) * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[0.9, 0.6]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const Globe = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 3] }}>

        {/* Lights */}
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        {/* 🌍 Globe */}
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial color="#8245ec" wireframe />
        </Sphere>

        {/* 🌀 Orbiting Domain Images */}
        {domains.map((item, i) => (
          <OrbitCard
            key={i}
            img={item.img}
            angle={(i / domains.length) * Math.PI * 2}
            speed={0.5}
            radius={1.8}
          />
        ))}

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />

      </Canvas>
    </div>
  );
};

export default Globe;