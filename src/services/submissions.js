import { getSupabaseClient } from '../lib/supabase.js';

const PARTNER_ROLES = [
  'Partner With Us (Organization / School)',
  'Volunteer With Us (Individual)',
  'Support Our Initiatives (Expertise / Resources)',
];

const DONATION_CAUSES = [
  'General Impact Fund',
  'Educational & Youth STEM Projects',
  'Environmental Cleanup & Recycling',
  'Agricultural Resilience Programs',
];

export async function createPartnerInterest({ fullName, email, role, message }) {
  const normalizedName = String(fullName ?? '').trim();
  const normalizedEmail = String(email ?? '').trim().toLowerCase();
  const normalizedRole = String(role ?? '');
  const normalizedMessage = String(message ?? '').trim();

  if (!normalizedName || normalizedName.length > 120) {
    throw new Error('Enter a name between 1 and 120 characters.');
  }
  if (normalizedEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    throw new Error('Enter a valid email address.');
  }
  if (!PARTNER_ROLES.includes(normalizedRole)) {
    throw new Error('Select a valid role or contribution.');
  }
  if (normalizedMessage.length > 2000) {
    throw new Error('Your message must be 2,000 characters or fewer.');
  }

  const { error } = await getSupabaseClient()
    .from('partner_interests')
    .insert({
      full_name: normalizedName,
      email: normalizedEmail,
      role: normalizedRole,
      message: normalizedMessage || null,
    });

  if (error) throw new Error(`Unable to submit your interest: ${error.message}`);
}

export async function createDonationIntent({ cause, amount }) {
  const normalizedCause = String(cause ?? '');
  const normalizedAmount = Number(amount);

  if (!DONATION_CAUSES.includes(normalizedCause)) {
    throw new Error('Select a valid donation cause.');
  }
  if (
    !Number.isFinite(normalizedAmount)
    || normalizedAmount <= 0
    || normalizedAmount > 99999999.99
    || Math.abs(normalizedAmount * 100 - Math.round(normalizedAmount * 100)) > 1e-8
  ) {
    throw new Error('Enter an amount between $0.01 and $99,999,999.99, with up to two decimal places.');
  }

  const { error } = await getSupabaseClient()
    .from('donation_intents')
    .insert({ cause: normalizedCause, amount: normalizedAmount });

  if (error) throw new Error(`Unable to submit your donation intent: ${error.message}`);
}
