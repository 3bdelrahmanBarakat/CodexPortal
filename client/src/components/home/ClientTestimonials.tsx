import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { testimonials } from "@/data";

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`star-${i}`} className="text-secondary-color" />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key="half-star" className="text-secondary-color" />);
  }

  return stars;
};

const ClientTestimonials = () => {
  return null;
}

// const ClientTestimonials = () => {
//   return (
//     <section className="py-20 bg-black">
//       <div className="container mx-auto px-6">
//         <motion.div
//           variants={staggerContainer()}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             variants={fadeIn("up", 0.1)}
//             className="text-3xl md:text-5xl font-bold mb-4 font-montserrat text-gradient"
//           >
//             Client Testimonials
//           </motion.h2>
//           <motion.p
//             variants={fadeIn("up", 0.2)}
//             className="text-gray-300 max-w-2xl mx-auto"
//           >
//             Don't just take our word for it. Here's what our clients have to say about working with Codex.
//           </motion.p>
//         </motion.div>
        
//         <div className="relative overflow-hidden">
//           <motion.div
//             variants={staggerContainer(0.1, 0.3)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.25 }}
//             className="flex flex-wrap justify-center md:justify-center lg:justify-center testimonial-carousel gap-6 pb-6"
//           >
//             {testimonials.map((testimonial) => (
//               <motion.div
//                 key={testimonial.id}
//                 variants={fadeIn("up", 0.1 * testimonial.id)}
//                 className="testimonial-card max-w-[350px] mb-8 bg-dark-blue/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-primary/20"
//               >
//                 <div className="mb-4 flex">
//                   {renderStars(testimonial.rating)}
//                 </div>
//                 <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                     <img
//                       src={testimonial.image}
//                       alt={`Portrait of ${testimonial.name}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white">{testimonial.name}</h4>
//                     <p className="text-xs text-gray-400">{testimonial.position}, {testimonial.company}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default ClientTestimonials;
