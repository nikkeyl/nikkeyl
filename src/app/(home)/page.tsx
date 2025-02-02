import { Customers } from './customers/customers';
import { Projects } from './projects/projects';
import { Tools } from './tools/tools';

const HomePage = () => (
  <>
    <Projects />
    <Tools />
    <Customers />
  </>
);

export default HomePage;
