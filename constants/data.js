import { assets } from "./index";

export const passData = [
  {
    id: 0,
    date: "March 15",
    from: "12:12",
    to: "12:32",
    weather: "rain",
  },
  {
    id: 1,
    date: "March 16",
    from: "10:02",
    to: "10:23",
    weather: "cloud",
  },
  {
    id: 2,
    date: "March 17 ",
    from: "01:03",
    to: "01:13",
    weather: "sun",
  },
  {
    id: 3,
    date: "March 17",
    from: "22:43",
    to: "22:53",
    weather: "sun",
  },
];

export const headerData = {
  name: "Hubble",
  location: "Warsaw, Poland",
  date: "March 12th, 12:39",
};

export const satelliteList = [
  {
    noradId: "25544",
    name: "ISS (ZARYA)",
    type: "Space Station",
    image: assets.satellite,
    details:
      "The International Space Station (ISS) is a joint project of five space agencies: the National Aeronautics and Space Administration (United States), the Russian Federal Space Agency (Russian Federation), the Japan Aerospace Exploration Agency (Japan), the Canadian Space Agency (Canada) and the European Space Agency (Europe).",
  },
  {
    noradId: "48320",
    name: "STARLINK-2029",
    type: "Starlink",
    image: assets.satellite,
    details:
      "Starlink is a satellite that is currently in orbit around the Earth. It is the second-largest satellite in the world, after the International Space Station (ISS).",
  },
  {
    noradId: "36516",
    name: "SES 1",
    type: "Satellite",
    image: assets.satellite,
    details:
      "SES 1 is a communications satellite designed to replace two aging spacecraft serving North America. It will reach its permananet slot in the geostationary arc at 101 degrees west longitude, where it will enter service in about a month for SES World Skies.",
  },
  {
    noradId: "33591",
    name: "NOAA 19",
    type: "Satellite",
    image: assets.satellite,
    details: `NOAA 19 is the fifth in a series of five Polar-orbiting Operational Environmental Satellites (POES) with advanced microwave sounding instruments that provide imaging and sounding capabilities. Circling 530 statute miles [850 km] above Earth and completing a revolution every 100 minutes, the NOAA-N Prime will operate in the so-called "afternoon" polar orbit to replace NOAA-18 and its degraded instruments.`,
  },
  {
    noradId: "29155",
    name: "GOES 13",
    type: "Satellite",
    image: assets.satellite,
    details:
      "GOES 13 is an American (NOAA) geostationary weather satellite that was launched by a Delta 4 rocket from Cape Canaveral at 22:11 UT on 24 May 2006. The 3133 kg (with fuel), 2.3 kW craft carries the usual set of GOES monitors: imager, sounder, SEM package, X-ray imager, energetic particle detector, and ground-data relaying equipment. The parking longitude is yet to be finalized",
  },
  {
    noradId: "25338",
    name: "NOAA 15",
    type: "Satellite",
    image: assets.satellite,
    details:
      "NOAA 15 (designated NOAA-K before launch) is one of the NASA-provided TIROS series of weather forecasting satellite run by NOAA. The satellite is placed in a sun-synchronous orbit, 807 km above the Earth, orbiting every 101 minutes.",
  },
];
