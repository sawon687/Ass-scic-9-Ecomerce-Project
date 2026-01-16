import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ name, to }) => {
  const pathname = usePathname(); // current path

  const isActive = pathname === to;

  return (
    <li>
      <Link
        href={to}
        className={`${
          isActive ? "text-green-500 font-bold" : "hover:text-green-600"
        } cursor-pointer`}
      >
        {name}
      </Link>
    </li>
  );
};

export default Navlink;
