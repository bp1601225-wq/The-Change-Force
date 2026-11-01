create table if not exists public.partner_interests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(btrim(full_name)) between 1 and 120),
  email text not null check (
    char_length(email) <= 254
    and email = lower(btrim(email))
    and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  ),
  role text not null check (
    role in (
      'Partner With Us (Organization / School)',
      'Volunteer With Us (Individual)',
      'Support Our Initiatives (Expertise / Resources)'
    )
  ),
  message text check (message is null or char_length(message) <= 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.donation_intents (
  id uuid primary key default gen_random_uuid(),
  cause text not null check (
    cause in (
      'General Impact Fund',
      'Educational & Youth STEM Projects',
      'Environmental Cleanup & Recycling',
      'Agricultural Resilience Programs'
    )
  ),
  amount numeric not null check (
    amount > 0
    and amount <= 99999999.99
    and amount = round(amount, 2)
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists partner_interests_set_updated_at on public.partner_interests;
create trigger partner_interests_set_updated_at
before update on public.partner_interests
for each row execute function public.set_updated_at();

drop trigger if exists donation_intents_set_updated_at on public.donation_intents;
create trigger donation_intents_set_updated_at
before update on public.donation_intents
for each row execute function public.set_updated_at();

alter table public.partner_interests enable row level security;
alter table public.donation_intents enable row level security;

revoke all on table public.partner_interests from anon, authenticated;
revoke all on table public.donation_intents from anon, authenticated;
grant insert on table public.partner_interests to anon, authenticated;
grant insert on table public.donation_intents to anon, authenticated;

drop policy if exists "Anyone can submit partner interests" on public.partner_interests;
create policy "Anyone can submit partner interests"
on public.partner_interests
for insert
to anon, authenticated
with check (true);

drop policy if exists "Anyone can submit donation intents" on public.donation_intents;
create policy "Anyone can submit donation intents"
on public.donation_intents
for insert
to anon, authenticated
with check (true);
