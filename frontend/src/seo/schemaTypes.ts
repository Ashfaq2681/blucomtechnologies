export type SchemaArticleType =
  | "Article"
  | "BlogPosting"
  | "NewsArticle"
  | "Report"
  | "CaseStudy";

export interface ImageSchemaInput {
  url: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface SiteSettingsSchemaInput {
  companyName: string;
  websiteUrl: string;
  description: string;
  logo: ImageSchemaInput;
  socialProfiles?: string[];
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
  };
  language?: string;
}

export interface WebPageSchemaInput {
  title: string;
  description: string;
  url: string;
  canonicalUrl: string;
  image?: ImageSchemaInput;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  language?: string;
}

export interface SeoValidationResult {
  score: number;
  status: "Excellent" | "Good" | "Needs Improvement" | "Poor";
  errors: string[];
  warnings: string[];
  recommendations: string[];
  categories: {
    technicalSeo: number;
    schemaCompleteness: number;
    metadataQuality: number;
    contentSignals: number;
  };
}
