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
      id: 'employment',
      question: "What is your current employment status?",
      options: [
        { label: "Student", value: "student", icon: <Star /> },
        { label: "Working (Full-time)", value: "working", icon: <Briefcase /> },
        { label: "Freelancer", value: "freelancer", icon: <User /> },
        { label: "OFW", value: "ofw", icon: <Target /> },
      ]
    },
    {
      id: 'living',
      question: "Where are you currently staying?",
      options: [
        { label: "With Parents", value: "parents", icon: <Home /> },
        { label: "Renting", value: "renting", icon: <Home /> },
        { label: "Moving Out Soon", value: "moving", icon: <Home /> },
      ]
    },
    {
      id: 'priority',
      question: "What is your main priority right now?",
      options: [
        { label: "Government IDs", value: "ids", icon: <CheckCircle2 /> },
        { label: "Savings/EF", value: "finance", icon: <Wallet /> },
        { label: "Health Protection", value: "health", icon: <User /> },
        { label: "Investment/Property", value: "property", icon: <Home /> },
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[step].id]: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getRecommendations = () => {
    const recs = [];
    
    // Logic for recommendations
    if (answers.employment === 'student' || answers.priority === 'ids') {
      recs.push({ title: "Get PhilSys + TIN first", desc: "Essential for any future bank account or job.", path: "/foundation#philsys" });
    }
    
    if (answers.employment === 'working' || answers.employment === 'freelancer') {
      recs.push({ title: "Open high-interest savings", desc: "Move your salary from payroll to a digital bank.", path: "/finance#savings" });
      recs.push({ title: "Build ₱10k mini-Emergency Fund", desc: "Start small but start now.", path: "/finance#emergency" });
    }

    if (answers.living === 'moving') {
      recs.push({ title: "Learn Renter Rights (RA 9653)", desc: "Know your 1-month advance/deposit rules.", path: "/living#renting" });
    }

    if (answers.priority === 'health') {
      recs.push({ title: "PhilHealth + HMO Check", desc: "Verify your employer coverage.", path: "/health#philhealth" });
    }

    recs.push({ title: "Set up 2FA everywhere", desc: "Immediate protection for all your new digital accounts.", path: "/protection" });

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
                  <div className="text-3xl font-serif font-bold text-accent opacity-40">{idx + 1}</div>
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
