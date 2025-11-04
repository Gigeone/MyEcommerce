import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-lightBg text-sm">
      <Container className="py-5">
        <footer className="flex justify-content items-center justify-around">
          <p className="text-gray-500">
            Copyright © 2025{" "}
            <span className="text-darkBlue font-semibold">MathGH</span> all
            rights reserved.
          </p>
          {/* <Image src={payment} alt="payment" className="w-64 object-cover" /> */}
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
