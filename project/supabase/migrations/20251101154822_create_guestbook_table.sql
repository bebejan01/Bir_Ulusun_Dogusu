/*
  # Create Guestbook Table

  1. New Tables
    - `guestbook_entries`
      - `id` (uuid, primary key)
      - `name` (text, required) - Visitor's name
      - `message` (text, required) - Visitor's message
      - `created_at` (timestamptz) - Entry timestamp
  
  2. Security
    - Enable RLS on `guestbook_entries` table
    - Add policy for anyone to read entries (public display)
    - Add policy for anyone to create entries (public guestbook)
*/

CREATE TABLE IF NOT EXISTS guestbook_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guestbook_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view guestbook entries"
  ON guestbook_entries
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can add guestbook entries"
  ON guestbook_entries
  FOR INSERT
  WITH CHECK (true);