"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Calendar, DollarSign, Heart, Quote, Sparkles, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Classes", id: "classes" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="FlexFit Studio"
          button={{
            text: "Book Class",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Body & Mind"
          description="Join our welcoming community of women discovering strength, flexibility, and inner peace through personalized pilates classes."
          tag="Women's Pilates Studio"
          tagIcon={Heart}
          buttons={[
            {
              text: "Book Your First Class",
              href: "contact"
            },
            {
              text: "View Classes",
              href: "classes"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/901439/pexels-photo-901439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Women practicing pilates in a peaceful studio environment"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why FlexFit Studio"
          description={[
            "We believe every woman deserves a space where she can focus on her wellness journey without judgment. Our studio offers a supportive environment where you can build strength, improve flexibility, and connect with your body.",
            "Our experienced instructors provide personalized attention in small classes, ensuring you get the most out of every session while moving at your own pace."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="classes" data-section="classes">
        <FeatureCardOne
          title="Our Classes"
          description="Choose from a variety of pilates classes designed specifically for women at every fitness level"
          tag="Class Options"
          tagIcon={Star}
          features={[
            {
              title: "Mat Pilates",
              description: "Floor-based exercises focusing on core strength, flexibility, and body awareness using your own body weight",
              imageSrc: "https://images.pexels.com/photos/6246493/pexels-photo-6246493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Women doing mat pilates exercises"
            },
            {
              title: "Reformer Pilates",
              description: "Equipment-based training that provides resistance and support for deeper muscle engagement and precise movements",
              imageSrc: "https://images.pexels.com/photos/1103201/pexels-photo-1103201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Women using pilates reformer machines"
            },
            {
              title: "Prenatal Pilates",
              description: "Specially designed classes for expecting mothers to maintain strength and flexibility throughout pregnancy",
              imageSrc: "https://images.pexels.com/photos/3984367/pexels-photo-3984367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pregnant women in prenatal pilates class"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Options"
          description="Flexible pricing plans designed to fit your lifestyle and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "drop-in",
              badge: "Flexible",
              badgeIcon: Sparkles,
              price: "$35",
              subtitle: "Perfect for trying us out",
              buttons: [
                {
                  text: "Book Single Class",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ],
              features: [
                "Single class access",
                "All equipment included",
                "Beginner-friendly",
                "No commitment required"
              ]
            },
            {
              id: "monthly",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$189/month",
              subtitle: "Unlimited classes for committed practice",
              buttons: [
                {
                  text: "Start Membership",
                  href: "contact"
                },
                {
                  text: "Chat with Us",
                  href: "contact"
                }
              ],
              features: [
                "Unlimited monthly classes",
                "All class types included",
                "Priority booking",
                "Wellness workshops included",
                "Community events access"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Your Instructors"
          description="Our certified instructors bring years of experience and passion for women's wellness"
          tag="Expert Team"
          tagIcon={Users}
          members={[
            {
              id: "sarah",
              name: "Sarah Mitchell",
              role: "Lead Instructor",
              imageSrc: "https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell, Lead Pilates Instructor"
            },
            {
              id: "emma",
              name: "Emma Rodriguez",
              role: "Prenatal Specialist",
              imageSrc: "https://images.pexels.com/photos/3822194/pexels-photo-3822194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez, Prenatal Pilates Specialist"
            },
            {
              id: "maya",
              name: "Maya Chen",
              role: "Reformer Expert",
              imageSrc: "https://images.pexels.com/photos/7500665/pexels-photo-7500665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maya Chen, Reformer Pilates Expert"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Members Say"
          description="Real stories from women who have transformed their wellness journey with us"
          tag="Success Stories"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Adams",
              role: "Marketing Manager",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Lisa Thompson",
              role: "Working Mom",
              company: "Freelancer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Maria Gonzalez",
              role: "Small Business Owner",
              company: "Local Cafe",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5119202/pexels-photo-5119202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Rebecca Kim",
              role: "New Mom",
              company: "Healthcare",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Calendar}
          title="Ready to Begin Your Journey?"
          description="Book your first class today and discover the transformative power of pilates in our supportive women-only environment."
          imageSrc="https://images.pexels.com/photos/6926605/pexels-photo-6926605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Welcoming pilates studio reception area"
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By signing up, you agree to receive class updates and wellness tips. Unsubscribe anytime."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Classes",
              items: [
                {
                  label: "Mat Pilates",
                  href: "classes"
                },
                {
                  label: "Reformer Pilates",
                  href: "classes"
                },
                {
                  label: "Prenatal Pilates",
                  href: "classes"
                },
                {
                  label: "Private Sessions",
                  href: "contact"
                }
              ]
            },
            {
              title: "Studio",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Instructors",
                  href: "team"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Schedule",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Membership",
                  href: "pricing"
                },
                {
                  label: "New Member Guide",
                  href: "about"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | FlexFit Studio"
        />
      </div>
    </ThemeProvider>
  );
}