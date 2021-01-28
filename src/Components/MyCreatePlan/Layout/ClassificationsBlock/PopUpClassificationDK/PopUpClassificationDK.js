import { isNull } from 'lodash';
import React from 'react';
import MyDialog from '../../../../Dialog/Dialog';
import styles from './PopUpClassificationDK.scss';
import Tree from '../../../../Classifier/Tree/Tree';
import { CreatPlanContext } from '../../../../../context/CreatPlanContext';

const memoiseTree = (state, event) => {
  const content = JSON.parse(state.data) || null;

  if (!isNull(content)) {
    return (
      <div className={styles.containerMain}>
        <div className={styles.containerInfo}>
          <Tree event={event} radio data={content.rootNodes} />
        </div>
      </div>
    );
  }
  return null;
};

const PopUpClassificationDK = ({ data, opening, status }) => {
  const planContext = React.useContext(CreatPlanContext);

  const classificationDKTree = React.useMemo(
    () => memoiseTree(data, planContext.selectClassificationDK),
    [data]
  );

  return (
    <>
      <MyDialog
        title="Класифікатор ДК 021:2015"
        status={status}
        opening={opening}
        success={() => {
          console.log('success');
          opening(false);
        }}
      >
        {classificationDKTree}
      </MyDialog>
    </>
  );
};

export default PopUpClassificationDK;
