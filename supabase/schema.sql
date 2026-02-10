-- Enable UUID Extension
create extension if not exists "uuid-ossp";

-- Define ENUMS
create type user_role as enum ('super_admin', 'agency', 'attorney', 'client');
create type bureau_name as enum ('equifax', 'experian', 'transunion');
create type dispute_status as enum ('draft', 'sent', 'verified', 'deleted', 'updated');
create type violation_type as enum ('hinkle_failure_to_investigate', 'norman_mov_failure', 'saunders_dispute_flag', 'ucc_wrongful_repo', 'fdcpa_harassment');
create type litigation_status as enum ('review', 'drafting', 'filed', 'negotiation', 'settled', 'rejected');

-- USERS (Extends Supabase Auth)
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text not null,
  full_name text,
  role user_role default 'client',
  organization_id uuid, -- For Agencies/Law Firms to group users
  stripe_customer_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- AGENCIES (CROs)
create table public.agencies (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  owner_id uuid references public.profiles(id),
  stripe_connect_id text,
  subscription_status text default 'active',
  created_at timestamptz default now()
);

-- ATTORNEYS (Law Firms)
create table public.law_firms (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  bar_number text,
  state_licensed text[],
  owner_id uuid references public.profiles(id),
  stripe_connect_id text, -- Payouts
  created_at timestamptz default now()
);

-- CLIENTS (The Consumers)
create table public.clients (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id), -- If they have a login
  agency_id uuid references public.agencies(id), -- Which CRO owns them
  first_name text not null,
  last_name text not null,
  ssn_last4 text,
  dob date,
  address text,
  status text default 'onboarding', -- active, litigation_ready, archived
  created_at timestamptz default now()
);

-- DISPUTES (The Core Action)
create table public.disputes (
  id uuid default uuid_generate_v4() primary key,
  client_id uuid references public.clients(id) not null,
  bureau bureau_name not null,
  account_name text not null,
  account_number_redacted text,
  reason_code text, -- e.g., "not_mine", "late_payment"
  status dispute_status default 'draft',
  round_number integer default 1,
  letter_generated_at timestamptz,
  mailed_at timestamptz,
  response_received_at timestamptz,
  created_at timestamptz default now()
);

-- VIOLATIONS (The Money)
create table public.violations (
  id uuid default uuid_generate_v4() primary key,
  client_id uuid references public.clients(id) not null,
  dispute_id uuid references public.disputes(id),
  type violation_type not null,
  statute_reference text, -- e.g. "15 USC 1681i"
  description text,
  evidence_strength text default 'high', -- high, medium, low
  estimated_damages decimal(10,2) default 1000.00,
  detected_at timestamptz default now(),
  status text default 'pending' -- pending, confirmed, case_filed
);

-- LITIGATION CASES (The Lawsuits)
create table public.cases (
  id uuid default uuid_generate_v4() primary key,
  client_id uuid references public.clients(id) not null,
  attorney_id uuid references public.law_firms(id),
  referring_agency_id uuid references public.agencies(id),
  violation_ids uuid[] not null, -- Array of violation IDs included
  status litigation_status default 'review',
  court_case_number text, -- e.g. "2:24-cv-00123"
  filing_date date,
  settlement_amount decimal(10,2),
  attorney_fee decimal(10,2),
  client_payout decimal(10,2),
  platform_fee decimal(10,2),
  created_at timestamptz default now()
);

-- DOCUMENTS (Evidence Locker)
create table public.documents (
  id uuid default uuid_generate_v4() primary key,
  client_id uuid references public.clients(id) not null,
  case_id uuid references public.cases(id),
  uploader_id uuid references public.profiles(id),
  file_path text not null, -- Storage path
  file_type text not null, -- contract, denial_letter, complaint, etc
  extracted_data jsonb, -- AI Analysis results
  created_at timestamptz default now()
);

-- CHAT MESSAGES
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  sender_id uuid references public.profiles(id) not null,
  recipient_id uuid references public.profiles(id), -- Direct Message
  case_id uuid references public.cases(id), -- Context (optional)
  content text not null,
  read_at timestamptz,
  created_at timestamptz default now()
);

-- Row Level Security (RLS) Policies
alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.cases enable row level security;

-- Example Policy: Agencies can only see their own clients
create policy "Agencies see their own clients" on public.clients
  for all using (
    agency_id in (
      select id from public.agencies where owner_id = auth.uid()
    )
  );

-- Example Policy: Attorneys can only see cases assigned to them
create policy "Attorneys see assigned cases" on public.cases
  for all using (
    attorney_id in (
      select id from public.law_firms where owner_id = auth.uid()
    )
  );
