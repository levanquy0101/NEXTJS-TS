import en from '../locales/en.json';
import vi from '../locales/vi.json';
import fr from '../locales/fr.json';
import { useLang } from '@/lang/useLang';

export const langConfig = {
  listLangs: [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Vietnamese", code: "vi" },
    { id: 3, name: "French", code: "fr" }
  ],
  langsApp: {
    en,
    vi,
    fr
  }
};


export const t = (key: string) => {
    const { lang } = useLang(); // Lấy ngôn ngữ từ context
  
    // Kiểm tra nếu có bản dịch cho key trong ngôn ngữ hiện tại
    const translations = langConfig.langsApp[lang]; // Lấy bản dịch cho ngôn ngữ hiện tại
    return translations && translations[key] ? translations[key] : key; // Trả về bản dịch hoặc key nếu không có bản dịch
  };
  