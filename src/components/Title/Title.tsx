import { useCallback } from 'react';
import './Title.scss';

type ValidLevels = 1 | 2 | 3 | 4;

type PropsType = {
  content: string | React.ReactNode;
  level?: ValidLevels;
  additionalClassNames?: string;
}

function Title({content, level, additionalClassNames}: PropsType) {
  level = level || 1;

  const getClassNames = useCallback(
    (level: ValidLevels) => `title title-level-${level} ${additionalClassNames || ''}`, 
    [additionalClassNames]
  );

  return (
    <>
      {level == 1 && <h1 className={getClassNames(1)}>{content}</h1>}
      {level == 2 && <h2 className={getClassNames(2)}>{content}</h2>}
      {level == 3 && <h3 className={getClassNames(3)}>{content}</h3>}
      {level == 4 && <h4 className={getClassNames(4)}>{content}</h4>}
    </>
  )
}

export default Title;
