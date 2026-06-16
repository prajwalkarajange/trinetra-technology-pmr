import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-ByG2qC2K.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { F as Footer } from "./Footer-D2fNp8Eo.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import { I as Input } from "./input-BQDl7hyY.mjs";
import { L as Label } from "./label-CohZ4DiV.mjs";
import { B as Badge } from "./badge-1bteP2lW.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { A as ArrowLeft, P as Plus, X, b as Save } from "../_libs/lucide-react.mjs";
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
const SKILL_BANK = ["Java", "Python", "JavaScript", "TypeScript", "C++", "C#", "Go", "Rust", "Kotlin", "Swift", "React", "Next.js", "Vue", "Angular", "Node.js", "Express", "Django", "Flask", "Spring Boot", ".NET", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Git", "CI/CD", "Linux", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "HTML/CSS", "Tailwind CSS", "Figma", "React Native", "Flutter", "GraphQL", "REST APIs"];
function ProfilePage() {
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [saving, setSaving] = reactExports.useState(false);
  const [f, setF] = reactExports.useState({
    full_name: "",
    mobile: "",
    college: "",
    degree: "",
    branch: "",
    current_year: ""
  });
  const [skills, setSkills] = reactExports.useState([]);
  const [custom, setCustom] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!loading && !user) nav({
      to: "/login"
    });
  }, [user, loading, nav]);
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("*").eq("id", user.id).single().then(({
      data
    }) => {
      if (data) {
        setF({
          full_name: data.full_name || "",
          mobile: data.mobile || "",
          college: data.college || "",
          degree: data.degree || "",
          branch: data.branch || "",
          current_year: data.current_year || ""
        });
        setSkills(data.skills || []);
      }
    });
  }, [user]);
  const upd = (k) => (e) => setF((p) => ({
    ...p,
    [k]: e.target.value
  }));
  const toggleSkill = (s) => setSkills((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  const addCustom = () => {
    const v = custom.trim();
    if (!v) return;
    if (!skills.includes(v)) setSkills([...skills, v]);
    setCustom("");
  };
  async function save() {
    if (!user) return;
    setSaving(true);
    const {
      error
    } = await supabase.from("profiles").update({
      ...f,
      skills
    }).eq("id", user.id);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Profile updated");
    nav({
      to: "/dashboard"
    });
  }
  if (loading || !user) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center text-muted-foreground", children: "Loading..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to Dashboard"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary uppercase tracking-[0.2em] mb-1", children: "Account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold mb-1", children: "Edit Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Keep your information accurate — it appears on your certificates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: f.full_name, onChange: upd("full_name") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Mobile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: f.mobile, onChange: upd("mobile") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "College" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: f.college, onChange: upd("college") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Degree" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: f.degree, onChange: upd("degree") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Branch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: f.branch, onChange: upd("branch") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Current Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: f.current_year, onChange: upd("current_year") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary uppercase tracking-[0.2em] mb-1", children: "Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold mb-1", children: "Which technologies do you know?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Tap the skills you're comfortable with. This helps us recommend the right internships for you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: SKILL_BANK.map((s) => {
          const on = skills.includes(s);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => toggleSkill(s), className: `px-3 py-1.5 rounded-full text-xs font-medium border transition ${on ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50"}`, children: s }, s);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Add a custom skill...", value: custom, onChange: (e) => setCustom(e.target.value), onKeyDown: (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addCustom();
            }
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: addCustom, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
        ] }),
        skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mb-2", children: [
            "Selected (",
            skills.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1 pl-3 pr-1 py-1", children: [
            s,
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleSkill(s), className: "hover:text-destructive ml-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) })
          ] }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: save, disabled: saving, size: "lg", className: "w-full bg-gradient-to-r from-primary to-accent h-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4 mr-2" }),
        " ",
        saving ? "Saving..." : "Save Changes"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProfilePage as component
};
