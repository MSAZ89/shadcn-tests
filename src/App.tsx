import { useState, ReactNode } from "react";
import Sidebar from "./components/ui/sidebar";
import Maccordion from "./components/content/maccordion";
import Malert from "./components/content/malert";
import Malertdialogue from "./components/content/malertdialogue";
import Mavatar from "./components/content/mavatar";
import Mhovercard from "./components/content/mhovercard";
import Mbadge from "./components/content/mbadge";
import Mbutton from "./components/content/mbutton";

function App() {
  const content: ReactNode[] = [
    <Maccordion />,
    <Malert />,
    <Malertdialogue />,
    <Mhovercard />,
    <Mavatar />,
    <Mbadge />,
    <Mbutton />,
  ];

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
