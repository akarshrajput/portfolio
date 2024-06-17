import Link from "next/link";

const NavLink = ({ target = "", href, children, className }) => {
  return (
    <Link
      href={href}
      target={target}
      className={`${className} ${"flex items-center gap-1 hover:underline underline-offset-2 py-1 px-2 bg-stone-200 rounded-md"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
