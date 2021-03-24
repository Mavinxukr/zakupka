import React, { useState } from 'react';
import {
  DropPhoneContainer,
  DropPhoneItem,
  DropPhoneList,
  DropPhoneHead,
  DropPhoneLink,
  DropPhoneItemInfo,
  AiOutlinePhoneIcon
} from './DropPhone.styled';
import { theme } from '../../../styles/theme';

export const DropPhone = () => {
  const [show, setShow] = useState(false)

  return (
    <DropPhoneContainer
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <DropPhoneHead
        variant="link"
        color={theme.palette.text.main}
        center
      >
        <AiOutlinePhoneIcon
          fontSize="2rem"
        />
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
              >
                <AiOutlinePhoneIcon />
                0 800 500 016
             </DropPhoneLink>
            </DropPhoneItem>
            <DropPhoneItem>
              <DropPhoneLink
                fullWidth
                variant="link"
                color={theme.palette.text.main}
              >
                <AiOutlinePhoneIcon />
                0 800 500 016
           </DropPhoneLink>
            </DropPhoneItem>
            <DropPhoneItem>
              <DropPhoneLink
                fullWidth
                variant="link"
                color={theme.palette.text.main}
              >
                <AiOutlinePhoneIcon />
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