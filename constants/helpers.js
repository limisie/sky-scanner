import { assets } from './index';

export const weatherIcon = (weatherCode) => {
  if (weatherCode < 1200) {
    return assets.sun;
  } else if (weatherCode < 2200) {
    return assets.cloud;
  } else if (weatherCode < 5000) {
    return assets.rain;
  } else {
    return assets.nan;
  }
};

export const dayTh = (day) => {
  if (day === 1) {
    return 'st';
  } else if (day === 2) {
    return 'nd';
  } else {
    return 'th';
  }
};