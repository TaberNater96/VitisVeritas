import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Vitis Veritas | Interactive Willamette Valley Wine & Terroir Guide",
  description = "Explore the complete Willamette Valley wine terroir through interactive maps showing soil types, AVAs, topography, and all wineries. Learn about Oregon Pinot Noir, winemaking, and what makes each vineyard unique.",
  keywords = "Willamette Valley wine, Oregon Pinot Noir, wine terroir, Willamette Valley terroir, Oregon wine map, soil maps, AVA map, wine geology, winemaking process, Oregon wineries",
  ogImage = "https://www.vitis-veritas.com/og-image.jpg",
  url = "https://www.vitis-veritas.com/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;