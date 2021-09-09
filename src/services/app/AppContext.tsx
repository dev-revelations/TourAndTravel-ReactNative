import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { createContext } from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "../../theme";
import { Provider as ReduxProvider } from "react-redux";
import store from "../../redux/store";


export const AppContext = createContext({});

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {

    return (
        <ReduxProvider store={store}>
            <AppContext.Provider value={{}}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </AppContext.Provider>
        </ReduxProvider>
    );
}

type AppContextProviderProps = PropsWithChildren<{}>;