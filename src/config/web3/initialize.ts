import { createWeb3Modal } from '@web3modal/wagmi/react';
import { web3ModalConfig } from './modal';
import { PROJECT_ID } from './constants';

export function initializeWeb3() {
  createWeb3Modal({ 
    wagmiConfig: web3ModalConfig, 
    projectId: PROJECT_ID 
  });
}