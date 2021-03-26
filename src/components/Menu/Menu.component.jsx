import React from 'react';
import {
  MenuContainer,
  MenuList,
  MenuListItem,
  MenuListItemLink,
  MenuDropList,
  MenuDropListItem,
  MenuDropListItemLink,
  AiFillSettingIcon,
  BsEnvelopeIcon
} from './Menu.styled';


const Menu = (props) => {
  return (
    <MenuContainer {...props}>
      <MenuList>

        <MenuListItem>
          <MenuListItemLink to="/">
            Створити закупівлю (Оригінал що має вигляд)
          </MenuListItemLink>
        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink to="/">
            Створити закупівлю (Прототип який працює)
          </MenuListItemLink>
        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink aria-haspopup="true" to="/">
            Плани закупівель
          </MenuListItemLink>
          <MenuDropList>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Створити план
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Створити план (Оригінал що має вигляд)
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Плани закупівель
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Мої плани закупівель
              </MenuDropListItemLink>
            </MenuDropListItem>

          </MenuDropList>
        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink to="/">
            Публічні закупівлі
          </MenuListItemLink>
          <MenuDropList>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Закупівлі
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Скарги
              </MenuDropListItemLink>
            </MenuDropListItem>

          </MenuDropList>
        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink to="/">
            Профіль
          </MenuListItemLink>
          <MenuDropList>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Дані про компанію
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Дані для входу в кабінет
              </MenuDropListItemLink>
            </MenuDropListItem>

          </MenuDropList>
        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink to="/">
            Контакти
          </MenuListItemLink>

          <MenuDropList>
            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Контакти
              </MenuDropListItemLink>
            </MenuDropListItem>
          </MenuDropList>

        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink to="/">
            <AiFillSettingIcon fontSize="25px" />
          </MenuListItemLink>

          <MenuDropList>
            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Налаштування
              </MenuDropListItemLink>
            </MenuDropListItem>
          </MenuDropList>

        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink to="/">
            <BsEnvelopeIcon fontSize="25px" />
          </MenuListItemLink>

          <MenuDropList>
            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Повідомлення
              </MenuDropListItemLink>
            </MenuDropListItem>
          </MenuDropList>

        </MenuListItem>

        

      </MenuList>
    </MenuContainer>
  )
}

export default Menu;