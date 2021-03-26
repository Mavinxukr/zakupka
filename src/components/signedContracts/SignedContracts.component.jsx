import React from 'react';
import {
  SignedContractsTableTBody,
  SignedContractsTableTHead,
  SignedContractsTableTh,
  SignedContractsTableTitle,
  SignedContractsTableTr,
  SignedContractsTableStyled
} from './SignedContracts.styled';
import SignedContractsItem from './signedContractsItem/SignedContractsItem.component';

const SignedContracts = () => {
  return (
    <>
      <SignedContractsTableTitle
        mt="15px"
        mb="15px"
        variant="headline-1">
        Підписані контракти
      </SignedContractsTableTitle>
      <SignedContractsTableStyled>
        <SignedContractsTableTHead>
          <SignedContractsTableTr>
            <SignedContractsTableTh>
              Предмет закупівлі або лоту
          </SignedContractsTableTh>
            <SignedContractsTableTh>
              Очікувана вартість
          </SignedContractsTableTh>
            <SignedContractsTableTh>
              Сума контракту
          </SignedContractsTableTh>
            <SignedContractsTableTh>
              Замовник
          </SignedContractsTableTh>
            <SignedContractsTableTh>
              Постачальник
          </SignedContractsTableTh>
            <SignedContractsTableTh>
              Статус
          </SignedContractsTableTh>
          </SignedContractsTableTr>
        </SignedContractsTableTHead>
        <SignedContractsTableTBody>
          <SignedContractsItem />
          <SignedContractsItem />
          <SignedContractsItem />
        </SignedContractsTableTBody>
      </SignedContractsTableStyled>
    </>
  )
}

export default SignedContracts;