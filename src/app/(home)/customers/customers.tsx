import { useTranslations } from 'next-intl';

import { customers } from '@/mocks/customers';
import { CustomerCard } from '@/widgets/customer-card/customer-card';
import { Slider } from '@/widgets/slider/slider';

const Customers = () => {
  const translations = useTranslations('customers');

  return (
    <Slider title='customers'>
      {customers.map(({ customer, key, siteLink }) => (
        <li key={key}>
          <CustomerCard
            avatar={customer}
            name={translations(`${customer}.name`)}
            siteLink={siteLink}
            text={translations(`${customer}.text`)}
          />
        </li>
      ))}
    </Slider>
  );
};

export { Customers };
