import type { DemoAccount } from "@/lib/types";

export function DemoCredentials({
  accounts,
  userLabel = "Usuario",
  note,
}: {
  accounts: DemoAccount[];
  userLabel?: string;
  note?: string;
}) {
  return (
    <div className="mt-6">
      <h2 className="mb-2 font-mono text-sm text-accent">Cuentas de prueba</h2>
      <div className="overflow-hidden rounded-lg border border-surface-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-surface-border bg-surface text-xs uppercase tracking-wide text-muted">
              <th className="px-3 py-2 font-medium">Rol</th>
              <th className="px-3 py-2 font-medium">{userLabel}</th>
              <th className="px-3 py-2 font-medium">Password</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((a) => (
              <tr key={a.user} className="border-b border-surface-border last:border-0">
                <td className="px-3 py-2 text-foreground/90">{a.role}</td>
                <td className="px-3 py-2 font-mono text-xs text-foreground/90">{a.user}</td>
                <td className="px-3 py-2 font-mono text-xs text-foreground/90">{a.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-2 text-xs text-muted">{note}</p>}
    </div>
  );
}
