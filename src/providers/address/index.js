import { GoogleAddressProvider } from './GoogleAddressProvider';
import { NominatimAddressProvider } from './NominatimAddressProvider';

export default {
  [GoogleAddressProvider.name]: GoogleAddressProvider,
  [NominatimAddressProvider.name]: NominatimAddressProvider,
};
