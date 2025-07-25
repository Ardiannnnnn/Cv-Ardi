import Link from 'next/link';
import ProfileWebsite from '../../components/ProfileWebsite';
import profileData from '../../data/profile-data.json';

export default function Profile() {
  return (
    <div className="min-h-screen">
      {/* Quick Navigation */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Link 
          href="/" 
          className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg"
        >
          CV Template
        </Link>
        <Link 
          href="/profile" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
        >
          Profile Website
        </Link>
      </div>
      
      <ProfileWebsite data={profileData} />
    </div>
  );
}
