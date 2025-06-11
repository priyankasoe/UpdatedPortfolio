import {
    Instagram,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { useToast } from "@/hooks/use-toast";
  import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faInstagram, faTwitch } from "@fortawesome/free-brands-svg-icons";
  
  export const ContactSection = () => {
    // const { toast } = useToast();
    // const [isSubmitting, setIsSubmitting] = useState(false);
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   setIsSubmitting(true);
  
    //   setTimeout(() => {
    //     toast({
    //       title: "Message sent!",
    //       description: "Thank you for your message. I'll get back to you soon.",
    //     });
    //     setIsSubmitting(false);
    //   }, 1500);
    // };
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            for more <span className="text-primary"> contact </span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            If you have any further questions, or want to discuss highly theoretical and arguably useless topics.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4 text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:prisoe36@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    prisoe36@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4 text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+17607049635"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (760) 704-9635
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4 text-left">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    San Diego, CA (currently) <br />
                    or West Lafayette, IN (usually)
                  </a>
                </div>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="flex flex-col items-center">
              <h4 className="font-medium mb-4 text-center">let's connect!</h4>
              <a href="https://www.linkedin.com/in/priyanka-soe" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-primary hover:text-primary/80 transition-colors duration-300"
                  style={{ fontSize: "32px" }} // Adjust the size here
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };