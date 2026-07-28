import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

/*
 * Klient pro prohlížeč. Publishable klíč je veřejný záměrně — data chrání
 * RLS politiky v databázi, ne utajení klíče:
 *   - products  … veřejně čitelné, ale jen `active = true`
 *   - orders    … pro tento klíč neviditelné i nezapisovatelné
 *   - newsletter… lze jen vložit e-mail, ne číst seznam
 *
 * Servisní klíč sem nikdy nepatří: všechno v NEXT_PUBLIC_ skončí ve
 * staženém JavaScriptu. Operace, které potřebují vyšší oprávnění
 * (vytvoření objednávky, párování plateb), řeší Supabase edge funkce.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Chybí NEXT_PUBLIC_SUPABASE_URL nebo NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY. " +
      "Zkopíruj .env.local.example do .env.local a doplň hodnoty."
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    // E-shop nemá přihlašování, takže není co držet v session.
    persistSession: false,
  },
});
