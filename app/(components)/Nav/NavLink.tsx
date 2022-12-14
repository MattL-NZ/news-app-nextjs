import { NavLinkProps } from "../../../core/types/componentTypes";
import Link from "next/link";

export default function NavLink({ category, isActive }: NavLinkProps) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}
