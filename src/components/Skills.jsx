export function Skills({ skills }) {
    const getLevelPercentage = (level) => {
        if (level === 'Advanced') return 100;
        if (level === 'Intermediate') return 70;
        if (level === 'Beginner') return 34;
        return 10;
    };

return (
    <section className="mb-8">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                <div key={skill.id} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <img src={skill.icon_url} alt={skill.name} className="w-12 h-12" />
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-lg text-gray-800">{skill.name}</h3>
                                    {skill.is_main && (
                                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                    Main
                                    </span>
                                    )}
                                </div>
                                {skill.years_of_experience && (
                                <p className="text-sm text-gray-500">{skill.years_of_experience} year{skill.years_of_experience > 1 ? 's' : ''} experience</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600 capitalize">{skill.level}</span>
                            <span className="font-semibold text-gray-700">{getLevelPercentage(skill.level)}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${getLevelPercentage(skill.level)}%` }}/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    );
}