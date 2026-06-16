type Props = { password: string };

function scorePassword(pw: string) {
  let score = 0;
  if (!pw) return { score: 0, label: 'Empty' };
  const length = pw.length;
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasNumber = /[0-9]/.test(pw);
  const hasSymbol = /[^A-Za-z0-9]/.test(pw);

  if (length >= 8) score++;
  if (length >= 12) score++;
  if (hasLower && hasUpper) score++;
  if (hasNumber && hasSymbol) score++;

  // normalize to 0-4
  if (score > 4) score = 4;

  const labels = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'];
  return { score, label: labels[score] };
}

export default function PasswordStrength({ password }: Props) {
  if (!password || password.length === 0) return null;

  const { score, label } = scorePassword(password);

  const percent = Math.round((score / 4) * 100);
  const colors = [
    'bg-rose-500',
    'bg-rose-500',
    'bg-amber-400',
    'bg-lime-400',
    'bg-emerald-500',
  ];

  const color = colors[score] ?? 'bg-rose-500';

  return (
    <div className="mt-2">
      <div className="w-full h-2 rounded-full bg-border overflow-hidden">
        <div
          className={`h-full transition-[width,background-color] duration-300 ${color}`}
          style={{ width: `${percent}%` }}
          aria-hidden
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${color}`} />
          <div className="font-medium">{label}</div>
        </div>
        <div className="text-[11px]">{percent}%</div>
      </div>
    </div>
  );
}
