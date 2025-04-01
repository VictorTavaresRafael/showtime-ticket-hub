
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">About ShowTime</h1>
              <div className="prose prose-lg">
                <p className="mb-4">
                  ShowTime is your premier destination for finding and booking tickets to the best events in town.
                  From concert tickets to sports games, theater performances to comedy shows, we've got you covered.
                </p>
                <p className="mb-4">
                  Founded in 2023, our mission is to connect event enthusiasts with unforgettable experiences. 
                  We believe that life's best moments happen when we come together to celebrate art, music, 
                  sports, and culture.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
                <p className="mb-4">
                  To be the most trusted and convenient platform for discovering and attending live events worldwide.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">What Sets Us Apart</h2>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Curated selection of high-quality events</li>
                  <li className="mb-2">Seamless booking experience</li>
                  <li className="mb-2">No hidden fees or surprises</li>
                  <li className="mb-2">Exceptional customer support</li>
                  <li className="mb-2">Secure transactions and ticket delivery</li>
                </ul>
                <p className="mb-4">
                  Whether you're a music enthusiast, sports fan, theater lover, or just looking for something fun to do this weekend, 
                  ShowTime makes it easy to find and book the perfect event.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
