import React from "react";
import { Element } from "react-scroll";
import Customer from "./Customer.json"
import CustomerItem from "./CustomerItem.jsx";

const CustomerReviews = () => {
  return (
    <Element name="faq-section">
      <section className="bg-gray-50 dark:bg-gray-900 py-16" id="reviews">
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8">
            Opiniones de Clientes
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Customer.map((Customer, index) => (
              <CustomerItem key={index}  review={Customer.review} name={Customer.name} rating={Customer.rating}/>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default CustomerReviews;
