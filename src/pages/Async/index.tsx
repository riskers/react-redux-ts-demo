import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { fetchData } from './flow/actions';

interface User {
  login: string;
}

interface Datas {
  loading: boolean;
  data: User[];
  error: string;
}

interface Props {
  asyncData: Datas;
  dispatch: Dispatch<any>;
}

interface State {

}

@connect((state) => {
  return {
    asyncData: state.asyncReducer,
  };
})
export default
class Async extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  renderContent() {
    const {
      asyncData,
    } = this.props;

    if (asyncData.loading) {
      return <div>loading...</div>;
    }

    return (
      <ul>
        {asyncData.data && asyncData.data.map((user, index) => {
          return (
            <li key={index}>
              {user.login}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.dispatch(fetchData('riskers', 1));
          }}
        >
          fetch riskers github users data
        </button>

        {
          this.renderContent()
        }
      </div>
    );
  }
}
