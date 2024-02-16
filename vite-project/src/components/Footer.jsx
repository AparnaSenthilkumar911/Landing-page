import React from "react";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import ReactLogo from "./ReactLogo";

const Footer = () => {
  return (
    <footer className="mx-auto grid max-w-screen-xl gap-6 px-4 py-8 text-gray-300 lg:grid-cols-3">
      <div>
        <ReactLogo type="static" size={96} />
        <p className="pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptuous, permission? Some are chosen, 
        to follow the frequently chosen but the offices themselves, the reasons of pain are unknown,
        the discomfort, the inventor, the repeller of life's provisions.
        </p>

        <div className="flex">
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.facebook.com">
              <FaFacebookSquare size={36} />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.instagram.com">
              <FaInstagramSquare size={36} />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.twitter.com">
              <FaTwitterSquare size={36} />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.github.com">
              <FaGithubSquare size={36} />
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-around lg:col-span-2 lg:mt-20">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="footer-page-link">Analytics</li>
            <li className="footer-page-link">Marketing</li>
            <li className="footer-page-link">Pricing</li>
            <li className="footer-page-link">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="footer-page-link">Pricing</li>
            <li className="footer-page-link">Documentation</li>
            <li className="footer-page-link">Guides</li>
            <li className="footer-page-link">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="footer-page-link">About</li>
            <li className="footer-page-link">Blog</li>
            <li className="footer-page-link">Jobs</li>
            <li className="footer-page-link">Press</li>
            <li className="footer-page-link">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="footer-page-link">Claim</li>
            <li className="footer-page-link">Policy</li>
            <li className="footer-page-link">Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
