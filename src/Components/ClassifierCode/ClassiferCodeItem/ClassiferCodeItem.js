import React from 'react';
import styles from '../ClassifierCode.scss';

const ClassiferCodeItem = ({ setList, setting }) => {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    if (checked) {
      setList((prev) => [...prev, {
        key: setting.key,
        value: setting.value,
      }]);
    } else {
      setList((prev) => {
        const newList = prev.filter((item) => item.key !== setting.key && item.value !== setting.value);
        return [...newList];
      });
    }
  }, [checked]);
  return (<li className={styles.itemClassifier}><input type="checkbox" name="classifier" checked={checked} onChange={() => setChecked((prev) => !prev)} /> {setting.key} - {setting.value}</li>);
};

export default ClassiferCodeItem;
