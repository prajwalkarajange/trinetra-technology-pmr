import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { F as Footer } from "./Footer-D2fNp8Eo.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import { B as Badge } from "./badge-1bteP2lW.mjs";
import { b as Route$1, u as useAuth } from "./router-ByG2qC2K.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowLeft, d as Sparkles, w as Clock, x as BookOpen, y as Target, p as Users, s as Layers, G as GraduationCap, C as CircleCheck, f as Award, g as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function InternshipDetail() {
  const {
    slug
  } = Route$1.useParams();
  const {
    user
  } = useAuth();
  const nav = useNavigate();
  const [data, setData] = reactExports.useState(null);
  const [earned, setEarned] = reactExports.useState(false);
  reactExports.useEffect(() => {
    (async () => {
      const {
        data: i
      } = await supabase.from("internships").select("*").eq("slug", slug).single();
      setData(i);
      if (i && user) {
        const {
          data: c
        } = await supabase.from("certificates").select("id").eq("user_id", user.id).eq("internship_id", i.id).maybeSingle();
        setEarned(!!c);
      }
    })();
  }, [slug, user]);
  if (!data) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center text-muted-foreground", children: "Loading..." });
  const modules = ["Foundations & core concepts", "Hands-on practical labs", "Industry tooling & best practices", "Real-world project simulation", "Final assessment & certification"];
  const outcomes = [`Master core ${data.title} principles applied in production environments`, "Build a portfolio-ready project to showcase to recruiters", "Earn a globally verifiable certificate with QR-based authentication", "Develop industry-aligned problem solving and engineering mindset"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => nav({
        to: "/dashboard"
      }), className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer mb-6 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to Dashboard"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "glass rounded-3xl p-10 mb-8 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.55_0.25_260/0.25),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-[1fr_auto] gap-6 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: data.difficulty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/15 text-primary border-primary/30", children: data.duration })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-2", children: "Internship Program" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-extrabold leading-tight", children: data.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl leading-relaxed", children: data.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-5", children: data.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1 rounded-full bg-secondary border border-border", children: s }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-12 w-12 text-white" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-10", children: [{
        icon: Clock,
        label: "Duration",
        value: data.duration
      }, {
        icon: BookOpen,
        label: "Modules",
        value: `${modules.length} stages`
      }, {
        icon: Target,
        label: "Assessment",
        value: "20 MCQs"
      }, {
        icon: Users,
        label: "Mode",
        value: "Self-paced"
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: s.value })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Curriculum Roadmap" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: modules.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: m })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Learning Outcomes" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: outcomes.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-emerald-400 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 mb-10 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-7 w-7 text-black" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: "Verified Industry Certificate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Issued by Trinetra Technologies Pvt. Ltd., signed by Founder & CEO Prajwal Karajange, with a unique verification ID and QR code accepted by recruiters and HR portals." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/verify", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Verify Sample" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: !user ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-primary to-accent h-12 px-8", children: [
        "Sign in to Start ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) }) : earned ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/certificate/$slug", params: {
        slug: data.slug
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-amber-500 to-yellow-600 text-black h-12 px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 mr-2" }),
        " View My Certificate"
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/test/$slug", params: {
        slug: data.slug
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-primary to-accent h-12 px-8", children: [
        "Begin Assessment ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  InternshipDetail as component
};
