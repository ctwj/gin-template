import React from 'react';

import { Container, Segment } from 'semantic-ui-react';
import { getFooterHTML, getSystemName } from '../helpers';

const Footer = () => {
  const systemName = getSystemName();
  const footer = getFooterHTML();

  return (
    <Segment vertical>
      <Container textAlign='center'>
        {footer ? (
          <div
            className='custom-footer'
            dangerouslySetInnerHTML={{ __html: footer }}
          ></div>
        ) : (
          <div className='custom-footer'>
              {systemName} {process.env.REACT_APP_VERSION}{' '}
            由{' '}
            <a href='https://github.com/songquanpeng' target='_blank'>
              JustSong
            </a>{' '}
            构建
          </div>
        )}
      </Container>
    </Segment>
  );
};

export default Footer;
