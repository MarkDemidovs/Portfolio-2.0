interface SkillProps {
  title: string;
  items: string[];
}

export default function Skill({ title, items }: SkillProps) {
  return (
    <div className="bg-foreground rounded-2xl max-w-96 min-w-96 h-96 mt-7 ml-10 p-4 flex flex-col">
      <h3 className="text-bigText w-fit text-xl mx-auto pt-3">{title}</h3>
      <ul className="text-offwhite mt-4 flex flex-col justify-between flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}
