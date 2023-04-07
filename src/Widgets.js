import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('PAPA React is back', 'Top News - 9099 readers')}
      {newsArticle('Chatgpt Updates: ', 'Top News - 1M users')}
      {newsArticle('DALL E-2 Updates: ', 'Top News - 10M users')}{' '}
      {newsArticle('Bitcoin Updates: ', 'Top News - Price crash')}{' '}
      {newsArticle('GPT-4 Updates: ', 'Top News - 10M users')}
    </div>
  );
}

export default Widgets;
