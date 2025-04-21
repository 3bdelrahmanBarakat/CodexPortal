import { motion } from "framer-motion";
import { CheckSquare, Code, Clock, Heart } from "lucide-react";
import { fadeIn, staggerContainer, cardFlip, cardContainer } from "@/lib/animation";
import { teamMembers, timelineItems, values, stats } from "@/data";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Codex</title>
        <meta name="description" content="Learn about the Codex journey, our talented team, and our values." />
      </Helmet>
      <div className="pt-24 bg-gradient-to-b from-primary to-black">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeIn("up", 0.1)}
              className="text-4xl md:text-6xl font-bold mb-6 font-montserrat text-white"
            >
              The Codex Journey
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Our story of innovation, growth, and digital transformation
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Timeline */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center font-montserrat text-gradient"
          >
            Our Story
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.1 * item.id)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold">{item.year.slice(-2)}</span>
                  </div>
                  <motion.div
                    variants={cardContainer}
                    whileHover="hover"
                    className={`timeline-item w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                    } p-6 bg-dark-blue/50 rounded-lg border border-primary/20 shadow-lg`}
                  >
                    <h3 className="text-xl font-bold mb-2 font-montserrat">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{item.year}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gradient-to-b from-black to-dark-blue">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center font-montserrat text-gradient"
          >
            Meet the Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeIn("up", 0.1 * member.id)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="card-flip h-80"
              >
                <motion.div
                  initial="front"
                  whileHover="back"
                  className="card-inner relative w-full h-full"
                  style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                >
                  <div
                    className="card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-dark-blue/60 flex flex-col items-center justify-center p-6 border border-primary/20"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-l font-bold font-montserrat">{member.name}</h4>
                    <p className="text-secondary-color text-sm">{member.position}</p>
                  </div>

                  <div
                    className="card-back absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-dark-blue/60 p-6 border border-primary/20"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <h3 className="text-lg font-bold mb-2 font-montserrat">{member.name}</h3>
                    <p className="text-secondary-color text-sm mb-4">{member.position}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      {member.socialLinks.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          className="text-secondary-color hover:text-accent transition-colors duration-300"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          className="text-secondary-color hover:text-accent transition-colors duration-300"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      )}
                      {member.socialLinks.github && (
                        <a
                          href={member.socialLinks.github}
                          className="text-secondary-color hover:text-accent transition-colors duration-300"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center font-montserrat text-gradient"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.id}
                variants={fadeIn("up", 0.1 * value.id)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-blue/30 backdrop-blur-sm border border-primary/20 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <i className={`fas fa-${value.icon.toLowerCase()} text-secondary-color text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 font-montserrat">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center font-montserrat text-gradient"
          >
            By the Numbers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              let Icon;
              switch (stat.icon) {
                case "CheckSquare":
                  Icon = CheckSquare;
                  break;
                case "Code":
                  Icon = Code;
                  break;
                case "Clock":
                  Icon = Clock;
                  break;
                case "Heart":
                  Icon = Heart;
                  break;
                default:
                  Icon = CheckSquare;
              }

              return (
                <motion.div
                  key={stat.id}
                  variants={fadeIn("up", 0.1 * stat.id)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-secondary-color h-8 w-8" />
                  </div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 0.2 * stat.id },
                    }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-2 font-montserrat text-white"
                  >
                    {stat.value}
                    {stat.id === 4 ? "%" : ""}
                  </motion.h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
