import React from 'react';

const Footer = () => {
    return (
         <footer className="bg-black text-gray-300  px-8 py-12 ">
      
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-[1200px] mx-auto ">
          <div>
            <h3 className="text-white font-semibold mb-2">
            CS — Ticket System
            </h3>
            <p className="text-sm text-gray-500">
             A ticket system is a digital tool used to record, track, and manage tasks, issues, or requests. Every request (or problem) is converted into a ticket, and each ticket has a unique ID with details like the subject, description, status, priority, and assigned person.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
                </div>
               
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>support@cst.com</li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-white text-sm mt-8">
         © 2025 CS — Ticket System. 
          <br className="block md:hidden" /> All rights reserved.
        </div>

    </footer>
    );
};

export default Footer;