import styled from "styled-components";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./logo.svg";

export const HeaderContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 10%;
    padding: 25px;
`;

export const HeaderLogo = styled(Logo)`
    height: 100%;
    width: 100%;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;