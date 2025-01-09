import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Islamabad" invert={invert}>
          Coming Soon
          <br />
          Liberty Plaza, F-11 Markaz
        </Office>
      </li>
      <li>
        <Office name="Lahore" invert={invert}>
          Coming Soon
          <br />
          2nd Floor, Imporium Mall, Lahore
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
