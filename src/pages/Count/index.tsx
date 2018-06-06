import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { add, des } from './flow/actions';

interface Props {
  count: number;
  dispatch: Dispatch;
  onAdd: () => any;
  onDes: () => any;
}

interface State {

}

@connect((state) => {
  return {
    count: state.countReducer,
  };
})
export default
class Count extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const {
      count,
    } = this.props;

    return (
      <div>
        Count: {count}

        <button onClick={() => {
          this.props.dispatch(add())
        }}>
          +
        </button>

        <button onClick={() => {
          this.props.dispatch(des())
        }}>
          -
        </button>
      </div>
    )
  }
}
