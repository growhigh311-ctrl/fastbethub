import kingexchange247 from './kingexchange247.js';
import tigerbook365 from './tigerbook365.js';
import royalcricketid from './royalcricketid.js';
import fastbethub from './fastbethub.js';
import diamondplay99 from './diamondplay99.js';
import primesportsbook from './primesportsbook.js';
import victoryexchange from './victoryexchange.js';
import superbetzone from './superbetzone.js';
import goldcricketbook from './goldcricketbook.js';
import elitegamingid from './elitegamingid.js';

export const brandsData = {
  kingexchange247,
  tigerbook365,
  royalcricketid,
  fastbethub,
  diamondplay99,
  primesportsbook,
  victoryexchange,
  superbetzone,
  goldcricketbook,
  elitegamingid
};

export const brandsList = [
  kingexchange247,
  tigerbook365,
  royalcricketid,
  fastbethub,
  diamondplay99,
  primesportsbook,
  victoryexchange,
  superbetzone,
  goldcricketbook,
  elitegamingid
];

export function getBrandConfig(hostname, queryParam = '') {
  // If preview query parameter is active, load that brand
  if (queryParam && brandsData[queryParam.toLowerCase()]) {
    return brandsData[queryParam.toLowerCase()];
  }
  
  // Otherwise, match hostname to retrieve correct tenant configuration
  const host = hostname.toLowerCase();
  for (const brandId of brandsList) {
    const brand = brandsData[brandId];
    if (host.includes(brand.id) || host.includes(brand.name.toLowerCase())) {
      return brand;
    }
  }
  
  // Default fallback (first brand: KingExchange247)
  return brandsData['kingexchange247'];
}
