import data from "../dataMahasiswa.json";
import { Header } from "./components/header";

export default function App() {
return (
  <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
    <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
      <Header profile={data.profile} />
    </div>
  </div>
  );
}