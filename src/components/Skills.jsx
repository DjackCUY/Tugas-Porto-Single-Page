import { Award, Code } from 'lucide-react';

export function Skills({ skills }) {
    const getLevelPercentage = (level) => {
        if (level === 'Advanced') return 100;
        if (level === 'Intermediate') return 66;
        if (level === 'Beginner') return 33;
        return 50;
    };

    const getLevelColor = (level) => {
        if (level === 'Advanced') return 'from-green-500 to-emerald-500';
        if (level === 'Intermediate') return 'from-blue-500 to-cyan-500';
        return 'from-yellow-500 to-orange-500';
    };

return (
    <section className="mb-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                <Code size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                    <div key={skill.id} className="group relative">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-all shadow-md hover:shadow-lg">
                            <div className="flex items-start justify-between mb-5">
                                <div className="flex items-center gap-4">
                                    <div   div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                                    <img src={skill.icon_url} alt={skill.name} className="w-10 h-10" />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-lg text-gray-800">{skill.name}</h3>
                                            {skill.is_main && (
                                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-md flex items-center gap-1">
                                            <Award size={12} />
                                            Main
                                            </span>
                                            )}
                                        </div>
                                        {skill.years_of_experience && (
                                        <p className="text-sm text-gray-500 font-medium">
                                        {skill.years_of_experience} year{skill.years_of_experience > 1 ? 's' : ''} experience
                                        </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600 capitalize font-semibold">{skill.level}</span>
                                    <span className="font-bold text-gray-800 text-base">{getLevelPercentage(skill.level)}%</span>
                                </div>
                                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                    <div 
                                        className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-700 ease-out shadow-lg relative`}
                                        style={{ width: `${getLevelPercentage(skill.level)}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}