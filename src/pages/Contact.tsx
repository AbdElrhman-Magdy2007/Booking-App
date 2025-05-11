
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, this would be a call to Supabase or an API endpoint
    // For now, we'll simulate a successful submission after a short delay
    setTimeout(() => {
      toast.success("Thank you for your message! We'll respond within 24 hours.");
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  // FAQ data
  const faqs = [
    {
      question: "How do I change my booking?",
      answer: "To modify a booking, log in to your account and go to 'My Bookings'. Find the booking you want to change and click the 'Modify Booking' button. Please note that modification policies vary by hotel and may incur additional fees."
    },
    {
      question: "Is my payment secure?",
      answer: "Yes, all payments are secure. We use Stripe, a PCI-compliant payment processor, to handle all transactions. Your payment information is encrypted and never stored on our servers."
    },
    {
      question: "How can I get a refund?",
      answer: "Refund policies depend on each hotel's terms and conditions. Some bookings are refundable up to a certain date before check-in, while others may be non-refundable. The refund policy is always clearly displayed before you complete your booking."
    },
    {
      question: "Do you offer special rates for long-term stays?",
      answer: "Yes, many of our hotel partners offer discounted rates for extended stays of 7 nights or more. These special rates will be automatically applied when you search with your desired stay duration."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team through this contact form, by emailing support@gmail.com, or by calling our 24/7 hotline at +971-50-123-4567. We're always ready to assist you with any questions or concerns."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with new teal wave pattern background */}
        <section className="relative bg-gradient-to-r from-[#2DD4BF] to-[#1E3A8A] text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill="#2DD4BF" 
                fillOpacity="0.2" 
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
              <path 
                fill="#1E3A8A" 
                fillOpacity="0.1" 
                d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,149.3C672,139,768,181,864,181.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60" 
              alt="Hotel reception" 
              className="w-full h-full object-cover opacity-10"
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in font-poppins">
              We're Here to Help You Travel Smarter
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-100 font-open-sans">
              Have questions or need assistance? Our team is ready to support your journey every step of the way.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-in-from-left">
                <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A] font-poppins">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="transition-all duration-300 transform hover:translate-y-[-2px]">
                    <Label htmlFor="name" className="font-open-sans">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF] transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="transition-all duration-300 transform hover:translate-y-[-2px]">
                    <Label htmlFor="email" className="font-open-sans">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@gmail.com"
                      className="border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF] transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="transition-all duration-300 transform hover:translate-y-[-2px]">
                    <Label htmlFor="subject" className="font-open-sans">Subject</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-[#2DD4BF] bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 font-open-sans"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Booking Support">Booking Support</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                  
                  <div className="transition-all duration-300 transform hover:translate-y-[-2px]">
                    <Label htmlFor="message" className="font-open-sans">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      className="border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF] transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full md:w-auto bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 hover:scale-105 transition-transform duration-300"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="animate-slide-in-from-right">
                <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A] font-poppins">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="p-6 border-[#2DD4BF]/30 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-[#F472B6] mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1 font-poppins">Email Us</h3>
                        <p className="text-gray-600 mb-2 font-open-sans">For inquiries and uesr:</p>
                        <a href="mailto:uesr@gmail.com" className="text-[#2DD4BF] hover:text-[#2DD4BF]/80 transition-colors font-open-sans">
                          uesr@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-[#2DD4BF]/30 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
                    <div className="flex items-start space-x-4">
                      <Phone className="text-[#F472B6] mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1 font-poppins">Call Us</h3>
                        <p className="text-gray-600 mb-2 font-open-sans">24/7 customer support:</p>
                        <a href="tel:+111-11-111-111" className="text-[#2DD4BF] hover:text-[#2DD4BF]/80 transition-colors font-open-sans">
                          +111-11-111-111
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-[#2DD4BF]/30 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-[#F472B6] mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1 font-poppins">Visit Us</h3>
                        <p className="text-gray-600 font-open-sans">
                          gmail Headquarters<br />
                          456 Ocean Road<br />
                          Dubai, UAE
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Map placeholder - in a real app, this would be a Google Maps component */}
                <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/20 to-[#1E3A8A]/20 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#F472B6] rounded-full animate-ping"></div>
                    <div className="w-4 h-4 bg-[#F472B6] rounded-full absolute"></div>
                  </div>
                  <p className="text-gray-600 z-10 font-open-sans">
                    [Interactive Google Map would be displayed here]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2 text-[#1E3A8A] font-poppins">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-center mb-12 font-open-sans">Find quick answers to common questions about our services</p>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#2DD4BF]/30">
                    <AccordionTrigger className="text-lg font-medium py-4 text-[#1E3A8A] hover:text-[#2DD4BF] transition-colors font-poppins">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 font-open-sans animate-accordion-down">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4 font-open-sans">
                Can't find what you're looking for?
              </p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#F472B6] hover:bg-[#F472B6]/90 hover:scale-105 transition-transform duration-300"
              >
                Contact Us Directly
              </Button>
            </div>
          </div>
        </section>
        
        {/* Live Chat notification - in a real app, this would be a Tawk.to widget or custom chat */}
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            className="bg-[#2DD4BF] text-white p-4 rounded-full shadow-lg hover:bg-[#2DD4BF]/90 hover:scale-110 transition-all duration-300"
            onClick={() => toast.info("Live chat functionality would open here.")}
            aria-label="Open live chat"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
            </svg>
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
