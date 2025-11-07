/*
  # Digital Lost & Found Platform - Database Schema

  ## Overview
  Creates the core database structure for a lost and found items platform where users can report lost or found items, search for matches, and coordinate returns.

  ## New Tables
  
  ### `items`
  Main table storing all lost and found item reports
  - `id` (uuid, primary key) - Unique identifier for each item
  - `type` (text) - Either 'lost' or 'found'
  - `title` (text) - Brief name/title of the item
  - `description` (text) - Detailed description of the item
  - `category` (text) - Category (e.g., electronics, clothing, documents, etc.)
  - `location` (text) - Where the item was lost or found
  - `date_time` (timestamptz) - When the item was lost or found
  - `contact_name` (text) - Name of the person reporting
  - `contact_email` (text) - Email for contact
  - `contact_phone` (text, optional) - Phone number for contact
  - `image_url` (text, optional) - URL to uploaded image of the item
  - `status` (text) - Status: 'unclaimed', 'claimed', 'resolved'
  - `created_at` (timestamptz) - When the report was created
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  
  ### Row Level Security (RLS)
  - Enable RLS on items table
  - Anyone can view all items (public read access for browsing)
  - Anyone can insert new items (public submission)
  - Only items can be updated (for status changes - can be restricted to admin later)
  - No deletion allowed by regular users (admin-only via backend)

  ## Indexes
  - Index on `type` for filtering lost vs found
  - Index on `category` for category filtering
  - Index on `status` for filtering claimed/unclaimed items
  - Index on `created_at` for sorting by newest first

  ## Important Notes
  1. Public Access: This platform allows anonymous submissions, so RLS is permissive for reading and creating
  2. Status Management: Items start as 'unclaimed' and can be updated to 'claimed' or 'resolved'
  3. Search: Frontend will implement text search on title, description, and location fields
*/

-- Create items table
CREATE TABLE IF NOT EXISTS items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('lost', 'found')),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location text NOT NULL,
  date_time timestamptz NOT NULL,
  contact_name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text,
  image_url text,
  status text NOT NULL DEFAULT 'unclaimed' CHECK (status IN ('unclaimed', 'claimed', 'resolved')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE items ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view all items (public browsing)
CREATE POLICY "Anyone can view items"
  ON items
  FOR SELECT
  TO public
  USING (true);

-- Policy: Anyone can submit new items (anonymous reporting)
CREATE POLICY "Anyone can submit items"
  ON items
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Anyone can update item status (will be restricted to admin later if needed)
CREATE POLICY "Anyone can update items"
  ON items
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_items_type ON items(type);
CREATE INDEX IF NOT EXISTS idx_items_category ON items(category);
CREATE INDEX IF NOT EXISTS idx_items_status ON items(status);
CREATE INDEX IF NOT EXISTS idx_items_created_at ON items(created_at DESC);

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_items_updated_at
  BEFORE UPDATE ON items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();