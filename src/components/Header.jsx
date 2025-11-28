import { Eye, MapPin, ExternalLink, TrendingUp } from 'lucide-react';

export function Header({ profile, statistics }) {
  return (
    <div className="relative mb-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

        {/* Accent bar */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400"></div>
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Profile Image with decorative ring */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-30 w-44 h-44"></div>
              <div className="relative">
                <img
                  src={profile.photo_url}
                  alt="profile"
                  className="relative w-40 h-40 rounded-3xl object-cover shadow-xl border-4 border-white"
                />

                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                    {profile.full_name}
                  </h1>
                  <p className="text-xl text-gray-600 font-medium">{profile.headline}</p>
                </div>
                
                {/* Stats cards */}
                <div className="flex gap-3">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 px-4 py-2 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Eye size={18} />
                      <span className="font-bold text-lg">{statistics.views_count}</span>
                    </div>
                    <p className="text-xs text-blue-600">views</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-green-50 px-4 py-2 rounded-xl border border-teal-100">
                    <div className="flex items-center gap-2 text-teal-700">
                      <TrendingUp size={18} />
                      <span className="font-bold text-lg">{statistics.profile_complete_percent}%</span>
                    </div>
                    <p className="text-xs text-teal-600">complete</p>
                  </div>
                </div>
              </div>
              
              {/* Info badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                  {profile.nim}
                </span>
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                  {profile.prodi}
                </span>
                <span className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                  Angkatan {profile.angkatan}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin size={18} className="text-blue-600" />
                <span>{profile.location}</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{profile.short_bio}</p>
              <a
                href={profile.portfolio_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all shadow-md"
              >
                <ExternalLink size={20} />
                Visit Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}