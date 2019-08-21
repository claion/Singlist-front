import { ActivityIndicator } from 'react-native';
import styled from 'styled-components'
import React from 'react';

const LoadingContainer = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: white;
`

export default () => <LoadingContainer><ActivityIndicator /></LoadingContainer>