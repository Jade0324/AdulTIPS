import React, { useState } from 'react';
import { Target, CheckCircle2, ArrowRight, User, Briefcase, Home, Wallet, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; icon?: React.ReactNode }[];
}

export default function Roadmap() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const questions: Question[] = [
    {
      id: 'age',
      question: "How old are you?",
      options: [
        { label: "18–22", value: "18-22" },
        { label: "23–27", value: "23-27" },
        { label: "28+", value: "28+" },
      ]
    },
    {
      id: 'status',
      question: "What best describes you?",
      options: [
        { label: "Student", value: "student", icon: <Star /> },
        { label: "First jobber", value: "first-job", icon: <Briefcase /> },
        { label: "Freelancer", value: "freelancer", icon: <User /> },
        { label: "Unemployed", value: "unemployed", icon: <Target /> },
        { label: "OFW", value: "ofw", icon: <Target /> },
        { label: "Starting family", value: "family", icon: <Home /> },
      ]
    },
    {
      id: 'concern',
      question: "What's your current biggest concern?",
      options: [
        { label: "Money", value: "money" },
        { label: "IDs", value: "ids" },
        { label: "Moving out", value: "moving" },
        { label: "Career", value: "career" },
        { label: "Stress", value: "stress" },
        { label: "Relationships", value: "relationships" },
      ]
    },
    {
      id: 'income',
      question: "Monthly income bracket?",
      options: [
        { label: "No income yet", value: "0" },
        { label: "Under ₱20k", value: "20k" },
        { label: "₱20k–₱40k", value: "40k" },
        { label: "₱40k+", value: "60k" },
      ]
    },
    {
      id: 'living',
      question: "Living setup?",
      options: [
        { label: "With parents", value: "parents", icon: <Home /> },
        { label: "Renting", value: "renting", icon: <Home /> },
        { label: "Planning to move out", value: "planning", icon: <Home /> },
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[step].id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
      // Save for dashboard
      localStorage.setItem('userFocusPlan', JSON.stringify(newAnswers));
    }
  };

  const getRecommendations = () => {
    const recs = [];
    
    // Level 1: Survive
    if (answers.income === '0' || answers.income === '20k' || answers.concern === 'ids') {
      recs.push({ title: "Get TIN + PhilSys IDs", desc: "Highest priority. You cannot open a bank account or get a job without these.", path: "/foundation", level: "Level 1" });
    }
    
    // Income Reality Mode
    if (answers.income === '0' || answers.income === '20k') {
      recs.push({ title: "Build ₱5k Mini-Emergency Fund", desc: "Avoid debt traps by having a small safety net first.", path: "/finance", level: "Level 1" });
    } else if (answers.income === '40k' || answers.income === '60k') {
      recs.push({ title: "Build 3-month Emergency Fund", desc: "You have the capacity to secure your future. Aim for 3-6 months.", path: "/finance", level: "Level 2" });
    }

    if (answers.living === 'planning') {
      recs.push({ title: "Learn Renter Rights (RA 9653)", desc: "Know the rules before signing a lease.", path: "/living", level: "Level 2" });
    }

    if (answers.concern === 'stress') {
      recs.push({ title: "Protect Your Mind", desc: "Start a journaling practice to handle adulting stress.", path: "/growth", level: "Level 2" });
    }

    recs.push({ title: "Immediate: 2FA & Privacy", desc: "Set up security for all accounts today.", path: "/protection", level: "Level 1" });

    return recs;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 min-h-[70vh]">
      {!isFinished ? (
        <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-primary/5">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Step {step + 1} of {questions.length}</p>
            <h2 className="text-4xl font-serif font-bold text-primary">{questions[step].question}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="flex items-center gap-4 p-6 bg-surface border border-gray-100 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-left text-lg font-medium"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {opt.icon}
                </div>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          <header className="text-center">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4 leading-tight">Your Adulting Roadmap</h1>
            <p className="text-muted text-xl">Based on your situation, here are your next 4-5 steps.</p>
          </header>

          <div className="space-y-4">
            {getRecommendations().map((rec, idx) => (
              <Link
                key={idx}
                to={rec.path}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-gray-100 rounded-[2rem] hover:border-primary transition-all shadow-sm"
              >
                <div className="flex gap-6 items-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-3xl font-serif font-bold text-accent opacity-40">{idx + 1}</div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-muted">{rec.level}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-1">{rec.title}</h3>
                    <p className="text-muted leading-relaxed">{rec.desc}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2 text-primary font-bold group-hover:text-accent transition-colors">
                  <span>Start Guide</span>
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => { setStep(0); setIsFinished(false); setAnswers({}); }}
              className="text-primary font-bold text-sm uppercase tracking-widest hover:text-accent transition-colors"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
