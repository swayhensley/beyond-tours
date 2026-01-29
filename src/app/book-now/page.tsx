"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Users, MapPin } from "lucide-react";

function BookingForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    guests: "1",
    duration: "",
    packageType: "",
    specialRequests: "",
  });

  useEffect(() => {
    const dest = searchParams.get("dest");
    const type = searchParams.get("type");

    if (dest || type) {
      setFormData((prev) => ({
        ...prev,
        destination: dest || prev.destination,
        packageType: type || prev.packageType,
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission - this would typically send to a backend
    console.log("Booking submitted:", formData);
    alert(
      "Thank you for your booking! We'll contact you shortly to confirm your reservation.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      guests: "1",
      duration: "",
      packageType: "",
      specialRequests: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 px-[8%]">
      <h1 className="text-5xl font-bold text-center mb-6">
        Book Your Adventure
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Ready to explore Kenya? Fill out the form below to start planning your
        perfect getaway.
      </p>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Booking Form</CardTitle>
            <CardDescription>
              Provide your details and we'll create a customized itinerary for
              you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium mb-2"
                    >
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="10+">10+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#e67e22]" />
                  Trip Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-sm font-medium mb-2"
                    >
                      Preferred Destination *
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none"
                    >
                      <option value="">Select a destination</option>
                      <option value="maasai-mara">Maasai Mara</option>
                      <option value="nairobi">Nairobi</option>
                      <option value="mombasa">Mombasa</option>
                      <option value="naivasha">Naivasha</option>
                      <option value="amboseli">Amboseli</option>
                      <option value="diani-beach">Diani Beach</option>
                      <option value="tsavo">Tsavo</option>
                      <option value="lamu">Lamu Island</option>
                      <option value="custom">
                        Custom/Multiple Destinations
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="packageType"
                      className="block text-sm font-medium mb-2"
                    >
                      Package Type *
                    </label>
                    <select
                      id="packageType"
                      name="packageType"
                      value={formData.packageType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none"
                    >
                      <option value="">Select package type</option>
                      <option value="safari">Wildlife Safari</option>
                      <option value="beach">Beach Getaway</option>
                      <option value="city">City Tour</option>
                      <option value="adventure">Adventure Package</option>
                      <option value="cultural">Cultural Experience</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="travelDate"
                      className="block text-sm font-medium mb-2"
                    >
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="duration"
                      className="block text-sm font-medium mb-2"
                    >
                      Duration (Days) *
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none"
                    >
                      <option value="">Select duration</option>
                      <option value="1">1 Day</option>
                      <option value="2">2 Days</option>
                      <option value="3">3 Days</option>
                      <option value="4">4 Days</option>
                      <option value="5">5 Days</option>
                      <option value="7">7 Days</option>
                      <option value="10">10 Days</option>
                      <option value="14">14 Days</option>
                      <option value="custom">Custom Duration</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-medium mb-2"
                >
                  Special Requests or Preferences
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about dietary restrictions, accommodation preferences, activities you'd like to include, etc."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#e67e22] hover:bg-[#d67219] text-white font-bold py-6 text-lg"
              >
                Submit Booking Request
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * A member of our team will contact you within 24 hours to
                confirm your booking and discuss payment options.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function BookNowPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center">Loading booking form...</div>
      }
    >
      <BookingForm />
    </Suspense>
  );
}
