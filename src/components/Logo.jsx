import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, fillOnHover, ...props }) => {
  // Construct the className dynamically
  className = clsx(
    className,
    "black",
    invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600"
  );

  const inner = <span className="relative">{children}</span>;

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
