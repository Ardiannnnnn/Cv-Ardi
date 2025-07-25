import Link from 'next/link';
import CVTemplate from '../components/CVTemplate';
import cvData from '../data/cv-data.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio Hub</h1>
            <div className="flex gap-4">
              <Link 
                href="/" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                CV Template
              </Link>
              <Link 
                href="/profile" 
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Profile Website
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div className="py-8">
        <CVTemplate data={cvData} />
      </div>
    </div>
  );
}
