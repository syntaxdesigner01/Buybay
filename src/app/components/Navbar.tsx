import { HiMenuAlt1 } from "react-icons/hi";

export default function Navbar() {
  return (
    <section className="pt-10">
      <section>
        <button className="bg-primary text-white px-4 font-[500] flex p-2 items-center  gap-4">
          <HiMenuAlt1 className="text-white" />
          <select name="" id="" className="outline-none bg-primary">
            <option value="">All Categories </option>
            <option value="">Electronics</option>
            <option value="">Clothing</option>
            <option value="">Books</option>
            <option value="">Home & Garden</option>
            <option value="">Sports & Outdoors</option>
            <option value="">Other</option>
          </select>
        </button>
      </section>


<nav>
    
</nav>


    </section>
  );
}
