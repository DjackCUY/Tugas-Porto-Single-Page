import { Calendar, Briefcase } from 'lucide-react';

export function Experience({ experiences }) {
    const getTypeConfig = (type) => {
        if (type === 'project') return {
            color: 'from-emerald-500 to-green-500',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200',
            textColor: 'text-emerald-700',
            badgeBg: 'bg-emerald-100',
            icon: '💼'
        };
        if (type === 'internship') return {
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            textColor: 'text-blue-700',
            badgeBg: 'bg-blue-100',
            icon: '🏢'
        };
        return {
            color: 'from-amber-500 to-orange-500',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
            textColor: 'text-amber-700',
            badgeBg: 'bg-amber-100',
            icon: '🎓'
        };
    };

    const getTypeLabel = (type) => {
        if (type === 'project') return 'Project';
        if (type === 'internship') return 'Internship';
        return 'Organization';
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Present';
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    };

return (
    <section>
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl shadow-lg">
                    <Briefcase size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Experience Journey</h2>
            </div>
        
            <div   div className="relative">
                {/* Animated gradient line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-teal-400 rounded-full shadow-lg"></div>

                <div className="space-y-8">
                    {experiences.map((exp) => {
                    const config = getTypeConfig(exp.experience_type);
                    return (
                    <div key={exp.id} className="relative pl-20">
                        {/* Timeline node with glow */}
                        <div className="absolute left-0 top-0">
                            <div className={`absolute inset-0 bg-gradient-to-r ${config.color} rounded-full blur-md opacity-50 animate-pulse`}></div>
                            <div className={`relative w-16 h-16 bg-gradient-to-br ${config.color} rounded-full flex items-center justify-center text-3xl shadow-xl border-4 border-white z-10 transform hover:scale-110 transition-transform`}>
                                {config.icon}
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="group relative">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${config.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300`}></div>
                            <div className={`relative bg-gradient-to-br from-gray-50 to-white border-2 ${config.borderColor} rounded-2xl p-6 hover:shadow-lg transition-all shadow-md`}>
                                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-2xl text-gray-800 mb-2">{exp.title}</h3>
                                        <p className="text-gray-600 font-semibold text-lg">{exp.organization}</p>
                                    </div>
                                    <span className={`${config.badgeBg} ${config.textColor} px-4 py-2 rounded-full text-sm font-bold border ${config.borderColor} shadow-md`}>
                                    {getTypeLabel(exp.experience_type)}
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                                    <div className={`flex items-center gap-2 ${config.bgColor} px-3 py-1.5 rounded-lg ${config.borderColor} border`}>
                                        <Calendar size={16} className={config.textColor} />
                                            <span className="font-semibold">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                            </span>
                                        </div>
                                        {exp.is_current && (
                                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md animate-pulse">
                                        ● Current
                                        </span>
                                        )}
                                </div>

                                <p className="text-gray-700 mb-4 leading-relaxed text-base">{exp.description}</p>

                                {exp.technologies && exp.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                    <span
                                    key={tech}
                                    className="px-3 py-2 text-sm font-semibold bg-white text-gray-700 rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all"
                                    >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                    );
                    })}
                </div>
            </div>
        </div>
    </section>
    );
}