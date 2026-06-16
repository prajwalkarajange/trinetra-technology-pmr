import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { getQuestionsForSlug, type MCQ } from "@/lib/question-bank";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { CheckCircle2, XCircle, Clock, Award, CircleDot, Circle } from "lucide-react";

export const Route = createFileRoute("/test/$slug")({ component: TestPage });

function TestPage() {
  const { slug } = Route.useParams();
  const { user, loading } = useAuth();
  const nav = useNavigate();
  const [internship, setInternship] = useState<{ id: string; title: string } | null>(null);
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<{ score: number; passed: boolean } | null>(null);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { if (!loading && !user) nav({ to: "/login" }); }, [user, loading, nav]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setNotFound(false);
      setAlreadyDone(false);
      setSubmitted(null);
      setAnswers({});
      setQuestions([]);
      setTimeLeft(20 * 60);
      setSubmitting(false);

      const { data: int } = await supabase.from("internships").select("id, title").eq("slug", slug).single();
      if (!int) {
        setNotFound(true);
        return;
      }
      setInternship(int);
      const { data: existing } = await supabase.from("certificates").select("id").eq("user_id", user.id).eq("internship_id", int.id).maybeSingle();
      if (existing) { setAlreadyDone(true); return; }
      setQuestions(getQuestionsForSlug(slug));
    })();
  }, [user, slug]);

  useEffect(() => {
    if (submitted || alreadyDone || !questions.length) return;
    const t = setInterval(() => setTimeLeft(s => {
      if (s <= 1) { clearInterval(t); submit(); return 0; }
      return s - 1;
    }), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions.length, submitted, alreadyDone]);

  const answeredCount = questions.filter((question) => answers[question.id] !== undefined).length;
  const remainingCount = questions.length - answeredCount;

  async function submit() {
    if (submitted || submitting || !internship || !user || !questions.length) return;
    setSubmitting(true);
    const score = questions.reduce((total, question) => total + (answers[question.id] === question.correctIndex ? 1 : 0), 0);
    const passed = score >= 12;
    setSubmitted({ score, passed });

    const { error } = await supabase.from("test_attempts").insert({
      user_id: user.id,
      internship_id: internship.id,
      score,
      total: questions.length,
      passed,
    });

    setSubmitting(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    if (passed) toast.success(`Passed! ${score}/${questions.length}`); else toast.error(`${score}/${questions.length} — minimum 12 required`);
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>;

  if (notFound) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-20 text-center glass rounded-3xl mt-10">
          <XCircle className="h-16 w-16 mx-auto text-rose-400 mb-4" />
          <h1 className="text-3xl font-extrabold mb-3">Assessment not found</h1>
          <p className="text-muted-foreground mb-6">This program does not have a configured question set yet.</p>
          <Link to="/dashboard"><Button variant="outline">Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  if (alreadyDone) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-20 text-center glass rounded-3xl mt-10">
          <Award className="h-16 w-16 mx-auto gold-text mb-4" />
          <h1 className="text-3xl font-extrabold mb-3">You've already completed this internship</h1>
          <p className="text-muted-foreground mb-6">Each user can earn one certificate per program.</p>
          <Link to="/certificate/$slug" params={{ slug }}><Button className="bg-linear-to-r from-primary to-accent">View Certificate</Button></Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-20">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass rounded-3xl p-10 text-center">
            {submitted.passed ? <CheckCircle2 className="h-20 w-20 mx-auto text-emerald-400 mb-4" /> : <XCircle className="h-20 w-20 mx-auto text-rose-400 mb-4" />}
            <h1 className="text-4xl font-extrabold mb-2">{submitted.passed ? "Congratulations!" : "Not this time"}</h1>
            <p className="text-muted-foreground mb-6">You scored <b>{submitted.score}</b> / {questions.length}</p>
            {submitted.passed ? (
              <Link to="/certificate/$slug" params={{ slug }} search={{ claim: 1 } as any}>
                <Button size="lg" className="bg-linear-to-r from-amber-500 to-yellow-600 text-black"><Award className="h-4 w-4 mr-1" /> Claim Certificate</Button>
              </Link>
            ) : (
              <Link to="/dashboard"><Button variant="outline">Back to Dashboard</Button></Link>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  const m = Math.floor(timeLeft / 60), s = timeLeft % 60;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-10">
        <div className="mb-5 lg:hidden glass rounded-2xl p-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-primary mb-1">Assessment</div>
            <div className="font-bold text-base leading-tight">{internship?.title}</div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-2 text-lg font-extrabold tabular-nums">
              <Clock className="h-5 w-5 text-primary" /> {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
            </div>
            <div className="text-[11px] text-muted-foreground">{answeredCount} completed · {remainingCount} remaining</div>
          </div>
        </div>

        <div className="min-w-0 lg:pr-95 xl:pr-105">
          <div className="glass rounded-3xl p-5 sm:p-6 mb-6 hidden lg:flex items-center justify-between gap-4 backdrop-blur-xl">
              <div>
                <div className="text-xs text-primary uppercase tracking-[0.28em]">Assessment</div>
                <div className="font-bold text-xl">{internship?.title}</div>
                <div className="text-sm text-muted-foreground mt-1">Answer all 20 questions before time runs out.</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/40 px-4 py-3 text-right min-w-40">
                <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-1">Time Left</div>
                <div className="flex items-center gap-2 text-2xl font-extrabold tabular-nums">
                  <Clock className="h-5 w-5 text-primary" /> {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {questions.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                return (
                  <div id={q.id} key={q.id} className={`scroll-mt-24 glass rounded-3xl p-5 sm:p-6 border transition-all ${isAnswered ? "border-emerald-400/40 shadow-[0_0_0_1px_rgba(16,185,129,0.08)]" : "border-border/70"}`}>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="text-xs text-muted-foreground">
                        Question {idx + 1} of {questions.length}
                      </div>
                      <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${isAnswered ? "bg-emerald-500/15 text-emerald-300" : "bg-muted text-muted-foreground"}`}>
                        {isAnswered ? <CircleDot className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
                        {isAnswered ? "Completed" : "Pending"}
                      </div>
                    </div>
                    <div className="font-semibold text-base sm:text-lg leading-relaxed mb-4">{q.question}</div>
                    <div className="grid gap-2">
                      {q.options.map((opt, i) => {
                        const selected = answers[q.id] === i;
                        return (
                          <button
                            key={i}
                            onClick={() => setAnswers(a => ({ ...a, [q.id]: i }))}
                            className={`text-left px-4 py-3 rounded-2xl border transition-all duration-200 ${selected ? "border-emerald-400 bg-emerald-500/12 text-foreground shadow-sm" : "border-border/80 bg-background/30 hover:border-primary/60 hover:bg-primary/5"}`}
                          >
                            <span className={`text-xs font-semibold mr-2 ${selected ? "text-emerald-300" : "text-muted-foreground"}`}>{String.fromCharCode(65 + i)}.</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button onClick={submit} size="lg" disabled={submitting || !questions.length} className="flex-1 bg-linear-to-r from-primary to-accent h-12 shadow-lg shadow-primary/20">{submitting ? "Submitting..." : "Submit Test"}</Button>
              <Button
                onClick={() => {
                  if (confirm("End the test now? Your current answers will be scored and this attempt will be saved.")) submit();
                }}
                size="lg" variant="outline" className="sm:w-48 h-12 border-border/80 bg-background/40 backdrop-blur-sm" disabled={submitting}>
                End Test
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">Minimum 12 / 20 to pass. You can attempt only once. Use "End Test" to finish early.</p>

          <aside className="hidden lg:block fixed top-24 right-6 z-30 w-[320px] xl:w-90">
            <div className="glass rounded-3xl p-5 sm:p-6 border border-border/70 bg-background/85 backdrop-blur-xl shadow-2xl shadow-black/10 max-h-[calc(100vh-7rem)] overflow-auto">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-primary mb-1">Exam Status</div>
                  <h2 className="font-bold text-lg">Progress</h2>
                </div>
                <div className="rounded-2xl bg-primary/10 px-3 py-2 text-right">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Timer</div>
                  <div className="font-extrabold tabular-nums text-lg text-primary">{String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-300">Completed</div>
                  <div className="text-2xl font-extrabold text-emerald-300">{answeredCount}</div>
                </div>
                <div className="rounded-2xl border border-border/80 bg-muted/40 p-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Remaining</div>
                  <div className="text-2xl font-extrabold">{remainingCount}</div>
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Answered</span>
                <span>{answeredCount}/{questions.length}</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden mb-6">
                <div className="h-full rounded-full bg-linear-to-r from-emerald-400 via-primary to-accent transition-all" style={{ width: `${questions.length ? (answeredCount / questions.length) * 100 : 0}%` }} />
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /> Completed
                <span className="ml-4 inline-flex h-2.5 w-2.5 rounded-full bg-muted-foreground/40" /> Pending
              </div>

              <div className="max-h-[calc(100vh-24rem)] overflow-auto pr-1 space-y-2">
                {questions.map((question, index) => {
                  const isAnswered = answers[question.id] !== undefined;
                  return (
                    <button
                      key={question.id}
                      onClick={() => document.getElementById(question.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      id={`nav-${question.id}`}
                      className={`w-full rounded-2xl border px-3 py-3 text-left transition-all ${isAnswered ? "border-emerald-400/30 bg-emerald-500/12" : "border-border/70 bg-background/35 hover:border-primary/50"}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className={`text-[11px] uppercase tracking-[0.2em] ${isAnswered ? "text-emerald-300" : "text-muted-foreground"}`}>{isAnswered ? "Completed" : "Pending"}</div>
                          <div className="font-medium text-sm truncate">Q{index + 1}</div>
                        </div>
                        <div className={`h-2.5 w-2.5 rounded-full ${isAnswered ? "bg-emerald-400" : "bg-muted-foreground/50"}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
