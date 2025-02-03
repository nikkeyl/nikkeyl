import { useTranslations } from 'next-intl';

import { extractFileName } from '@/helpers/extract-file-name';
import { customers } from '@/mocks/customers';
import { Slider } from '@/ui/slider/slider';
import { CustomerCard } from '@/widgets/customer-card/customer-card';

const Customers = () => {
  const translations = useTranslations('customers');

  return (
    <Slider title='customers'>
      {customers.map(({ avatar, key, siteLink }) => (
        <li key={key}>
          <CustomerCard
            avatar={avatar}
            name={translations(`${extractFileName(avatar)}.name`)}
            siteLink={siteLink}
            text={translations(`${extractFileName(avatar)}.text`)}
          />
        </li>
      ))}
    </Slider>
  );
};

export { Customers };
