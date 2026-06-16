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
import { B as Badge } from "./badge-1bteP2lW.mjs";
import { R as RequestChat } from "./RequestChat-CiuTmeq2.mjs";
import "../_libs/react-dom.mjs";
import { i as Briefcase, I as Info, j as Mail, k as MessageCircle, l as Phone, m as Inbox, n as ChevronUp, o as ChevronDown } from "../_libs/lucide-react.mjs";
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
const TYPES = [{
  value: "project",
  label: "Custom Project Request",
  icon: Briefcase
}, {
  value: "information",
  label: "More Information",
  icon: Info
}, {
  value: "email",
  label: "Email Support",
  icon: Mail
}, {
  value: "chat",
  label: "Chat / Mentorship",
  icon: MessageCircle
}, {
  value: "other",
  label: "Other",
  icon: Phone
}];
function ContactPage() {
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [type, setType] = reactExports.useState("project");
  const [subject, setSubject] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [pref, setPref] = reactExports.useState("email");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [myRequests, setMyRequests] = reactExports.useState([]);
  const [openId, setOpenId] = reactExports.useState(null);
  const loadMyRequests = async (uid) => {
    const {
      data
    } = await supabase.from("contact_requests").select("*").eq("user_id", uid).order("created_at", {
      ascending: false
    });
    setMyRequests(data || []);
  };
  reactExports.useEffect(() => {
    if (!loading && !user) nav({
      to: "/login"
    });
    if (user) {
      setEmail(user.email || "");
      supabase.from("profiles").select("full_name, mobile").eq("id", user.id).single().then(({
        data
      }) => {
        setName(data?.full_name || "");
        setPhone(data?.mobile || "");
      });
      loadMyRequests(user.id);
      const ch = supabase.channel(`cr-user-${user.id}`).on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "contact_requests",
        filter: `user_id=eq.${user.id}`
      }, () => loadMyRequests(user.id)).subscribe();
      return () => {
        supabase.removeChannel(ch);
      };
    }
  }, [user, loading, nav]);
  const submit = async (e) => {
    e.preventDefault();
    if (!user) return;
    if (subject.trim().length < 3 || message.trim().length < 10) return toast.error("Please fill subject and a detailed message");
    setSubmitting(true);
    const {
      error
    } = await supabase.from("contact_requests").insert({
      user_id: user.id,
      full_name: name,
      email,
      phone,
      request_type: type,
      subject,
      message,
      preferred_contact: pref
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    toast.success("Request submitted! Our team will reach out soon.");
    setSubject("");
    setMessage("");
    loadMyRequests(user.id);
  };
  const statusColor = (s) => s === "resolved" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" : s === "in_progress" ? "bg-amber-500/10 text-amber-600 border-amber-500/30" : s === "closed" ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary border-primary/30";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-4xl mx-auto w-full px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-4xl font-bold", children: "Contact Our Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Need a custom project, mentorship, or have a question? Tell us how we can help." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-5 gap-3 mb-8", children: TYPES.map((t) => {
        const Icon = t.icon;
        const active = type === t.value;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setType(t.value), className: `cursor-pointer rounded-xl border p-4 text-center transition ${active ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 mx-auto mb-2 ${active ? "text-primary" : "text-muted-foreground"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium", children: t.label })
        ] }, t.value);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-5 rounded-2xl border border-border bg-card p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: phone, onChange: (e) => setPhone(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Preferred Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: pref, onChange: (e) => setPref(e.target.value), className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "email", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "phone", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "chat", children: "Chat" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: subject, onChange: (e) => setSubject(e.target.value), required: true, maxLength: 150, placeholder: "e.g. I need a MERN e-commerce project" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Describe your request" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 6, value: message, onChange: (e) => setMessage(e.target.value), required: true, maxLength: 3e3, placeholder: "Share details: requirements, deadline, tech stack, budget if any..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: submitting, className: "w-full bg-gradient-to-r from-primary to-accent", children: submitting ? "Submitting..." : "Send Request" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
          "You can also ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/feedback", className: "text-primary underline", children: "share feedback" }),
          " about your experience."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-2xl font-bold", children: "My Requests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "ml-2", children: myRequests.length })
        ] }),
        myRequests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground rounded-xl border border-dashed border-border p-8 text-center", children: "You haven't sent any requests yet. Submit one above and chat with our team here." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: myRequests.map((r) => {
          const open = openId === r.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenId(open ? null : r.id), className: "w-full flex items-start justify-between gap-3 p-5 text-left cursor-pointer hover:bg-muted/30 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: r.request_type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full border ${statusColor(r.status)}`, children: r.status.replace("_", " ") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(r.created_at).toLocaleString() })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold truncate", children: r.subject }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: r.message })
              ] }),
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4 mt-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 mt-1" })
            ] }),
            open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5 space-y-3", children: [
              r.admin_notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary/5 border border-primary/20 p-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-primary font-semibold mb-1", children: "Note from TRINETRA Team" }),
                r.admin_notes
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RequestChat, { requestId: r.id, currentUserId: user.id, asAdmin: false })
            ] })
          ] }, r.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};
