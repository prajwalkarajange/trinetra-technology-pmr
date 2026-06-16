import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as Route, u as useAuth } from "./router-ByG2qC2K.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import { I as Input } from "./input-BQDl7hyY.mjs";
import { L as Label } from "./label-CohZ4DiV.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { j as jsPDF } from "../_libs/jspdf.mjs";
import { Q as QRCode } from "../_libs/qrcode.mjs";
import "../_libs/react-dom.mjs";
import { f as Award, D as Download } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "fs";
import "path";
import "../_libs/fflate.mjs";
import "../_libs/fast-png.mjs";
import "../_libs/iobuffer.mjs";
import "../_libs/pako.mjs";
import "../_libs/html2canvas.mjs";
import "../_libs/dompurify.mjs";
import "../_libs/canvg.mjs";
import "../_libs/core-js.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/raf.mjs";
import "../_libs/performance-now.mjs";
import "../_libs/rgbcolor.mjs";
import "../_libs/svg-pathdata.mjs";
import "../_libs/stackblur-canvas.mjs";
import "../_libs/dijkstrajs.mjs";
import "../_libs/pngjs.mjs";
import "zlib";
import "assert";
import "buffer";
const logoImg = "/assets/trinetra-logo-CuL2Ejwk.png";
const sigImg = "/assets/founder-signature-BR_onzLl.png";
function CertPage() {
  const {
    slug
  } = Route.useParams();
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [internship, setInternship] = reactExports.useState(null);
  const [cert, setCert] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("");
  const [hasAttempt, setHasAttempt] = reactExports.useState(false);
  const certRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!loading && !user) nav({
      to: "/login"
    });
  }, [user, loading, nav]);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      const {
        data: int
      } = await supabase.from("internships").select("id, title").eq("slug", slug).single();
      if (!int) return;
      setInternship(int);
      const {
        data: c
      } = await supabase.from("certificates").select("*").eq("user_id", user.id).eq("internship_id", int.id).maybeSingle();
      if (c) setCert(c);
      const {
        data: a
      } = await supabase.from("test_attempts").select("passed").eq("user_id", user.id).eq("internship_id", int.id).eq("passed", true).maybeSingle();
      setHasAttempt(!!a);
    })();
  }, [user, slug]);
  async function claim() {
    if (!user || !internship || !name.trim()) return;
    const {
      data,
      error
    } = await supabase.from("certificates").insert({
      user_id: user.id,
      internship_id: internship.id,
      recipient_name: name.trim()
    }).select().single();
    if (error) return toast.error(error.message);
    setCert(data);
    toast.success("Certificate issued!");
  }
  async function downloadPDF() {
    if (!cert || !internship) return;
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: "a4"
    });
    const W = pdf.internal.pageSize.getWidth();
    const H = pdf.internal.pageSize.getHeight();
    pdf.setFillColor(15, 18, 40);
    pdf.rect(0, 0, W, H, "F");
    pdf.setDrawColor(212, 175, 55);
    pdf.setLineWidth(3);
    pdf.rect(20, 20, W - 40, H - 40);
    pdf.setLineWidth(0.6);
    pdf.rect(28, 28, W - 56, H - 56);
    pdf.setFillColor(30, 60, 160);
    pdf.rect(40, 40, W - 80, 4, "F");
    async function toDataUrl(url) {
      const res = await fetch(url);
      const blob = await res.blob();
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("Failed to read image"));
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    }
    const logoData = await toDataUrl(logoImg);
    pdf.addImage(logoData, "PNG", 50, 60, 110, 50);
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(26);
    pdf.text("TRINETRA TECHNOLOGIES PVT. LTD.", W / 2, 90, {
      align: "center"
    });
    pdf.setFontSize(11);
    pdf.setTextColor(212, 175, 55);
    pdf.setFont("helvetica", "italic");
    pdf.text("Empowering Future Developers", W / 2, 108, {
      align: "center"
    });
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(40);
    pdf.setTextColor(255, 255, 255);
    pdf.text("CERTIFICATE", W / 2, 175, {
      align: "center"
    });
    pdf.setFontSize(14);
    pdf.setTextColor(180, 200, 240);
    pdf.setFont("helvetica", "normal");
    pdf.text("OF INTERNSHIP COMPLETION", W / 2, 198, {
      align: "center"
    });
    pdf.setFontSize(12);
    pdf.setTextColor(200, 200, 200);
    pdf.text("This is proudly presented to", W / 2, 235, {
      align: "center"
    });
    pdf.setFont("times", "italic");
    pdf.setFontSize(38);
    pdf.setTextColor(255, 215, 100);
    pdf.text(cert.recipient_name, W / 2, 285, {
      align: "center"
    });
    pdf.setDrawColor(212, 175, 55);
    pdf.setLineWidth(0.5);
    pdf.line(W / 2 - 200, 300, W / 2 + 200, 300);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.setTextColor(220, 220, 220);
    pdf.text("for successfully completing the internship program in", W / 2, 325, {
      align: "center"
    });
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);
    pdf.setTextColor(120, 180, 255);
    pdf.text(internship.title, W / 2, 358, {
      align: "center"
    });
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(200, 200, 200);
    const date = new Date(cert.issued_at).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    pdf.text(`Issued on ${date}  •  Certificate ID: ${cert.cert_code}`, W / 2, 380, {
      align: "center"
    });
    const sigData = await toDataUrl(sigImg);
    pdf.addImage(sigData, "PNG", 80, 430, 180, 60);
    pdf.setDrawColor(180, 180, 180);
    pdf.line(70, 495, 280, 495);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(255, 255, 255);
    pdf.text("Prajwal Karajange", 175, 512, {
      align: "center"
    });
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(180, 180, 180);
    pdf.text("Founder & CEO", 175, 525, {
      align: "center"
    });
    const verifyUrl = `${window.location.origin}/verify?code=${cert.cert_code}`;
    const qr = await QRCode.toDataURL(verifyUrl, {
      margin: 1,
      color: {
        dark: "#0F1228",
        light: "#FFFFFFFF"
      }
    });
    pdf.addImage(qr, "PNG", W - 160, 440, 80, 80);
    pdf.setFontSize(8);
    pdf.setTextColor(180, 180, 180);
    pdf.text("Scan to verify", W - 120, 530, {
      align: "center"
    });
    pdf.save(`Trinetra-${cert.cert_code}.pdf`);
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center text-muted-foreground", children: "Loading..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 py-10", children: !cert ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-10 max-w-lg mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-16 w-16 mx-auto gold-text mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold mb-2", children: "Claim your certificate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Enter the name you want printed on your certificate. This cannot be changed later." }),
      !hasAttempt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-rose-400", children: [
        "You must pass the test before claiming. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/test/$slug", params: {
          slug
        }, className: "underline", children: "Take the test" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Name on Certificate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Prajwal Karajange" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: claim, disabled: !name.trim(), className: "w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black", children: "Generate Certificate" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: certRef, className: "relative rounded-2xl overflow-hidden border-4 border-amber-400/60 bg-[#0F1228] aspect-[1.414/1] p-10 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-3 border border-amber-400/40 pointer-events-none rounded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, className: "h-14", alt: "logo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold tracking-wider", children: "TRINETRA TECHNOLOGIES PVT. LTD." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs italic text-amber-300", children: "Empowering Future Developers" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-extrabold tracking-wider", children: "CERTIFICATE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-blue-200 mt-1", children: "OF INTERNSHIP COMPLETION" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-300 mt-6", children: "This is proudly presented to" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-serif italic text-amber-300 mt-3", children: cert.recipient_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-amber-400/60 w-2/3 mx-auto mt-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-300 mt-4", children: "for successfully completing the internship program in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-300 mt-2", children: internship?.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-400 mt-3", children: [
            "Issued on ",
            new Date(cert.issued_at).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric"
            }),
            " · ID: ",
            cert.cert_code
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sigImg, className: "h-14 -mb-2", alt: "signature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-400 w-44 mt-1 pt-1 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Prajwal Karajange" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400", children: "Founder & CEO" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-3 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: downloadPDF, className: "bg-gradient-to-r from-amber-500 to-yellow-600 text-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-1" }),
          " Download PDF"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Back to Dashboard" }) })
      ] })
    ] }) })
  ] });
}
export {
  CertPage as component
};
