import { Calendar } from 'lucide-react';

export function Experience({ experiences }) {
  const getTypeColor = (type) => {
    if (type === 'project') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    if (type === 'internship') return 'bg-blue-100 text-blue-700 border-blue-200';
    return 'bg-amber-100 text-amber-700 border-amber-200';
  };

  const getTypeLabel = (type) => {
    if (type === 'project') return 'project';
    if (type === 'internship') return 'internship';
    return 'organization';
  };

  const getIconBg = (type) => {
    if (type === 'project') return 'bg-emerald-600';
    if (type === 'internship') return 'bg-blue-600';
    return 'bg-amber-600';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <section>
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Experience</h2>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-slate-200 to-transparent" />
          
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-16">
                {/* Timeline Node */}
                <div className={`absolute left-0 top-2 w-12 h-12 ${getIconBg(exp.experience_type)} rounded-full flex items-center justify-center text-white shadow-lg z-10 font-bold text-xl`}>
                  {exp.experience_type === 'internship' ? '🏢' : exp.experience_type === 'project' ? '💼' : '🎓'}
                </div>
                
                {/* Content Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all hover:border-blue-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-gray-600 font-medium">{exp.organization}</p>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getTypeColor(exp.experience_type)}`}>
                      {getTypeLabel(exp.experience_type)}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      <span className="font-medium">
                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.is_current && (
                      <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-blue-200">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium bg-white text-gray-700 rounded-lg border border-gray-300 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}