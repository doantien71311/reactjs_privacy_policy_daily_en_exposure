import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("vn")}>Tiếng việt</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
};

