import { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import './Title.scss';

type ValidLevels = 1 | 2 | 3 | 4;

type PropsType = {
  content: string | React.ReactNode;
  level?: ValidLevels;
  additionalClassNames?: string;
  subtitled?: boolean;
  marginBottom?: number;
};

const Title = ({
  content,
  level,
  additionalClassNames,
  subtitled = true,
  marginBottom = 24,
}: PropsType) => {
  level = level || 1;

  const styles = useMemo(() => ({ marginBottom }), [marginBottom]);

  const getClassNames = useCallback(
    (level: ValidLevels) =>
      classNames({
        title: true,
        'title-subtitled': subtitled,
        [`title-level-${level}`]: true,
        [additionalClassNames || '']: true,
      }),
    [additionalClassNames, subtitled]
  );

  return (
    <>
      {level == 1 && (
        <h1 style={styles} className={getClassNames(1)}>
          {content}
        </h1>
      )}
      {level == 2 && (
        <h2 style={styles} className={getClassNames(2)}>
          {content}
        </h2>
      )}
      {level == 3 && (
        <h3 style={styles} className={getClassNames(3)}>
          {content}
        </h3>
      )}
      {level == 4 && (
        <h4 style={styles} className={getClassNames(4)}>
          {content}
        </h4>
      )}
    </>
  );
};

export default Title;
