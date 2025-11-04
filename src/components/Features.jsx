import React from 'react';
import { Bot, Utensils, LineChart, ShieldCheck, CalendarDays } from 'lucide-react';

const features = [
  {
    title: 'AI Reservationist',
    description:
      'Answers calls, chats, and DMs. Books, modifies, and confirms reservations with zero hold time.',
    icon: CalendarDays,
  },
  {
    title: 'Menu Intelligence',
    description:
      'Recommends dishes and pairings based on guest preferences, inventory, and margins to grow check size.',
    icon: Utensils,
  },
  {
    title: 'Reputation Autopilot',
    description:
      'Drafts thoughtful, on-brand responses to reviews and messages across channels—approved by you.',
    icon: Bot,
  },
  {
    title: 'Demand Forecasting',
    description:
      'Predicts covers and inventory needs using weather, events, and historical patterns to reduce waste.',
    icon: LineChart,
  },
  {
    title: 'Guest Data & CRM',
    description:
      'Builds profiles over time and triggers personalized outreach that brings regulars back sooner.',
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything your modern restaurant needs</h2>
          <p className="mt-3 text-lg text-gray-600">We plug into your existing tools—reservation platforms, phone, POS—and orchestrate it all with AI.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <div className="mt-4 text-sm font-medium text-rose-600">Learn more →</div>
            </div>
          ))}
        </div>

        <div id="case-studies" className="mt-16 rounded-2xl border border-gray-200 bg-gradient-to-br from-rose-50 to-orange-50 p-6">
          <p className="text-sm uppercase tracking-wide text-rose-700">Results</p>
          <div className="mt-2 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-extrabold text-gray-900">+28%</p>
              <p className="text-sm text-gray-600">Avg. increase in weeknight covers</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900">-17%</p>
              <p className="text-sm text-gray-600">Reduction in food waste</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900">2.4x</p>
              <p className="text-sm text-gray-600">More five-star review responses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
