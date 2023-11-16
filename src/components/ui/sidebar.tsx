export default function Sidebar(props: any) {
  const sidebarItems = [
    { title: "Accordion", link: "#accordion" },
    { title: "Alert", link: "#alert" },
    { title: "Alert Dialogue", link: "#alertdialogue" },
    { title: "Hovercard", link: "#hovercard" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Sidebar Items</h2>
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
