import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { createContext } from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "../../theme";


export const AppContext = createContext({});

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {

    return (
        <AppContext.Provider value={{}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
}

type AppContextProviderProps = PropsWithChildren<{}>;