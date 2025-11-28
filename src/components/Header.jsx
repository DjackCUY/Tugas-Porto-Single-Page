import { Eye, MapPin, ExternalLink } from 'lucide-react';

export function Header({ profile, statistics }) {
  return (
    <header className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <img
          src={profile.photo_url}
          alt="profile"
          className="w-32 h-32 rounded-2xl object-cover shadow-xl border-4 border-white"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{profile.full_name}</h1>
          <p className="text-lg text-slate-200 mb-4">{profile.headline}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              {profile.nim}
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              {profile.prodi}
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              Angkatan {profile.angkatan}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={16} />
              <span>{statistics.views_count} views</span>
            </div>
          </div>

          <p className="text-slate-200 mb-4">{profile.short_bio}</p>

          <a
            href={profile.portfolio_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-800 px-5 py-2.5 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-md"
          >
            <ExternalLink size={18} />
            Visit Portfolio
          </a>
        </div>
      </div>
    </header>
  );
}
