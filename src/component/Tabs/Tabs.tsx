import * as React from 'react';
import {styled} from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import {buttonUnstyledClasses} from '@mui/base/ButtonUnstyled';
import TabUnstyled, {tabUnstyledClasses} from '@mui/base/TabUnstyled';
import {TabsProps} from "../constants";

const primary = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  width: 100%;
  color: ${primary[100]};
  cursor: pointer;
  font-size: 1rem;
  background: ${primary[500]};
  padding: 15px 20px;
  border: none;
  display: flex;
  justify-content: center;

  &.Mui-selected {
    color: #fff;
  }

  &:hover {
    color: #fff;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${primary[600]};
    border-bottom: 2px solid ${primary[600]};
  }

  &.${tabUnstyledClasses.selected} {
    border-bottom: 2px solid #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: ${primary[500]};
  border-radius: 8px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  padding: 0px 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
`;


export default function Tabs({tabsArray, defaultValue, forwardProps}: TabsProps) {

    return (
        <TabsUnstyled defaultValue={defaultValue || 0}>
            <TabsList>
                {tabsArray.map(({title}) =>
                    <Tab>{title}</Tab>
                )}
            </TabsList>
            {tabsArray.map(({component: Component}, id) =>
                <TabPanel value={id}><Component {...forwardProps}/></TabPanel>
            )}
        </TabsUnstyled>
    );
}