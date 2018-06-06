import * as React from 'react';
import { Link } from 'react-router-dom';
import Hello from '@/components/Hello';
import * as style from './style.css';

interface Props {

}

export default
class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={style.home}>
          <Hello text="Home"/>
        </div>
        <ul>
          <li><Link to="/count">count</Link></li>
          <li><Link to="/async">async</Link></li>
        </ul>
      </div>
    );
  }
}
