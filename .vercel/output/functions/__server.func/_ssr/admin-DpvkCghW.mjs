import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-ByG2qC2K.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { F as Footer } from "./Footer-D2fNp8Eo.mjs";
import { B as Button, c as cn } from "./button-B4zLVkYW.mjs";
import { B as Badge } from "./badge-1bteP2lW.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { T as Textarea } from "./textarea-Bd3S2Wrd.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as RequestChat } from "./RequestChat-CiuTmeq2.mjs";
import { I as Input } from "./input-BQDl7hyY.mjs";
import "../_libs/react-dom.mjs";
import { L as LoaderCircle, S as ShieldCheck, p as Users, M as MessageSquare, m as Inbox, G as GraduationCap, f as Award, B as Bell, q as Send } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
function AdminPanel() {
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [isAdmin, setIsAdmin] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState([]);
  const [requests, setRequests] = reactExports.useState([]);
  const [profiles, setProfiles] = reactExports.useState([]);
  const [attempts, setAttempts] = reactExports.useState([]);
  const [certs, setCerts] = reactExports.useState([]);
  const [notifs, setNotifs] = reactExports.useState([]);
  const [nTitle, setNTitle] = reactExports.useState("");
  const [nBody, setNBody] = reactExports.useState("");
  const [nTarget, setNTarget] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && !user) nav({
      to: "/login"
    });
  }, [user, loading, nav]);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      const {
        data
      } = await supabase.rpc("has_role", {
        _user_id: user.id,
        _role: "admin"
      });
      setIsAdmin(!!data);
    })();
  }, [user]);
  reactExports.useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const [fb, cr, pr, at, ce, nt] = await Promise.all([supabase.from("feedback").select("*").order("created_at", {
        ascending: false
      }), supabase.from("contact_requests").select("*").order("created_at", {
        ascending: false
      }), supabase.from("profiles").select("*").order("created_at", {
        ascending: false
      }), supabase.from("test_attempts").select("*").order("created_at", {
        ascending: false
      }), supabase.from("certificates").select("*").order("issued_at", {
        ascending: false
      }), supabase.from("notifications").select("*").order("created_at", {
        ascending: false
      })]);
      setFeedback(fb.data || []);
      setRequests(cr.data || []);
      setProfiles(pr.data || []);
      setAttempts(at.data || []);
      setCerts(ce.data || []);
      setNotifs(nt.data || []);
    })();
  }, [isAdmin]);
  if (loading || isAdmin === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  if (!isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center rounded-2xl border border-border bg-card p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-12 w-12 mx-auto text-primary mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-2xl font-bold mb-2", children: "Admin Access Required" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
          "This area is restricted to TRINETRA administrators. Sign in with an admin account or ask the founder to grant you the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1.5 py-0.5 rounded", children: "admin" }),
          " role."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => nav({
          to: "/dashboard"
        }), variant: "outline", children: "Back to Dashboard" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  const updateRequest = async (id, patch) => {
    const {
      error
    } = await supabase.from("contact_requests").update(patch).eq("id", id);
    if (error) return toast.error(error.message);
    setRequests((r) => r.map((x) => x.id === id ? {
      ...x,
      ...patch
    } : x));
    toast.success("Updated");
  };
  const deleteFeedback = async (id) => {
    const {
      error
    } = await supabase.from("feedback").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setFeedback((r) => r.filter((x) => x.id !== id));
  };
  const sendNotification = async () => {
    if (!nTitle.trim()) return toast.error("Title is required");
    setSending(true);
    const payload = {
      title: nTitle.trim(),
      body: nBody.trim(),
      target_user_id: nTarget || null,
      created_by: user.id
    };
    const {
      data,
      error
    } = await supabase.from("notifications").insert(payload).select().single();
    setSending(false);
    if (error) return toast.error(error.message);
    setNotifs((n) => [data, ...n]);
    setNTitle("");
    setNBody("");
    setNTarget("");
    toast.success(payload.target_user_id ? "Sent to student" : "Broadcast sent to everyone");
  };
  const deleteNotification = async (id) => {
    const {
      error
    } = await supabase.from("notifications").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setNotifs((n) => n.filter((x) => x.id !== id));
  };
  const stats = [{
    label: "Students",
    value: profiles.length,
    icon: Users,
    color: "text-blue-500"
  }, {
    label: "Feedback",
    value: feedback.length,
    icon: MessageSquare,
    color: "text-emerald-500"
  }, {
    label: "Requests",
    value: requests.length,
    icon: Inbox,
    color: "text-amber-500"
  }, {
    label: "Test Attempts",
    value: attempts.length,
    icon: GraduationCap,
    color: "text-violet-500"
  }, {
    label: "Certificates",
    value: certs.length,
    icon: Award,
    color: "text-rose-500"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-7xl mx-auto w-full px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
          " Admin Console"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-3xl font-bold mt-1", children: "TRINETRA Admin Panel" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-8", children: stats.map((s) => {
        const Icon = s.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 mb-2 ${s.color}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label })
        ] }, s.label);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "requests", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "requests", children: [
            "Project Requests (",
            requests.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "notifications", children: [
            "Notifications (",
            notifs.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "feedback", children: [
            "Feedback (",
            feedback.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "students", children: [
            "Students (",
            profiles.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "attempts", children: "Test Attempts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "certs", children: "Certificates" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "requests", className: "mt-6 space-y-4", children: [
          requests.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No requests yet." }),
          requests.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: r.request_type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: r.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(r.created_at).toLocaleString() })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mt-2", children: r.subject }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  r.full_name,
                  " · ",
                  r.email,
                  " · ",
                  r.phone || "—",
                  " · prefers ",
                  r.preferred_contact
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: r.status, onChange: (e) => updateRequest(r.id, {
                status: e.target.value,
                updated_at: (/* @__PURE__ */ new Date()).toISOString()
              }), className: "h-8 rounded-md border border-input bg-transparent px-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "in_progress", children: "In Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "resolved", children: "Resolved" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "closed", children: "Closed" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm whitespace-pre-wrap mt-2", children: r.message }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { className: "mt-3", placeholder: "Internal note / pinned message to student...", defaultValue: r.admin_notes, onBlur: (e) => e.target.value !== r.admin_notes && updateRequest(r.id, {
              admin_notes: e.target.value
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: [
                "Live Chat with ",
                r.full_name || "Student"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(RequestChat, { requestId: r.id, currentUserId: user.id, asAdmin: true })
            ] })
          ] }, r.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "notifications", className: "mt-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-xl font-bold", children: "Send Notification" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Recipient" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: nTarget, onChange: (e) => setNTarget(e.target.value), className: "mt-1 w-full h-10 rounded-md border border-input bg-background text-foreground px-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", className: "bg-background text-foreground", children: "📢 Everyone (broadcast)" }),
                  profiles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, className: "bg-background text-foreground", children: [
                    p.full_name || p.email,
                    " — ",
                    p.email
                  ] }, p.id))
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: nTitle, onChange: (e) => setNTitle(e.target.value), placeholder: "e.g. New Python test available!", className: "mt-1" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: nBody, onChange: (e) => setNBody(e.target.value), placeholder: "Write your message…", rows: 4, className: "mt-1" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: sendNotification, disabled: sending, className: "bg-gradient-to-r from-primary to-accent", children: sending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 mr-1" }),
                " Send Notification"
              ] }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3", children: "Sent Notifications" }),
            notifs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Nothing sent yet." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: notifs.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 rounded-lg border border-border p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: n.target_user_id ? "outline" : "default", children: n.target_user_id ? "Direct" : "Broadcast" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(n.created_at).toLocaleString() })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-1", children: n.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap", children: n.body })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => deleteNotification(n.id), children: "Delete" })
            ] }, n.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "feedback", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Rating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, {})
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: feedback.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: new Date(f.created_at).toLocaleDateString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: f.full_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: f.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: f.category }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "★".repeat(f.rating) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "max-w-md text-sm", children: f.message }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => deleteFeedback(f.id), children: "Delete" }) })
          ] }, f.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "students", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "College" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Branch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Joined" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: profiles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: p.full_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: p.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: p.college }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: p.branch }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: p.current_year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: new Date(p.created_at).toLocaleDateString() })
          ] }, p.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "attempts", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: attempts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: new Date(a.created_at).toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-mono", children: [
              a.user_id.slice(0, 8),
              "…"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
              a.score,
              "/",
              a.total
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: a.passed ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: "Passed" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Failed" }) })
          ] }, a.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "certs", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Recipient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Issued" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: certs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: c.cert_code }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: c.recipient_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: new Date(c.issued_at).toLocaleString() })
          ] }, c.id)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AdminPanel as component
};
