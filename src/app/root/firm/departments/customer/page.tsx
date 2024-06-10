import Header from "@/app/components/Header";
import Sidebar from "@/app/components/updatedCustomer/Sidebar";

export default function page() {
  return (
    <div>
      <Header />
      <div className="flex flex-row ">
        <Sidebar />
      </div>
    </div>
  );
}
