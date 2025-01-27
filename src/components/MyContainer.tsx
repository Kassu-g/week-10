import { useTranslation } from 'react-i18next';

const MyContainer: React.FC = () => {
    const { t } = useTranslation();
  
    return <div>{t('homepage_message')}</div>;
  };
  
  export default MyContainer;
  