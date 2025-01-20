import { Timeline } from "@/components/ui/timeline";
import { toolsData } from "@/data";

export function Tools() {
  const data = toolsData.map((tool) => ({
    title: tool.title,
    content: (
      <div>
        <h2 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-2xl font-semibold">
          {tool.description}
        </h2>
        <div className="my-8 px-4 flex flex-col gap-2">
          {tool.features.map((item, idx) => (
            <div
              key={item + idx}
              className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-[15px] leading-[25px] sm:text-xl lg:text-lg"
            >
              ✅ {item}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center rounded-3xl">
          <img
            src={tool.imageSrc}
            alt={tool.altText}
            className="w-full rounded-3xl object-fill"
          />
        </div>
      </div>
    ),
  }));
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
