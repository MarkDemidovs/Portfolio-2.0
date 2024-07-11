interface SkillProps {
  title: string;
  items: string[];
}

export default function Skill({ title, items }: SkillProps) {
  return (
    <div className="bg-foreground rounded-2xl max-w-96 min-w-96 h-96 mt-7 ml-10">
      <h3 className="text-bigText w-fit text-xl mx-auto pt-3">{title}</h3>

      <div className="flex justify-center h-full">
        <ul className="text-offwhite mt-4 flex flex-col justify-between w-full px-4 h-full">
          {items.map((item, index) => (
            <li key={index} className="text-center">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
