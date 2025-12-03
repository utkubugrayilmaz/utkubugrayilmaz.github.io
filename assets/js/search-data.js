// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected academic publications and research studies.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "The AI, backend, and IoT projects I have developed.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My open source projects and contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Detailed resume of AI &amp; Backend Engineer Utku Buğra Yılmaz.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-bist100-i̇çin-yüksek-performanslı-bir-yapay-zeka-yatırımcısı-tasarlamak-231-getirinin-teknik",
        
          title: 'BIST100 İçin Yüksek Performanslı Bir Yapay Zeka Yatırımcısı Tasarlamak: %231 Getirinin Teknik… <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/bist100-i%CC%87%C3%A7in-y%C3%BCksek-performansl%C4%B1-bir-yapay-zeka-yat%C4%B1r%C4%B1mc%C4%B1s%C4%B1-tasarlamak-231-getirinin-teknik-7419db4da905?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-i̇ris-veri-seti-üzerinde-makine-öğrenimi-modellerinin-karşılaştırmalı-analizi-ve-shap",
        
          title: 'İris Veri Seti Üzerinde Makine Öğrenimi Modellerinin Karşılaştırmalı Analizi ve SHAP… <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/i%CC%87ris-veri-seti-%C3%BCzerinde-makine-%C3%B6%C4%9Frenimi-modellerinin-kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rmal%C4%B1-analizi-ve-shap-b329031014ad?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-autosar-a-giriş-otomotiv-yazılımında-standardizasyonun-gücü",
        
          title: 'Autosar’a Giriş: Otomotiv Yazılımında Standardizasyonun Gücü <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/autosara-giri%C5%9F-otomotiv-yaz%C4%B1l%C4%B1m%C4%B1nda-standardizasyonun-g%C3%BCc%C3%BC-557c75ed0010?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-biçimsel-diller-ve-otomata-teorisi-2",
        
          title: 'Biçimsel Diller ve Otomata Teorisi — 2 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/bi%C3%A7imsel-diller-ve-otomata-teorisi-2-cc20477a5f5f?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-bi̇çi̇msel-di̇ller-ve-otomata-teori̇si̇",
        
          title: 'BİÇİMSEL DİLLER VE OTOMATA TEORİSİ <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/bi%CC%87%C3%A7i%CC%87msel-di%CC%87ller-ve-otomata-teori%CC%87si%CC%87-34b6dbe68928?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-biçimsel-diller-ve-otomata-teorisi-1",
        
          title: 'Biçimsel Diller ve Otomata Teorisi — 1 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/bi%C3%A7imsel-diller-ve-otomata-teorisi-1-a122f9808ca6?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-metasezgisel-algoritmalar-modern-problemlerin-anahtarı",
        
          title: 'Metasezgisel Algoritmalar: Modern Problemlerin Anahtarı <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/metasezgisel-algoritmalar-modern-problemlerin-anahtar%C4%B1-ea4eba6bd781?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-unseen-messages-with-lsb-steganography-the-art-of-hiding-information-in-plain-sight",
        
          title: 'Unseen Messages with LSB Steganography: The Art of Hiding Information in Plain Sight... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/unseen-messages-with-lsb-steganography-the-art-of-hiding-information-in-plain-sight-d546fd905181?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-sezar-ne-demiş-iğoglö-istgzö-bğpglö",
        
          title: 'Sezar Ne Demiş? (Iğoglö, Istgzö, Bğpglö) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/sezar-ne-demi%C5%9F-i%C4%9Fogl%C3%B6-istgz%C3%B6-b%C4%9Fpgl%C3%B6-3ba13d8c5bb0?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-python-da-bu-hataları-asla-yapmayın-kodunuzu-bozan-5-önemli-yanlış",
        
          title: 'Python’da Bu Hataları Asla Yapmayın: Kodunuzu Bozan 5 Önemli Yanlış! <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/pythonda-bu-hatalar%C4%B1-asla-yapmay%C4%B1n-kodunuzu-bozan-5-%C3%B6nemli-yanl%C4%B1%C5%9F-77b89968c27f?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "post-derin-öğrenme-ile-görüntü-i̇şleme-temel-kavramlar-ve-uygulamalar",
        
          title: 'Derin Öğrenme ile Görüntü İşleme: Temel Kavramlar ve Uygulamalar <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Read my article on Medium.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@utkubugrayil/derin-%C3%B6%C4%9Frenme-ile-g%C3%B6r%C3%BCnt%C3%BC-i%CC%87%C5%9Fleme-temel-kavramlar-ve-uygulamalar-5ade5a4c1cd8?source=rss-a35dea5605ea------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ai-driven-bist100-financial-analysis-system",
          title: 'AI-Driven BIST100 Financial Analysis System',
          description: "A comprehensive stock analysis platform using LightGBM and LLMs for signal generation and news sentiment analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_fintech/";
            },},{id: "projects-aytar-autonomous-search-amp-rescue-drone",
          title: 'Aytar - Autonomous Search &amp;amp; Rescue Drone',
          description: "A voice-based emergency signal recognition system developed for Teknofest, designed to accelerate search and rescue operations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_aytar_drone/";
            },},{id: "projects-real-time-face-emotion-recognition-system",
          title: 'Real-Time Face Emotion Recognition System',
          description: "A Deep Learning application using custom CNN architectures for real-time emotion analysis and automated attendance tracking.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_face_emotion/";
            },},{id: "projects-postax-ml-enhanced-smart-mail-system",
          title: 'PostaX - ML-Enhanced Smart Mail System',
          description: "An intelligent IoT mailbox system utilizing machine learning for anomaly detection and secure hardware integration.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_postax/";
            },},{id: "projects-cleanwatch-universal-stream-player",
          title: 'CleanWatch - Universal Stream Player',
          description: "Open-source desktop player to watch streams without ads, trackers, or browser lag.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cleanwatch/";
            },},{id: "projects-deprem-bildirim-botu",
          title: 'Deprem Bildirim Botu',
          description: "Real-time Asynchronous Earthquake Notification System",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deprem-botu/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/utku-bugra-yilmaz-cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%74%6B%75%62%75%67%72%61%79%69%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/utkubugrayilmaz", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/utkubuğrayılmaz", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@utkubugrayil", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://bionluk.com/utkubugra", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
