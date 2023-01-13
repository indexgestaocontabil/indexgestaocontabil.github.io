import './Title.scss';

type PropsType = {
  text: string;
}

function Title({text}: PropsType) {
  return (
    <h1 className="title">{text}</h1>
  )
}

export default Title;
