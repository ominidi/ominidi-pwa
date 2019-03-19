import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../data/common.yml', () => ({
  navItems: [{
    href: '/',
    title: 'Manifest',
    text: 'Manifest',
    icon: 'to-manifest',
  },
  {
    href: '/photos',
    title: 'Photos',
    text: 'Photos',
    icon: 'to-photos',
  }],
}));
