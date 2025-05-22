export type Language = 'ru' | 'en';

export interface Translations {
  header: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
    resume: string;
  };
  about: {
    title: string;
    firstName: string;
    lastName: string;
    subtitle: string;
    description: string;
    scrollDown: string;
    contact: string;
    myExperience: string;
  };
  experience: {
    title: string;
    companies: {
      [key: string]: {
        title: string;
        location: string;
        description: string;
      }
    };
  };
  education: {
    title: string;
    degrees: {
      [key: string]: {
        degree: string;
        institution: string;
        field?: string;
      }
    };
  };
  skills: {
    title: string;
    categories: {
      frontend: string;
      tools: string;
      languages: string;
    };
    additional: string;
  };
  contact: {
    title: string;
    contactInfo: string;
    email: string;
    phone: string;
    location: string;
    sendMessage: string;
    yourName: string;
    yourEmail: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    emailNote: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    header: {
      about: 'Обо мне',
      experience: 'Опыт',
      education: 'Образование',
      skills: 'Навыки',
      contact: 'Контакты',
      resume: 'Резюме'
    },
    about: {
      title: 'Сайлаухан Бекнур Курманайулы',
      firstName: 'Сайлаухан Бекнур',
      lastName: 'Курманайулы',
      subtitle: 'Frontend-разработчик',
      description: 'Привет! Меня зовут Бекнур, я фронтенд-разработчик с четырёхлетним опытом. Занимаюсь разработкой как веб-приложений, так и мобильных — работаю с React, React Native и Flutter. Умею быстро вливаться в команду, разбираться в чужом коде и доводить фичи до продакшена без лишнего шума.',
      scrollDown: 'Прокрутите вниз',
      contact: 'Связаться',
      myExperience: 'Мой опыт'
    },
    experience: {
      title: 'Опыт работы',
      companies: {
        firstMedia: {
          title: 'Frontend-разработчик',
          location: 'Казахстан',
          description: 'Занимался поддержкой уже существующих проектов, написанных в основном на React, Angular и React Native. Также создавал новые проекты на React и Flutter.'
        },
        aiSystems: {
          title: 'Frontend Developer',
          location: 'Алматы',
          description: 'Работал на должности Frontend-разработчика на React, создавал мобильные и веб-приложения.'
        },
        unityConsulting: {
          title: 'Frontend-разработчик',
          location: 'Алматы',
          description: 'Занимался версткой сайтов и доработкой существующих. Также работал с трафиком в Keitaro.'
        },
        blackTree: {
          title: 'Frontend-разработчик',
          location: 'Великобритания',
          description: 'Создавал новые сайты и дорабатывал уже существующие (легаси). Работал с React, Angular и jQuery. Дизайны зачастую делал самостоятельно.'
        },
        olymp: {
          title: 'HTML-верстальщик',
          location: 'Алматы',
          description: 'Верстал лендинги и дорабатывал уже существующие сайты. Часто работал с legacy-кодом и внедрял различные технологии. Также приходилось иметь дело с 3D.'
        }
      }
    },
    education: {
      title: 'Образование',
      degrees: {
        university: {
          degree: 'Программная Инженерия',
          institution: 'Satbayev University',
          field: 'Computer Science'
        },
        courses: {
          degree: 'Frontend-developer',
          institution: 'BITLAB Academy'
        }
      }
    },
    skills: {
      title: 'Навыки',
      categories: {
        frontend: 'Frontend',
        tools: 'Инструменты',
        languages: 'Знание языков'
      },
      additional: 'Постоянно учусь, не боюсь новых технологий, но и не гонюсь за хайпом — предпочитаю то, что работает.'
    },
    contact: {
      title: 'Связаться со мной',
      contactInfo: 'Контактная информация',
      email: 'Email',
      phone: 'Телефон',
      location: 'Локация',
      sendMessage: 'Отправить сообщение',
      yourName: 'Ваше имя',
      yourEmail: 'Ваш email',
      subject: 'Тема сообщения',
      message: 'Ваше сообщение',
      send: 'Отправить',
      sending: 'Отправка...',
      success: 'Спасибо за сообщение! Я свяжусь с вами в ближайшее время.',
      error: 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.',
      emailNote: '* Форма отправит сообщение напрямую на мой email'
    },
    footer: {
      copyright: 'Сайлаухан Бекнур Курманайулы'
    }
  },
  en: {
    header: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
      resume: 'Resume'
    },
    about: {
      title: 'Sailaukhan Beknur Kurmanayuly',
      firstName: 'Sailaukhan Beknur',
      lastName: 'Kurmanayuly',
      subtitle: 'Frontend Developer',
      description: 'Hello! My name is Beknur, and I\'m a frontend developer with 4 years of experience. I develop both web and mobile applications using React, React Native, and Flutter. I can quickly integrate into teams, understand others\' code, and deliver features to production efficiently.',
      scrollDown: 'Scroll Down',
      contact: 'Contact Me',
      myExperience: 'My Experience'
    },
    experience: {
      title: 'Work Experience',
      companies: {
        firstMedia: {
          title: 'Frontend Developer',
          location: 'Kazakhstan',
          description: 'Maintained existing projects primarily built with React, Angular, and React Native. Also created new projects using React and Flutter.'
        },
        aiSystems: {
          title: 'Frontend Developer',
          location: 'Almaty',
          description: 'Worked as a Frontend React developer, creating mobile and web applications.'
        },
        unityConsulting: {
          title: 'Frontend Developer',
          location: 'Almaty',
          description: 'Developed websites and improved existing ones. Also worked with traffic in Keitaro.'
        },
        blackTree: {
          title: 'Frontend Developer',
          location: 'United Kingdom',
          description: 'Created new websites and improved legacy ones. Worked with React, Angular, and jQuery. Often created designs myself.'
        },
        olymp: {
          title: 'HTML Developer',
          location: 'Almaty',
          description: 'Created landing pages and improved existing websites. Often worked with legacy code and implemented various technologies. Also worked with 3D.'
        }
      }
    },
    education: {
      title: 'Education',
      degrees: {
        university: {
          degree: 'Software Engineering',
          institution: 'Satbayev University',
          field: 'Computer Science'
        },
        courses: {
          degree: 'Frontend Developer',
          institution: 'BITLAB Academy'
        }
      }
    },
    skills: {
      title: 'Skills',
      categories: {
        frontend: 'Frontend',
        tools: 'Tools',
        languages: 'Languages'
      },
      additional: 'I constantly learn new things, am not afraid of new technologies, but also don\'t chase hype — I prefer what works well.'
    },
    contact: {
      title: 'Contact Me',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      sendMessage: 'Send Message',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Thank you for your message! I will get back to you soon.',
      error: 'An error occurred while sending. Please try again later.',
      emailNote: '* The form will send a message directly to my email'
    },
    footer: {
      copyright: 'Sailaukhan Beknur Kurmanayuly'
    }
  }
}; 