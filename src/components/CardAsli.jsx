import React from "react";
import CardAja from "./CardAja";
import ThreeDObject from "./ThreeDObject";

const CardAsli = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ml-60 mt-10 lg:grid-cols-2 gap-8 justify-center">
      <CardAja
        ThreeDObjectContent={<ThreeDObject modelUrl="/basoo.glb" />}
        title="Aqua"
        description="Mi Instan Cup"
      />
      <CardAja
        ThreeDObjectContent={<ThreeDObject modelUrl="/public/pop.glb" />}
        title="Bakso 3D"
        description="Bakso Spesial"
      />
      <CardAja
        ThreeDObjectContent={<ThreeDObject modelUrl="/public/pop.glb" />}
        title="Sarimi 3D"wwwwwwwww
        description="Mi Instan Kuah"
      />
      <CardAja
        ThreeDObjectContent={<ThreeDObject modelUrl="/public/pop.glb" />}
        title="Pop Mie 3D"
        description="Rp 5,000"
      />
    </div>
  );
};

export default CardAsli;
