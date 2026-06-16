import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-ByG2qC2K.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { F as Footer } from "./Footer-D2fNp8Eo.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import { B as Badge } from "./badge-1bteP2lW.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { U as UserCog, G as GraduationCap, f as Award, T as Trophy, d as Sparkles, g as ArrowRight, h as Lightbulb } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const QUICK_SKILLS = ["Java", "Python", "JavaScript", "TypeScript", "C++", "React", "Node.js", "MongoDB", "SQL", "AWS", "Docker", "Git", "TensorFlow", "Figma", "Flutter"];
function Dashboard() {
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [internships, setInternships] = reactExports.useState([]);
  const [certs, setCerts] = reactExports.useState([]);
  const [profile, setProfile] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!loading && !user) nav({
      to: "/login"
    });
  }, [user, loading, nav]);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      const [{
        data: ints
      }, {
        data: cs
      }, {
        data: pr
      }] = await Promise.all([supabase.from("internships").select("*").order("created_at"), supabase.from("certificates").select("internship_id, cert_code").eq("user_id", user.id), supabase.from("profiles").select("full_name, college, skills").eq("id", user.id).single()]);
      setInternships(ints || []);
      setCerts(cs || []);
      setProfile(pr || null);
    })();
  }, [user]);
  if (loading || !user) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center text-muted-foreground", children: "Loading..." });
  const certSet = new Set(certs.map((c) => c.internship_id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "glass rounded-3xl p-8 mb-8 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_right,oklch(0.55_0.25_260/0.3),transparent_70%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col md:flex-row md:items-start md:justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary mb-1", children: "Welcome back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold", children: profile?.full_name || "Future Developer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: profile?.college }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Certificates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold gradient-text", children: certs.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Programs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold gradient-text", children: internships.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold mt-1 gold-text", children: "PREMIUM" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/profile", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-4 w-4 mr-2" }),
            " Edit Profile"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4 mb-10", children: [{
        icon: GraduationCap,
        t: "Internships",
        d: "Browse all programs"
      }, {
        icon: Award,
        t: "My Certificates",
        d: `${certs.length} earned`
      }, {
        icon: Trophy,
        t: "Leaderboard",
        d: "Coming soon"
      }].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "h-6 w-6 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: a.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.d })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary", children: "Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-extrabold", children: [
          "Choose your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "internship" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: internships.map((i) => {
        const earned = certSet.has(i.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 15
        }, animate: {
          opacity: 1,
          y: 0
        }, onClick: () => nav({
          to: "/internship/$slug",
          params: {
            slug: i.slug
          }
        }), className: "glass rounded-2xl p-6 hover:border-primary/50 hover:-translate-y-1 transition group cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: i.difficulty })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg leading-tight", children: i.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1.5 line-clamp-2", children: i.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-3", children: [
            "⏱ ",
            i.duration
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-3", children: i.skills.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-secondary", children: s }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", onClick: (e) => e.stopPropagation(), children: earned ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/certificate/$slug", params: {
            slug: i.slug
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 mr-1" }),
            " View Certificate"
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/test/$slug", params: {
            slug: i.slug
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full bg-gradient-to-r from-primary to-accent cursor-pointer", children: [
            "Start Test ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 ml-1" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[11px] text-primary opacity-0 group-hover:opacity-100 transition text-center", children: "Click card for full program details →" })
        ] }, i.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsPrompt, { userId: user.id, initial: profile?.skills || [] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function SkillsPrompt({
  userId,
  initial
}) {
  const [picked, setPicked] = reactExports.useState(initial);
  const [pool, setPool] = reactExports.useState([]);
  const [saving, setSaving] = reactExports.useState(false);
  const [dismissed, setDismissed] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setPicked(initial);
  }, [initial]);
  reactExports.useEffect(() => {
    const remaining = QUICK_SKILLS.filter((s) => !initial.includes(s));
    setPool([...remaining].sort(() => Math.random() - 0.5).slice(0, 8));
  }, [initial]);
  if (dismissed) return null;
  const toggle = (s) => setPicked((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);
  async function save() {
    setSaving(true);
    const {
      error
    } = await supabase.from("profiles").update({
      skills: picked
    }).eq("id", userId);
    setSaving(false);
    if (error) return;
    setDismissed(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0,
    y: 10
  }, animate: {
    opacity: 1,
    y: 0
  }, className: "glass rounded-3xl p-6 md:p-8 mt-10 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5 text-white" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-1", children: "Personalize" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-extrabold mb-1", children: "Which of these skills do you know?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Quick check — tap the ones you're comfortable with. We'll match you to the right programs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: pool.map((s) => {
        const on = picked.includes(s);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle(s), className: `px-3 py-1.5 rounded-full text-xs font-medium border transition ${on ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50"}`, children: [
          on ? "✓ " : "+ ",
          s
        ] }, s);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, disabled: saving, className: "bg-gradient-to-r from-primary to-accent", children: saving ? "Saving..." : "Save Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "See all skills" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setDismissed(true), children: "Not now" })
      ] })
    ] })
  ] }) });
}
export {
  Dashboard as component
};
