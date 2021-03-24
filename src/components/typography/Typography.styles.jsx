import styled, { css } from 'styled-components';
import { marginAndPadding } from '../../styles/shared';

const Typography = css`
  ${marginAndPadding};
  ${({ color }) => color ? `color: ${color}` : ''};
`;


export const Headline1 = styled.h1`
  ${Typography};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
`;

export const Headline2 = styled.h2`
  ${Typography};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
`;

export const Body1 = styled.p`
  ${Typography};
  font-size: 1.0rem;
`;

export const Body2 = styled.span`
  ${Typography};
  font-size: 0.775rem;
`;

export const Subtitle1 = styled.h3`
  ${Typography};
  font-size: 1.0rem;
`;

export const Subtitle2 = styled.h4`
  ${Typography};
  font-size: 0.75rem;
`;

export const Excretion = styled.div`
  ${Typography};
  font-size: 0.775rem;
  color: ${({ theme }) => theme.palette.text.excretion}
`;


