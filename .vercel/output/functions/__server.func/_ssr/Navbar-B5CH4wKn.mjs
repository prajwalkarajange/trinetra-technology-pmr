import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as LogoMark, B as Button } from "./button-B4zLVkYW.mjs";
import { u as useAuth, d as useTheme } from "./router-ByG2qC2K.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { z as Sun, F as Moon, B as Bell, d as Sparkles, X } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: toggle, "aria-label": "Toggle theme", className: "h-9 w-9", children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) });
}
function NotificationBell() {
  const { user } = useAuth();
  const [items, setItems] = reactExports.useState([]);
  const [readIds, setReadIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [open, setOpen] = reactExports.useState(false);
  const [popup, setPopup] = reactExports.useState(null);
  const sessionKey = user ? `notif-popup-shown-${user.id}` : "";
  const dropRef = reactExports.useRef(null);
  const refresh = async () => {
    if (!user) return;
    const [{ data: notifs }, { data: reads }] = await Promise.all([
      supabase.from("notifications").select("*").order("created_at", { ascending: false }).limit(50),
      supabase.from("notification_reads").select("notification_id").eq("user_id", user.id)
    ]);
    setItems(notifs || []);
    setReadIds(new Set((reads || []).map((r) => r.notification_id)));
  };
  reactExports.useEffect(() => {
    if (!user) {
      setItems([]);
      setReadIds(/* @__PURE__ */ new Set());
      return;
    }
    refresh();
    const ch = supabase.channel(`notif-${user.id}`).on("postgres_changes", { event: "INSERT", schema: "public", table: "notifications" }, (payload) => {
      const n = payload.new;
      if (n.target_user_id === null || n.target_user_id === user.id) {
        setItems((prev) => [n, ...prev]);
        setPopup(n);
      }
    }).subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [user?.id]);
  reactExports.useEffect(() => {
    if (!user || items.length === 0) return;
    if (sessionStorage.getItem(sessionKey)) return;
    const unread = items.find((n) => !readIds.has(n.id));
    if (unread) {
      setPopup(unread);
      sessionStorage.setItem(sessionKey, "1");
    }
  }, [user?.id, items.length, readIds.size]);
  reactExports.useEffect(() => {
    if (!open) return;
    const h = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const markRead = async (id) => {
    if (!user || readIds.has(id)) return;
    await supabase.from("notification_reads").insert({ notification_id: id, user_id: user.id });
    setReadIds((s) => new Set(s).add(id));
  };
  const markAllRead = async () => {
    if (!user) return;
    const unread = items.filter((n) => !readIds.has(n.id));
    if (!unread.length) return;
    await supabase.from("notification_reads").insert(
      unread.map((n) => ({ notification_id: n.id, user_id: user.id }))
    );
    setReadIds(new Set(items.map((n) => n.id)));
  };
  if (!user) return null;
  const unreadCount = items.filter((n) => !readIds.has(n.id)).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: dropRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setOpen((o) => !o),
          className: "relative h-9 w-9 rounded-md inline-flex items-center justify-center hover:bg-accent transition-colors cursor-pointer",
          "aria-label": "Notifications",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
            unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-ping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center", children: unreadCount })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -8, scale: 0.96 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -8, scale: 0.96 },
          transition: { duration: 0.18 },
          className: "absolute right-0 mt-2 w-80 rounded-xl border border-border bg-popover shadow-xl z-50 overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
                " Notifications"
              ] }),
              unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: markAllRead, className: "text-[11px] text-primary hover:underline", children: "Mark all read" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-80 overflow-y-auto", children: [
              items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-10 text-center text-xs text-muted-foreground", children: "You're all caught up." }),
              items.slice(0, 8).map((n) => {
                const isUnread = !readIds.has(n.id);
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => markRead(n.id),
                    className: `w-full text-left px-4 py-3 border-b border-border/50 hover:bg-accent/50 transition-colors cursor-pointer ${isUnread ? "bg-primary/5" : ""}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      isUnread && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: n.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground line-clamp-2", children: n.body }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: new Date(n.created_at).toLocaleString() })
                      ] })
                    ] })
                  },
                  n.id
                );
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/notifications", onClick: () => setOpen(false), className: "block text-center text-xs font-medium text-primary py-3 border-t border-border hover:bg-accent/50", children: "View all notifications →" })
          ]
        }
      ) })
    ] }),
    typeof document !== "undefined" && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: popup && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { y: 80, scale: 0.85, opacity: 0, rotate: -2 },
              animate: { y: 0, scale: 1, opacity: 1, rotate: 0 },
              exit: { y: 40, scale: 0.9, opacity: 0 },
              transition: { type: "spring", stiffness: 260, damping: 22 },
              className: "pointer-events-auto relative w-full max-w-md rounded-2xl border border-border bg-card shadow-2xl overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { x: "-100%" },
                    animate: { x: "100%" },
                    transition: { duration: 2.4, repeat: Infinity, ease: "linear" },
                    className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { rotate: -20, scale: 0 },
                        animate: { rotate: 0, scale: 1 },
                        transition: { delay: 0.15, type: "spring", stiffness: 300 },
                        className: "h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shrink-0",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-primary font-semibold mb-1", children: "New Notification" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-lg leading-tight", children: popup.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 whitespace-pre-wrap", children: popup.body })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPopup(null), className: "text-muted-foreground hover:text-foreground cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "flex-1 bg-gradient-to-r from-primary to-accent", onClick: () => {
                      markRead(popup.id);
                      setPopup(null);
                    }, children: "Got it" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/notifications", className: "flex-1", onClick: () => {
                      markRead(popup.id);
                      setPopup(null);
                    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "w-full", children: "View all" }) })
                  ] })
                ] })
              ]
            }
          )
        }
      ) }),
      document.body
    )
  ] });
}
function Navbar() {
  const { user, signOut } = useAuth();
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!user) {
      setIsAdmin(false);
      return;
    }
    supabase.rpc("has_role", { _user_id: user.id, _role: "admin" }).then(({ data }) => setIsAdmin(!!data));
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMark, { className: "h-8 w-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-heading font-extrabold tracking-wider text-sm", children: "TRINETRA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground -mt-0.5", children: "TECHNOLOGIES PVT. LTD." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#programs", className: "hover:text-foreground", children: "Programs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#about", className: "hover:text-foreground", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/verify", className: "hover:text-foreground", children: "Verify" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/feedback", className: "hover:text-foreground", children: "Feedback" }),
      isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "text-primary font-medium hover:underline", children: "Admin" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
      user && /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationBell, {}),
      user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", children: "Dashboard" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => signOut(), children: "Logout" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", children: "Login" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "bg-gradient-to-r from-primary to-accent", children: "Get Started" }) })
      ] })
    ] })
  ] }) });
}
export {
  Navbar as N
};
