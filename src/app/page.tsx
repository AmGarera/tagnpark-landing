// app/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  Car,
  Building2,
  Shield,
  Clock,
  DollarSign,
  Settings,
  Check,
  Smartphone,
  ScanLine,
  ClipboardList,
  Globe,
  Download,
  Wifi,
  ZapOff,
  Share2,
  Plus,
  BookmarkPlus,
  Apple,
  Bot,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface PWABenefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  /**
   * Handles the form submission event.
   *
   * This function prevents the default form submission behavior, submits the email to the proxy endpoint,
   * updates the state to indicate that the form has been submitted, and clears the email input field.
   *
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    try {
      // Call the proxy endpoint to add the contact
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: "", // Add first name if available
          last_name: "", // Add last name if available
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit email");
      }

      // Update the state to indicate that the form has been submitted
      setSubmitted(true);

      // Clear the email input field
      setEmail("");
    } catch (err) {
      // Handle errors and update the error state
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const pwaBenefits: PWABenefit[] = [
    {
      icon: Globe,
      title: "No App Store Required",
      description:
        "Access instantly through your web browser - no downloads or updates needed",
    },
    {
      icon: Wifi,
      title: "Works Offline",
      description:
        "Continue managing parking even with poor internet connection",
    },
    {
      icon: ZapOff,
      title: "Light & Fast",
      description:
        "Uses minimal phone storage and battery compared to traditional apps",
    },
  ];

  const saveToHomeInstructions = {
    ios: [
      {
        icon: Share2,
        text: "Tap the Share button in Safari",
      },
      {
        icon: Plus,
        text: "Select 'Add to Home Screen'",
      },
    ],
    android: [
      {
        icon: BookmarkPlus,
        text: "Tap the menu (⋮) in Chrome",
      },
      {
        icon: Download,
        text: "Select 'Add to Home Screen'",
      },
    ],
  };

  const features: Feature[] = [
    {
      icon: Settings,
      title: "Minimal Setup",
      description:
        "Get your parking management system up and running in minutes, not days",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description:
        "Affordable monthly pricing that scales with your property size",
    },
    {
      icon: Shield,
      title: "Secure & Simple",
      description: "Easy-to-use system for both management and residents",
    },
  ];

  const howItWorks: Feature[] = [
    {
      icon: ClipboardList,
      title: "1. Register Your Property",
      description:
        "Sign up and configure your parking zones and rules in minutes",
    },
    {
      icon: Smartphone,
      title: "2. Residents Download App",
      description:
        "Residents easily register their vehicles and manage visitor parking",
    },
    {
      icon: ScanLine,
      title: "3. Start Monitoring",
      description:
        "Instantly identify unauthorized vehicles and manage violations",
    },
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: "Small Property",
      price: "49",
      description: "Perfect for properties under 50 units",
      features: [
        "Up to 50 parking spaces",
        "Unlimited resident registrations",
        "Basic violation tracking",
        "Email support",
      ],
    },
    {
      name: "Medium Property",
      price: "99",
      description: "Ideal for properties with 50-200 units",
      features: [
        "Up to 200 parking spaces",
        "Unlimited resident registrations",
        "Advanced violation management",
        "Priority email support",
        "Visitor parking management",
      ],
    },
    {
      name: "Large Property",
      price: "199",
      description: "For large communities and complexes",
      features: [
        "Unlimited parking spaces",
        "Unlimited resident registrations",
        "Full violation management suite",
        "24/7 priority support",
        "Custom rules and zones",
        "Analytics dashboard",
      ],
    },
  ];

  const HowItWorksSection = () => {
    const [activeDevice, setActiveDevice] = useState(null);

    // Animation variants
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    };

    const iconVariants = {
      hover: {
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.2 },
      },
    };

    const screencastVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
      },
    };

    return (
      <div className="mt-32">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16"
        >
          How It Works
        </motion.h2>

        {/* Main steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 relative overflow-hidden">
                <motion.div variants={iconVariants} whileHover="hover">
                  <step.icon className="h-8 w-8 text-blue-500 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-blue-50 rounded-full opacity-20" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* PWA Benefits Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Web App Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pwaBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 bg-blue-50 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="h-6 w-6 text-blue-500 mb-3" />
                  </motion.div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Save to Home Screen Instructions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Save to Your Home Screen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* iOS Instructions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveDevice("ios")}
            >
              <Card className="p-6 cursor-pointer">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Apple className="mr-2 rounded" size={24} />
                  iPhone / iPad
                </h4>
                <div className="space-y-4">
                  {saveToHomeInstructions.ios.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <step.icon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-600">{step.text}</span>
                    </motion.div>
                  ))}
                </div>
                {activeDevice === "ios" && (
                  <motion.div
                    variants={screencastVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-4"
                  >
                    <Apple className="rounded-lg shadow-lg" size={250} />
                  </motion.div>
                )}
              </Card>
            </motion.div>

            {/* Android Instructions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveDevice("android")}
            >
              <Card className="p-6 cursor-pointer">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Bot className="mr-2 rounded" size={24} />
                  Android
                </h4>
                <div className="space-y-4">
                  {saveToHomeInstructions.android.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <step.icon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-600">{step.text}</span>
                    </motion.div>
                  ))}
                </div>
                {activeDevice === "android" && (
                  <motion.div
                    variants={screencastVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-4"
                  >
                    <Bot className="rounded-lg shadow-lg" size={250} />
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Final Callout */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block p-4 bg-gradient-to-r from-blue-50 to-blue-100">
            <motion.p className="text-gray-700" whileHover={{ scale: 1.05 }}>
              <span className="font-semibold">Visit</span>{" "}
              <motion.span
                className="font-mono bg-white px-2 py-1 rounded"
                whileHover={{ backgroundColor: "#f0f9ff" }}
              >
                app.tagnpark.com
              </motion.span>{" "}
              <span className="font-semibold">to get started!</span>
            </motion.p>
          </Card>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Tag N Park
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Streamline parking management for your apartment complex or HOA with
            our simple, affordable solution.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
          <Card className="p-6 flex-1 text-center">
            <Building2 className="h-8 w-8 mx-auto text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold">For Properties</h3>
            <p className="text-gray-600 mt-2">
              Perfect for apartments and HOAs of any size
            </p>
          </Card>
          <Card className="p-6 flex-1 text-center">
            <Car className="h-8 w-8 mx-auto text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold">For Residents</h3>
            <p className="text-gray-600 mt-2">
              Easy registration and visitor parking management
            </p>
          </Card>
          <Card className="p-6 flex-1 text-center">
            <Clock className="h-8 w-8 mx-auto text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold">Quick Setup</h3>
            <p className="text-gray-600 mt-2">
              Start managing parking in minutes
            </p>
          </Card>
        </div>

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Pricing Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="p-6 flex flex-col">
                <div>
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">${tier.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-6">
                  <Button className="w-full">Get Started</Button>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Need a custom plan? Contact us for enterprise pricing.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <feature.icon className="h-6 w-6 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Waitlist Signup */}
        <div className="mt-32">
          <Card className="max-w-xl mx-auto p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Get Early Access
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Join the waitlist to secure special launch pricing for your
                  property
                </p>
                <div className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit">
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {error && (
                  <p className="text-red-500 text-center mt-4">
                    Error: {error}
                  </p>
                )}
              </form>
            ) : (
              <div className="text-center space-y-4">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto" />
                <h2 className="text-2xl font-bold">You&#39;re on the list!</h2>
                <p className="text-gray-600">
                  We&#39;ll contact you soon with early access details.
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-500">
          <p>© 2024 Tag N Park. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
