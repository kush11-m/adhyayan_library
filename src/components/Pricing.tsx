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
    <section id="pricing" className="py-10 md:py-20 bg-background md:bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-6 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[19px] md:text-5xl font-serif font-bold text-text-primary mb-1 md:mb-4 tracking-[-0.01em] md:tracking-normal"
          >
            Choose Your Membership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[12.5px] md:text-lg text-text-secondary"
          >
            Flexible plans designed for every student.
          </motion.p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-8 items-center max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={clsx(
                "bg-cream md:glass p-[16px_14px] md:p-8 rounded-[10px] md:rounded-[32px] transition-all duration-300 relative w-full shadow-sm border-0",
                plan.highlighted ? "md:border-terracotta md:border-2 shadow-[0_8px_30px_rgba(201,107,75,0.08)] md:shadow-xl md:scale-105 z-10" : "md:border-transparent"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-[-9px] right-[14px] md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-burnt-orange md:bg-terracotta text-white md:text-cream text-[9.5px] md:text-xs font-bold md:font-semibold py-[3px] px-[8px] md:py-1 md:px-4 rounded-full md:shadow-md uppercase tracking-[0.04em] md:tracking-normal md:uppercase-none leading-none">
                  Most Popular
                </div>
              )}
              
              <div className="flex flex-row md:flex-col justify-between items-baseline mb-[10px] md:mb-8">
                <h3 className="text-[14.5px] md:text-2xl font-bold md:font-serif text-text-primary mb-0 md:mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-[16px] md:text-4xl font-bold text-terracotta md:text-text-primary">{plan.price}</span>
                  <span className="text-[10.5px] md:text-base text-text-secondary ml-1 md:ml-2 font-semibold md:font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-[5px] md:space-y-4 mb-[12px] md:mb-8">
                {plan.features.map((feature, fIndex) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + fIndex * 0.1 }}
                    key={fIndex} 
                    className="flex items-start text-text-secondary text-[12px] md:text-base"
                  >
                    <Check className="text-terracotta mr-1.5 md:mr-3 flex-shrink-0 mt-[2px] md:mt-0 w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="block w-full">
                <Link 
                  href={plan.href}
                  className={clsx(
                    "block w-full py-[9px] md:py-4 rounded-[7px] md:rounded-full font-bold md:font-medium text-[12.5px] md:text-base transition-colors duration-200 md:shadow-md text-center",
                    plan.highlighted 
                      ? "bg-burnt-orange text-white" 
                      : "bg-text-primary text-white"
                  )}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
