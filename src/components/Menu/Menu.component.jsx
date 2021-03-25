import React from 'react';
import {
  MenuContainer,
  MenuList,
  MenuListItem,
  MenuListItemLink,
  MenuDropList,
  MenuDropListItem,
  MenuDropListItemLink
} from './Menu.styled';

const Menu = (props) => {
  return (
    <MenuContainer {...props}>
      <MenuList>
        <MenuListItem>
          <MenuListItemLink aria-haspopup="true" to="/">
            Державні закупівлі
          </MenuListItemLink>
          <MenuDropList>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

          </MenuDropList>
        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink to="/">
            Державні закупівлі
          </MenuListItemLink>
          <MenuDropList>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

          </MenuDropList>
        </MenuListItem>

        <MenuListItem>
          <MenuListItemLink to="/">
            Державні закупівлі
          </MenuListItemLink>
          <MenuDropList>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

            <MenuDropListItem>
              <MenuDropListItemLink to="/">
                Lorem ipsum dolor sit amet.
              </MenuDropListItemLink>
            </MenuDropListItem>

          </MenuDropList>
        </MenuListItem>



      </MenuList>
    </MenuContainer>
  )
}

export default Menu;