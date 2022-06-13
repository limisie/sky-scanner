import { assets } from "./index";

export const passData = [
  {
    startAz: 307.21,
    startAzCompass: "NW",
    startEl: 13.08,
    startUTC: 1521368025,
    maxAz: 225.45,
    maxAzCompass: "SW",
    maxEl: 78.27,
    maxUTC: 1521368345,
    endAz: 132.82,
    endAzCompass: "SE",
    endEl: 0,
    endUTC: 1521368660,
    mag: -2.4,
    duration: 485,
  },
  {
    startAz: 311.56,
    startAzCompass: "NW",
    startEl: 50.94,
    startUTC: 1521451295,
    maxAz: 37.91,
    maxAzCompass: "NE",
    maxEl: 52.21,
    maxUTC: 1521451615,
    endAz: 118.61,
    endAzCompass: "ESE",
    endEl: 0,
    endUTC: 1521451925,
    mag: -2,
    duration: 325,
  },
  {
    startAz: 291.06,
    startAzCompass: "WNW",
    startEl: 3.47,
    startUTC: 1521457105,
    maxAz: 231.58,
    maxAzCompass: "SW",
    maxEl: 14.75,
    maxUTC: 1521457380,
    endAz: 170.63,
    endAzCompass: "S",
    endEl: 0,
    endUTC: 1521457650,
    mag: -0.1,
    duration: 485,
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
