import React from 'react';
import { Mail, Utensils } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 text-white">
                <Utensils size={18} />
              </span>
              <span className="font-semibold text-gray-900">Flames AI • Restaurants</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">
              Tailored AI systems that turn browsers into bookings and help your team deliver five-star service.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Contact</p>
            <div className="mt-3 text-sm text-gray-600">
              <p className="flex items-center gap-2"><Mail size={16} className="text-rose-600" /> hello@flames.ai</p>
              <p className="mt-2">Mon–Fri, 9am–6pm</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Get started</p>
            <p className="mt-3 text-sm text-gray-600">Tell us about your restaurant and goals. We’ll come prepared with a plan and a live demo.</p>
            <a href="#top" className="mt-4 inline-flex rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">Back to top</a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Flames AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
