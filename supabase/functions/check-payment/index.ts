// Supabase Edge Function (cron): pravidelně kontroluje bankovní účet (API
// banky, ideálně Fio) a páruje příchozí platby podle variabilního symbolu.
// Po spárování označí objednávku jako zaplacenou a spustí e-mail přes Resend.
