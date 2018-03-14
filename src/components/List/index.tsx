import * as React from "react";
import Loading from "components/Loading";
import * as styles from "./style.css";

interface User {
  id: number,
  avatar_url: string,
  login: boolean,
}

interface P {
  icon?: string,
  title: string,
  style?: React.CSSProperties,
  data: User[],
  loading: boolean,
  error: string,
  onClickItem?: (e: User) => void,
  onClickPrev?: () => void,
  onClickNext?: () => void,
}

export default
class List extends React.Component<P, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    let {
      title,
      style,
      data: list,
      loading,
      error,
      onClickItem,
      onClickPrev,
      onClickNext
    } = this.props

    let content

    if(loading) {
      content = <Loading />
    }else {
      if(list.length == 0) {
        content = <span>None</span>
      }else{
        content = list.map((e) => {
          return <li key={e.id} className={styles.item} onClick={() => {onClickItem(e)}}>
            <img src={e.avatar_url} className={styles.pic}/>
            {e.login}
            <span className={styles.icon}>{this.props.icon}</span>
          </li>
        });
      }
    }

    if(error) {
      content = <span>{error}</span>;
    }

    return <div style={style}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.links}>
          <a href="javascript:void(0)" className={styles.link} onClick={onClickPrev}> &lt; </a>
          <a href="javascript:void(0)" className={styles.link} onClick={onClickNext}> &gt; </a>
        </div>
      </header>
      <ul className={styles.list}>
        {content}
      </ul>
    </div>;
  }
}
