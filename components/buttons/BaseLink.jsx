import Link from "next/link";

const BaseLink = ({ target = "", href = "", children, className }) => {
  return (
    <mark className="bg-transparent">
      <Link
        href={href}
        target={target}
        className={`${className} ${"flex items-center gap-1 w-fit px-2 p-0.5 rounded-sm  border-blue-300 text-stone-50 bg-green-900"}`}
      >
        {children}
      </Link>
    </mark>
  );
};

export default BaseLink;
