// ============================================================================
// Configuration File for HIVE Coworking Space - Houston, TX
// ============================================================================
// A dream coworking space reflecting Houston's innovative, diverse spirit

// Navigation Configuration
export interface NavigationConfig {
  logo: string;
  links: Array<{ label: string; href: string }>;
}

export const navigationConfig: NavigationConfig = {
  logo: "HIVE",
  links: [
    { label: "Spaces", href: "#spaces" },
    { label: "Community", href: "#community" },
    { label: "Amenities", href: "#amenities" },
    { label: "Membership", href: "#membership" },
    { label: "Contact", href: "#contact" },
  ],
};

// Hero Section Configuration
export interface HeroConfig {
  heroImage: string;
  titleText: "INNOVATION";
  subtitleLabel: "Next-Gen Workspace · HTX";
  ctaText: "Unlock Access";
}

export const heroConfig: HeroConfig = {
  heroImage: "images/hero_workspace_v2.png",
  titleText: "INNOVATION",
  subtitleLabel: "Next-Gen Workspace · HTX",
  ctaText: "Unlock Access",
};

// Manifesto Section Configuration
export interface ManifestoConfig {
  image: string;
  phrases: string[];
}

export const manifestoConfig: ManifestoConfig = {
  image: "images/manifesto_collab.jpg",
  phrases: [
    "BUILD",
    "HARD",
    "THINK",
    "BIG",
    "WORK",
    "SMART",
    "WIN",
    "AS",
    "ONE",
  ],
};

// Product Spotlight Section Configuration
export interface ProductSpotlightConfig {
  productImage: string;
  portraitImage: string;
  titlePhrases: string[];
  ctaText: string;
  price: string;
}

export const productSpotlightConfig: ProductSpotlightConfig = {
  productImage: "images/spotlight_desk.jpg",
  portraitImage: "images/spotlight_member.jpg",
  titlePhrases: [
    "OWN",
    "YOUR",
    "SPACE",
    "IN",
    "THE",
    "CITY",
  ],
  ctaText: "View Memberships",
  price: "From $199/mo",
};

// Texture Section Configuration
export interface TextureConfig {
  portraitImage: string;
  macroImage: string;
  titlePhrases: string[];
  subtitle: string;
}

export const textureConfig: TextureConfig = {
  portraitImage: "images/texture_lounge.jpg",
  macroImage: "images/texture_detail.jpg",
  titlePhrases: [
    "MADE",
    "FOR",
    "DEEP",
    "WORK",
    "AND",
    "FLOW",
  ],
  subtitle: "Every detail crafted for high-performance creativity",
};

// Shade Range Section Configuration
export interface ShadeConfig {
  name: string;
  image: string;
}

export interface ShadeRangeConfig {
  heading: string[];
  headingAccent: string;
  shades: ShadeConfig[];
  price: string;
  ctaText: string;
}

export const shadeRangeConfig: ShadeRangeConfig = {
  heading: ["CHOOSE", "YOUR"],
  headingAccent: "FUTURE",
  shades: [
    { name: "Hot Desk", image: "images/space_hotdesk.jpg" },
    { name: "Dedicated Desk", image: "images/space_dedicated.jpg" },
    { name: "Private Office", image: "images/space_office.jpg" },
    { name: "Meeting Room", image: "images/space_meeting_v2.png" },
    { name: "Event Space", image: "images/space_event.jpg" },
    { name: "Phone Booth", image: "images/space_phone.jpg" },
  ],
  price: "Scale fast",
  ctaText: "Apply Now",
};

// Final Statement Section Configuration
export interface FinalStatementConfig {
  image1: string;
  image2: string;
  phrases: string[];
  subtitle: string;
}

export const finalStatementConfig: FinalStatementConfig = {
  image1: "images/closing_community.jpg",
  image2: "images/closing_focus_v2.png",
  phrases: [
    "JOIN",
    "THE",
    "HIVE",
    "WHERE",
    "THE",
    "BEST",
    "RISE",
  ],
  subtitle: "24/7 Access · Gigabit Fiber · Artisan Coffee · Investor Networks",
};

// Contact Section Configuration
export interface ContactConfig {
  leftLinks: string[];
  formHeading: string[];
  formHeadingAccent: string;
  formDescription: string;
  emailPlaceholder: string;
  subscribeButtonText: string;
  socialLinks: Array<{ label: string; href: string }>;
  copyright: string;
  tagline: string;
}

export const contactConfig: ContactConfig = {
  leftLinks: ["Facilities", "Syndicates", "Partners", "Careers", "Press"],
  formHeading: ["STAY", "AHEAD OF"],
  formHeadingAccent: "THE CURVE",
  formDescription: "Receive exclusive updates on new spaces, member events, and tech news.",
  emailPlaceholder: "Enter your email",
  subscribeButtonText: "Get Access",
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
  copyright: "© 2026 HIVE Coworking Space. All rights reserved.",
  tagline: "Houston's sanctuary for creators, founders, and visionaries.",
};

// Site Metadata
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "HIVE | Next-Gen Coworking in Houston",
  description: "Houston's premium coworking sanctuary for creators, founders, and visionaries. Featuring dedicated desks, executive offices, and gigabit fiber.",
  language: "en",
};
