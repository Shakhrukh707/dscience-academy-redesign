
export type Language = 'RU' | 'UZ' | 'EN';

export interface CourseDetail {
  duration: string;
  intensity: string;
  level: string;
  program: string[];
  tools: string[];
  result: string;
}

export interface PortfolioFile {
  id: string;
  name: string;
  date: string;
  url: string;
}

export interface AdminNotification {
  id: string;
  broadcastId?: string;
  type: 'text' | 'video' | 'audio';
  content: string;
  title: string;
  isRead: boolean;
  date: string;
  mediaUrl?: string;
}

export interface Broadcast {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'audio';
  target: 'all' | string;
  date: string;
  mediaName?: string;
}

export interface AIChatLog {
  id: string;
  userId?: string;
  userName: string;
  userMessage: string;
  aiResponse: string;
  timestamp: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  middleName: string;
  telegram: string;
  email: string;
  passport: string;
  phone: string;
  course: string;
  gender: 'male' | 'female';
  id: string;
  pass: string;
  portfolios: PortfolioFile[];
  notifications: AdminNotification[];
  telegramJoined?: boolean;
  registrationDate: string;
  university?: string;
  faculty?: string;
  specialization?: string;
}

export interface TranslationSet {
  header: {
    courses: string;
    why: string;
    how: string;
    apply: string;
    login: string;
    logout: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  why: {
    title: string;
    subtitle: string;
    practice: string;
    practiceDesc: string;
    mentors: string;
    mentorsDesc: string;
    infrastructure: string;
    infrastructureDesc: string;
    career: string;
    careerDesc: string;
  };
  courses: {
    title: string;
    flagshipBadge: string;
    ds: string;
    dsDesc: string;
    da: string;
    daDesc: string;
    threeD: string;
    threeDDesc: string;
    ue: string;
    ueDesc: string;
    vfx: string;
    vfxDesc: string;
    fx: string;
    fxDesc: string;
    unreal: string;
    unrealDesc: string;
    c4d: string;
    c4dDesc: string;
    more: string;
    modalLabels: {
      program: string;
      tools: string;
      result: string;
      cta: string;
      spots: string;
    };
    details: Record<string, CourseDetail>;
  };
  how: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step1Desc: string;
    step2Desc: string;
    step3Desc: string;
    step4Desc: string;
    step5Desc: string;
  };
  benefits: {
    title: string;
    scholarship: string;
    food: string;
    computers: string;
    mentoring: string;
  };
  reviews: {
    title: string;
  };
  footer: {
    contacts: string;
    follow: string;
    rights: string;
  };
  form: {
    title: string;
    lastName: string;
    firstName: string;
    middleName: string;
    telegram: string;
    email: string;
    passport: string;
    phone: string;
    course: string;
    submit: string;
    success: string;
    credsSent: string;
    selectPlaceholder: string;
    phoneError: string;
    offerTitle: string;
    offerText: string;
    offerAgree: string;
    offerDecline: string;
  };
  dashboard: {
    welcome: string;
    status: string;
    personalInfo: string;
    phase2Title: string;
    phase2Desc: string;
    uploadBtn: string;
    uploadMore: string;
    uploadSuccess: string;
    regDone: string;
    portWaiting: string;
    reviewPending: string;
    notifications: string;
    markAsRead: string;
    history: string;
    noNotifs: string;
    successModalTitle: string;
    successModalDesc: string;
    telegramJoin: string;
    step3Title: string;
    sampleBtn: string;
    combinedReminder: string;
    documentList: string[];
    academicInfo: {
      uni: string;
      faculty: string;
      spec: string;
      uniPlaceholder: string;
      facultyPlaceholder: string;
      specPlaceholder: string;
    }
  };
  login: {
    title: string;
    id: string;
    pass: string;
    btn: string;
    error: string;
  };
  chatbot: {
    title: string;
    placeholder: string;
    welcomeMsg: string;
    adminNav: string;
    noLogs: string;
  };
}
