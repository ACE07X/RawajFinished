import React, { useState, useEffect, createContext, useContext } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, MapPin, Maximize, Building2, Home, Users, Award, Globe, Menu, X, ArrowRight, Mail, Clock, Shield, Star, Heart, User, LogOut, Settings, FileText, Plus, Edit3, Trash2 } from 'lucide-react';
import { siteConfig } from './config/siteConfig';
// ============================================
// CONTENT / i18n SYSTEM
// ============================================
const content = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      properties: 'Properties',
      about: 'About',
      contact: 'Contact',
      admin: 'Admin'
    },
    // Hero Section
    hero: {
      title: 'Al-Rawaj Real Estate',
      titleAr: 'الروّاج للعقارات',
      subtitle: 'Premium Properties in Oman',
      description: 'Discover exceptional real estate opportunities across Salalah and beyond. Your trusted partner for premium land and property investments.',
      cta: 'Browse Properties',
      ctaSecondary: 'Contact Us'
    },
    // Features Section
    features: {
      title: 'Why Choose Al-Rawaj',
      subtitle: 'Excellence in Every Transaction',
      items: [
        {
          title: 'Premium Locations',
          description: 'Carefully selected properties in the most desirable areas of Oman.'
        },
        {
          title: 'Trusted Expertise',
          description: 'Years of experience in the Omani real estate market.'
        },
        {
          title: 'Personal Service',
          description: 'Direct communication with our team for a seamless experience.'
        },
        {
          title: 'Verified Properties',
          description: 'All listings are thoroughly verified and documented.'
        }
      ]
    },
    // Properties
    properties: {
      title: 'Our Properties',
      subtitle: 'Explore Premium Real Estate',
      viewDetails: 'View Details',
      filters: {
        all: 'All',
        available: 'Available',
        sold: 'Sold'
      },
      specs: {
        size: 'Size',
        type: 'Type',
        city: 'City',
        status: 'Status'
      },
      status: {
        available: 'Available',
        sold: 'Sold'
      },
      types: {
        land: 'Land',
        villa: 'Villa',
        apartment: 'Apartment',
        commercial: 'Commercial'
      },
      noProperties: 'No properties found.',
      back: 'Back to Properties'
    },
    // Property Details
    propertyDetails: {
      description: 'Description',
      specifications: 'Specifications',
      location: 'Location',
      contactUs: 'Interested in this property?',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp'
    },
    // About Page
    about: {
      title: 'About Al-Rawaj',
      subtitle: 'Your Trusted Real Estate Partner',
      story: {
        title: 'Our Story',
        content: 'Al-Rawaj Real Estate was established with a vision to provide exceptional real estate services in Oman. We specialize in premium properties, including residential land, villas, apartments, and commercial spaces across Salalah and other key cities.'
      },
      mission: {
        title: 'Our Mission',
        content: 'To connect discerning clients with premium properties while maintaining the highest standards of integrity, professionalism, and personal service.'
      },
      values: {
        title: 'Our Values',
        items: ['Integrity', 'Excellence', 'Trust', 'Commitment']
      },
      stats: [
        { number: '500+', label: 'Properties Sold' },
        { number: '15+', label: 'Years Experience' },
        { number: '1000+', label: 'Happy Clients' },
        { number: '50+', label: 'Areas Covered' }
      ]
    },
    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        email: 'Email',
        address: 'Address',
        hours: 'Working Hours',
        hoursValue: 'Sunday - Thursday: 9:00 AM - 6:00 PM'
      },
      addressValue: 'Dhofar, Salalah, Sultanate of Oman',
      cta: {
        title: 'Ready to Find Your Property?',
        description: 'Contact us today and let our team help you discover the perfect property for your needs.',
        call: 'Call Us',
        whatsapp: 'WhatsApp Us'
      }
    },
    // Footer
    footer: {
      description: 'Premium real estate services in Oman. Your trusted partner for property investment.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      copyright: '© 2024 Al-Rawaj Real Estate. All rights reserved.'
    },
    // CTA Section
    cta: {
      title: 'Find Your Perfect Property',
      description: 'Contact our team today for personalized assistance with your real estate needs.',
      button: 'Contact Us Now'
    },
    // Auth System
    auth: {
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      guest: 'Continue as Guest',
      or: 'or',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      name: 'Full Name',
      phone: 'Phone Number',
      loginTitle: 'Welcome Back',
      loginSubtitle: 'Sign in to access your account',
      registerTitle: 'Create Account',
      registerSubtitle: 'Join us to save favorites and track inquiries',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      forgotPassword: 'Forgot password?',
      rememberMe: 'Remember me',
      myAccount: 'My Account',
      myFavorites: 'My Favorites',
      myInquiries: 'My Inquiries',
      profile: 'Profile',
      settings: 'Settings',
      welcomeBack: 'Welcome back',
      savedProperties: 'Saved Properties',
      noFavorites: 'No saved properties yet',
      addToFavorites: 'Save Property',
      removeFromFavorites: 'Remove from Saved',
      inquiryHistory: 'Inquiry History',
      noInquiries: 'No inquiries yet',
      sendInquiry: 'Send Inquiry',
      inquirySent: 'Inquiry sent successfully!'
    }
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      properties: 'العقارات',
      about: 'عن الشركة',
      contact: 'اتصل بنا',
      admin: 'الإدارة'
    },
    // Hero Section
    hero: {
      title: 'الروّاج للعقارات',
      titleAr: 'Al-Rawaj Real Estate',
      subtitle: 'عقارات متميزة في عُمان',
      description: 'اكتشف فرص عقارية استثنائية في صلالة وما حولها. شريكك الموثوق للاستثمارات العقارية المتميزة.',
      cta: 'تصفح العقارات',
      ctaSecondary: 'اتصل بنا'
    },
    // Features Section
    features: {
      title: 'لماذا الروّاج',
      subtitle: 'التميز في كل صفقة',
      items: [
        {
          title: 'مواقع متميزة',
          description: 'عقارات مختارة بعناية في أفضل مناطق عُمان.'
        },
        {
          title: 'خبرة موثوقة',
          description: 'سنوات من الخبرة في سوق العقارات العُماني.'
        },
        {
          title: 'خدمة شخصية',
          description: 'تواصل مباشر مع فريقنا لتجربة سلسة.'
        },
        {
          title: 'عقارات موثقة',
          description: 'جميع العقارات موثقة ومعتمدة بالكامل.'
        }
      ]
    },
    // Properties
    properties: {
      title: 'عقاراتنا',
      subtitle: 'استكشف العقارات المتميزة',
      viewDetails: 'عرض التفاصيل',
      filters: {
        all: 'الكل',
        available: 'متاح',
        sold: 'مباع'
      },
      specs: {
        size: 'المساحة',
        type: 'النوع',
        city: 'المدينة',
        status: 'الحالة'
      },
      status: {
        available: 'متاح',
        sold: 'مباع'
      },
      types: {
        land: 'أرض',
        villa: 'فيلا',
        apartment: 'شقة',
        commercial: 'تجاري'
      },
      noProperties: 'لا توجد عقارات.',
      back: 'العودة للعقارات'
    },
    // Property Details
    propertyDetails: {
      description: 'الوصف',
      specifications: 'المواصفات',
      location: 'الموقع',
      contactUs: 'مهتم بهذا العقار؟',
      callNow: 'اتصل الآن',
      whatsapp: 'واتساب'
    },
    // About Page
    about: {
      title: 'عن الروّاج',
      subtitle: 'شريكك العقاري الموثوق',
      story: {
        title: 'قصتنا',
        content: 'تأسست الروّاج للعقارات برؤية لتقديم خدمات عقارية استثنائية في عُمان. نحن متخصصون في العقارات المتميزة، بما في ذلك الأراضي السكنية والفلل والشقق والمساحات التجارية في صلالة والمدن الرئيسية الأخرى.'
      },
      mission: {
        title: 'مهمتنا',
        content: 'ربط العملاء المميزين بالعقارات المتميزة مع الحفاظ على أعلى معايير النزاهة والاحترافية والخدمة الشخصية.'
      },
      values: {
        title: 'قيمنا',
        items: ['النزاهة', 'التميز', 'الثقة', 'الالتزام']
      },
      stats: [
        { number: '+500', label: 'عقار مباع' },
        { number: '+15', label: 'سنة خبرة' },
        { number: '+1000', label: 'عميل سعيد' },
        { number: '+50', label: 'منطقة مغطاة' }
      ]
    },
    // Contact Page
    contact: {
      title: 'اتصل بنا',
      subtitle: 'تواصل معنا',
      info: {
        title: 'معلومات الاتصال',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
        hours: 'ساعات العمل',
        hoursValue: 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً'
      },
      addressValue: 'ظفار، صلالة، سلطنة عُمان',
      cta: {
        title: 'مستعد لإيجاد عقارك؟',
        description: 'تواصل معنا اليوم ودع فريقنا يساعدك في اكتشاف العقار المثالي لاحتياجاتك.',
        call: 'اتصل بنا',
        whatsapp: 'واتساب'
      }
    },
    // Footer
    footer: {
      description: 'خدمات عقارية متميزة في عُمان. شريكك الموثوق للاستثمار العقاري.',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات الاتصال',
      copyright: '© 2024 الروّاج للعقارات. جميع الحقوق محفوظة.'
    },
    // CTA Section
    cta: {
      title: 'اعثر على عقارك المثالي',
      description: 'تواصل مع فريقنا اليوم للحصول على مساعدة شخصية في احتياجاتك العقارية.',
      button: 'اتصل بنا الآن'
    },
    // Auth System
    auth: {
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب',
      logout: 'تسجيل الخروج',
      guest: 'المتابعة كزائر',
      or: 'أو',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      loginTitle: 'مرحباً بعودتك',
      loginSubtitle: 'سجل دخولك للوصول إلى حسابك',
      registerTitle: 'إنشاء حساب',
      registerSubtitle: 'انضم إلينا لحفظ المفضلات وتتبع الاستفسارات',
      noAccount: 'ليس لديك حساب؟',
      hasAccount: 'لديك حساب بالفعل؟',
      forgotPassword: 'نسيت كلمة المرور؟',
      rememberMe: 'تذكرني',
      myAccount: 'حسابي',
      myFavorites: 'المفضلة',
      myInquiries: 'استفساراتي',
      profile: 'الملف الشخصي',
      settings: 'الإعدادات',
      welcomeBack: 'مرحباً بعودتك',
      savedProperties: 'العقارات المحفوظة',
      noFavorites: 'لا توجد عقارات محفوظة',
      addToFavorites: 'حفظ العقار',
      removeFromFavorites: 'إزالة من المحفوظات',
      inquiryHistory: 'سجل الاستفسارات',
      noInquiries: 'لا توجد استفسارات',
      sendInquiry: 'إرسال استفسار',
      inquirySent: 'تم إرسال الاستفسار بنجاح!'
    }
  }
};

// ============================================
// DEFAULT PROPERTIES DATA (used as initial state)
// ============================================
const defaultPropertiesData = [
  {
    id: '1',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
    ],
    title: { en: 'Premium Land in Al Mouj', ar: 'أرض متميزة في الموج' },
    description: {
      en: 'Exceptional residential land in the prestigious Al Mouj development. Perfect for building your dream villa with stunning waterfront views. Close to The Wave marina and all amenities.',
      ar: 'أرض سكنية استثنائية في مشروع الموج المرموق. مثالية لبناء فيلا أحلامك مع إطلالات خلابة على الواجهة البحرية. قريبة من مرسى الموج وجميع المرافق.'
    },
    size: 850,
    city: { en: 'Salalah', ar: 'صلالة' },
    area: { en: 'Al Mouj', ar: 'الموج' },
    type: 'land',
    status: 'available'
  },
  {
    id: '2',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    ],
    title: { en: 'Luxury Villa in Shatti Al Qurum', ar: 'فيلا فاخرة في شاطئ القرم' },
    description: {
      en: 'Stunning 5-bedroom villa in the heart of Shatti Al Qurum. Features include private pool, landscaped garden, and premium finishes throughout. Walking distance to the beach.',
      ar: 'فيلا مذهلة من 5 غرف نوم في قلب شاطئ القرم. تشمل المميزات حوض سباحة خاص وحديقة منسقة وتشطيبات فاخرة. على مسافة قريبة من الشاطئ.'
    },
    size: 650,
    city: { en: 'Salalah', ar: 'صلالة' },
    area: { en: 'Shatti Al Qurum', ar: 'شاطئ القرم' },
    type: 'villa',
    status: 'available'
  },
  {
    id: '3',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80'
    ],
    title: { en: 'Commercial Plot in Ghala', ar: 'أرض تجارية في غلا' },
    description: {
      en: 'Prime commercial land in Ghala Industrial Area. Ideal for warehousing, showroom, or mixed-use development. Excellent road access and visibility.',
      ar: 'أرض تجارية رئيسية في منطقة غلا الصناعية. مثالية للمستودعات أو صالات العرض أو التطوير متعدد الاستخدامات. وصول ممتاز للطرق ورؤية عالية.'
    },
    size: 2500,
    city: { en: 'Salalah', ar: 'صلالة' },
    area: { en: 'Ghala', ar: 'غلا' },
    type: 'commercial',
    status: 'sold'
  },
  {
    id: '4',
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80'
    ],
    title: { en: 'Modern Apartment in Muscat Hills', ar: 'شقة عصرية في مسقط هيلز' },
    description: {
      en: 'Contemporary 3-bedroom apartment in Muscat Hills Golf & Country Club. Open-plan living, modern kitchen, and spectacular golf course views. Access to club facilities.',
      ar: 'شقة عصرية من 3 غرف نوم في نادي مسقط هيلز للجولف. تصميم مفتوح وإطلالات رائعة على ملعب الجولف. وصول لمرافق النادي.'
    },
    size: 185,
    city: { en: 'Salalah', ar: 'صلالة' },
    area: { en: 'Muscat Hills', ar: 'مسقط هيلز' },
    type: 'apartment',
    status: 'available'
  },
  {
    id: '5',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
    ],
    title: { en: 'Residential Land in Bausher', ar: 'أرض سكنية في بوشر' },
    description: {
      en: 'Well-located residential plot in Bausher. Suitable for villa construction with all utilities connected. Quiet neighborhood with easy access to main roads.',
      ar: 'قطعة أرض سكنية في موقع ممتاز في بوشر. مناسبة لبناء فيلا مع جميع المرافق متصلة. حي هادئ مع سهولة الوصول للطرق الرئيسية.'
    },
    size: 600,
    city: { en: 'Salalah', ar: 'صلالة' },
    area: { en: 'Bausher', ar: 'بوشر' },
    type: 'land',
    status: 'available'
  },
  {
    id: '6',
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752734-2a0e4f23c887?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&q=80'
    ],
    title: { en: 'Executive Villa in Al Khuwair', ar: 'فيلا تنفيذية في الخوير' },
    description: {
      en: 'Impressive 6-bedroom executive villa in Al Khuwair. Features include private pool, maids quarters, double garage, and premium finishes. Close to ministries and embassies.',
      ar: 'فيلا تنفيذية مثيرة للإعجاب من 6 غرف نوم في الخوير. تشمل حوض سباحة خاص وغرف خدم وجراج مزدوج. قريبة من الوزارات والسفارات.'
    },
    size: 800,
    city: { en: 'Salalah', ar: 'صلالة' },
    area: { en: 'Al Khuwair', ar: 'الخوير' },
    type: 'villa',
    status: 'sold'
  }
];

// ============================================
// LANGUAGE CONTEXT
// ============================================
const LanguageContext = createContext();

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('al-rawaj-lang') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('al-rawaj-lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    let value = content[lang];
    for (const key of keys) {
      value = value?.[key];
    }
    return value || path;
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ============================================
// ADMIN AUTH CONTEXT (localStorage persistence)
// ============================================
const AdminAuthContext = createContext();

const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

const AdminAuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('alrawaj-admin') === 'true';
    }
    return false;
  });

  const adminLogin = (email, password) => {
    if (email === 'admin@alrawaj.om' && password === 'rawaj123') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('alrawaj-admin', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('alrawaj-admin');
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, adminLogin, adminLogout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

// ============================================
// PROPERTIES CONTEXT (localStorage persistence)
// ============================================
const PropertiesContext = createContext();

const useProperties = () => {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error('useProperties must be used within PropertiesProvider');
  }
  return context;
};

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('alrawaj-properties');
      return saved ? JSON.parse(saved) : defaultPropertiesData;
    }
    return defaultPropertiesData;
  });

  useEffect(() => {
    localStorage.setItem('alrawaj-properties', JSON.stringify(properties));
  }, [properties]);

  const addProperty = (property) => {
    const newProperty = { ...property, id: Date.now().toString() };
    setProperties(prev => [...prev, newProperty]);
    return newProperty;
  };

  const updateProperty = (id, updatedData) => {
    setProperties(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const deleteProperty = (id) => {
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  return (
    <PropertiesContext.Provider value={{ properties, addProperty, updateProperty, deleteProperty }}>
      {children}
    </PropertiesContext.Provider>
  );
};

// ============================================
// AUTH CONTEXT (Client Authentication)
// ============================================
const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('al-rawaj-user');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('al-rawaj-favorites');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [inquiries, setInquiries] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('al-rawaj-inquiries');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('al-rawaj-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('al-rawaj-user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('al-rawaj-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('al-rawaj-inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  const login = (email, password, name) => {
    // Simulated login - in production, this would call an API
    const userData = {
      id: Date.now().toString(),
      email,
      name: name || email.split('@')[0],
      createdAt: new Date().toISOString()
    };
    setUser(userData);
    return userData;
  };

  const register = (email, password, name, phone) => {
    // Simulated registration - in production, this would call an API
    const userData = {
      id: Date.now().toString(),
      email,
      name,
      phone,
      createdAt: new Date().toISOString()
    };
    setUser(userData);
    return userData;
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => {
      if (prev.includes(propertyId)) {
        return prev.filter(id => id !== propertyId);
      } else {
        return [...prev, propertyId];
      }
    });
  };

  const isFavorite = (propertyId) => {
    return favorites.includes(propertyId);
  };

  const addInquiry = (propertyId, message) => {
    const inquiry = {
      id: Date.now().toString(),
      propertyId,
      message,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setInquiries(prev => [...prev, inquiry]);
    return inquiry;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn: !!user,
      login,
      register,
      logout,
      favorites,
      toggleFavorite,
      isFavorite,
      inquiries,
      addInquiry
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// ============================================
// ROUTER CONTEXT (Simple Hash Router)
// ============================================
const RouterContext = createContext();

const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
};

const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash.slice(1) || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  const getParams = () => {
    const match = route.match(/^\/properties\/(.+)$/);
    return match ? { id: match[1] } : {};
  };

  return (
    <RouterContext.Provider value={{ route, navigate, getParams }}>
      {children}
    </RouterContext.Provider>
  );
};

// ============================================
// COMPONENTS
// ============================================

// Header Component
const Header = () => {
  const { t, lang, toggleLang } = useLanguage();
  const { route, navigate } = useRouter();
  const { user, isLoggedIn, logout } = useAuth();
  const { isAdminLoggedIn } = useAdminAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/properties', label: t('nav.properties') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  // Add admin link only if admin is logged in
  if (isAdminLoggedIn) {
    navItems.push({ path: '/admin', label: t('nav.admin') });
  }

  const isActive = (path) => {
    if (path === '/') return route === '/';
    return route.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(15, 28, 46, 0.95)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-shadow duration-300" style={{ background: 'linear-gradient(to bottom right, #c9a962, #b8973f)' }}>
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-semibold tracking-wide text-lg">
                {lang === 'ar' ? 'الروّاج' : 'Al-Rawaj'}
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ color: '#8aa0b8' }}>
                {lang === 'ar' ? 'للعقارات' : 'Real Estate'}
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                style={{ 
                  color: isActive(item.path) ? '#c9a962' : '#b8c8d8',
                  backgroundColor: isActive(item.path) ? 'rgba(201, 169, 98, 0.1)' : 'transparent'
                }}
                onMouseEnter={(e) => { if (!isActive(item.path)) { e.target.style.color = '#fff'; e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}}
                onMouseLeave={(e) => { if (!isActive(item.path)) { e.target.style.color = '#b8c8d8'; e.target.style.backgroundColor = 'transparent'; }}}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side: Language, Auth, Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#b8c8d8' }}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Auth Button */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                  style={{ backgroundColor: 'rgba(201,169,98,0.1)', color: '#c9a962' }}
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">{user?.name?.split(' ')[0]}</span>
                </button>
                
                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div 
                    className="absolute top-full right-0 mt-2 w-48 rounded-xl shadow-xl overflow-hidden"
                    style={{ backgroundColor: '#1a2a4a', border: '1px solid rgba(30,51,84,0.5)' }}
                  >
                    <button
                      onClick={() => { navigate('/account'); setShowUserMenu(false); }}
                      className="w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-2"
                      style={{ color: '#b8c8d8' }}
                    >
                      <User className="w-4 h-4" />
                      {t('auth.myAccount')}
                    </button>
                    <button
                      onClick={() => { navigate('/favorites'); setShowUserMenu(false); }}
                      className="w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-2"
                      style={{ color: '#b8c8d8' }}
                    >
                      <Heart className="w-4 h-4" />
                      {t('auth.myFavorites')}
                    </button>
                    <button
                      onClick={() => { navigate('/inquiries'); setShowUserMenu(false); }}
                      className="w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-2"
                      style={{ color: '#b8c8d8' }}
                    >
                      <FileText className="w-4 h-4" />
                      {t('auth.myInquiries')}
                    </button>
                    <div style={{ borderTop: '1px solid rgba(30,51,84,0.5)' }}>
                      <button
                        onClick={() => { logout(); setShowUserMenu(false); }}
                        className="w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-2"
                        style={{ color: '#ef4444' }}
                      >
                        <LogOut className="w-4 h-4" />
                        {t('auth.logout')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)', color: '#fff' }}
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{t('auth.login')}</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#b8c8d8' }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left"
                  style={{ 
                    color: isActive(item.path) ? '#c9a962' : '#b8c8d8',
                    backgroundColor: isActive(item.path) ? 'rgba(201, 169, 98, 0.1)' : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
              {/* Mobile Auth Links */}
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => { navigate('/account'); setIsMenuOpen(false); }}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-left flex items-center gap-2"
                    style={{ color: '#b8c8d8' }}
                  >
                    <User className="w-4 h-4" />
                    {t('auth.myAccount')}
                  </button>
                  <button
                    onClick={() => { navigate('/favorites'); setIsMenuOpen(false); }}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-left flex items-center gap-2"
                    style={{ color: '#b8c8d8' }}
                  >
                    <Heart className="w-4 h-4" />
                    {t('auth.myFavorites')}
                  </button>
                  <button
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-left flex items-center gap-2"
                    style={{ color: '#ef4444' }}
                  >
                    <LogOut className="w-4 h-4" />
                    {t('auth.logout')}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { navigate('/login'); setIsMenuOpen(false); }}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-left flex items-center gap-2"
                  style={{ color: '#c9a962' }}
                >
                  <User className="w-4 h-4" />
                  {t('auth.login')}
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  const { t, lang } = useLanguage();
  const { navigate } = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,28,46,0.85), rgba(15,28,46,0.75), #0f1c2e)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,28,46,0.6), transparent)' }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(201,169,98,0.08)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(184,151,63,0.08)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in" style={{ backgroundColor: 'rgba(201,169,98,0.1)', border: '1px solid rgba(201,169,98,0.2)' }}>
            <Star className="w-4 h-4" style={{ color: '#c9a962' }} />
            <span className="text-sm font-medium tracking-wide" style={{ color: '#c9a962' }}>
              {lang === 'ar' ? 'عقارات متميزة في عُمان' : 'Premium Properties in Oman'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up" style={{ fontFamily: 'serif' }}>
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl mb-6 animate-fade-in-up animation-delay-100" style={{ fontFamily: 'serif', color: 'rgba(201,169,98,0.85)' }}>
            {t('hero.titleAr')}
          </p>

          {/* Description */}
          <p className="text-lg mb-10 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200" style={{ color: '#b8c8d8' }}>
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <button
              onClick={() => navigate('/properties')}
              className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
              style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
              onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #d4b56a, #c9a962)'}
              onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #c9a962, #b8973f)'}
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full flex items-start justify-center p-2" style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
          <div className="w-1 h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features = () => {
  const { t } = useLanguage();
  const features = t('features.items');

  const icons = [MapPin, Shield, Users, Award];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f1c2e' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
            {t('features.title')}
          </h2>
          <p className="text-lg" style={{ color: '#8aa0b8' }}>
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl transition-all duration-500"
                style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,98,0.3)'; e.currentTarget.style.backgroundColor = '#152238'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(26,42,74,0.5)'; e.currentTarget.style.backgroundColor = 'rgba(21,34,56,0.5)'; }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(201,169,98,0.2), rgba(184,151,63,0.2))' }}>
                  <Icon className="w-7 h-7" style={{ color: '#c9a962' }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#8aa0b8' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Property Card Component
const PropertyCard = ({ property }) => {
  const { t, lang } = useLanguage();
  const { navigate } = useRouter();
  const { isLoggedIn, isFavorite, toggleFavorite } = useAuth();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isLoggedIn) {
      toggleFavorite(property.id);
    } else {
      navigate('/login');
    }
  };

  return (
    <article 
      className="group rounded-2xl overflow-hidden transition-all duration-500"
      style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,98,0.3)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(26,42,74,0.5)'; }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title[lang]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,28,46,0.8), transparent)' }} />
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 ${lang === 'ar' ? 'right-4' : 'left-4'} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300`}
          style={{ 
            backgroundColor: isFavorite(property.id) ? 'rgba(239,68,68,0.9)' : 'rgba(15,28,46,0.6)',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Heart 
            className="w-5 h-5" 
            style={{ color: '#fff' }}
            fill={isFavorite(property.id) ? '#fff' : 'none'}
          />
        </button>
        
        {/* Status Badge */}
        <div className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'}`}>
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={property.status === 'available' 
              ? { backgroundColor: 'rgba(16,185,129,0.2)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)' }
              : { backgroundColor: 'rgba(90,122,154,0.2)', color: '#8aa0b8', border: '1px solid rgba(90,122,154,0.3)' }
            }
          >
            {t(`properties.status.${property.status}`)}
          </span>
        </div>

        {/* Type Badge */}
        <div className="absolute bottom-4 left-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: 'rgba(201,169,98,0.2)', color: '#d4b56a', border: '1px solid rgba(201,169,98,0.3)' }}
          >
            {t(`properties.types.${property.type}`)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300" style={{ '--tw-text-opacity': 1 }}>
          {property.title[lang]}
        </h3>
        
        <div className="flex items-center gap-2 mb-4" style={{ color: '#8aa0b8' }}>
          <MapPin className="w-4 h-4" />
          <span>{property.area[lang]}, {property.city[lang]}</span>
        </div>

        <div className="flex items-center gap-4 mb-6" style={{ color: '#b8c8d8' }}>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" style={{ color: '#c9a962' }} />
            <span>{property.size} m²</span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/properties/${property.id}`)}
          className="w-full py-3 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#c9a962'; e.target.style.borderColor = '#c9a962'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          {t('properties.viewDetails')}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </article>
  );
};

// Properties Grid Component
const PropertiesGrid = ({ properties, showAll = false }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredProperties = properties.filter(p => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  const displayProperties = showAll ? filteredProperties : filteredProperties.slice(0, 3);

  return (
    <div>
      {/* Filters */}
      {showAll && (
        <div className="flex justify-center gap-2 mb-12">
          {['all', 'available', 'sold'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={filter === status 
                ? { backgroundColor: '#c9a962', color: '#fff' }
                : { backgroundColor: '#1a2a4a', color: '#b8c8d8' }
              }
            >
              {t(`properties.filters.${status}`)}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {displayProperties.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <p className="text-center py-12" style={{ color: '#8aa0b8' }}>{t('properties.noProperties')}</p>
      )}
    </div>
  );
};

// Contact CTA Component
const ContactCTA = () => {
  const { t } = useLanguage();
  const { navigate } = useRouter();

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #152238, #0f1c2e)' }}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(201,169,98,0.05)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(184,151,63,0.05)' }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'serif' }}>
          {t('cta.title')}
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#b8c8d8' }}>
          {t('cta.description')}
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="group inline-flex items-center gap-2 px-10 py-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
        >
          {t('cta.button')}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const { t, lang } = useLanguage();
  const { navigate } = useRouter();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/properties', label: t('nav.properties') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <footer style={{ backgroundColor: '#0f1c2e', borderTop: '1px solid rgba(26,42,74,0.5)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #c9a962, #b8973f)' }}>
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-lg">
                  {lang === 'ar' ? 'الروّاج' : 'Al-Rawaj'}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: '#8aa0b8' }}>
                  {lang === 'ar' ? 'للعقارات' : 'Real Estate'}
                </div>
              </div>
            </div>
            <p className="leading-relaxed" style={{ color: '#8aa0b8' }}>
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="transition-colors duration-300 text-left"
                  style={{ color: '#8aa0b8' }}
                  onMouseEnter={(e) => e.target.style.color = '#c9a962'}
                  onMouseLeave={(e) => e.target.style.color = '#8aa0b8'}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <div className="flex flex-col gap-3">
              {siteConfig.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:+968${phone}`}
                  className="flex items-center gap-2 transition-colors duration-300"
                  style={{ color: '#8aa0b8' }}
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">+968 {phone}</span>
                </a>
              ))}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-300"
                style={{ color: '#8aa0b8' }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors duration-300"
                style={{ color: '#8aa0b8' }}
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-2" style={{ color: '#8aa0b8' }}>
                <MapPin className="w-4 h-4" />
                <span>{siteConfig.location.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(26,42,74,0.5)', color: '#5a7a9a' }}>
          <p>{t('footer.copyright')}</p>
          <p className="mt-3 flex items-center justify-center gap-2">
            <span>{lang === 'ar' ? 'تطوير وتصميم' : 'Designed & Developed by'}</span>
            <a 
              href="#" 
              className="font-semibold transition-colors duration-300"
              style={{ color: '#c9a962' }}
            >
              SoulTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Image Slider Component
const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lang } = useLanguage();

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
      <img
        src={images[currentIndex]}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,28,46,0.5), transparent)' }} />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={`absolute top-1/2 -translate-y-1/2 ${lang === 'ar' ? 'right-4' : 'left-4'} w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300`}
            style={{ backgroundColor: 'rgba(15,28,46,0.5)' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className={`absolute top-1/2 -translate-y-1/2 ${lang === 'ar' ? 'left-4' : 'right-4'} w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300`}
            style={{ backgroundColor: 'rgba(15,28,46,0.5)' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: index === currentIndex ? '#c9a962' : 'rgba(255,255,255,0.5)',
                width: index === currentIndex ? '24px' : '8px'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================
// PAGES
// ============================================

// Home Page
const HomePage = () => {
  const { t } = useLanguage();
  const { navigate } = useRouter();
  const { properties } = useProperties();

  return (
    <main>
      <Hero />
      <Features />
      
      {/* Featured Properties Section */}
      <section className="py-24" style={{ backgroundColor: '#0f1c2e' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
              {t('properties.title')}
            </h2>
            <p className="text-lg" style={{ color: '#8aa0b8' }}>
              {t('properties.subtitle')}
            </p>
          </div>
          
          <PropertiesGrid properties={properties} />
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/properties')}
              className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {t('nav.properties')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
};

// Properties Page
const PropertiesPage = () => {
  const { t } = useLanguage();
  const { properties } = useProperties();

  useEffect(() => {
    document.title = `${t('nav.properties')} | Al-Rawaj Real Estate`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
            {t('properties.title')}
          </h1>
          <p className="text-lg" style={{ color: '#8aa0b8' }}>
            {t('properties.subtitle')}
          </p>
        </div>

        <PropertiesGrid properties={properties} showAll />
      </div>
    </main>
  );
};

// Property Details Page
const PropertyDetailsPage = () => {
  const { t, lang } = useLanguage();
  const { navigate, getParams } = useRouter();
  const { properties } = useProperties();
  const { id } = getParams();
  const property = properties.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0f1c2e' }}>
        <div className="text-center">
          <p className="mb-4" style={{ color: '#8aa0b8' }}>Property not found</p>
          <button
            onClick={() => navigate('/properties')}
            style={{ color: '#c9a962' }}
          >
            {t('properties.back')}
          </button>
        </div>
      </main>
    );
  }

  useEffect(() => {
    document.title = `${property.title[lang]} | Al-Rawaj Real Estate`;
  }, [property, lang]);

  return (
    <main className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/properties')}
          className="flex items-center gap-2 transition-colors duration-300 mb-8"
          style={{ color: '#8aa0b8' }}
        >
          <ChevronLeft className="w-5 h-5" />
          {t('properties.back')}
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Slider */}
            <ImageSlider images={property.images} title={property.title[lang]} />

            {/* Title & Location */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={property.status === 'available' 
                    ? { backgroundColor: 'rgba(16,185,129,0.2)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)' }
                    : { backgroundColor: 'rgba(90,122,154,0.2)', color: '#8aa0b8', border: '1px solid rgba(90,122,154,0.3)' }
                  }
                >
                  {t(`properties.status.${property.status}`)}
                </span>
                <span 
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: 'rgba(201,169,98,0.2)', color: '#d4b56a', border: '1px solid rgba(201,169,98,0.3)' }}
                >
                  {t(`properties.types.${property.type}`)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
                {property.title[lang]}
              </h1>

              <div className="flex items-center gap-2 mb-8" style={{ color: '#8aa0b8' }}>
                <MapPin className="w-5 h-5" style={{ color: '#c9a962' }} />
                <span className="text-lg">{property.area[lang]}, {property.city[lang]}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t('propertyDetails.description')}
              </h2>
              <p className="leading-relaxed" style={{ color: '#b8c8d8' }}>
                {property.description[lang]}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                {t('propertyDetails.specifications')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('properties.specs.size')}</div>
                  <div className="text-white font-semibold">{property.size} m²</div>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('properties.specs.type')}</div>
                  <div className="text-white font-semibold">{t(`properties.types.${property.type}`)}</div>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('properties.specs.city')}</div>
                  <div className="text-white font-semibold">{property.city[lang]}</div>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('properties.specs.status')}</div>
                  <div className="text-white font-semibold">{t(`properties.status.${property.status}`)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-8 rounded-2xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
              <h3 className="text-xl font-semibold text-white mb-6">
                {t('propertyDetails.contactUs')}
              </h3>
              
              <div className="flex flex-col gap-4">
                {/* Phone buttons - mapped from siteConfig */}
                {siteConfig.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:+968${phone}`}
                    className="flex items-center justify-center gap-3 py-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                    style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
                  >
                    <Phone className="w-5 h-5" />
                    <span dir="ltr">+968 {phone}</span>
                  </a>
                ))}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 text-white font-semibold rounded-xl transition-all duration-300"
                  style={{ backgroundColor: '#10b981' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('propertyDetails.whatsapp')}
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(26,42,74,0.5)' }}>
                <div className="flex flex-col gap-4 text-sm">
                  {siteConfig.phones.map((phone, index) => (
                    <div key={index} className="flex items-center gap-3" style={{ color: '#8aa0b8' }}>
                      <Phone className="w-4 h-4" />
                      <span dir="ltr">+968 {phone}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3" style={{ color: '#8aa0b8' }}>
                    <Mail className="w-4 h-4" />
                    <span>{siteConfig.email}</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: '#8aa0b8' }}>
                    <MapPin className="w-4 h-4" />
                    <span>{siteConfig.location.full}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// About Page
const AboutPage = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = `${t('nav.about')} | Al-Rawaj Real Estate`;
    window.scrollTo(0, 0);
  }, []);

  const stats = t('about.stats');
  const values = t('about.values.items');

  return (
    <main className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
            {t('about.title')}
          </h1>
          <p className="text-lg" style={{ color: '#8aa0b8' }}>
            {t('about.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#c9a962' }}>
                {stat.number}
              </div>
              <div style={{ color: '#8aa0b8' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
              {t('about.story.title')}
            </h2>
            <p className="leading-relaxed" style={{ color: '#b8c8d8' }}>
              {t('about.story.content')}
            </p>
          </div>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
              {t('about.mission.title')}
            </h2>
            <p className="leading-relaxed" style={{ color: '#b8c8d8' }}>
              {t('about.mission.content')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'serif' }}>
            {t('about.values.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-xl font-medium"
                style={{ background: 'linear-gradient(to bottom right, rgba(201,169,98,0.1), rgba(184,151,63,0.1))', border: '1px solid rgba(201,169,98,0.2)', color: '#c9a962' }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

// Contact Page
const ContactPage = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = `${t('nav.contact')} | Al-Rawaj Real Estate`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
            {t('contact.title')}
          </h1>
          <p className="text-lg" style={{ color: '#8aa0b8' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(26,42,74,0.5)' }}>
            <h2 className="text-2xl font-bold text-white mb-8">
              {t('contact.info.title')}
            </h2>

            <div className="space-y-6">
              {/* Phones - mapped from siteConfig */}
              {siteConfig.phones.map((phone, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,169,98,0.1)' }}>
                    <Phone className="w-5 h-5" style={{ color: '#c9a962' }} />
                  </div>
                  <div>
                    <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('contact.info.phone')} {index + 1}</div>
                    <a href={`tel:+968${phone}`} className="text-white transition-colors" dir="ltr">
                      +968 {phone}
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,169,98,0.1)' }}>
                  <MessageCircle className="w-5 h-5" style={{ color: '#c9a962' }} />
                </div>
                <div>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('contact.info.whatsapp')}</div>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,169,98,0.1)' }}>
                  <Mail className="w-5 h-5" style={{ color: '#c9a962' }} />
                </div>
                <div>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('contact.info.email')}</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-white transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,169,98,0.1)' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#c9a962' }} />
                </div>
                <div>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('contact.info.address')}</div>
                  <span className="text-white">{siteConfig.location.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201,169,98,0.1)' }}>
                  <Clock className="w-5 h-5" style={{ color: '#c9a962' }} />
                </div>
                <div>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>{t('contact.info.hours')}</div>
                  <span className="text-white">{t('contact.info.hoursValue')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(201,169,98,0.1), rgba(184,151,63,0.1))', border: '1px solid rgba(201,169,98,0.2)' }}>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('contact.cta.title')}
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#b8c8d8' }}>
              {t('contact.cta.description')}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`tel:+968${siteConfig.phones[0]}`}
                className="flex items-center justify-center gap-3 py-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
              >
                <Phone className="w-5 h-5" />
                {t('contact.cta.call')}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 text-white font-semibold rounded-xl transition-all duration-300"
                style={{ backgroundColor: '#10b981' }}
              >
                <MessageCircle className="w-5 h-5" />
                {t('contact.cta.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Admin Page with full CRUD
const AdminPage = () => {
  const { isAdminLoggedIn, adminLogin, adminLogout } = useAdminAuth();
  const { properties, addProperty, updateProperty, deleteProperty } = useProperties();
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingProperty, setEditingProperty] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Form state for add/edit
  const [formData, setFormData] = useState({
    titleEn: '', titleAr: '', descEn: '', descAr: '', size: '',
    cityEn: 'Salalah', cityAr: 'صلالة', areaEn: '', areaAr: '',
    type: 'land', status: 'available',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80']
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const success = adminLogin(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    adminLogout();
    navigate('/');
  };

  const resetForm = () => {
    setFormData({
      titleEn: '', titleAr: '', descEn: '', descAr: '', size: '',
      cityEn: 'Salalah', cityAr: 'صلالة', areaEn: '', areaAr: '',
      type: 'land', status: 'available',
      images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80']
    });
    setEditingProperty(null);
    setShowAddForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const propertyData = {
      title: { en: formData.titleEn, ar: formData.titleAr },
      description: { en: formData.descEn, ar: formData.descAr },
      size: parseInt(formData.size),
      city: { en: formData.cityEn, ar: formData.cityAr },
      area: { en: formData.areaEn, ar: formData.areaAr },
      type: formData.type,
      status: formData.status,
      images: formData.images
    };

    if (editingProperty) {
      updateProperty(editingProperty.id, propertyData);
    } else {
      addProperty(propertyData);
    }
    resetForm();
  };

  const handleEdit = (property) => {
    setFormData({
      titleEn: property.title.en, titleAr: property.title.ar,
      descEn: property.description.en, descAr: property.description.ar,
      size: property.size.toString(),
      cityEn: property.city.en, cityAr: property.city.ar,
      areaEn: property.area.en, areaAr: property.area.ar,
      type: property.type, status: property.status,
      images: property.images
    });
    setEditingProperty(property);
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      deleteProperty(id);
    }
  };

  // Login Page
  if (!isAdminLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: '#152238' }}>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to bottom right, #c9a962, #b8973f)' }}>
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Login</h1>
            <p className="mt-2" style={{ color: '#8aa0b8' }}>Al-Rawaj Real Estate</p>
          </div>

          <form onSubmit={handleLogin} className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(26,42,74,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
            {error && (
              <div className="mb-4 p-3 rounded-lg text-red-400 text-sm" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white transition-colors"
                  style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                  placeholder="admin@alrawaj.om"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white transition-colors"
                  style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-white font-semibold rounded-xl transition-all duration-300 mt-4"
                style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }

  // Admin Dashboard
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#152238' }}>
      {/* Admin Header */}
      <header className="px-6 py-4" style={{ backgroundColor: '#0f1c2e', borderBottom: '1px solid rgba(26,42,74,0.5)' }}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #c9a962, #b8973f)' }}>
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold">Al-Rawaj Admin</div>
              <div className="text-xs" style={{ color: '#8aa0b8' }}>Management Panel</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="px-4 py-2 transition-colors text-sm" style={{ color: '#8aa0b8' }}>
              View Site
            </button>
            <button onClick={handleLogout} className="px-4 py-2 transition-colors text-sm flex items-center gap-2" style={{ color: '#ef4444' }}>
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-73px)] p-6" style={{ backgroundColor: 'rgba(15,28,46,0.5)', borderRight: '1px solid rgba(26,42,74,0.5)' }}>
          <nav className="space-y-2">
            <button onClick={() => setActiveTab('dashboard')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl" style={activeTab === 'dashboard' ? { backgroundColor: 'rgba(201,169,98,0.1)', color: '#c9a962' } : { color: '#8aa0b8' }}>
              <Home className="w-5 h-5" /> Dashboard
            </button>
            <button onClick={() => setActiveTab('properties')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors" style={activeTab === 'properties' ? { backgroundColor: 'rgba(201,169,98,0.1)', color: '#c9a962' } : { color: '#8aa0b8' }}>
              <Building2 className="w-5 h-5" /> Properties
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <>
              <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(26,42,74,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>Total Properties</div>
                  <div className="text-3xl font-bold text-white">{properties.length}</div>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(26,42,74,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>Available</div>
                  <div className="text-3xl font-bold" style={{ color: '#34d399' }}>{properties.filter(p => p.status === 'available').length}</div>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(26,42,74,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
                  <div className="text-sm mb-1" style={{ color: '#8aa0b8' }}>Sold</div>
                  <div className="text-3xl font-bold" style={{ color: '#8aa0b8' }}>{properties.filter(p => p.status === 'sold').length}</div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'properties' && (
            <>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-white">Properties</h1>
                <button onClick={() => { resetForm(); setShowAddForm(true); }} className="px-4 py-2 text-white rounded-lg text-sm font-medium flex items-center gap-2" style={{ backgroundColor: '#c9a962' }}>
                  <Plus className="w-4 h-4" /> Add Property
                </button>
              </div>

              {/* Add/Edit Form */}
              {showAddForm && (
                <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: 'rgba(26,42,74,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
                  <h2 className="text-xl font-semibold text-white mb-6">{editingProperty ? 'Edit Property' : 'Add New Property'}</h2>
                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Title (English)</label>
                      <input type="text" value={formData.titleEn} onChange={(e) => setFormData({...formData, titleEn: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }} required />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Title (Arabic)</label>
                      <input type="text" value={formData.titleAr} onChange={(e) => setFormData({...formData, titleAr: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }} dir="rtl" required />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Description (English)</label>
                      <textarea value={formData.descEn} onChange={(e) => setFormData({...formData, descEn: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }} rows="3" required />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Description (Arabic)</label>
                      <textarea value={formData.descAr} onChange={(e) => setFormData({...formData, descAr: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }} rows="3" dir="rtl" required />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Size (m²)</label>
                      <input type="number" value={formData.size} onChange={(e) => setFormData({...formData, size: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }} required />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Type</label>
                      <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
                        <option value="land">Land</option>
                        <option value="villa">Villa</option>
                        <option value="apartment">Apartment</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Area (English)</label>
                      <input type="text" value={formData.areaEn} onChange={(e) => setFormData({...formData, areaEn: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }} required />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Area (Arabic)</label>
                      <input type="text" value={formData.areaAr} onChange={(e) => setFormData({...formData, areaAr: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }} dir="rtl" required />
                    </div>
                    <div>
                      <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>Status</label>
                      <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full px-4 py-3 rounded-xl text-white" style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
                        <option value="available">Available</option>
                        <option value="sold">Sold</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 flex gap-4 mt-4">
                      <button type="submit" className="px-6 py-3 text-white font-semibold rounded-xl" style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}>
                        {editingProperty ? 'Update Property' : 'Add Property'}
                      </button>
                      <button type="button" onClick={resetForm} className="px-6 py-3 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#b8c8d8' }}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Properties Table */}
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgba(26,42,74,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(30,51,84,0.5)' }}>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase" style={{ color: '#8aa0b8' }}>Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase" style={{ color: '#8aa0b8' }}>Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase" style={{ color: '#8aa0b8' }}>Area</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase" style={{ color: '#8aa0b8' }}>Size</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase" style={{ color: '#8aa0b8' }}>Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase" style={{ color: '#8aa0b8' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties.map((property) => (
                        <tr key={property.id} style={{ borderBottom: '1px solid rgba(30,51,84,0.3)' }}>
                          <td className="px-6 py-4 text-white">{property.title.en}</td>
                          <td className="px-6 py-4 capitalize" style={{ color: '#8aa0b8' }}>{property.type}</td>
                          <td className="px-6 py-4" style={{ color: '#8aa0b8' }}>{property.area.en}</td>
                          <td className="px-6 py-4" style={{ color: '#8aa0b8' }}>{property.size} m²</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded-full text-xs font-medium" style={property.status === 'available' ? { backgroundColor: 'rgba(16,185,129,0.2)', color: '#34d399' } : { backgroundColor: 'rgba(90,122,154,0.2)', color: '#8aa0b8' }}>
                              {property.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button onClick={() => handleEdit(property)} className="p-2 rounded-lg transition-colors" style={{ color: '#c9a962' }}>
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete(property.id)} className="p-2 rounded-lg transition-colors" style={{ color: '#ef4444' }}>
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

// ============================================
// CLIENT AUTH PAGES
// ============================================

// Login Page
const LoginPage = () => {
  const { t } = useLanguage();
  const { navigate } = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate('/');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to bottom right, #c9a962, #b8973f)' }}>
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">{t('auth.loginTitle')}</h1>
          <p className="mt-2" style={{ color: '#8aa0b8' }}>{t('auth.loginSubtitle')}</p>
        </div>

        <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>{t('auth.email')}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-colors focus:outline-none"
                style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                placeholder="email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>{t('auth.password')}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-colors focus:outline-none"
                style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-xl transition-all duration-300 mt-4"
              style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
            >
              {t('auth.login')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p style={{ color: '#8aa0b8' }}>
              {t('auth.noAccount')}{' '}
              <button onClick={() => navigate('/register')} style={{ color: '#c9a962' }}>
                {t('auth.register')}
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(30,51,84,0.5)' }}>
            <button
              onClick={() => navigate('/')}
              className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#b8c8d8' }}
            >
              {t('auth.guest')}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

// Register Page
const RegisterPage = () => {
  const { t } = useLanguage();
  const { navigate } = useRouter();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && password === confirmPassword) {
      register(email, password, name, phone);
      navigate('/');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to bottom right, #c9a962, #b8973f)' }}>
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">{t('auth.registerTitle')}</h1>
          <p className="mt-2" style={{ color: '#8aa0b8' }}>{t('auth.registerSubtitle')}</p>
        </div>

        <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>{t('auth.name')}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-colors focus:outline-none"
                style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>{t('auth.email')}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-colors focus:outline-none"
                style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>{t('auth.phone')}</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-colors focus:outline-none"
                style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>{t('auth.password')}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-colors focus:outline-none"
                style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: '#8aa0b8' }}>{t('auth.confirmPassword')}</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-colors focus:outline-none"
                style={{ backgroundColor: 'rgba(15,28,46,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-xl transition-all duration-300 mt-4"
              style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
            >
              {t('auth.register')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p style={{ color: '#8aa0b8' }}>
              {t('auth.hasAccount')}{' '}
              <button onClick={() => navigate('/login')} style={{ color: '#c9a962' }}>
                {t('auth.login')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

// Account Page
const AccountPage = () => {
  const { t, lang } = useLanguage();
  const { navigate } = useRouter();
  const { user, isLoggedIn, logout, favorites, inquiries } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <main className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>
            {t('auth.welcomeBack')}, {user?.name}
          </h1>
          <p style={{ color: '#8aa0b8' }}>{user?.email}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button
            onClick={() => navigate('/favorites')}
            className="p-6 rounded-2xl text-left transition-all duration-300"
            style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(201,169,98,0.1)' }}>
                <Heart className="w-6 h-6" style={{ color: '#c9a962' }} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{favorites.length}</div>
                <div style={{ color: '#8aa0b8' }}>{t('auth.savedProperties')}</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate('/inquiries')}
            className="p-6 rounded-2xl text-left transition-all duration-300"
            style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(201,169,98,0.1)' }}>
                <FileText className="w-6 h-6" style={{ color: '#c9a962' }} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{inquiries.length}</div>
                <div style={{ color: '#8aa0b8' }}>{t('auth.inquiryHistory')}</div>
              </div>
            </div>
          </button>
        </div>

        {/* Profile Section */}
        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}>
          <h2 className="text-xl font-semibold text-white mb-6">{t('auth.profile')}</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid rgba(30,51,84,0.5)' }}>
              <span style={{ color: '#8aa0b8' }}>{t('auth.name')}</span>
              <span className="text-white">{user?.name}</span>
            </div>
            <div className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid rgba(30,51,84,0.5)' }}>
              <span style={{ color: '#8aa0b8' }}>{t('auth.email')}</span>
              <span className="text-white">{user?.email}</span>
            </div>
            {user?.phone && (
              <div className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid rgba(30,51,84,0.5)' }}>
                <span style={{ color: '#8aa0b8' }}>{t('auth.phone')}</span>
                <span className="text-white">{user?.phone}</span>
              </div>
            )}
          </div>

          <button
            onClick={logout}
            className="mt-8 w-full py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
            style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444' }}
          >
            <LogOut className="w-4 h-4" />
            {t('auth.logout')}
          </button>
        </div>
      </div>
    </main>
  );
};

// Favorites Page
const FavoritesPage = () => {
  const { t, lang } = useLanguage();
  const { navigate } = useRouter();
  const { isLoggedIn, favorites } = useAuth();
  const { properties } = useProperties();

  const favoriteProperties = properties.filter(p => favorites.includes(p.id));

  return (
    <main className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/account')}
            className="flex items-center gap-2 mb-4 transition-colors"
            style={{ color: '#8aa0b8' }}
          >
            <ChevronLeft className="w-5 h-5" />
            {t('auth.myAccount')}
          </button>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'serif' }}>
            {t('auth.myFavorites')}
          </h1>
        </div>

        {/* Favorites Grid */}
        {favoriteProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto mb-4" style={{ color: '#3a5a80' }} />
            <p className="text-lg mb-4" style={{ color: '#8aa0b8' }}>{t('auth.noFavorites')}</p>
            <button
              onClick={() => navigate('/properties')}
              className="px-6 py-3 rounded-xl text-white font-medium"
              style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
            >
              {t('properties.title')}
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

// Inquiries Page
const InquiriesPage = () => {
  const { t, lang } = useLanguage();
  const { navigate } = useRouter();
  const { isLoggedIn, inquiries } = useAuth();
  const { properties } = useProperties();

  return (
    <main className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#0f1c2e' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/account')}
            className="flex items-center gap-2 mb-4 transition-colors"
            style={{ color: '#8aa0b8' }}
          >
            <ChevronLeft className="w-5 h-5" />
            {t('auth.myAccount')}
          </button>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'serif' }}>
            {t('auth.myInquiries')}
          </h1>
        </div>

        {/* Inquiries List */}
        {inquiries.length > 0 ? (
          <div className="space-y-4">
            {inquiries.map((inquiry) => {
              const property = properties.find(p => p.id === inquiry.propertyId);
              return (
                <div
                  key={inquiry.id}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: 'rgba(21,34,56,0.5)', border: '1px solid rgba(30,51,84,0.5)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold">{property?.title[lang]}</h3>
                      <p className="text-sm" style={{ color: '#8aa0b8' }}>
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: 'rgba(201,169,98,0.2)', color: '#d4b56a' }}
                    >
                      {inquiry.status}
                    </span>
                  </div>
                  <p style={{ color: '#b8c8d8' }}>{inquiry.message}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 mx-auto mb-4" style={{ color: '#3a5a80' }} />
            <p className="text-lg mb-4" style={{ color: '#8aa0b8' }}>{t('auth.noInquiries')}</p>
            <button
              onClick={() => navigate('/properties')}
              className="px-6 py-3 rounded-xl text-white font-medium"
              style={{ background: 'linear-gradient(to right, #c9a962, #b8973f)' }}
            >
              {t('properties.title')}
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

// ============================================
// ROUTER
// ============================================
const Router = () => {
  const { route } = useRouter();

  // Auth routes (no header/footer)
  if (route === '/login') {
    return <LoginPage />;
  }
  if (route === '/register') {
    return <RegisterPage />;
  }

  // Check if it's an admin route
  if (route === '/admin') {
    return <AdminPage />;
  }

  // Check for property details route
  if (route.match(/^\/properties\/[^/]+$/)) {
    return (
      <>
        <Header />
        <PropertyDetailsPage />
        <Footer />
      </>
    );
  }

  // Regular routes
  const routes = {
    '/': HomePage,
    '/properties': PropertiesPage,
    '/about': AboutPage,
    '/contact': ContactPage,
    '/account': AccountPage,
    '/favorites': FavoritesPage,
    '/inquiries': InquiriesPage
  };

  const PageComponent = routes[route] || HomePage;

  return (
    <>
      <Header />
      <PageComponent />
      <Footer />
    </>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function AlRawajRealEstate() {
  return (
    <div className="min-h-screen text-white antialiased" style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#0f1c2e' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        
        :root {
          --navy-950: #0f1c2e;
          --navy-900: #152238;
          --navy-800: #1a2a4a;
          --navy-700: #1e3354;
          --navy-600: #264060;
          --navy-500: #3a5a80;
          --navy-400: #5a7a9a;
          --navy-300: #8aa0b8;
          --navy-200: #b8c8d8;
          --gold-600: #b8973f;
          --gold-500: #c9a962;
          --gold-400: #d4b56a;
          --gold-300: #e0c88a;
        }
        
        * {
          box-sizing: border-box;
        }
        
        html[dir="rtl"] {
          font-family: 'Noto Sans Arabic', 'Outfit', sans-serif;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0f1c2e;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #1e3354;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #264060;
        }
        
        /* Custom color classes */
        .bg-navy-950 { background-color: #0f1c2e; }
        .bg-navy-900 { background-color: #152238; }
        .bg-navy-800 { background-color: #1a2a4a; }
        .bg-navy-700 { background-color: #1e3354; }
        .bg-navy-600 { background-color: #264060; }
        .border-navy-800 { border-color: #1a2a4a; }
        .border-navy-700 { border-color: #1e3354; }
        .border-navy-600 { border-color: #264060; }
        .text-navy-300 { color: #8aa0b8; }
        .text-navy-400 { color: #5a7a9a; }
        .text-gold-500 { color: #c9a962; }
        .text-gold-400 { color: #d4b56a; }
        .bg-gold-600 { background-color: #b8973f; }
        .bg-gold-500 { background-color: #c9a962; }
        .hover\\:bg-gold-400:hover { background-color: #d4b56a; }
        .hover\\:text-gold-500:hover { color: #c9a962; }
      `}</style>
      
      <LanguageProvider>
        <AdminAuthProvider>
          <PropertiesProvider>
            <AuthProvider>
              <RouterProvider>
                <Router />
              </RouterProvider>
            </AuthProvider>
          </PropertiesProvider>
        </AdminAuthProvider>
      </LanguageProvider>
    </div>
  );
