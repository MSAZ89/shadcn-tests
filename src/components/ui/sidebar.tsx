import React, { useState } from "react";

export default function Sidebar(props: any) {
  const initialSidebarItems = [
    { title: "Accordion", link: "#accordion" },
    { title: "Alert", link: "#alert" },
    { title: "Alert Dialogue", link: "#alertdialogue" },
    { title: "Hovercard", link: "#hovercard" },
  ];

  const [filter, setFilter] = useState<string>("");
  const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setFilter(inputValue);

    // Filter sidebar items based on the input value
    const filteredItems = initialSidebarItems.filter((item) =>
      item.title.toLowerCase().includes(inputValue)
    );

    setSidebarItems(filteredItems);
  };

  function resetFilter() {
    setFilter("");
    setSidebarItems(initialSidebarItems);
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Sidebar Items</h2>
      <input
        type="text"
        className="border"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />{" "}
      <br />
      <a
        className="mb-4 text-sm font-semibold"
        href="#"
        onClick={() => resetFilter()}
      >
        (reset search)
      </a>
      <p className="mb-4"></p>
      <div className="flex flex-col">
        {sidebarItems.map((item, index) => (
          <a onClick={() => props.onClick(index)} key={item.title} href="#">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
