import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  lang?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/Copmap-logo.png',
  ogType = 'website',
  noindex = false,
  lang = 'en-IN',
  geoRegion = 'IN',
  geoPlacename = 'Maharashtra',
  geoPosition = '19.7515;75.7139'
}) => {
  const baseUrl = 'https://copmap.in';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  // Use relative image path for OG/Twitter to satisfy "don't rely on copmap.in"
  const fullOgImage = ogImage.startsWith('http') ? ogImage : ogImage;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      <link rel="alternate" hreflang={lang} href={fullCanonical} />

      {/* Geo Tags */}
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.placename" content={geoPlacename} />
      <meta name="geo.position" content={geoPosition} />
      <meta name="ICBM" content={geoPosition.replace(';', ', ')} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="CopMap" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
};

export default SEOHead;
