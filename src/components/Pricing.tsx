"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const PLANS = [
  {
    name: "Basic Plan",
    price: "₹499",
    period: "/ Month",
    features: ["Daily Access", "WiFi Access", "Reading Area"],
    buttonText: "Choose Basic Plan",
    href: "/join?plan=basic",
    highlighted: false,
  },
  {
    name: "Monthly Pass (Standard)",
    price: "₹999",
    period: "/ Month",
    features: ["Everything in Basic", "Reserved Cabin Seat", "Individual Charging & Light", "Access to newspapers"],
    buttonText: "Choose Standard Pass",
    href: "/join?plan=standard",
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: "₹1499",
    period: "/ Month",
    features: ["Everything in Standard", "Private Locker Space", "Priority Cabin Selection", "Unlimited 24/7 Access"],
    buttonText: "Choose Premium Plan",
    href: "/join?plan=premium",
    highlighted: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4"
          >
            Choose Your Membership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            Flexible plans designed for every student.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={clsx(
                "glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] hover:-translate-y-2 transition-all duration-300 relative",
                plan.highlighted ? "border-terracotta border-2 shadow-xl md:scale-105 z-10" : "border-transparent"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-terracotta text-cream text-xs font-semibold py-1 px-4 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                <span className="text-text-secondary ml-2 font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-text-secondary">
                    <Check className="text-terracotta mr-3 flex-shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href={plan.href}
                className={clsx(
                  "block w-full py-4 rounded-full font-medium transition-colors duration-200 shadow-md text-center",
                  plan.highlighted 
                    ? "bg-terracotta text-cream hover:bg-burnt-orange" 
                    : "bg-text-primary text-cream hover:bg-terracotta"
                )}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
