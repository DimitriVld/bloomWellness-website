"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import { MailIcon, InstagramIcon, SendIcon } from "@/components/ui/Icons";
import styles from "./Contact.module.css";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section ref={ref} id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.inner}`}>
        {/* Left column */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <span className="label">Contact</span>
          <h2 className={styles.title}>Échangeons.</h2>
          <p className={`${styles.intro} body-text`}>
            Une question, une suggestion, un bug&nbsp;? Je lis et réponds à
            chaque message personnellement.
          </p>

          <div className={styles.links}>
            <a
              href="mailto:contact@bloomwellness.app"
              className={styles.contactLink}
            >
              <span className={styles.linkIcon}>
                <MailIcon size={18} />
              </span>
              contact@bloomwellness.app
            </a>
            <a
              href="https://instagram.com/bloomwellness.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.linkIcon}>
                <InstagramIcon size={18} />
              </span>
              @bloomwellness.app
            </a>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=260&fit=crop"
            alt="Workspace"
            width={500}
            height={260}
            className={styles.decoImg}
            loading="lazy"
          />
        </motion.div>

        {/* Right column — form */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.12 }}
        >
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Ton prénom"
                  autoComplete="name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="ton@email.com"
                  autoComplete="email"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="subject" className={styles.label}>
                  Sujet
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={styles.input}
                  placeholder="Question, suggestion, bug..."
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Dis-moi tout..."
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                fullWidth
                icon={<SendIcon size={16} />}
              >
                Envoyer
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
