export function Header({ profile }) {
return (
    <header className="flex items-center gap-6 border-b pb-6 mb-6">
        <img
        src={profile.photo_url}
        alt="profile"
        className="w-28 h-28 rounded-full object-cover shadow"
        />
        <div>
            <h1 className="text-3xl font-bold">{profile.full_name}</h1>
            <p className="text-gray-600">{profile.headline}</p>
            <p className="text-gray-500 text-sm mt-1">{profile.location}</p>
            <a
            href={profile.portfolio_url}
            target="_blank"
            className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
            >
                Visit Portfolio
            </a>
        </div>
    </header>
    );
}