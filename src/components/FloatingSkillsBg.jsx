import React, { useMemo } from "react";
import { SkillsInfo } from "../constants";

const DepthFloatingBg = () => {

  const allSkills = useMemo(() => {
    return SkillsInfo.flatMap(section =>
      section.skills.filter(skill => skill.logo)
    );
  }, []);

  const layers = {
    back: [],
    mid: [],
    front: [],
  };

  allSkills.forEach((skill, index) => {
    const type = index % 3;

    const base = {
      ...skill,
      left: (index * 13) % 100,
      top: (index * 17) % 100,
    };

    if (type === 0) layers.back.push(base);
    else if (type === 1) layers.mid.push(base);
    else layers.front.push(base);
  });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      <Layer items={layers.back} size={18} mode="slow" />
      <Layer items={layers.mid} size={26} mode="medium" />
      <Layer items={layers.front} size={34} mode="fast" />

    </div>
  );
};

export default DepthFloatingBg;

/* 🌄 Layer Component */
const Layer = ({ items, size, mode }) => {
  return (
    <>
      {items.map((item, i) => (
        <img
          key={i}
          src={item.logo}
          alt={item.name}
          className={`absolute sunrise-${mode}`}
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: `${size}px`,
          }}
        />
      ))}
    </>
  );
};