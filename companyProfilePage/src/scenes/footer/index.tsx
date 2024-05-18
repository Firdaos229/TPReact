import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-footer-color py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
         <h1> JobHuntly</h1>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">About</h4>
          <p className="my-5">Compagnies</p>
          <p className="my-5">Pircing</p>
          <p className="my-5">Terms</p>
          <p className="my-5">Advice</p>
          <p>Privacy</p>
        </div>
       

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Ressources</h4>
          <p className="my-5">Help Docs</p>
          <p className="my-5">Guide</p>
          <p className="my-5">Update</p>
          <p className="my-5">ContactUs</p>
          <p>Privacy</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Get job notifications</h4>
          <p className="my-5">the latest job new articles sent to your imbox weekly.</p>
         
        </div>
      </div>
      <p> 2021 © JobHuntly All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
