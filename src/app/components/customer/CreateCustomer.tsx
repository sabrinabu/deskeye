"use client";

type urlprops = {
  pageFullUrl: string;
};

export default function CreateCustomer({ pageFullUrl }: urlprops) {
  const parts = pageFullUrl.substring(1).split("/");
  console.log(parts);

  return (
    <div className="basis-[84%] bg-blue-950 h-screen p-2">
      {" "}
      <div className="flex">
        <span className="text-blue-500">{parts[0]}</span>
        <span style={{ color: "white" }}>/{parts[1]}</span>
      </div>
      <div className="bg-blue-500 h-[calc(100vh-50px)] px-20">
        <div className="pt-11 text-white ">Kunden Hinzufugen</div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Title</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">VollName</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">KundenNummer</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Antivirus</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Zahlung</span>
          </div>
          <div className="col-span-9 flex">
            <div className="grid grid-cols-9">
              <div className="col-span-3 flex gap-3">
                <input type="checkbox" />
                <span className="mt-2">Datenspannlung</span>
                <input className="w-full h-7 mx-2 rounded mt-2" type="text" />
              </div>

              <div className="col-span-3 ml-5 flex gap-2">
                {" "}
                <input className="" type="checkbox" />
                <span className="mt-2">Zahlung für server</span>
              </div>
              <div className="col-span-3 flex gap-3 mr-10">
                <input className="" type="checkbox" />
                <span className="text-balance text-left overflow-hidden mt-2">Zahlung für neue Computer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Title</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Kontact</span>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-9 gap-3">
              <span className="col-span-5">
                <input className="w-full p-1 bg-slate-400 rounded" />
              </span>
              <span className="col-span-4">
                <input className="w-full p-1 bg-slate-400 rounded" />
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-3 gap-2">
          <span className="col-start-4 col-span-5">
            {" "}
            <input className="w-full p-1 bg-slate-400 rounded" />
          </span>
          <span className="col-span-4">
            {" "}
            <input className="w-full p-1 bg-slate-400 rounded" />
          </span>
        </div>
        <div className="grid grid-cols-12 mt-3">
          <span className="col-start-4 col-span-9">
            {" "}
            <input className="w-full p-1 bg-slate-400 rounded" />
          </span>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Title</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Title</span>
          </div>
          <div className="col-span-9">
            <textarea className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-start-4 col-span-9">
            <button className="w-full p-1 bg-green-700 rounded">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
