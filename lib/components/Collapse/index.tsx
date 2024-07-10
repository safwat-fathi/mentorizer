import { ReactNode } from "react";

type Props = {
  title: string;
  content: ReactNode;
  group?: string;
  defaultOpen?: boolean;
};

const Collapse = ({
  title,
  content,
  group = "collapse",
  defaultOpen,
}: Props) => {
  return (
    <div className="collapse collapse-arrow bg-white shadow-lg">
      <input type="radio" name={group} defaultChecked={defaultOpen} />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">{content}</div>
    </div>
  );
};

export default Collapse;
