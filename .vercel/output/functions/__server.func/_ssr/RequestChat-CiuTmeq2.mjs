import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import { I as Input } from "./input-BQDl7hyY.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as ShieldCheck, r as User, q as Send } from "../_libs/lucide-react.mjs";
function RequestChat({
  requestId,
  currentUserId,
  asAdmin
}) {
  const [messages, setMessages] = reactExports.useState([]);
  const [text, setText] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.from("request_messages").select("*").eq("request_id", requestId).order("created_at", { ascending: true });
      if (!cancelled) setMessages(data || []);
    })();
    const ch = supabase.channel(`req-${requestId}`).on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "request_messages", filter: `request_id=eq.${requestId}` },
      (payload) => setMessages((m) => m.some((x) => x.id === payload.new.id) ? m : [...m, payload.new])
    ).subscribe();
    return () => {
      cancelled = true;
      supabase.removeChannel(ch);
    };
  }, [requestId]);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);
  const send = async () => {
    const body = text.trim();
    if (!body) return;
    setSending(true);
    const { error } = await supabase.from("request_messages").insert({
      request_id: requestId,
      sender_id: currentUserId,
      sender_role: asAdmin ? "admin" : "student",
      body
    });
    setSending(false);
    if (error) return toast.error(error.message);
    setText("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "max-h-80 overflow-y-auto p-4 space-y-3", children: [
      messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center py-6", children: [
        "No messages yet. ",
        asAdmin ? "Send the first reply to the student." : "Our team will reply here — you'll see it live."
      ] }),
      messages.map((m) => {
        const mine = m.sender_id === currentUserId;
        const isAdmin = m.sender_role === "admin";
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${mine ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[75%] rounded-2xl px-4 py-2 text-sm ${mine ? "bg-primary text-primary-foreground" : "bg-muted"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] opacity-70 mb-0.5 uppercase tracking-wider", children: [
            isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3" }),
            isAdmin ? "TRINETRA Team" : "Student",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "· ",
              new Date(m.created_at).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: m.body })
        ] }) }, m.id);
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-3 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: text,
          onChange: (e) => setText(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          },
          placeholder: asAdmin ? "Reply to student..." : "Type your message...",
          disabled: sending
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: send, disabled: sending || !text.trim(), size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) })
    ] })
  ] });
}
export {
  RequestChat as R
};
