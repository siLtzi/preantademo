import groq from 'groq';

export const homepageQuery = groq`*[_type == "homepage" && _id == "homepage"][0]{
  heroTag,
  heroHeading,
  heroDescription,
  heroCtaText,
  heroCtaLink,
  heroSecondaryCtaText,
  heroSecondaryCtaLink,
  heroImage,
  heroStats,
  marqueeItems,
  servicesTag,
  servicesTitle,
  servicesDescription,
  serviceCards[]{
    num,
    title,
    description,
    image,
    "slug": slug.current
  },
  whyTag,
  whyTitle,
  whyDescription,
  whyCards[]{
    title,
    description
  },
  processTag,
  processTitle,
  processDescription,
  processSteps[]{
    num,
    title,
    description
  },
  ctaTag,
  ctaTitle,
  ctaDescription,
  ctaEmailButtonText,
  ctaAddress,
  ctaHours
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  companyName,
  logo,
  phone,
  email,
  address,
  businessHours,
  footerDescription,
  copyrightText,
  facebookUrl,
  instagramUrl,
  navLinks[]{label, href},
  navCtaText,
  navCtaLink,
  footerServiceLinks[]{label, href},
  footerCompanyLinks[]{label, href}
}`;

export const allServicePagesQuery = groq`*[_type == "servicePage"]{ "slug": slug.current }`;

export const servicePageQuery = groq`*[_type == "servicePage" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  heroTagline,
  heroImage{asset->{url}},
  shortDescription,
  ctaText,
  introHeading,
  introText,
  introImage{asset->{url}},
  highlightHeading,
  highlightText,
  highlightImage{asset->{url}},
  featuresHeading,
  features[]{title, description},
  process[]{title, description},
  gallery[]{asset->{url}},
  seoTitle,
  seoDescription
}`;
