import React from "react";
import data from "../dataMahasiswa.json";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        {/* Header */}
        <header className="flex items-center gap-6 border-b pb-6 mb-6">
          <img
            src={data.profile.photo_url}
            alt="profile"
            className="w-28 h-28 rounded-full object-cover shadow"
          />
          <div>
            <h1 className="text-3xl font-bold">{data.profile.full_name}</h1>
            <p className="text-gray-600">{data.profile.headline}</p>
            <p className="text-gray-500 text-sm mt-1">{data.profile.location}</p>
            <a
              href={data.profile.portfolio_url}
              target="_blank"
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Visit Portfolio
            </a>
          </div>
        </header>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.skills.map((skill) => (
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

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="flex flex-col gap-6">
            {data.experiences.map((exp) => (
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

        {/* Statistics */}
        <section className="mt-10 p-4 bg-gray-50 rounded-xl border text-center">
          <p className="text-gray-600 text-sm">Profile Views: {data.statistics.views_count}</p>
          <p className="text-gray-600 text-sm">
            Profile Completed: {data.statistics.profile_complete_percent}%
          </p>
        </section>
      </div>
    </div>
  );
}
