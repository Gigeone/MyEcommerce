import logo from "@/images/logo.png";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ShoppingBasket } from "lucide-react";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import CartIcon from "./CartIcon";
import Container from "./Container";

const Header = async () => {
  const user = await currentUser();
  console.log(user);
  return (
    <header className="w-full bg-white py-4 border-b border-b-gray-400">
      <Container className="flex items-center justify-between gap-5">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-24" priority />
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Chercher un produit ..."
            className="bg-gray-50 text-gray-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-gray-200 w-full max-w-4xl rounded-md hoverEffect"
          />
        </Form>
        <div className="flex items-center gap-2.5">
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={"/orders"}
                className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect"
              >
                <ShoppingBasket className="text-2xl text-darkBlue" />
                <div className="flex flex-col">
                  <p className="text-xs">
                    <span className="font-semibold">0</span> items
                  </p>
                  <p className="font-semibold">Commandes</p>
                </div>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                <UserButton />
                <div className="text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md cursor-pointer hover:shadow-none hoverEffect">
                  <FiUser className="text-2xl text-darkBlue" />
                  <div className="flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
