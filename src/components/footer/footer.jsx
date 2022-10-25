import React from 'react';
import { RiGitlabFill } from 'react-icons/ri';
import {
  Spacer,
  TextLink,
  Text,
  Flex
} from '../../index';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Flex direction="column" alignItems="center">
        <Spacer height="15px" />
        <Text color={'white'}>
          &copy; {new Date().getFullYear()} Mohammedreza Dianat and Péter Bíró
        </Text>
        <Spacer height="10px" />
        <Flex>
          <TextLink href="https://github.com/bpetii/uio-gui-library">
            <Flex alignItems="center">
              <RiGitlabFill />
              <Spacer width="5px" />
              GitHub
            </Flex>
          </TextLink>
          <Spacer width="15px" />
        </Flex>
      </Flex>
    </div>
  );
};
Footer.defaultProps = {};
  
Footer.propTypes = {};

export default Footer;