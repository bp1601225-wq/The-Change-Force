create table if not exists public.partner_interests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null
    check (char_length(btrim(full_name)) between 1 and 120),
  email text not null
    check (
      char_length(email) <= 254
      and email = lower(btrim(email))
      and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    ),
  role text not null
    check (
      role in (
        'Partner With Us (Organization / School)',
        'Volunteer With Us (Individual)',
        'Support Our Initiatives (Expertise / Resources)'
      )
    ),
  message text
    check (message is null or char_length(message) <= 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists partner_interests_created_at_idx
  on public.partner_interests (created_at desc);

create or replace function public.set_partner_interests_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists partner_interests_set_updated_at
  on public.partner_interests;
create trigger partner_interests_set_updated_at
before update on public.partner_interests
for each row execute function public.set_partner_interests_updated_at();

alter table public.partner_interests enable row level security;

revoke all on table public.partner_interests from public, anon, authenticated;
grant insert (full_name, email, role, message)
  on table public.partner_interests to anon;

drop policy if exists "Anyone can submit partner interests"
  on public.partner_interests;
create policy "Anyone can submit partner interests"
on public.partner_interests
for insert
to anon
with check (true);

notify pgrst, 'reload schema';
