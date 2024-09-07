type SubdomainConfig = {
  navbarColor: string;
};
type Configs = {
  [key: string]: SubdomainConfig;
};
const getConfig = (): SubdomainConfig => {
  const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN || 'default';
  const configs: Configs = {
    'subdomain1': {
      navbarColor: 'red',
    },
    'subdomain2': {
      navbarColor: 'blue',
    },
    'default': {
      navbarColor: 'gray',
    }
  };
  return configs[subdomain] || configs.default;
};
export default getConfig;