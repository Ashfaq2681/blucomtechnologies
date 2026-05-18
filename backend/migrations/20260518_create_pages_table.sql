CREATE TABLE IF NOT EXISTS pages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT DEFAULT NULL,
  content LONGTEXT DEFAULT NULL,
  status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  seo_title VARCHAR(255) DEFAULT NULL,
  seo_description TEXT DEFAULT NULL,
  canonical_url VARCHAR(500) DEFAULT NULL,
  meta_robots VARCHAR(100) NOT NULL DEFAULT 'index,follow',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_pages_status_updated_at (status, updated_at),
  INDEX idx_pages_slug_status (slug, status)
);

CREATE TABLE IF NOT EXISTS services (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT DEFAULT NULL,
  content LONGTEXT DEFAULT NULL,
  status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  seo_title VARCHAR(255) DEFAULT NULL,
  seo_description TEXT DEFAULT NULL,
  canonical_url VARCHAR(500) DEFAULT NULL,
  meta_robots VARCHAR(100) NOT NULL DEFAULT 'index,follow',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_services_status_updated_at (status, updated_at),
  INDEX idx_services_slug_status (slug, status)
);

CREATE TABLE IF NOT EXISTS work (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT DEFAULT NULL,
  content LONGTEXT DEFAULT NULL,
  status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  seo_title VARCHAR(255) DEFAULT NULL,
  seo_description TEXT DEFAULT NULL,
  canonical_url VARCHAR(500) DEFAULT NULL,
  meta_robots VARCHAR(100) NOT NULL DEFAULT 'index,follow',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_work_status_updated_at (status, updated_at),
  INDEX idx_work_slug_status (slug, status)
);

INSERT INTO pages
  (title, slug, excerpt, content, status, seo_title, seo_description, canonical_url, meta_robots)
VALUES
  ('Landing', 'landing', 'Blucom Technologies landing page.', 'Primary homepage experience for Blucom Technologies.', 'published', 'Blucom Technologies | Landing', 'Explore Blucom Technologies services, work, ideas, and contact options.', 'https://www.blucomtechnologies.com/', 'index,follow'),
  ('Work', 'work', 'Blucom Technologies work and portfolio overview.', 'Portfolio and work overview for Blucom Technologies.', 'published', 'Work | Blucom Technologies', 'Explore Blucom Technologies work across digital strategy, design, campaigns, and growth.', 'https://www.blucomtechnologies.com/work', 'index,follow'),
  ('Career', 'career', 'Career opportunities at Blucom Technologies.', 'Careers page for open roles, applications, and hiring information.', 'published', 'Careers | Blucom Technologies', 'Explore career opportunities and open roles at Blucom Technologies.', 'https://www.blucomtechnologies.com/careers', 'index,follow'),
  ('Investor', 'investor', 'Investor overview for Blucom Technologies.', 'Investor overview page for Blucom Technologies.', 'published', 'Investors | Blucom Technologies', 'Review investor information and company overview details from Blucom Technologies.', 'https://www.blucomtechnologies.com/investors', 'index,follow'),
  ('Contact', 'contact', 'Contact Blucom Technologies.', 'Contact page for inquiries, project requests, and business communication.', 'published', 'Contact | Blucom Technologies', 'Contact Blucom Technologies for services, partnerships, project requests, and support.', 'https://www.blucomtechnologies.com/contact', 'index,follow')
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  excerpt = VALUES(excerpt),
  content = VALUES(content),
  status = VALUES(status),
  seo_title = VALUES(seo_title),
  seo_description = VALUES(seo_description),
  canonical_url = VALUES(canonical_url),
  meta_robots = VALUES(meta_robots);

INSERT INTO services
  (title, slug, excerpt, content, status, seo_title, seo_description, canonical_url, meta_robots)
VALUES
  ('Brand Strategy', 'brand-strategy', 'Brand Strategy services from Blucom Technologies.', 'Brand Strategy service page content for Blucom Technologies.', 'published', 'Brand Strategy | Blucom Technologies', 'Explore brand strategy services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/brand-strategy', 'index,follow'),
  ('Messaging Positioning', 'messaging-positioning', 'Messaging Positioning services from Blucom Technologies.', 'Messaging Positioning service page content for Blucom Technologies.', 'published', 'Messaging Positioning | Blucom Technologies', 'Explore messaging positioning services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/messaging-positioning', 'index,follow'),
  ('Reputation Management', 'reputation-management', 'Reputation Management services from Blucom Technologies.', 'Reputation Management service page content for Blucom Technologies.', 'published', 'Reputation Management | Blucom Technologies', 'Explore reputation management services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/reputation-management', 'index,follow'),
  ('Product Mapping', 'product-mapping', 'Product Mapping services from Blucom Technologies.', 'Product Mapping service page content for Blucom Technologies.', 'published', 'Product Mapping | Blucom Technologies', 'Explore product mapping services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/product-mapping', 'index,follow'),
  ('Persona Creation', 'persona-creation', 'Persona Creation services from Blucom Technologies.', 'Persona Creation service page content for Blucom Technologies.', 'published', 'Persona Creation | Blucom Technologies', 'Explore persona creation services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/persona-creation', 'index,follow'),
  ('Customer Journey Mapping', 'customer-journey-mapping', 'Customer Journey Mapping services from Blucom Technologies.', 'Customer Journey Mapping service page content for Blucom Technologies.', 'published', 'Customer Journey Mapping | Blucom Technologies', 'Explore customer journey mapping services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/customer-journey-mapping', 'index,follow'),
  ('Brand Awareness', 'brand-awareness', 'Brand Awareness services from Blucom Technologies.', 'Brand Awareness service page content for Blucom Technologies.', 'published', 'Brand Awareness | Blucom Technologies', 'Explore brand awareness services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/brand-awareness', 'index,follow'),
  ('Strategic Communication', 'strategic-communication', 'Strategic Communication services from Blucom Technologies.', 'Strategic Communication service page content for Blucom Technologies.', 'published', 'Strategic Communication | Blucom Technologies', 'Explore strategic communication services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/strategic-communication', 'index,follow'),
  ('Analysis / Measurement', 'analysis-measurement', 'Analysis / Measurement services from Blucom Technologies.', 'Analysis / Measurement service page content for Blucom Technologies.', 'published', 'Analysis / Measurement | Blucom Technologies', 'Explore analysis / measurement services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/analysis-measurement', 'index,follow'),
  ('Impact Measurement', 'impact-measurement', 'Impact Measurement services from Blucom Technologies.', 'Impact Measurement service page content for Blucom Technologies.', 'published', 'Impact Measurement | Blucom Technologies', 'Explore impact measurement services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/impact-measurement', 'index,follow'),
  ('Analytics Implementation', 'analytics-implementation', 'Analytics Implementation services from Blucom Technologies.', 'Analytics Implementation service page content for Blucom Technologies.', 'published', 'Analytics Implementation | Blucom Technologies', 'Explore analytics implementation services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/analytics-implementation', 'index,follow'),
  ('Campaign Optimization', 'campaign-optimization', 'Campaign Optimization services from Blucom Technologies.', 'Campaign Optimization service page content for Blucom Technologies.', 'published', 'Campaign Optimization | Blucom Technologies', 'Explore campaign optimization services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/campaign-optimization', 'index,follow'),
  ('Content Strategy', 'content-strategy', 'Content Strategy services from Blucom Technologies.', 'Content Strategy service page content for Blucom Technologies.', 'published', 'Content Strategy | Blucom Technologies', 'Explore content strategy services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/content-strategy', 'index,follow'),
  ('Search Marketing', 'search-marketing', 'Search Marketing services from Blucom Technologies.', 'Search Marketing service page content for Blucom Technologies.', 'published', 'Search Marketing | Blucom Technologies', 'Explore search marketing services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/search-marketing', 'index,follow'),
  ('Lead Gen', 'lead-gen', 'Lead Gen services from Blucom Technologies.', 'Lead Gen service page content for Blucom Technologies.', 'published', 'Lead Gen | Blucom Technologies', 'Explore lead gen services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/lead-gen', 'index,follow'),
  ('Media Planning / Buying', 'media-planning-buying', 'Media Planning / Buying services from Blucom Technologies.', 'Media Planning / Buying service page content for Blucom Technologies.', 'published', 'Media Planning / Buying | Blucom Technologies', 'Explore media planning / buying services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/media-planning-buying', 'index,follow'),
  ('Content Marketing', 'content-marketing', 'Content Marketing services from Blucom Technologies.', 'Content Marketing service page content for Blucom Technologies.', 'published', 'Content Marketing | Blucom Technologies', 'Explore content marketing services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/content-marketing', 'index,follow'),
  ('Omnichannel Campaigns', 'omnichannel-campaigns', 'Omnichannel Campaigns services from Blucom Technologies.', 'Omnichannel Campaigns service page content for Blucom Technologies.', 'published', 'Omnichannel Campaigns | Blucom Technologies', 'Explore omnichannel campaigns services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/omnichannel-campaigns', 'index,follow'),
  ('Interaction Assets Devs', 'interaction-assets-devs', 'Interaction Assets Devs services from Blucom Technologies.', 'Interaction Assets Devs service page content for Blucom Technologies.', 'published', 'Interaction Assets Devs | Blucom Technologies', 'Explore interaction assets devs services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/interaction-assets-devs', 'index,follow'),
  ('Nurture Strategies', 'nurture-strategies', 'Nurture Strategies services from Blucom Technologies.', 'Nurture Strategies service page content for Blucom Technologies.', 'published', 'Nurture Strategies | Blucom Technologies', 'Explore nurture strategies services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/nurture-strategies', 'index,follow'),
  ('UI Designing', 'ui-designing', 'UI Designing services from Blucom Technologies.', 'UI Designing service page content for Blucom Technologies.', 'published', 'UI Designing | Blucom Technologies', 'Explore ui designing services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/ui-designing', 'index,follow'),
  ('Prototyping & Wireframing', 'prototyping-and-wireframing', 'Prototyping & Wireframing services from Blucom Technologies.', 'Prototyping & Wireframing service page content for Blucom Technologies.', 'published', 'Prototyping & Wireframing | Blucom Technologies', 'Explore prototyping & wireframing services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/prototyping-and-wireframing', 'index,follow'),
  ('User Journey Mapping', 'user-journey-mapping', 'User Journey Mapping services from Blucom Technologies.', 'User Journey Mapping service page content for Blucom Technologies.', 'published', 'User Journey Mapping | Blucom Technologies', 'Explore user journey mapping services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/user-journey-mapping', 'index,follow'),
  ('Interaction Design', 'interaction-design', 'Interaction Design services from Blucom Technologies.', 'Interaction Design service page content for Blucom Technologies.', 'published', 'Interaction Design | Blucom Technologies', 'Explore interaction design services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/interaction-design', 'index,follow'),
  ('Web Maintenance', 'web-maintenance', 'Web Maintenance services from Blucom Technologies.', 'Web Maintenance service page content for Blucom Technologies.', 'published', 'Web Maintenance | Blucom Technologies', 'Explore web maintenance services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/web-maintenance', 'index,follow'),
  ('Data Visualization', 'data-visualization', 'Data Visualization services from Blucom Technologies.', 'Data Visualization service page content for Blucom Technologies.', 'published', 'Data Visualization | Blucom Technologies', 'Explore data visualization services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/data-visualization', 'index,follow'),
  ('Web Development', 'web-development', 'Web Development services from Blucom Technologies.', 'Web Development service page content for Blucom Technologies.', 'published', 'Web Development | Blucom Technologies', 'Explore web development services from Blucom Technologies.', 'https://www.blucomtechnologies.com/services/web-development', 'index,follow')
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  excerpt = VALUES(excerpt),
  content = VALUES(content),
  status = VALUES(status),
  seo_title = VALUES(seo_title),
  seo_description = VALUES(seo_description),
  canonical_url = VALUES(canonical_url),
  meta_robots = VALUES(meta_robots);
