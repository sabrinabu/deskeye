import Header from "../app/components/Header";
import Sidebar from "../app/components/Sidebar";
import Rightside from "../app/components/Rightside";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-row mt-3">
        <Sidebar />
        <Rightside />
      </div>
    </div>
  );
}
