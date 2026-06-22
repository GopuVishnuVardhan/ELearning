import { useState } from 'react';
import { Search, ChevronRight, BookOpen, TrendingUp } from 'lucide-react';

const curriculumData = [
  {
    certId: 'PL-900',
    title: 'Power Platform Fundamentals',
    level: 'Beginner',
    hours: '6h',
    progress: 60,
    category: 'Power Platform',
    modules: [
      {
        moduleId: 'pl900-mod1',
        title: 'Introduction to the Power Platform',
        summary: 'Understand the business value of Power Apps, Power Automate, and Dataverse.',
      }
    ]
  },
  {
    certId: 'PL-400',
    title: 'Microsoft Power Platform Developer',
    level: 'Intermediate',
    hours: '25h',
    progress: 10,
    category: 'Power Platform',
    modules: [
      {
        moduleId: 'pl400-mod1',
        title: 'Extend User Experience with PCF Controls',
        summary: 'Learn how to build reusable PCF code components using TypeScript and HTML.',
      }
    ]
  },
  {
    certId: 'PL-500',
    title: 'Microsoft Power Automate RPA Developer',
    level: 'Intermediate',
    hours: '20h',
    progress: 0,
    category: 'RPA',
    modules: []
  },
  {
    certId: 'MB-500',
    title: 'Dynamics 365 Finance & Operations Apps Developer',
    level: 'Advanced',
    hours: '30h',
    progress: 0,
    category: 'Dynamics 365',
    modules: []
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Power Platform', 'Dynamics 365', 'RPA'];

  const filteredCerts = curriculumData.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || cert.certId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-indigo-600 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold tracking-tight">MS Cert Hub</h1>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-200" size={20} />
            <input
              type="text"
              placeholder="Search certifications (e.g. PL-400)..."
              className="w-full bg-indigo-700 text-white placeholder-indigo-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 mt-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map(cert => (
            <div key={cert.certId} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-lg text-sm">
                  {cert.certId}
                </span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  cert.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                  cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {cert.level}
                </span>
              </div>
              
              <h2 className="text-xl font-bold mb-2 flex-grow">{cert.title}</h2>
              
              <div className="flex gap-4 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-1"><BookOpen size={16} /> {cert.modules.length} Modules</span>
                <span className="flex items-center gap-1"><TrendingUp size={16} /> {cert.hours}</span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Progress</span>
                  <span className="text-indigo-600 font-bold">{cert.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${cert.progress}%` }}></div>
                </div>
              </div>

              <button className="w-full bg-slate-900 text-white rounded-xl py-3 font-medium flex justify-center items-center gap-2 hover:bg-slate-800 transition-colors mt-auto">
                Continue Learning <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
