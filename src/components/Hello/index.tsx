import * as React from 'react';

interface Props {
  text: string;
}

const Hi = (props: Props) => {
  const { text } = props;
  return (
    <div>
      Hi {text} !
    </div>
  );
};

export default Hi;
