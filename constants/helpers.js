import { assets } from './index';

export const weatherIcon = (weather) => {
    switch (weather) {
        case 'sun':
            return assets.sun
        case 'cloud':
            return assets.cloud
        case 'rain':
            return assets.rain
        default:
            return assets.nan
    }
}