import data from '../data/common.yml';

export default function getSeo(pathname) {
  const { SEO } = data;
  return SEO[pathname] || SEO['/index'];
}
