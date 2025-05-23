import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RectangleEllipsis, Phone, MapPin, ArrowRight, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { contactInfo } from "@/data";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("contactInfo.socialLinks:", contactInfo.socialLinks); // Debug social links

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={fadeIn("up", 0.1)}
              className="text-3xl md:text-5xl font-bold mb-6 font-montserrat text-gradient"
            >
              Let's Build Something Great
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-gray-300 mb-8 max-w-lg"
            >
              Ready to transform your ideas into reality? Get in touch with our team to discuss your project and discover how we can help you succeed.
            </motion.p>
            
            <motion.div
              variants={staggerContainer(0.1, 0.3)}
              className="space-y-6 mb-8"
            >
              <motion.div
                variants={fadeIn("up", 0.3)}
                className="flex items-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <RectangleEllipsis className="secondary-color h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Us</h4>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn("up", 0.4)}
                className="flex items-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <Phone className="secondary-color h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call Us</h4>
                  <p className="text-gray-300">{contactInfo.phone}</p>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn("up", 0.5)}
                className="flex items-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <MapPin className="secondary-color h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Visit Us</h4>
                  <p className="text-gray-300">{contactInfo.address}</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={fadeIn("up", 0.6)}
              className="flex space-x-4 relative z-50 pointer-events-auto isolate"
              style={{ pointerEvents: "auto", isolation: "isolate" }}
            >
              <a
                href="https://www.instagram.com/codexsolutions_?igsh=dDZ1cjN4Z3lkeGht&utm_source=qr"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center secondary-color hover:bg-primary/30 hover:accent-color transition-all duration-300 relative z-60 pointer-events-auto !cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/18ZrzsXMY6/?mibextid=wwXIfr"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center secondary-color hover:bg-primary/30 hover:accent-color transition-all duration-300 relative z-60 pointer-events-auto !cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@codex.solutions?_t=ZS-8visP6Ryob2&_r=1"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center secondary-color hover:bg-primary/30 hover:accent-color transition-all duration-300 relative z-60 pointer-events-auto !cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok className="h-5 w-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=201288944409"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center secondary-color hover:bg-primary/30 hover:accent-color transition-all duration-300 relative z-60 pointer-events-auto !cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-dark-blue/40 backdrop-blur-sm rounded-lg p-8 border border-primary/20 shadow-lg"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-300">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="px-4 py-3 bg-gray-900 text-white border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                          placeholder="John Doe"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="px-4 py-3 bg-gray-900 text-white border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                          placeholder="john@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-300">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 bg-darkest border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 text-white">
                            <SelectValue placeholder="Select your project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-900 border border-primary/30 text-white">
                          <SelectItem value="web" className="bg-gray-900 hover:bg-primary/20 text-white">Web Development</SelectItem>
                          <SelectItem value="mobile" className="bg-gray-900 hover:bg-primary/20 text-white">Mobile App</SelectItem>
                          <SelectItem value="ai" className="bg-gray-900 hover:bg-primary/20 text-white">AI & Automation</SelectItem>
                          <SelectItem value="design" className="bg-gray-900 hover:bg-primary/20 text-white">UX/UI Design</SelectItem>
                          <SelectItem value="consulting" className="bg-gray-900 hover:bg-primary/20 text-white">Software Consulting</SelectItem>
                          <SelectItem value="other" className="bg-gray-900 hover:bg-primary/20 text-white">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-300">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          className="px-4 py-3 bg-gray-900 text-white border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-md hover:opacity-90 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;