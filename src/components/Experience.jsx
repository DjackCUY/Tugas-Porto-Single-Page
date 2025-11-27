export function Experience({ experiences }) {
return (
    <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
            <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center gap-3 mb-2">
                    {exp.image_url && (
                    <img src={exp.image_url} alt="logo" className="w-10 h-10 object-contain" />
                    )}
                    <div>
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-gray-600">{exp.organization}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">
                {exp.start_date} - {exp.is_current ? "Present" : exp.end_date}
                </p>
                <p className="mb-2">{exp.description}</p>
                {exp.technologies && (
                <div className="flex gap-2 mt-2 flex-wrap">
                    {exp.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-200 rounded"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                )}
            </div>
            ))}
        </div>
    </section>
    );
}