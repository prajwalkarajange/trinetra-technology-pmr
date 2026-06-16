import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-ByG2qC2K.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { F as Footer } from "./Footer-D2fNp8Eo.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { B as Bell, c as CheckCheck, L as LoaderCircle, d as Sparkles } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
function NotificationsPage() {
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [items, setItems] = reactExports.useState([]);
  const [readIds, setReadIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [busy, setBusy] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!loading && !user) nav({
      to: "/login"
    });
  }, [user, loading, nav]);
  const load = async () => {
    if (!user) return;
    setBusy(true);
    const [{
      data: notifs
    }, {
      data: reads
    }] = await Promise.all([supabase.from("notifications").select("*").order("created_at", {
      ascending: false
    }), supabase.from("notification_reads").select("notification_id").eq("user_id", user.id)]);
    setItems(notifs || []);
    setReadIds(new Set((reads || []).map((r) => r.notification_id)));
    setBusy(false);
  };
  reactExports.useEffect(() => {
    if (!user) return;
    load();
    const ch = supabase.channel(`np-${user.id}`).on("postgres_changes", {
      event: "INSERT",
      schema: "public",
      table: "notifications"
    }, () => load()).subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [user?.id]);
  const markAll = async () => {
    if (!user) return;
    const unread = items.filter((n) => !readIds.has(n.id));
    if (!unread.length) return;
    await supabase.from("notification_reads").insert(unread.map((n) => ({
      notification_id: n.id,
      user_id: user.id
    })));
    setReadIds(new Set(items.map((n) => n.id)));
  };
  const unreadCount = items.filter((n) => !readIds.has(n.id)).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-3xl mx-auto w-full px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3.5 w-3.5" }),
            " Inbox"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-3xl font-bold mt-1", children: "Notifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: unreadCount > 0 ? `${unreadCount} unread` : "You're all caught up" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", children: "Back" }) }),
          unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: markAll, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "h-4 w-4 mr-1" }),
            " Mark all read"
          ] })
        ] })
      ] }),
      busy ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-dashed border-border p-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-10 w-10 mx-auto text-muted-foreground mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No notifications yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Updates from the TRINETRA team will appear here." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((n, i) => {
        const isUnread = !readIds.has(n.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: i * 0.03
        }, className: `rounded-xl border p-5 transition-colors ${isUnread ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${isUnread ? "bg-gradient-to-br from-primary to-accent text-primary-foreground" : "bg-muted text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: n.title }),
              isUnread && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground font-semibold", children: "New" }),
              n.target_user_id === null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Broadcast" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 whitespace-pre-wrap text-foreground/90", children: n.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-2", children: new Date(n.created_at).toLocaleString() })
          ] })
        ] }) }, n.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  NotificationsPage as component
};
