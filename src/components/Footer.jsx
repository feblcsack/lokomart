import React from "react";

const Footer = () => {
  return (
    <footer class="bg-primary mt-20">
      <div class="container mx-auto w-full p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 flex flex-col justify-between md:mb-0">
            <a href="#home" class="flex items-center">
              <img
                src="/public/kai3.png"
                class="mt-5 w-[220px]"
                alt="kai logo"
              />
            </a>

            <div class="mb-5 mt-5 md:mb-0">
              <h2 class="mb-6 text-base font-semibold uppercase text-white">
                Hubungi Kami
              </h2>
              <ul class="font-medium text-white/60">
                <li class="mb-4 flex items-center gap-3 text-base">
                  <ion-icon name="location"></ion-icon>
                  <a href="#" class="hover:underline">
                    PT. RESKA MULTI USAHA
                  </a>
                </li>
                <li class="mb-4 flex items-center gap-3 text-base">
                  <ion-icon name="mail"></ion-icon>
                  <a href="#" class="hover:underline">
                    reskamultiusaha@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-28">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Akses Konten
              </h2>
              <ul class="font-medium text-white/60">
                <li class="mb-4">
                  <a href="#home" class="hover:underline">
                    Beranda
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#about" class="hover:underline">
                    Tentang
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#kasus" class="hover:underline">
                    Menu
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#pengaruh" class="hover:underline">
                    Berita
                  </a>
                </li>
                {/* <li class="mb-4">
                  <a href="#data" class="hover:underline">Data</a>
                </li>
                <li class="mb-4">
                  <a href="#dokumentasi" class="hover:underline">Dokumentasi</a>
                </li> */}
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Sumber Data
              </h2>
              <ul class="font-medium text-white/60">
                <li class="mb-4">
                  <a href="https://Detik.com" class="lowercase hover:underline">
                    Detik.com
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://Kompasiana.com"
                    class="lowercase hover:underline"
                  >
                    Kompasiana
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://Channel9.id"
                    class="lowercase hover:underline"
                  >
                    Channel9.id
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://Goodstats.id"
                    class="lowercase hover:underline"
                  >
                    Goodstats.id
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://pusiknas.polri.go.id/"
                    class="lowercase hover:underline"
                  >
                    pusiknas.polri
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://www.haibunda.com/"
                    class="lowercase hover:underline"
                  >
                    haibunda.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Credit
              </h2>
              <ul class="font-medium text-white/60">
                <li class="mb-4">
                  <a href="https://www.freepik.com/" class="hover:underline">
                    Reska Multi Usaha
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-white sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-center text-sm text-white/60">
            Dibuat oleh tim PKL SMKN 46 JAKARTA
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
