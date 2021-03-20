import React, { useState } from 'react';
import {
  DropPhoneContainer,
  DropPhoneItem,
  DropPhoneList,
  DropPhoneHead,
  DropPhoneLink,
  DropPhoneItemInfo
} from './DropPhone.styled';
import phone from '../../../static/svg/phone.svg';
import { theme } from '../../../styles/theme';

export const DropPhone = () => {
  const [show, setShow] = useState(true)

  return (
    <DropPhoneContainer
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <DropPhoneHead
        variant="link"
        icon={phone}
        color={theme.palette.text.main}
      >
        0 800 500 016
      </DropPhoneHead>
      {
        show ? (
          <DropPhoneList>
            <DropPhoneItemInfo>
              Пн - Пт, 8:00 - 19:00
            </DropPhoneItemInfo>
            <DropPhoneItemInfo>
              Пн - Пт, 8:00 - 19:00
            </DropPhoneItemInfo>
            <DropPhoneItem>
              <DropPhoneLink
                fullWidth
                variant="link"
                color={theme.palette.text.main}
                icon={phone}
                iconWidth="15px"
                iconHeight="15px"
              >
                0 800 500 016
             </DropPhoneLink>
            </DropPhoneItem>
            <DropPhoneItem>
              <DropPhoneLink
                fullWidth
                variant="link"
                color={theme.palette.text.main}
                icon={phone}
                iconWidth="15px"
                iconHeight="15px"
              >
                0 800 500 016
           </DropPhoneLink>
            </DropPhoneItem>
            <DropPhoneItem>
              <DropPhoneLink
                fullWidth
                variant="link"
                color={theme.palette.text.main}
                icon={phone}
                iconWidth="15px"
                iconHeight="15px"
              >
                0 800 500 016
           </DropPhoneLink>
            </DropPhoneItem>
          </DropPhoneList>
        ) : null
      }
    </DropPhoneContainer >
  )
}

export default DropPhone;