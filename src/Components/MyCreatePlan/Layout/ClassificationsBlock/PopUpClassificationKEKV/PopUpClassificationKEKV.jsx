import { isNull } from 'lodash';
import React from 'react';
import MyDialog from '../../../../Dialog/Dialog';
import styles from './PopUpClassificationDK.scss';
import Tree from '../../../../Classifier/Tree/Tree';
import { CreatPlanContext } from '../../../../../context/CreatPlanContext';

const PopUpClassificationDK = ({ data, opening, status }) => {
  const planContext = React.useContext(CreatPlanContext);
  const dispatch = useDispatch();
  const data = useSelector(classifierCodeDataSelector);
  const isReceived = useSelector(classifierCodeDataReceivedSelector);
  useEffect(() => {
    dispatch(getClassifierCode({}));
  }, []);

  if (!isReceived) {
    return <Spinner />;
  }
  const dataParse = JSON.parse(data[0].get_data.data);

  const arrDataParse = Object.keys(dataParse).map((item) => ({
    key: item,
    value: dataParse[item],
  }));

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
        <ul className={styles.tableClassifier}>
          {arrDataParse.map((item) => (
            <ClassiferCodeItem
              setList={listBuilder}
              setting={item}
              key={item.key}
            />
          ))}
        </ul>
      </MyDialog>
    </>
  );
};

export default PopUpClassificationDK;
