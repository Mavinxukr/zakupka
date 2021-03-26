import styled, { css } from 'styled-components';
import { marginAndPadding } from '../../styles/shared';

const Typography = css`
  ${marginAndPadding};
  font-weight: 400;
  line-height: 1.6;
  ${({ color }) => color ? `color: ${color}` : ''};
`;


export const Headline1 = styled.h1`
  ${Typography};
  font-size: 1.125rem;
  font-weight: 700;
`;

export const Headline2 = styled.h2`
  ${Typography};
  font-size: 0.875rem;
  font-weight: 700;
`;

export const Body1 = styled.p`
  ${Typography};
  font-size: 0.875rem;
`;

export const Subtitle1 = styled.h3`
  ${Typography};
  font-size: 0.875rem;
  font-weight: 700;
`;

export const Subtitle2 = styled.h4`
  ${Typography};
  font-size: 0.75rem;
`;

export const Excretion = styled.span`
  ${Typography};
  font-size: 0.775rem;
  color: ${({ theme }) => theme.palette.text.excretion}
`;


