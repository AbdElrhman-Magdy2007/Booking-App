
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
      question: "How do I cancel a booking?",
      answer: "To cancel a booking, log in to your account and go to 'My Bookings'. Find the booking you want to cancel and click the 'Cancel Booking' button. Please note that cancellation policies vary by hotel."
    },
    {
      question: "Are payments secure?",
      answer: "Yes, all payments are secure. We use Stripe, a PCI-compliant payment processor, to handle all transactions. Your payment information is encrypted and never stored on our servers."
    },
    {
      question: "How can I change my reservation dates?",
      answer: "Unfortunately, you cannot directly modify an existing booking. You'll need to cancel your current booking (if the cancellation policy allows) and make a new reservation with your preferred dates."
    },
    {
      question: "Do you offer refunds?",
      answer: "Refund policies depend on each hotel's terms and conditions. Some bookings are refundable up to a certain date before check-in, while others may be non-refundable. The refund policy is always clearly displayed before you complete your booking."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team through this contact form, by emailing support@stayhub.com, or by calling +1-800-123-4567. We're available 24/7 to assist you with any questions or concerns."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60" 
              alt="Hotel reception" 
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help you every step of the way.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Booking Issue">Booking Issue</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full md:w-auto"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-primary mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                        <p className="text-gray-600 mb-2">For inquiries and support:</p>
                        <a href="mailto:support@stayhub.com" className="text-secondary hover:text-secondary/80">
                          support@stayhub.com
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="text-primary mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-2">24/7 customer support:</p>
                        <a href="tel:+18001234567" className="text-secondary hover:text-secondary/80">
                          +1-800-123-4567
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-primary mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          StayHub Headquarters<br />
                          123 Travel Street<br />
                          Dubai, UAE
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Map placeholder - in a real app, this would be a Google Maps component */}
                <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-600">
                    [Google Map would be displayed here]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-center mb-12">Find quick answers to common questions</p>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for?
              </p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                variant="outline"
              >
                Contact Us Directly
              </Button>
            </div>
          </div>
        </section>
        
        {/* Live Chat notification - in a real app, this would be a Tawk.to widget or custom chat */}
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            className="bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary/90 transition-colors"
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
