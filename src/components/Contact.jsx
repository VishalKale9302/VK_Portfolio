import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { SOCIALS } from '../data/site';

const contactItems = [
  { icon: FiMail, label: 'Email', value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
  { icon: FiPhone, label: 'Phone', value: SOCIALS.phone, href: `tel:+91${SOCIALS.phone}` },
  { icon: FiMapPin, label: 'Location', value: SOCIALS.location, href: undefined },
  { icon: FiGithub, label: 'GitHub', value: 'VishalKale9302', href: SOCIALS.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'vishalkale31', href: SOCIALS.linkedin },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionTitle
          file="contact.jsx"
          eyebrow="08."
          title="Contact"
        />

        <div className="mt-14">
          <div className="mx-auto max-w-xl rounded-3xl border border-edge/10 bg-surface/50 p-4 shadow-sm">
            <motion.ul
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl bg-surface/50 p-4 transition-colors hover:border-accent/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] text-muted">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
