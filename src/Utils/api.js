// src/utils/api.js - This file remains the same as before

// Simulate a delay for API calls
const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const mockPolicies = [
  {
    _id: "pol-101",
    site: "https://www.google.com/policies/privacy",
    summary: "Google's policy outlines data collection for personalization, ads, and service improvement. It details sharing practices with trusted partners and legal requirements. Users have controls over their data via Google Account settings.",
    recommendations: [
      "Review your Google Ad Settings to limit personalized ads.",
      "Check your Activity Controls to manage data Google saves.",
      "Consider using a privacy-focused browser for general Browse."
    ],
    rawText: "This is the full raw text for Google's privacy policy. It's usually very long and detailed, covering everything from data collection (what, why, how) to data usage, sharing, retention, and user rights. It includes information on cookies, tracking technologies, and how they comply with various regulations like GDPR and CCPA. Users are advised to read the full policy to understand their rights and Google's practices thoroughly.",
    riskScore: 3,
    date: "2025-07-18T10:30:00Z"
  },
  {
    _id: "pol-102",
    site: "https://www.facebook.com/policy.php",
    summary: "Facebook's data policy explains how it collects and uses data to provide personalized experiences, ads, and connect users. It emphasizes sharing with third-party partners for various services and advertising. Users are given tools to control their privacy settings.",
    recommendations: [
      "Adjust your Facebook privacy settings to restrict data sharing.",
      "Be cautious about what personal information you share publicly.",
      "Review app and website permissions connected to your Facebook account."
    ],
    rawText: "The Facebook Data Policy is a comprehensive document that details how Meta Platforms collects, uses, stores, and shares user data across its products (Facebook, Instagram, WhatsApp, Messenger). It covers information gathered from user activities, third-party data, and device information. It explicitly states how data is used for personalized content, ads, and to measure service effectiveness. The policy also touches on data sharing with partners, vendors, and for legal reasons. Users can find information on their rights and tools to manage their data and privacy choices.",
    riskScore: 7,
    date: "2025-07-17T15:45:00Z"
  },
  {
    _id: "pol-103",
    site: "https://www.spotify.com/us/legal/privacy-policy/",
    summary: "Spotify collects data on listening habits, device info, and interactions to personalize music recommendations and ads. It shares data with partners for analytics and advertising. Users have rights to access and delete their data, and manage marketing preferences.",
    recommendations: [
      "Review your Spotify privacy settings to control data usage for personalized ads.",
      "Manage your marketing preferences to opt out of certain communications.",
      "Be aware of data collected through connected third-party apps."
    ],
    rawText: "Spotify's Privacy Policy describes how personal data is collected and processed when users interact with their service. This includes information about usage, technical data from devices, and payment information. It details how data is used for service provision, personalization, advertising, and analytics. Spotify also clarifies how data might be shared with third-party service providers, advertisers, and for legal compliance. The policy outlines user rights regarding their data, including access, deletion, and objection to processing.",
    riskScore: 5,
    date: "2025-07-16T09:00:00Z"
  },
  {
    _id: "pol-104",
    site: "https://www.tiktok.com/legal/privacy-policy",
    summary: "TikTok collects extensive data on user behavior, content interaction, and device information. It shares data with third parties for advertising and analytics, and is subject to evolving data regulations. The policy notes potential data transfer outside user's country.",
    recommendations: [
      "Review and adjust your TikTok privacy settings carefully.",
      "Limit the personal information shared in your profile and videos.",
      "Be aware of data sharing with third-party advertisers."
    ],
    rawText: "The TikTok Privacy Policy is a comprehensive document outlining how user data is collected, used, and shared by TikTok Inc. It covers a broad range of data points, including user content, Browse history, usage patterns, device information, and location data. The policy explains how this data is utilized for personalization, advertising, content moderation, and platform improvement. It also details data sharing with service providers, business partners, and for legal purposes. Given TikTok's global operations, the policy addresses data transfers across borders and user rights in various jurisdictions.",
    riskScore: 9,
    date: "2025-07-15T18:00:00Z"
  }
];

export const fetchAllPolicies = async () => {
  await simulateDelay(500); // Simulate network delay
  return mockPolicies;
};

export const fetchPolicyById = async (id) => {
  await simulateDelay(300); // Simulate network delay
  return mockPolicies.find(policy => policy._id === id);
};