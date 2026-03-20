export function constructMetadata({
  title = "Appliance Repair Hyderabad | Charminar Repairs Service",
  description = "Expert appliance repair in Hyderabad. Certified service for ACs, fridges & washers. 1-Year Warranty. Book same-day repair.",
  image = "/images/social-share.jpg",
  icons = "/favicon.png",
  canonicalPath = "/",
  noIndex = false,
  keywords = "appliance repair Hyderabad, washing machine repair Hyderabad, AC repair Hyderabad, refrigerator repair Hyderabad, microwave repair Hyderabad, TV repair Hyderabad, doorstep repair Hyderabad, same-day repair service, Charminar Repairs Hyderabad, appliance service center Hyderabad",
}) {
  const baseUrl = "https://www.charminarrepairs.com";
  let path = canonicalPath;
  if (path !== "/" && !path.endsWith("/")) {
    path += "/";
  }
  const canonicalUrl = `${baseUrl}${path}`;
  const ogImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  const metadata = {
    title,
    description,
    keywords,
    authors: [{ name: "Charminar Repairs", url: baseUrl }],
    creator: "Charminar Repairs",
    publisher: "Charminar Repairs",
    category: "Home Services",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': canonicalUrl,
        'en-IN': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.png", sizes: "any" },
        { url: "/favicon.ico", type: "image/x-icon" },
      ],
      shortcut: "/favicon.ico",
      apple: "/favicon.png",
    },
    verification: {
      google: "G890JVgjNGQLlwfuIJk-m2NrJAug5qhi7bcnvAeXExY",
      other: {
        "msvalidate.01": "5CB4BE42F3734E231FD62F8F7C8F1CB0",
      }
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
      siteName: "Charminar Repairs",
      locale: "en_IN",
      countryName: "India",
    },
    twitter: {
      card: "summary_large_image",
      site: "@charminarrepairs",
      creator: "@charminarrepairs",
      title,
      description,
      images: [ogImageUrl],
    },
    other: {
      "google-adsense-account": "ca-pub-9089863982371941",
      "geo.region": "IN-TG",
      "geo.placename": "Hyderabad, Telangana, India",
      "geo.position": "17.385044;78.486671",
      ICBM: "17.385044, 78.486671",
      "revisit-after": "7 days",
      rating: "General",
      language: "en",
      "copyright": `© ${new Date().getFullYear()} Charminar Repairs. All Rights Reserved.`,
    },
  };

  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    };
  } else {
    metadata.robots = {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    };
  }

  return metadata;
}
