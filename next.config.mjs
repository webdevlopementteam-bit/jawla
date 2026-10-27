/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/hotel-pack-packaging-machines",
        destination: "/hotel-pack-packaging-machine",
        permanent: true,
      },
      {
        source: "/d-motion-type-packaging-machine",
        destination: "/ffs-d-motion-type-packaging-machine",
        permanent: true,
      },
      {
        source: "/horizontal-rotary-machine-jat-305",
        destination: "/horizontal-rotary-machine",
        permanent: true,
      },
      {
        source: "/normal-ffs-packaging-machine",
        destination: "/normal-ffs-packaging-machine-jat-301",
        permanent: true,
      },
      {
        source: "/liquid-packaging-machine",
        destination: "/ffs-liquid-packaging-machine",
        permanent: true,
      },
      {
        source:
          "/index.php/fully-automatic-multi-head-weighing-packaging-machine-jat-306",
        destination: "/fully-automatic-multi-head-weighing-packaging-machine-jat-306",
        permanent: true,
      },
      {
        source:
          "/index.php/one-edge-biscuit-packaging-machine-with-dual-feeder-for-50gm-75gm-100gm-jat-311",
        destination: "/one-edge-biscuit-packaging-machine",
        permanent: true,
      },
      {
        source: "/services-spares",
        destination: "/services-spare-parts",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
