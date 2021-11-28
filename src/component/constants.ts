import {P_PROPS_TYPE} from "../pages/constants";

export type TabsObject = {
    title: string,
    component: Function
}

export type TabsProps = {
    tabsArray: Array<TabsObject>,
    forwardProps?: P_PROPS_TYPE,
    defaultValue?: number | null
}