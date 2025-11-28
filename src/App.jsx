import data from "../dataMahasiswa.json";
import { Header } from "./components/header";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
// import { Statistics } from "./components/Statistics";

export default function App() {
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-8 px-4 md:px-8">
      <div className="w-full max-w-5xl mx-auto">
        <Header profile={data.profile} statistics={data.statistics} />
        <Skills skills={data.skills} />
        <Experience experiences={data.experiences} />
        
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Profile Completion: {data.statistics.profile_complete_percent}% • Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}