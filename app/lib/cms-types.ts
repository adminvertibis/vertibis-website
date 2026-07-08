export type AudienceType =
  | "ca_partner"
  | "msme"
  | "lender"
  | "enterprise"
  | "insurance"
  | "strategic_partner"
  | "general";

export type ModuleStage = "live" | "pilot" | "testing" | "planned";

export type ResourceStatus = "draft" | "published" | "archived";

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Qualified"
  | "Demo Scheduled"
  | "Pilot Interested"
  | "Not Relevant"
  | "Converted"
  | "Closed";

export type AdminRole = "super_admin" | "content_admin" | "sales_admin" | "viewer";

export interface CtaLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

export interface SiteSettings {
  companyName: string;
  footerCopy: string;
  contactEmail: string;
  registeredLocation: string;
  linkedInUrl: string;
  loginUrl: string;
  partnerJoinUrl: string;
  msmEpilotUrl: string;
  institutionalContactUrl: string;
  seoTitle: string;
  seoDescription: string;
  announcementBanner: string;
  gstDisclaimer: string;
  platformDisclaimer: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  showInHeader: boolean;
  showInFooter: boolean;
}

export interface WebsiteStat {
  label: string;
  value: string;
  suffix?: string;
  description: string;
  isReal: boolean;
  isDemo: boolean;
  display: boolean;
  sourceNote: string;
  lastUpdated: string;
}

export interface ProductModule {
  name: string;
  description: string;
  audience: string;
  stage: ModuleStage;
  icon: string;
  displayOrder: number;
  relatedCta: CtaLink;
  show: boolean;
}

export interface PricingPlan {
  name: string;
  audienceType: AudienceType;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: CtaLink;
  status: "active" | "hidden" | "coming soon" | "pilot";
  displayOrder: number;
}

export interface ReportPrice {
  name: string;
  price: string;
  description: string;
  stage: ModuleStage;
  displayOrder: number;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required: boolean;
  placeholder: string;
  helpText?: string;
  options?: string[];
}

export interface LeadFormDefinition {
  id: string;
  name: string;
  audienceType: AudienceType;
  fields: FormField[];
  consentText: string;
  successMessage: string;
  notificationEmail: string;
  active: boolean;
}

export interface LeadSubmission {
  id: string;
  formType: string;
  name: string;
  email: string;
  phone?: string;
  organisation?: string;
  city?: string;
  role?: string;
  message?: string;
  sourcePage: string;
  utm: Record<string, string>;
  createdAt: string;
  status: LeadStatus;
  notes: string;
  assignedTo: string;
  followUpDate: string;
}

export interface Testimonial {
  name: string;
  designation: string;
  organisation: string;
  quote: string;
  permissionReceived: boolean;
  isDemo: boolean;
  show: boolean;
}

export interface ResourceItem {
  title: string;
  slug: string;
  category: string;
  author: string;
  summary: string;
  body: string;
  seoTitle: string;
  seoDescription: string;
  status: ResourceStatus;
  publishDate: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
  show: boolean;
}

export interface AudiencePageContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  sections: {
    title: string;
    description: string;
    points: string[];
  }[];
}

export interface CmsData {
  settings: SiteSettings;
  navigation: NavigationItem[];
  websiteStats: WebsiteStat[];
  homepage: {
    heroHeadline: string;
    heroSubheadline: string;
    heroSupportingText: string;
    badges: string[];
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    tertiaryCta: CtaLink;
    problemCards: string[];
    ecosystemLayers: {
      name: string;
      description: string;
      items: string[];
    }[];
    trustItems: string[];
    pilotAudiences: {
      title: string;
      description: string;
      formId: string;
      cta: CtaLink;
    }[];
  };
  audiencePages: Record<
    "cas" | "msmes" | "lenders" | "enterprises" | "insurance",
    AudiencePageContent
  >;
  productModules: ProductModule[];
  pricingPlans: PricingPlan[];
  reportPricing: ReportPrice[];
  leadForms: LeadFormDefinition[];
  testimonials: Testimonial[];
  resources: ResourceItem[];
  faqs: FaqItem[];
}
