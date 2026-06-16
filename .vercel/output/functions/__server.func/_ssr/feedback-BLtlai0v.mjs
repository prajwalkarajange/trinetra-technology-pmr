import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-ByG2qC2K.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { F as Footer } from "./Footer-D2fNp8Eo.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import { I as Input } from "./input-BQDl7hyY.mjs";
import { T as Textarea } from "./textarea-Bd3S2Wrd.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { M as MessageSquare, e as Star } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function FeedbackPage() {
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [rating, setRating] = reactExports.useState(5);
  const [category, setCategory] = reactExports.useState("general");
  const [message, setMessage] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && !user) nav({
      to: "/login"
    });
    if (user) {
      setEmail(user.email || "");
      supabase.from("profiles").select("full_name").eq("id", user.id).single().then(({
        data
      }) => setName(data?.full_name || ""));
    }
  }, [user, loading, nav]);
  const submit = async (e) => {
    e.preventDefault();
    if (!user) return;
    if (message.trim().length < 5) return toast.error("Please write a longer message");
    setSubmitting(true);
    const {
      error
    } = await supabase.from("feedback").insert({
      user_id: user.id,
      full_name: name,
      email,
      category,
      rating,
      message
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    toast.success("Thank you! Your feedback has been recorded.");
    setMessage("");
    setRating(5);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-3xl mx-auto w-full px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-4xl font-bold", children: "Share Your Feedback" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-2", children: [
          "Help us improve TRINETRA Technologies. Need a custom project or have a question? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-primary underline", children: "Contact us" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: category, onChange: (e) => setCategory(e.target.value), className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "internship", children: "Internship Experience" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "platform", children: "Platform / Website" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "certificate", children: "Certificate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "suggestion", children: "Suggestion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bug", children: "Report a Bug" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setRating(n), className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-7 w-7 ${n <= rating ? "fill-primary text-primary" : "text-muted-foreground"}` }) }, n)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Your Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 6, value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Tell us what you think...", required: true, maxLength: 2e3 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: submitting, className: "w-full bg-gradient-to-r from-primary to-accent", children: submitting ? "Submitting..." : "Submit Feedback" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  FeedbackPage as component
};
