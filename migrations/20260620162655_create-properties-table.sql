-- Create properties table
CREATE TABLE public.properties (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title         text NOT NULL,
  price         numeric(15, 2) NOT NULL,
  location      text NOT NULL,
  image_url     text,
  property_type text NOT NULL,
  search_vector tsvector GENERATED ALWAYS AS (
    to_tsvector('english',
      coalesce(title, '') || ' ' ||
      coalesce(location, '') || ' ' ||
      coalesce(property_type, '')
    )
  ) STORED,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- GIN index for fast full-text search
CREATE INDEX properties_search_idx ON public.properties USING gin(search_vector);

-- Regular indexes for common filter queries
CREATE INDEX properties_property_type_idx ON public.properties (property_type);
CREATE INDEX properties_price_idx         ON public.properties (price);
CREATE INDEX properties_created_at_idx    ON public.properties (created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;

-- Public read: anyone can browse listings
CREATE POLICY "properties_public_read"
  ON public.properties
  FOR SELECT
  USING (true);

-- Grant SELECT to anon and authenticated roles
GRANT SELECT ON public.properties TO anon, authenticated;
