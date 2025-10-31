import payment from "@/images/payment.png";
import Image from "next/image";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-lightBg text-sm">
      <Container className="py-5">
        <footer className="flex items-center justify-between">
          <p className="text-gray-500">
            Copyright © 2024{" "}
            <span className="text-darkBlue font-semibold">reactBD</span> all
            rights reserved.
          </p>
          <Image src={payment} alt="payment" className="w-64 object-cover" />
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
