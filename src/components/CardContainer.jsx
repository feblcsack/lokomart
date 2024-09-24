import React from "react";
import CardComponent from "./CardComponent";
import ThreeDObject from "./ThreeDObject";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ml-60 mt-10 lg:grid-cols-2 gap-8 justify-center">
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/pop1.glb" />}
        title="Pop Mie 3D"
        description="Mi Instan Cup"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/basoo.glb" />}
        title="Bakso 3D"
        description="Bakso Spesial"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/pop.glb" />}
        title="Sarimi 3D"
        description="Mi Instan Kuah"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/pop.glb" />}
        title="Pop Mie 3D"
        description="Rp 5,000"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/pop.glb" />}
        title="Pop Mie 3D"
        description="Rp 5,000"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/pop.glb" />}
        title="Pop Mie 3D"
        description="Rp 5,000"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/pop.glb" />}
        title="Pop Mie 3D"
        description="Rp 5,000"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/pop.glb" />}
        title="Pop Mie 3D"
        description="Rp 5,000"
      />
    </div>
  );
};

export default CardContainer;
