import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { L as LogoMark, B as Button } from "./button-B4zLVkYW.mjs";
import { I as Input } from "./input-BQDl7hyY.mjs";
import { L as Label } from "./label-CohZ4DiV.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
function scorePassword(pw) {
  let score = 0;
  if (!pw) return { score: 0, label: "Empty" };
  const length = pw.length;
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasNumber = /[0-9]/.test(pw);
  const hasSymbol = /[^A-Za-z0-9]/.test(pw);
  if (length >= 8) score++;
  if (length >= 12) score++;
  if (hasLower && hasUpper) score++;
  if (hasNumber && hasSymbol) score++;
  if (score > 4) score = 4;
  const labels = ["Very weak", "Weak", "Fair", "Good", "Strong"];
  return { score, label: labels[score] };
}
function PasswordStrength({ password }) {
  if (!password || password.length === 0) return null;
  const { score, label } = scorePassword(password);
  const percent = Math.round(score / 4 * 100);
  const colors = [
    "bg-rose-500",
    "bg-rose-500",
    "bg-amber-400",
    "bg-lime-400",
    "bg-emerald-500"
  ];
  const color = colors[score] ?? "bg-rose-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-2 rounded-full bg-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-full transition-[width,background-color] duration-300 ${color}`,
        style: { width: `${percent}%` },
        "aria-hidden": true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${color}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px]", children: [
        percent,
        "%"
      ] })
    ] })
  ] });
}
function Signup() {
  const nav = useNavigate();
  const [f, setF] = reactExports.useState({
    full_name: "",
    email: "",
    password: "",
    mobile: "",
    college: "",
    degree: "",
    branch: "",
    current_year: ""
  });
  const [loading, setLoading] = reactExports.useState(false);
  const submittingRef = reactExports.useRef(false);
  const upd = (k) => (e) => setF((p) => ({
    ...p,
    [k]: e.target.value
  }));
  async function submit(e) {
    e.preventDefault();
    if (submittingRef.current) return;
    const email = f.email.trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }
    submittingRef.current = true;
    setLoading(true);
    try {
      const {
        data,
        error
      } = await supabase.auth.signUp({
        email,
        password: f.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            full_name: f.full_name,
            mobile: f.mobile,
            college: f.college,
            degree: f.degree,
            branch: f.branch,
            current_year: f.current_year
          }
        }
      });
      if (error) {
        const message = error.message.toLowerCase();
        if (message.includes("rate limit")) {
          toast.error("Too many sign-up attempts. Wait a minute and try again.");
          return;
        }
        toast.error(error.message);
        return;
      }
      if (data?.session) {
        toast.success("Account created! Welcome to Trinetra.");
        nav({
          to: "/dashboard"
        });
      } else {
        toast.success("Account created. Check your email to confirm your address before signing in.");
      }
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid-bg flex items-center justify-center px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl glass rounded-3xl p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer mb-5 transition", children: "← Back to Home" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMark, { className: "h-9 w-9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-heading font-extrabold tracking-wider text-sm", children: "TRINETRA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground -mt-0.5", children: "TECHNOLOGIES PVT. LTD." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold mb-1", children: "Create your account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Begin your journey to becoming a certified developer." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, value: f.full_name, onChange: upd("full_name") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true, value: f.email, onChange: upd("email") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Mobile Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, value: f.mobile, onChange: upd("mobile") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "College Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, value: f.college, onChange: upd("college") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Degree" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "B.Tech / B.E / BCA", value: f.degree, onChange: upd("degree") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "CSE / IT / ENTC", value: f.branch, onChange: upd("branch") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Current Year" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "1st / 2nd / 3rd / 4th", value: f.current_year, onChange: upd("current_year") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", required: true, minLength: 6, value: f.password, onChange: upd("password") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordStrength, { password: f.password })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "md:col-span-2 bg-linear-to-r from-primary to-accent", children: loading ? "Creating..." : "Create Account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-center mt-6", children: [
      "Already a member? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary font-semibold", children: "Sign in" })
    ] })
  ] }) });
}
export {
  Signup as component
};
