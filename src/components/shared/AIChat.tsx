import React, { useState } from 'react';
import { Send, X, Mail, CheckCircle } from 'lucide-react';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const RECIPIENT_EMAIL = 'denniskamau1803@gmail.com';

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    projectType: 'Website',
    budget: '',
    timeline: '',
    links: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      projectType: 'Website',
      budget: '',
      timeline: '',
      links: '',
      message: ''
    });
    setError('');
    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setError('');
    const subject = `Project enquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company || 'N/A'}`,
      `Role: ${formData.role || 'N/A'}`,
      `Project type: ${formData.projectType || 'N/A'}`,
      `Budget: ${formData.budget || 'N/A'}`,
      `Timeline: ${formData.timeline || 'N/A'}`,
      `Links: ${formData.links || 'N/A'}`,
      '',
      'Message:',
      formData.message
    ].join('\n');

    const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-end sm:justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 fade-in">
      <div className="bg-white w-full sm:w-[420px] h-[90vh] sm:h-[620px] flex flex-col shadow-2xl border-t-2 sm:border-2 border-black sm:rounded-sm">
        <div className="flex items-center justify-between p-4 border-b-2 border-black bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold rounded-sm">
              <Mail size={16} />
            </div>
            <div>
              <h3 className="font-black text-lg leading-none">Project Enquiry</h3>
              <p className="text-xs text-gray-500 font-bold uppercase mt-1">Tell me about your project</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 transition-colors border border-transparent hover:border-black rounded-sm"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-white">
          {submitted ? (
            <div className="space-y-4">
              <div className="border-2 border-black p-4 rounded-sm bg-green-50">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <CheckCircle size={18} />
                  Enquiry ready to send
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Your email app should open with the enquiry details. If it did not, email us at{' '}
                  <span className="font-bold">{RECIPIENT_EMAIL}</span>.
                </p>
              </div>
              <button
                type="button"
                onClick={resetForm}
                className="w-full border-2 border-black bg-white px-4 py-3 font-bold hover:bg-gray-100 transition-colors rounded-sm"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">Full name *</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                    placeholder="jane@email.com"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500">Company</label>
                    <input
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                      placeholder="Company or organization"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500">Your role</label>
                    <input
                      name="role"
                      type="text"
                      value={formData.role}
                      onChange={handleChange}
                      className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                      placeholder="Founder, PM, etc."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500">Project type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                    >
                      <option>Website</option>
                      <option>Web App</option>
                      <option>Mobile App</option>
                      <option>UI/UX Design</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500">Budget (KES)</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                    >
                      <option value="">Select range</option>
                      <option>Below 50k</option>
                      <option>50k - 150k</option>
                      <option>150k - 300k</option>
                      <option>300k+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">Timeline</label>
                  <input
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                    placeholder="e.g. 4–6 weeks, ASAP"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">Reference links</label>
                  <input
                    name="links"
                    type="text"
                    value={formData.links}
                    onChange={handleChange}
                    className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                    placeholder="Website, Figma, brief, etc."
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">Project brief *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-2 w-full bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
                    placeholder="Goals, scope, and any must-have features."
                  />
                </div>
              </div>

              {error && (
                <div className="border-2 border-red-500 text-red-700 bg-red-50 px-3 py-2 text-sm font-bold rounded-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-4 py-3 bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors rounded-sm flex items-center justify-center gap-2 font-bold"
              >
                <Send size={18} />
                Send enquiry
              </button>
              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted about your project.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIChat;
