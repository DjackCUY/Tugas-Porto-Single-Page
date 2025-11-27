export function Skills({ skills }) {
return (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
            <div key={skill.id} className="p-4 border rounded-xl flex gap-4 items-center">
                <img src={skill.icon_url} alt={skill.name} className="w-10 h-10" />
                <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-600 capitalize">{skill.level}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
    );
}