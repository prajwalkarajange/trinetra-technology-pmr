import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { F as Footer } from "./Footer-D2fNp8Eo.mjs";
import { I as Input } from "./input-BQDl7hyY.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import { R as Route$c } from "./router-ByG2qC2K.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/sonner.mjs";
import { S as ShieldCheck, C as CircleCheck, a as CircleX } from "../_libs/lucide-react.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function Verify() {
  const {
    code: initial
  } = Route$c.useSearch();
  const [code, setCode] = reactExports.useState(initial || "");
  const [result, setResult] = reactExports.useState(null);
  const [searched, setSearched] = reactExports.useState(false);
  async function lookup(c) {
    if (!c) return;
    const {
      data
    } = await supabase.rpc("verify_certificate", {
      _code: c
    });
    const row = Array.isArray(data) ? data[0] : null;
    setResult(row ? {
      cert_code: row.cert_code,
      recipient_name: row.recipient_name,
      issued_at: row.issued_at,
      internships: {
        title: row.internship_title
      }
    } : null);
    setSearched(true);
  }
  reactExports.useEffect(() => {
    if (initial) lookup(initial);
  }, [initial]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-16 w-16 mx-auto text-primary mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-extrabold", children: [
          "Certificate ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Verification" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Enter a Trinetra certificate ID to verify its authenticity." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: code, onChange: (e) => setCode(e.target.value), placeholder: "TRN-XXXXXXXXXX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => lookup(code), className: "bg-gradient-to-r from-primary to-accent", children: "Verify" })
      ] }),
      searched && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-8 mt-6 text-center", children: result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-14 w-14 mx-auto text-emerald-400 mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Verified Certificate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2 text-left max-w-sm mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "Recipient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: result.recipient_name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "Program" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: result.internships?.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "Issued" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: new Date(result.issued_at).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric"
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "Certificate ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono", children: result.cert_code })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-14 w-14 mx-auto text-rose-400 mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "No certificate matches that ID." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Verify as component
};
