import React, { useState, FormEvent, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import './Contact.scss';

// Конфигурация EmailJS с реальными идентификаторами
const EMAILJS_SERVICE_ID = 'service_opl6yl7';
const EMAILJS_TEMPLATE_ID = 'template_rr2uorr';
const EMAILJS_PUBLIC_KEY = '8X3t90uKxi8h9O03P';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  // Флаг для выбора прямой отправки через mailto
  const [useDirectEmail, setUseDirectEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Если выбран режим прямой отправки
    if (useDirectEmail) {
      handleDirectEmail();
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Используем формат из примера EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: formState.subject,
          name: formState.user_name,
          time: new Date().toLocaleTimeString(),
          message: formState.message,
          email: formState.user_email,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      // Успешная отправка
      setIsSubmitted(true);
      // Сбрасываем форму
      setFormState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });

      // Через 3 секунды скрываем сообщение об успешной отправке
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(`${t.contact.error} ${err instanceof Error ? err.message : ''}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Запасной вариант - прямая отправка через mailto
  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formState.subject);
    const body = encodeURIComponent(
      `Имя: ${formState.user_name}\nEmail: ${formState.user_email}\n\n${formState.message}`
    );
    window.location.href = `mailto:sailaukhanbeknur@gmail.com?subject=${subject}&body=${body}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section__title">
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t.contact.title}
            </motion.span>
          </AnimatePresence>
        </h2>
        
        <motion.div 
          className="contact__container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="contact__info"
            variants={itemVariants}
          >
            <h3 className="contact__subtitle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={language}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t.contact.contactInfo}
                </motion.span>
              </AnimatePresence>
            </h3>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FaEnvelope />
              </div>
              <div className="contact__info-content">
                <h4>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {t.contact.email}
                    </motion.span>
                  </AnimatePresence>
                </h4>
                <a href="mailto:sailaukhanbeknur@gmail.com">sailaukhanbeknur@gmail.com</a>
              </div>
            </div>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FaPhone />
              </div>
              <div className="contact__info-content">
                <h4>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {t.contact.phone}
                    </motion.span>
                  </AnimatePresence>
                </h4>
                <a href="tel:+77765311600">+7 (776) 531-1600</a>
              </div>
            </div>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact__info-content">
                <h4>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {t.contact.location}
                    </motion.span>
                  </AnimatePresence>
                </h4>
                <p>Алматы, Казахстан</p>
              </div>
            </div>
            
            <div className="contact__social">
              <a href="https://github.com/ne0teny" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <FaGithub />
              </a>
              <a href="#linkedin" className="contact__social-link">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact__form-container"
            variants={itemVariants}
          >
            <h3 className="contact__subtitle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={language}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t.contact.sendMessage}
                </motion.span>
              </AnimatePresence>
            </h3>
            
            {isSubmitted ? (
              <motion.div 
                className="contact__success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={language}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t.contact.success}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            ) : (
              <>
                <div className="contact__send-methods">
                  <button
                    type="button"
                    className={`contact__method-btn ${!useDirectEmail ? 'active' : ''}`}
                    onClick={() => setUseDirectEmail(false)}
                  >
                    Через форму
                  </button>
                  <button
                    type="button"
                    className={`contact__method-btn ${useDirectEmail ? 'active' : ''}`}
                    onClick={() => setUseDirectEmail(true)}
                  >
                    Напрямую (открыть почту)
                  </button>
                </div>
                
                <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__form-group">
                    <input 
                      type="text" 
                      id="user_name" 
                      name="user_name" 
                      placeholder={t.contact.yourName}
                      value={formState.user_name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="contact__form-group">
                    <input 
                      type="email" 
                      id="user_email" 
                      name="user_email" 
                      placeholder={t.contact.yourEmail}
                      value={formState.user_email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="contact__form-group">
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder={t.contact.subject}
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="contact__form-group">
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder={t.contact.message}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="contact__error">
                      <p>{error}</p>
                      <p className="contact__error-help">
                        Для работы формы нужно зарегистрироваться на <a href="https://www.emailjs.com" target="_blank" rel="noreferrer">emailjs.com</a> и обновить ID в коде. 
                        Пока что используйте кнопку "Напрямую" выше.
                      </p>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className={`btn contact__submit ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${language}-${isSubmitting}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {useDirectEmail ? 'Открыть почтовый клиент' : isSubmitting ? t.contact.sending : t.contact.send}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </form>
              </>
            )}
            <div className="contact__email-note">
              <AnimatePresence mode="wait">
                <motion.p
                  key={language}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t.contact.emailNote}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 