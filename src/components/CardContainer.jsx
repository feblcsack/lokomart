import React from "react";
import CardComponent from "./CardComponent";
import ThreeDObject from "./ThreeDObject";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ml-60 mt-10 lg:grid-cols-2 gap-8 justify-center">
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/pop.glb" />}
        title="Pop Mie 3D"
        description="Mi Instan Cup"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/bakso.glb" />}
        title="Bakso 3D"
        description="Bakso Spesial"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/nasduk.glb" />}
        title="Nasi Uduk 3D"
        description="Mi Instan Kuah"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/tea.glb" />}
        title="Teh 3D"
        description="Rp 5,000"
      />
      
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/aquaa.glb" />}
        title="Aqua 3D"
        description="Rp 5,000"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/nasi.glb" />}
        title="Nasi Goreng 3D"
        description="Rp 5,000"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/sobaso.glb" />}
        title="Bakso Enak 3D"
        description="Rp 5,000"
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/kiyomi.glb" />}
        title="Kiyomi 3D"
        description="Rp 5,000"
      />
    </div>
  );
};

export default CardContainer;
