import React from "react";
import CardComponent from "./CardComponent";
import ThreeDObject from "./ThreeDObject";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto mt-10 max-w-screen-lg">
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/pop.glb" />}
        title="Pop Mie 3D"
        description="Mi Instan Cup"
        deskripsi="Pop Mie adalah mi instan yang praktis dan lezat, cocok untuk mengganjal perut."
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/bakso.glb" />}
        title="Bakso 3D"
        description="Bakso Spesial"
        deskripsi="Bakso daging sapi yang kenyal dan disajikan dengan kuah kaldu yang hangat."
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/nasduk.glb" />}
        title="Nasi Uduk 3D"
        description="Nasi Uduk Rumahan"
        deskripsi="Nasi uduk yang gurih dengan aroma daun pandan dan santan, disajikan dengan berbagai pelengkap."
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/tea.glb" />}
        title="Teh 3D"
        description="Teh Tradisional"
        deskripsi="Teh yang diseduh dengan sempurna, menyegarkan dan cocok dinikmati kapan saja."
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/aquaa.glb" />}
        title="Aqua 3D"
        description="Air Mineral"
        deskripsi="Air mineral segar, ideal untuk menjaga hidrasi tubuh di setiap aktivitas."
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/nasi.glb" />}
        title="Nasi Goreng 3D"
        description="Nasi Goreng Spesial"
        deskripsi="Nasi goreng dengan bumbu rempah yang kaya, dilengkapi dengan telur dan ayam."
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/sobaso.glb" />}
        title="Bakso Enak 3D"
        description="Bakso Daging Sapi"
        deskripsi="Bakso yang lembut dengan cita rasa daging sapi yang autentik, disajikan dalam kuah kaldu."
      />
      <CardComponent
        ThreeDContent={<ThreeDObject modelUrl="/3d/kiyomi.glb" />}
        title="Kiyomi 3D"
        description="Kiyomi"
        deskripsi="Kiyomi adalah makanan enak"
      />
    </div>
  );
};

export default CardContainer;
