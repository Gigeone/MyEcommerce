"use client";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
const CartIcon = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Link
      href={"/cart"}
      className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect"
    >
      <ShoppingBag className="text-2xl text-darkBlue" />
      <div className="flex flex-col">
        <p className="text-xs">
          <span className="font-semibold">0</span> produit
        </p>
        <p className="font-semibold">Panier</p>
      </div>
    </Link>
  );
};

export default CartIcon;
