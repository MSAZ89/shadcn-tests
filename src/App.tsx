import { useState, ReactNode } from "react";
import Sidebar from "./components/ui/sidebar";
import Mhovercard from "./components/content/mhovercard";
import Maccordion from "./components/content/maccordion";

function App() {
  const content: ReactNode[] = [<Maccordion />, <Mhovercard />];

  const [selectedContent, setSelectedContent] = useState<ReactNode | null>(
    null
  );

  const handleSidebarItemClick = (index: number) => {
    setSelectedContent(content[index]);
  };

  return (
    <>
      <div className="bg-slate-400 flex">
        <div className="lg:w-1/6 w-1/2 bg-white h-screen p-4">
          <Sidebar onClick={handleSidebarItemClick} />
        </div>
        <div className="lg:w-5/6 w-1/2 bg-slate-800 p-4 text-white">
          {selectedContent || "Select an item to display content."}
        </div>
      </div>
    </>
  );
}

export default App;
