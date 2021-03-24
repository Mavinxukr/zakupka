import { css } from 'styled-components';

export const padding = css`
${({ pt }) => pt && `padding-top: ${pt}`};
${({ pl }) => pl && `padding-left: ${pl}`};
${({ pr }) => pr && `padding-right: ${pr}`};
${({ pb }) => pb && `padding-bottom: ${pb}`};
`;

export const margin = css`
  ${({ mt }) => mt && `margin-top: ${mt}`};
  ${({ ml }) => ml && `margin-left: ${ml}`};
  ${({ mr }) => mr && `margin-right: ${mr}`};
  ${({ mb }) => mb && `margin-bottom: ${mb}`};
`;

export const marginAndPadding = css`
  ${padding};
  ${margin};
`;