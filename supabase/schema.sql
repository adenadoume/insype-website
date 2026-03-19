-- Insype Database Schema
-- Institute of Modern Pedagogy - Day Care Center for People with Special Needs

-- Institute settings (single row)
CREATE TABLE institute_settings (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT,
  name_en       TEXT,
  tagline       TEXT,
  tagline_en    TEXT,
  description   TEXT,
  phone         TEXT,
  email         TEXT,
  address       TEXT,
  facebook_url  TEXT,
  instagram_url TEXT,
  is_published  BOOLEAN DEFAULT true,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- Services
CREATE TABLE services (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  name_en         TEXT,
  slug            TEXT UNIQUE NOT NULL,
  description     TEXT,
  description_en  TEXT,
  icon            TEXT,
  is_published    BOOLEAN DEFAULT true,
  display_order   INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- Case types (disorders accepted)
CREATE TABLE case_types (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  name_en         TEXT,
  description     TEXT,
  is_published    BOOLEAN DEFAULT true,
  display_order   INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- Personnel / Team
CREATE TABLE personnel (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  name_en         TEXT,
  role            TEXT,
  role_en         TEXT,
  bio             TEXT,
  image_url       TEXT,
  icon            TEXT,
  is_published    BOOLEAN DEFAULT true,
  display_order   INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- Testimonials
CREATE TABLE testimonials (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote           TEXT NOT NULL,
  name            TEXT NOT NULL,
  country         TEXT,
  is_published    BOOLEAN DEFAULT true,
  display_order   INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- Gallery categories
CREATE TABLE gallery_categories (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  display_order   INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- Gallery images
CREATE TABLE gallery_images (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url       TEXT NOT NULL,
  title           TEXT,
  description     TEXT,
  category_id     UUID REFERENCES gallery_categories(id) ON DELETE SET NULL,
  is_published    BOOLEAN DEFAULT true,
  display_order   INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- Page content (one row per page)
CREATE TABLE page_content (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_name         TEXT UNIQUE NOT NULL,
  hero_title        TEXT,
  hero_subtitle     TEXT,
  hero_image_url    TEXT,
  section_1_title   TEXT,
  section_1_text    TEXT,
  section_1_image_url TEXT,
  section_2_title   TEXT,
  section_2_text    TEXT,
  extra_content     JSONB DEFAULT '{}',
  is_published      BOOLEAN DEFAULT true,
  created_at        TIMESTAMPTZ DEFAULT now(),
  updated_at        TIMESTAMPTZ DEFAULT now()
);

-- Contact form submissions
CREATE TABLE contact_messages (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT,
  email      TEXT,
  phone      TEXT,
  subject    TEXT,
  message    TEXT,
  status     TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email      TEXT UNIQUE NOT NULL,
  is_active  BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Seed data
INSERT INTO institute_settings (name, name_en, tagline, tagline_en, phone, email, address) VALUES (
  'Ινστιτούτο Σύγχρονης Παιδαγωγικής',
  'Institute of Modern Pedagogy',
  'Κέντρο Ημερήσιας Φροντίδας ΑΜΕΑ',
  'Medical Day Care Center for People with Special Needs',
  '210-2281031',
  'info@insype.com.gr',
  'Τεώ 25 & Ολοφύτου, Τ.Κ. 11142 Αθήνα'
);

INSERT INTO gallery_categories (name, slug) VALUES
  ('Κτίριο', 'building'),
  ('Χώροι', 'facility'),
  ('Δραστηριότητες', 'activities');

INSERT INTO page_content (page_name, hero_title, hero_subtitle) VALUES
  ('home', 'Ινστιτούτο Σύγχρονης Παιδαγωγικής', 'Κέντρο Ημερήσιας Φροντίδας ΑΜΕΑ'),
  ('about', 'Σχετικά με εμάς', 'Ινστιτούτο Σύγχρονης Παιδαγωγικής'),
  ('services', 'Υπηρεσίες', 'Οι Θεραπευτικές μας Υπηρεσίες'),
  ('cases', 'Περιστατικά', 'Τα Περιστατικά που Δεχόμαστε'),
  ('personnel', 'Προσωπικό', 'Το Εξειδικευμένο Προσωπικό μας'),
  ('gallery', 'Φωτογραφίες', 'Οι Χώροι μας'),
  ('contact', 'Επικοινωνία', 'Επικοινωνήστε μαζί μας');