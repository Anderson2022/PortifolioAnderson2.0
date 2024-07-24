"use client";


import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { useState } from "react";
import { cn } from "../../libs/utils/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../Ui/animated-modal";



export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full z-50"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <a className="relative">
            <Card>
              <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn ">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    Book your flight
                  </span>
                  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center relative inset-0 transition duration-500 text-white z-20">
                    ✈️
                  </div>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                      Book your trip to{" "}
                      <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                        Bali
                      </span>{" "}
                      now! ✈️
                    </h4>
                    <div className="flex justify-center items-center">

                    </div>
                    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto z-40">
                      <div className="flex  items-center justify-center">

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          5 connecting flights
                        </span>
                      </div>
                      <div className="flex items-center justify-center">

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          12 hotels
                        </span>
                      </div>
                      <div className="flex items-center justify-center">

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          69 visiting spots
                        </span>
                      </div>
                      <div className="flex  items-center justify-center">

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          Good food everyday
                        </span>
                      </div>
                      <div className="flex items-center justify-center">

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          Open Mic
                        </span>
                      </div>
                      <div className="flex items-center justify-center">

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          Paragliding
                        </span>
                      </div>
                    </div>
                  </ModalContent>
                  <ModalFooter className="gap-4">
                    <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                      Cancel
                    </button>
                    <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                      Book Now
                    </button>
                  </ModalFooter>
                </ModalBody>
              </Modal>

            </Card>
          </a>

        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 z-50",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};